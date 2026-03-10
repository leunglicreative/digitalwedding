import { createClient } from '@supabase/supabase-js'

// Ganti dengan URL dan ANON KEY dari dashboard Supabase Anda
// Menggunakan Variable Environment agar lebih aman
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    if (!supabaseUrl) console.error("Missing PUBLIC_SUPABASE_URL environment variable.");
    if (!supabaseAnonKey) console.error("Missing PUBLIC_SUPABASE_ANON_KEY environment variable.");
    throw new Error("Supabase URL and Anon Key are required for initialization.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
