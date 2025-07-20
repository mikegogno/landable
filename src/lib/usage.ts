import { supabase } from './supabase'

export type UsageLimits = {
  ai_generations: number
  exports: number
  max_ai_generations: number
  max_exports: number
}

export const checkUsageLimit = async (userId: string, feature: 'ai_generation' | 'export'): Promise<boolean> => {
  const { data: user } = await supabase
    .from('users')
    .select('subscription_status, ai_credits_used, exports_used')
    .eq('id', userId)
    .single()
  
  if (!user) return false
  
  // Paid users have unlimited usage
  if (user.subscription_status === 'paid') return true
  
  // Free users have limits
  if (feature === 'ai_generation') {
    return user.ai_credits_used < 2
  }
  
  if (feature === 'export') {
    return user.exports_used < 1
  }
  
  return false
}

export const incrementUsage = async (userId: string, feature: 'ai_generation' | 'export'): Promise<void> => {
  const column = feature === 'ai_generation' ? 'ai_credits_used' : 'exports_used'
  
  await supabase.rpc('increment_usage', {
    user_id: userId,
    column_name: column
  })
  
  // Track usage in analytics table
  await supabase
    .from('usage_tracking')
    .insert({
      user_id: userId,
      action_type: feature,
      timestamp: new Date().toISOString(),
      metadata: {}
    })
}

export const getUserUsage = async (userId: string): Promise<UsageLimits> => {
  const { data: user } = await supabase
    .from('users')
    .select('subscription_status, ai_credits_used, exports_used')
    .eq('id', userId)
    .single()
  
  if (!user) {
    return {
      ai_generations: 0,
      exports: 0,
      max_ai_generations: 2,
      max_exports: 1
    }
  }
  
  const isPaid = user.subscription_status === 'paid'
  
  return {
    ai_generations: user.ai_credits_used || 0,
    exports: user.exports_used || 0,
    max_ai_generations: isPaid ? 999999 : 2,
    max_exports: isPaid ? 999999 : 1
  }
}