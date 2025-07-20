import jsPDF from 'jspdf'
// import html2canvas from 'html2canvas'
import type { Resume } from './supabase'

export const generatePDF = async (resume: Resume): Promise<Blob> => {
  const doc = new jsPDF()
  const { content } = resume
  const { personalInfo, summary, experience, skills, education } = content
  
  let yPosition = 20
  const lineHeight = 7
  const pageWidth = doc.internal.pageSize.getWidth()
  const margin = 20
  const contentWidth = pageWidth - (margin * 2)
  
  // Header
  doc.setFontSize(24)
  doc.setFont('helvetica', 'bold')
  doc.text(`${personalInfo.firstName} ${personalInfo.lastName}`, margin, yPosition)
  
  yPosition += 10
  doc.setFontSize(12)
  doc.setFont('helvetica', 'normal')
  doc.text(`${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.location}`, margin, yPosition)
  
  if (personalInfo.linkedinUrl) {
    yPosition += lineHeight
    doc.text(personalInfo.linkedinUrl, margin, yPosition)
  }
  
  // Summary
  if (summary) {
    yPosition += 15
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text('Professional Summary', margin, yPosition)
    
    yPosition += 10
    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    const summaryLines = doc.splitTextToSize(summary, contentWidth)
    doc.text(summaryLines, margin, yPosition)
    yPosition += summaryLines.length * lineHeight
  }
  
  // Experience
  if (experience.length > 0) {
    yPosition += 15
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text('Work Experience', margin, yPosition)
    
    experience.forEach(exp => {
      yPosition += 12
      doc.setFontSize(12)
      doc.setFont('helvetica', 'bold')
      doc.text(`${exp.position} at ${exp.company}`, margin, yPosition)
      
      yPosition += lineHeight
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      doc.text(`${exp.startDate} - ${exp.endDate} | ${exp.location}`, margin, yPosition)
      
      if (exp.bullets.length > 0) {
        exp.bullets.forEach(bullet => {
          yPosition += lineHeight
          const bulletLines = doc.splitTextToSize(bullet, contentWidth - 10)
          doc.text(bulletLines, margin + 5, yPosition)
          yPosition += (bulletLines.length - 1) * lineHeight
        })
      }
      
      yPosition += 5
    })
  }
  
  // Skills
  if (skills.length > 0) {
    yPosition += 15
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text('Skills', margin, yPosition)
    
    yPosition += 10
    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    const skillsText = skills.map(skill => skill.name).join(', ')
    const skillsLines = doc.splitTextToSize(skillsText, contentWidth)
    doc.text(skillsLines, margin, yPosition)
    yPosition += skillsLines.length * lineHeight
  }
  
  // Education
  if (education.length > 0) {
    yPosition += 15
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text('Education', margin, yPosition)
    
    education.forEach(edu => {
      yPosition += 10
      doc.setFontSize(12)
      doc.setFont('helvetica', 'bold')
      doc.text(`${edu.degree} in ${edu.field}`, margin, yPosition)
      
      yPosition += lineHeight
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      doc.text(`${edu.institution} | ${edu.startDate} - ${edu.endDate}`, margin, yPosition)
      
      if (edu.gpa) {
        yPosition += lineHeight
        doc.text(`GPA: ${edu.gpa}`, margin, yPosition)
      }
    })
  }
  
  return doc.output('blob')
}

export const generateDOCX = async (resume: Resume): Promise<Blob> => {
  // Mock DOCX generation - in production would use officegen or similar
  const content = JSON.stringify(resume.content, null, 2)
  return new Blob([content], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' })
}

export const copyToClipboard = async (resume: Resume): Promise<void> => {
  const { content } = resume
  const { personalInfo, summary, experience, skills, education } = content
  
  let text = `${personalInfo.firstName} ${personalInfo.lastName}\n`
  text += `${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.location}\n`
  if (personalInfo.linkedinUrl) text += `${personalInfo.linkedinUrl}\n`
  text += '\n'
  
  if (summary) {
    text += `PROFESSIONAL SUMMARY\n${summary}\n\n`
  }
  
  if (experience.length > 0) {
    text += 'WORK EXPERIENCE\n'
    experience.forEach(exp => {
      text += `${exp.position} at ${exp.company}\n`
      text += `${exp.startDate} - ${exp.endDate} | ${exp.location}\n`
      exp.bullets.forEach(bullet => text += `${bullet}\n`)
      text += '\n'
    })
  }
  
  if (skills.length > 0) {
    text += `SKILLS\n${skills.map(skill => skill.name).join(', ')}\n\n`
  }
  
  if (education.length > 0) {
    text += 'EDUCATION\n'
    education.forEach(edu => {
      text += `${edu.degree} in ${edu.field}\n`
      text += `${edu.institution} | ${edu.startDate} - ${edu.endDate}\n`
      if (edu.gpa) text += `GPA: ${edu.gpa}\n`
      text += '\n'
    })
  }
  
  await navigator.clipboard.writeText(text)
}