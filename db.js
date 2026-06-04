/**
 * ============================================================
 *  Hattrick Academy — Supabase Database & Auth Module (db.js)
 * ============================================================
 *
 *  Este módulo centraliza toda a comunicação com o Supabase:
 *    • Inicialização do cliente
 *    • Autenticação (cadastro, login, logout, recuperação de senha)
 *    • CRUD da ficha técnica do aluno
 *
 *  IMPORTANTE: Antes de usar, você precisa:
 *    1. Criar um projeto no Supabase (https://supabase.com)
 *    2. Substituir SUPABASE_URL e SUPABASE_ANON_KEY abaixo
 *    3. Criar a tabela "students" no Supabase (SQL abaixo)
 *
 *  SQL para criar a tabela students:
 *  ─────────────────────────────────
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
 *
 *  -- Habilitar Row Level Security
 *  ALTER TABLE students ENABLE ROW LEVEL SECURITY;
 *
 *  -- Política: usuários só veem/editam seus próprios registros
 *  CREATE POLICY "Users can view own students"
 *      ON students FOR SELECT
 *      USING (auth.uid() = user_id);
 *
 *  CREATE POLICY "Users can insert own students"
 *      ON students FOR INSERT
 *      WITH CHECK (auth.uid() = user_id);
 *
 *  CREATE POLICY "Users can update own students"
 *      ON students FOR UPDATE
 *      USING (auth.uid() = user_id);
 *
 *  CREATE POLICY "Users can delete own students"
 *      ON students FOR DELETE
 *      USING (auth.uid() = user_id);
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

    const { data, error } = await sb
        .from('students')
        .upsert({
            ...studentData,
            user_id: user.id
        }, { onConflict: 'user_id' })
        .select();

    return { data, error };
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
