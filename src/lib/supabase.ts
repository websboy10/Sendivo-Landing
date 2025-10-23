import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables. Check your .env file.')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

// Types for form data
export interface ClubFormData {
  club_name: string
  contact_person: string
  email: string
  phone?: string
  message: string
  created_at?: string
}

export interface BusinessFormData {
  company_name: string
  contact_person: string
  email: string
  phone?: string
  message: string
  created_at?: string
}
