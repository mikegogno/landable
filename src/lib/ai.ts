// AI Service - Mock implementation for demo
// In production, this would connect to OpenAI API

export const generateResumeBullets = async (experience: string, _jobDescription: string): Promise<string[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  return [
    `• Led cross-functional team of 8 developers to deliver ${experience} project 2 weeks ahead of schedule, resulting in 15% increase in user engagement`,
    `• Implemented ${experience} solution that reduced processing time by 40% and improved system performance metrics`,
    `• Collaborated with stakeholders to optimize ${experience} workflows, achieving 25% cost reduction and enhanced user satisfaction`
  ]
}

export const generateCoverLetter = async (params: {
  name: string
  jobTitle: string
  companyName: string
  jobDescription: string
  tone: 'formal' | 'casual' | 'confident'
}): Promise<string> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 3000))
  
  const { name, jobTitle, companyName, tone } = params
  
  const greeting = tone === 'casual' ? 'Hi there!' : 'Dear Hiring Manager,'
  const intro = tone === 'confident' 
    ? `I'm excited to apply for the ${jobTitle} position at ${companyName}. With my proven track record in delivering exceptional results, I'm confident I can make an immediate impact on your team.`
    : `I am writing to express my strong interest in the ${jobTitle} position at ${companyName}. My background and skills align perfectly with what you're looking for.`
  
  return `${greeting}

${intro}

In my previous roles, I have successfully:
• Delivered high-impact projects that drove measurable business results
• Collaborated effectively with cross-functional teams to achieve common goals  
• Continuously learned and adapted to new technologies and methodologies

I am particularly drawn to ${companyName} because of your commitment to innovation and excellence. I would welcome the opportunity to discuss how my experience and passion can contribute to your continued success.

Thank you for your consideration. I look forward to hearing from you soon.

Best regards,
${name}`
}

export const optimizeResumeSummary = async (summary: string, _jobDescription: string): Promise<string> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  return `Results-driven professional with expertise in ${summary.toLowerCase()}. Proven track record of delivering high-impact solutions that drive business growth and improve operational efficiency. Strong analytical and problem-solving skills with experience in cross-functional collaboration and project leadership.`
}