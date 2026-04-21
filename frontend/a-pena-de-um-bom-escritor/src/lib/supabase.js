import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Verificar se as credenciais estão configuradas
const isConfigured = supabaseUrl && supabaseAnonKey;

if (!isConfigured) {
    console.warn('⚠️ Sistema de comentários desabilitado: Supabase não configurado.');
    console.info('📝 Para ativar, veja o arquivo PROXIMOS-PASSOS.md');
}

// Cliente mock quando não configurado (para evitar erros)
const mockSupabase = {
    from: () => ({
        select: () => Promise.resolve({ data: [], error: null }),
        insert: () => Promise.resolve({ data: null, error: { message: 'Supabase não configurado' } }),
        update: () => Promise.resolve({ data: null, error: { message: 'Supabase não configurado' } }),
        delete: () => Promise.resolve({ data: null, error: { message: 'Supabase não configurado' } }),
        eq: function () { return this; },
        order: function () { return this; },
    }),
    auth: {
        signInWithPassword: () => Promise.resolve({ data: null, error: { message: 'Supabase não configurado' } }),
        signOut: () => Promise.resolve({ error: null }),
        getSession: () => Promise.resolve({ data: { session: null }, error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => { } } } }),
    }
};

export const supabase = isConfigured
    ? createClient(supabaseUrl, supabaseAnonKey)
    : mockSupabase;
