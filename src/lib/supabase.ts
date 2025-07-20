import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type User = {
  id: string
  email: string
  created_at: string
  updated_at: string
  subscription_status: 'free' | 'paid' | 'cancelled' | 'past_due'
  subscription_tier: 'monthly' | 'yearly' | null
  subscription_end_date: string | null
  ai_credits_used: number
  exports_used: number
  profile_data: UserProfile | null
}

export type UserProfile = {
  firstName: string
  lastName: string
  phone: string
  location: string
  linkedinUrl: string
  portfolioUrl: string
}

export type Resume = {
  id: string
  user_id: string
  title: string
  content: ResumeContent
  template_id: string
  created_at: string
  updated_at: string
  is_active: boolean
}

export type ResumeContent = {
  personalInfo: PersonalInfo
  summary: string
  experience: WorkExperience[]
  skills: Skill[]
  education: Education[]
  additionalSections: AdditionalSection[]
}

export type PersonalInfo = {
  firstName: string
  lastName: string
  email: string
  phone: string
  location: string
  linkedinUrl: string
  portfolioUrl: string
}

export type WorkExperience = {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string
  location: string
  description: string
  bullets: string[]
}

export type Skill = {
  id: string
  name: string
  category: string
}

export type Education = {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  gpa: string
}

export type AdditionalSection = {
  id: string
  title: string
  content: string
}

export type CoverLetter = {
  id: string
  user_id: string
  job_title: string
  company_name: string
  content: string
  tone: 'formal' | 'casual' | 'confident'
  created_at: string
  updated_at: string
}