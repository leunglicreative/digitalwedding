import { createClient } from '@supabase/supabase-js'

// Ganti dengan URL dan ANON KEY dari dashboard Supabase Anda
// Menggunakan Variable Environment agar lebih aman
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
