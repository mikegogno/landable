import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  Download, 
  Copy, 
  Sparkles,
  Mail,
  Loader2,
  AlertCircle
} from 'lucide-react'
import Sidebar from '@/components/layout/Sidebar'
import { useAuth } from '@/lib/auth'

export default function CoverLetterGenerator() {
  const { } = useAuth()
  const [jobTitle, setJobTitle] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [tone, setTone] = useState('formal')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    if (!jobTitle || !companyName) return
    
    setLoading(true)
    
    // Mock AI generation
    setTimeout(() => {
      const mockContent = `Dear Hiring Manager,

I am writing to express my strong interest in the ${jobTitle} position at ${companyName}. With my background and skills, I am confident I can make a valuable contribution to your team.

In my previous roles, I have successfully:
• Delivered high-impact projects that drove measurable business results
• Collaborated effectively with cross-functional teams to achieve common goals  
• Continuously learned and adapted to new technologies and methodologies

I am particularly drawn to ${companyName} because of your commitment to innovation and excellence. I would welcome the opportunity to discuss how my experience and passion can contribute to your continued success.

Thank you for your consideration. I look forward to hearing from you soon.

Best regards,
[Your Name]`
      
      setContent(mockContent)
      setLoading(false)
    }, 2000)
  }

  const handleCopy = async () => {
    if (!content) return
    try {
      await navigator.clipboard.writeText(content)
      alert('Copied to clipboard!')
    } catch (error) {
      console.error('Error copying to clipboard:', error)
    }
  }

  const handleDownload = () => {
    if (!content) return
    
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${jobTitle}_${companyName}_Cover_Letter.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  const canGenerate = jobTitle && companyName

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Cover Letter Generator
            </h1>
            <p className="text-slate-600">
              Create personalized cover letters that get you noticed by hiring managers
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Job Details
                  </CardTitle>
                  <CardDescription>
                    Tell us about the position you're applying for
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Job Title (e.g., Software Engineer)"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                  
                  <Input
                    placeholder="Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                  
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">
                      Tone
                    </label>
                    <Select value={tone} onValueChange={setTone}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="formal">Formal</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="confident">Confident</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Job Description (Optional)</CardTitle>
                  <CardDescription>
                    Paste the job description for better personalization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Paste the job description here for better AI personalization..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="min-h-[150px]"
                  />
                </CardContent>
              </Card>
              
              <div className="flex space-x-4">
                <Button
                  onClick={handleGenerate}
                  disabled={!canGenerate || loading}
                  className="flex-1"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate Cover Letter
                    </>
                  )}
                </Button>
              </div>
              
              {!canGenerate && (
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Please fill in the job title and company name to generate your cover letter.
                  </AlertDescription>
                </Alert>
              )}
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Your Cover Letter</CardTitle>
                      <CardDescription>
                        {content ? 'Ready to use' : 'Generate to see preview'}
                      </CardDescription>
                    </div>
                    
                    {content && (
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleCopy}
                        >
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleDownload}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {content ? (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 mb-4">
                        <Badge variant="outline">
                          {tone} tone
                        </Badge>
                        <span className="text-sm text-slate-500">
                          {content.split(' ').length} words
                        </span>
                      </div>
                      
                      <Textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="min-h-[400px] font-mono text-sm"
                        placeholder="Your generated cover letter will appear here..."
                      />
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Mail className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                      <p className="text-slate-500 mb-4">
                        Fill in the job details and click "Generate Cover Letter" to get started
                      </p>
                      <div className="text-sm text-slate-400">
                        ✨ AI-powered personalization<br />
                        📝 Professional formatting<br />
                        🎯 Tailored to job requirements
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}