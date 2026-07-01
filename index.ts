import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import Stripe from "https://esm.sh/stripe@12.0.0?target=deno"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.21.0"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const PROGRAM_PRICES: Record<string, number> = {
  'futsal-lab': 30000,          // $300
  'individual-training': 28000,  // $280
  'group-training': 15000,       // $150
  '1v1-clinic': 24000,           // $240 (standard price)
  'soccer-camps': 24000,         // $240 (standard price)
  'futsal-clinic': 15000,        // $150
  'general': 10000               // $100 fallback
}

serve(async (req) => {
  // Handle CORS Preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'Missing Authorization header' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Initialize Supabase Client with the user's Auth JWT
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    
    const supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } }
    })

    // Get the authenticated user
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser()
    if (userError || !user) {
      return new Response(JSON.stringify({ error: 'Unauthorized or invalid token' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Parse request body
    const { enrollmentId } = await req.json()
    if (!enrollmentId) {
      return new Response(JSON.stringify({ error: 'Missing enrollmentId' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Fetch enrollment
    const { data: enrollment, error: enrollError } = await supabaseClient
      .from('enrollments')
      .select('*')
      .eq('id', enrollmentId)
      .single()

    if (enrollError || !enrollment) {
      return new Response(JSON.stringify({ error: 'Enrollment not found or access denied' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Calculate dynamic price
    const athletes = enrollment.athletes
    const athleteCount = Array.isArray(athletes) ? athletes.length : 1
    const athleteNames = Array.isArray(athletes) 
      ? athletes.map((a: any) => a.name).join(', ') 
      : 'Athlete'
    
    let unitPrice = PROGRAM_PRICES[enrollment.program_id] || PROGRAM_PRICES['general']

    // Apply Early Bird promotion ($200 instead of $240) if purchased before July 21st, 2026
    if (enrollment.program_id === '1v1-clinic' || enrollment.program_id === 'soccer-camps') {
      const now = new Date()
      const deadline = new Date('2026-07-21T00:00:00Z') // July 20th 23:59:59 UTC
      if (now < deadline) {
        unitPrice = 20000 // Promo price: $200
      }
    }

    // Initialize Stripe
    const stripeSecretKey = Deno.env.get('STRIPE_SECRET_KEY')
    if (!stripeSecretKey) {
      return new Response(JSON.stringify({ error: 'Stripe secret key not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2022-11-15',
      httpClient: Stripe.createFetchHttpClient(),
    })

    // Create checkout session
    const origin = req.headers.get('origin') || 'https://hattricksoccer.com'
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: enrollment.program_name,
              description: `Athlete(s): ${athleteNames}`,
            },
            unit_amount: unitPrice,
          },
          quantity: athleteCount,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/success.html`,
      cancel_url: `${origin}/cancel.html`,
      client_reference_id: enrollment.id,
      customer_email: user.email,
      metadata: {
        enrollmentId: enrollment.id,
        userId: user.id
      }
    })

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
