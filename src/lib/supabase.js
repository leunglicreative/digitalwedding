import { createClient } from '@supabase/supabase-js'

// Ganti dengan URL dan ANON KEY dari dashboard Supabase Anda
const supabaseUrl = 'https://wweflunodocsdhbpnqxv.supabase.co'
const supabaseAnonKey = 'sb_publishable_lhe3i4VJqJlT6arAq-hVkA_1784t5up'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
