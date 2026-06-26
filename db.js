/**
 * ============================================================
 *  Hattrick Academy — Supabase Database & Auth Module (db.js)
 * ============================================================
 *
 *  Este módulo centraliza toda a comunicação com o Supabase:
 *    • Inicialização do cliente
 *    • Autenticação (cadastro, login, logout, recuperação de senha)
 *    • CRUD da ficha técnica do aluno (tabela: students)
 *    • CRUD das inscrições em programas (tabela: enrollments)
 *
 *  IMPORTANTE: Antes de usar, você precisa:
 *    1. Criar um projeto no Supabase (https://supabase.com)
 *    2. Substituir SUPABASE_URL e SUPABASE_ANON_KEY abaixo
 *    3. Criar as tabelas abaixo no Supabase SQL Editor
 *
 *  SQL — Tabela students:
 *  ──────────────────────
 *  CREATE TABLE students (
 *      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
 *      user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
 *      student_name TEXT NOT NULL,
 *      age INTEGER,
 *      birth_date DATE,
 *      position TEXT,
 *      parent_phone TEXT,
 *      notes TEXT,
 *      payment_status TEXT DEFAULT 'pending',
 *      created_at TIMESTAMPTZ DEFAULT now()
 *  );
 *  ALTER TABLE students ENABLE ROW LEVEL SECURITY;
 *  CREATE POLICY "Users can view own students" ON students FOR SELECT USING (auth.uid() = user_id);
 *  CREATE POLICY "Users can insert own students" ON students FOR INSERT WITH CHECK (auth.uid() = user_id);
 *  CREATE POLICY "Users can update own students" ON students FOR UPDATE USING (auth.uid() = user_id);
 *  CREATE POLICY "Users can delete own students" ON students FOR DELETE USING (auth.uid() = user_id);
 *
 *  SQL — Tabela enrollments (NOVA — rodar no Supabase):
 *  ─────────────────────────────────────────────────────
 *  CREATE TABLE enrollments (
 *      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
 *      user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
 *      program_id TEXT NOT NULL,
 *      program_name TEXT NOT NULL,
 *      athletes JSONB NOT NULL,
 *      address TEXT,
 *      current_club TEXT,
 *      medical_notes TEXT,
 *      agree_refund BOOLEAN DEFAULT FALSE,
 *      agree_waiver BOOLEAN DEFAULT FALSE,
 *      agree_media BOOLEAN DEFAULT FALSE,
 *      e_signature TEXT,
 *      terms_accepted BOOLEAN DEFAULT FALSE,
 *      terms_accepted_at TIMESTAMPTZ,
 *      payment_status TEXT DEFAULT 'pending',
 *      created_at TIMESTAMPTZ DEFAULT now()
 *  );
 *  ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
 *  CREATE POLICY "Users can view own enrollments" ON enrollments FOR SELECT USING (auth.uid() = user_id);
 *  CREATE POLICY "Users can insert own enrollments" ON enrollments FOR INSERT WITH CHECK (auth.uid() = user_id);
 *  CREATE POLICY "Users can update own enrollments" ON enrollments FOR UPDATE USING (auth.uid() = user_id);
 */

// ══════════════════════════════════════════════════════════════
//  CONFIGURAÇÃO — Substitua com as credenciais do seu projeto
// ══════════════════════════════════════════════════════════════

const SUPABASE_URL = 'https://twryrcujdtnblmwbmjpq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Y1o8-DvvrQVq7I_SQEyPVg_Ou16gAyb';

// ══════════════════════════════════════════════════════════════
//  INICIALIZAÇÃO DO CLIENTE
// ══════════════════════════════════════════════════════════════

let _supabase = null;

function getSupabase() {
    if (!_supabase) {
        if (typeof window.supabase === 'undefined' || typeof window.supabase.createClient !== 'function') {
            console.error('[Hattrick DB] Supabase SDK não carregado. Certifique-se de incluir o script CDN antes de db.js.');
            return null;
        }
        _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
    return _supabase;
}

// ══════════════════════════════════════════════════════════════
//  AUTENTICAÇÃO
// ══════════════════════════════════════════════════════════════

/**
 * Cadastra um novo usuário com email e senha.
 * @param {string} email
 * @param {string} password
 * @param {object} metadata - Dados extras (nome, telefone)
 * @returns {Promise<{data, error}>}
 */
async function hattrickSignUp(email, password, metadata = {}) {
    const sb = getSupabase();
    if (!sb) return { data: null, error: { message: 'Supabase não inicializado.' } };

    const { data, error } = await sb.auth.signUp({
        email,
        password,
        options: {
            data: metadata  // Ex: { full_name: 'João', phone: '+55...' }
        }
    });
    return { data, error };
}

/**
 * Faz login com email e senha.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{data, error}>}
 */
async function hattrickSignIn(email, password) {
    const sb = getSupabase();
    if (!sb) return { data: null, error: { message: 'Supabase não inicializado.' } };

    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    return { data, error };
}

/**
 * Faz logout do usuário atual.
 * @returns {Promise<{error}>}
 */
async function hattrickSignOut() {
    const sb = getSupabase();
    if (!sb) return { error: { message: 'Supabase não inicializado.' } };

    const { error } = await sb.auth.signOut();
    return { error };
}

/**
 * Retorna o usuário autenticado atual (ou null).
 * @returns {Promise<object|null>}
 */
async function hattrickGetUser() {
    const sb = getSupabase();
    if (!sb) return null;

    const { data: { user } } = await sb.auth.getUser();
    return user;
}

/**
 * Envia e-mail de recuperação de senha.
 * @param {string} email
 * @returns {Promise<{data, error}>}
 */
async function hattrickResetPassword(email) {
    const sb = getSupabase();
    if (!sb) return { data: null, error: { message: 'Supabase não inicializado.' } };

    const { data, error } = await sb.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + '/login.html'
    });
    return { data, error };
}

/**
 * Escuta mudanças de estado de autenticação.
 * @param {function} callback - Recebe (event, session)
 */
function hattrickOnAuthChange(callback) {
    const sb = getSupabase();
    if (!sb) return;
    sb.auth.onAuthStateChange(callback);
}

// ══════════════════════════════════════════════════════════════
//  GUARD DE ROTA — Protege páginas restritas
// ══════════════════════════════════════════════════════════════

/**
 * Redireciona para login.html se o usuário não estiver autenticado.
 * Use no início de páginas restritas (dashboard.html).
 * @param {string} redirectTo - URL para redirecionar (padrão: login.html)
 */
async function requireAuth(redirectTo = 'login.html') {
    const user = await hattrickGetUser();
    if (!user) {
        window.location.href = redirectTo;
        return null;
    }
    return user;
}

// ══════════════════════════════════════════════════════════════
//  CRUD — FICHA TÉCNICA DO ALUNO (tabela: students)
// ══════════════════════════════════════════════════════════════

/**
 * Salva uma ficha de aluno no banco de dados.
 * @param {object} studentData - { student_name, age, birth_date, position, parent_phone, notes }
 * @returns {Promise<{data, error}>}
 */
async function saveStudent(studentData) {
    const sb = getSupabase();
    if (!sb) return { data: null, error: { message: 'Supabase não inicializado.' } };

    const user = await hattrickGetUser();
    if (!user) return { data: null, error: { message: 'Usuário não autenticado.' } };

    // Verifica se já existe uma ficha para este usuário
    const { data: existing, error: fetchError } = await sb
        .from('students')
        .select('id')
        .eq('user_id', user.id)
        .maybeSingle();

    if (fetchError) {
        return { data: null, error: fetchError };
    }

    let result;
    if (existing) {
        // Atualiza a ficha existente
        result = await sb
            .from('students')
            .update({
                ...studentData
            })
            .eq('id', existing.id)
            .select();
    } else {
        // Cria uma nova ficha
        result = await sb
            .from('students')
            .insert({
                ...studentData,
                user_id: user.id
            })
            .select();
    }

    return { data: result.data, error: result.error };
}

/**
 * Busca a ficha de aluno do usuário logado.
 * @returns {Promise<{data, error}>}
 */
async function getMyStudent() {
    const sb = getSupabase();
    if (!sb) return { data: null, error: { message: 'Supabase não inicializado.' } };

    const user = await hattrickGetUser();
    if (!user) return { data: null, error: { message: 'Usuário não autenticado.' } };

    const { data, error } = await sb
        .from('students')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

    return { data, error };
}

/**
 * Busca todas as fichas de alunos do usuário logado.
 * @returns {Promise<{data, error}>}
 */
async function getMyStudents() {
    const sb = getSupabase();
    if (!sb) return { data: null, error: { message: 'Supabase não inicializado.' } };

    const user = await hattrickGetUser();
    if (!user) return { data: null, error: { message: 'Usuário não autenticado.' } };

    const { data, error } = await sb
        .from('students')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

    return { data, error };
}

/**
 * Deleta uma ficha de aluno.
 * @param {string} studentId - UUID do registro
 * @returns {Promise<{error}>}
 */
async function deleteStudent(studentId) {
    const sb = getSupabase();
    if (!sb) return { error: { message: 'Supabase não inicializado.' } };

    const { error } = await sb
        .from('students')
        .delete()
        .eq('id', studentId);

    return { error };
}

// ══════════════════════════════════════════════════════════════
//  CRUD — INSCRIÇÕES EM PROGRAMAS (tabela: enrollments)
// ══════════════════════════════════════════════════════════════

/**
 * Salva uma inscrição em programa.
 * @param {object} enrollmentData - { program_id, program_name, athletes, address, current_club, medical_notes, agree_refund, agree_waiver, agree_media, e_signature, terms_accepted, terms_accepted_at }
 * @returns {Promise<{data, error}>}
 */
async function saveEnrollment(enrollmentData) {
    const sb = getSupabase();
    if (!sb) return { data: null, error: { message: 'Supabase não inicializado.' } };

    const user = await hattrickGetUser();
    if (!user) return { data: null, error: { message: 'Usuário não autenticado.' } };

    const { data, error } = await sb
        .from('enrollments')
        .insert({
            ...enrollmentData,
            user_id: user.id
        })
        .select();

    return { data, error };
}

/**
 * Busca todas as inscrições do usuário logado.
 * @returns {Promise<{data, error}>}
 */
async function getMyEnrollments() {
    const sb = getSupabase();
    if (!sb) return { data: null, error: { message: 'Supabase não inicializado.' } };

    const user = await hattrickGetUser();
    if (!user) return { data: null, error: { message: 'Usuário não autenticado.' } };

    const { data, error } = await sb
        .from('enrollments')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

    return { data, error };
}

/**
 * Solicita a criação de uma sessão de checkout do Stripe para uma inscrição específica.
 * @param {string} enrollmentId
 * @returns {Promise<{data, error}>}
 */
async function payEnrollment(enrollmentId) {
    const sb = getSupabase();
    if (!sb) return { data: null, error: { message: 'Supabase não inicializado.' } };

    const { data, error } = await sb.functions.invoke('create-checkout-session', {
        body: { enrollmentId }
    });

    return { data, error };
}
