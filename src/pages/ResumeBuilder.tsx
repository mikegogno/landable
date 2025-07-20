import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Save, 
  Download, 
  Copy, 
  Plus, 
  Sparkles,
  FileText,
  Loader2,
  AlertCircle
} from 'lucide-react'
import Sidebar from '@/components/layout/Sidebar'
import { useAuth } from '@/lib/auth'

export default function ResumeBuilder() {
  const { } = useAuth()
  const [content, setContent] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      linkedinUrl: '',
      portfolioUrl: ''
    },
    summary: '',
    experience: [],
    skills: [],
    education: []
  })
  const [loading, setLoading] = useState(false)
  const [jobDescription, setJobDescription] = useState('')

  const updateContent = (updates: any) => {
    setContent(prev => ({ ...prev, ...updates }))
  }

  const addWorkExperience = () => {
    const newExp = {
      id: Date.now().toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
      bullets: []
    }
    updateContent({ experience: [...content.experience, newExp] })
  }

  const addEducation = () => {
    const newEdu = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      gpa: ''
    }
    updateContent({ education: [...content.education, newEdu] })
  }

  const addSkill = () => {
    const newSkill = {
      id: Date.now().toString(),
      name: '',
      category: 'Technical'
    }
    updateContent({ skills: [...content.skills, newSkill] })
  }

  const handleExport = async (format: string) => {
    setLoading(true)
    // Mock export functionality
    setTimeout(() => {
      setLoading(false)
      alert(`Exporting as ${format.toUpperCase()}...`)
    }, 1000)
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <div className="flex-1 overflow-hidden">
        <div className="h-full flex">
          <div className="w-1/2 p-6 overflow-y-auto border-r border-slate-200 bg-white">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-2xl font-bold text-slate-900">Resume Builder</h1>
              <Button variant="outline" size="sm">
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Job Description (Optional)</CardTitle>
                <CardDescription>
                  Paste the job description to get AI-optimized content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Paste the job description here for better AI optimization..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="min-h-[120px]"
                />
              </CardContent>
            </Card>
            
            <Tabs defaultValue="personal" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="First Name"
                        value={content.personalInfo.firstName}
                        onChange={(e) => updateContent({
                          personalInfo: { ...content.personalInfo, firstName: e.target.value }
                        })}
                      />
                      <Input
                        placeholder="Last Name"
                        value={content.personalInfo.lastName}
                        onChange={(e) => updateContent({
                          personalInfo: { ...content.personalInfo, lastName: e.target.value }
                        })}
                      />
                    </div>
                    
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={content.personalInfo.email}
                      onChange={(e) => updateContent({
                        personalInfo: { ...content.personalInfo, email: e.target.value }
                      })}
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="Phone Number"
                        value={content.personalInfo.phone}
                        onChange={(e) => updateContent({
                          personalInfo: { ...content.personalInfo, phone: e.target.value }
                        })}
                      />
                      <Input
                        placeholder="Location"
                        value={content.personalInfo.location}
                        onChange={(e) => updateContent({
                          personalInfo: { ...content.personalInfo, location: e.target.value }
                        })}
                      />
                    </div>
                    
                    <Input
                      placeholder="LinkedIn URL"
                      value={content.personalInfo.linkedinUrl}
                      onChange={(e) => updateContent({
                        personalInfo: { ...content.personalInfo, linkedinUrl: e.target.value }
                      })}
                    />
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium">Professional Summary</label>
                        {content.summary && jobDescription && (
                          <Button
                            variant="outline"
                            size="sm"
                          >
                            <Sparkles className="w-4 h-4 mr-2" />
                            Optimize with AI
                          </Button>
                        )}
                      </div>
                      <Textarea
                        placeholder="Write a brief professional summary..."
                        value={content.summary}
                        onChange={(e) => updateContent({ summary: e.target.value })}
                        className="min-h-[120px]"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="experience">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Work Experience</h3>
                    <Button onClick={addWorkExperience} size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Experience
                    </Button>
                  </div>
                  
                  {content.experience.length === 0 && (
                    <Card className="p-8 text-center">
                      <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-500 mb-4">No work experience added yet</p>
                      <Button onClick={addWorkExperience}>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Your First Experience
                      </Button>
                    </Card>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="education">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Education</h3>
                    <Button onClick={addEducation} size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Education
                    </Button>
                  </div>
                  
                  {content.education.length === 0 && (
                    <Card className="p-8 text-center">
                      <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-500 mb-4">No education added yet</p>
                      <Button onClick={addEducation}>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Your Education
                      </Button>
                    </Card>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="skills">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Skills</h3>
                    <Button onClick={addSkill} size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Skill
                    </Button>
                  </div>
                  
                  {content.skills.length === 0 && (
                    <Card className="p-8 text-center">
                      <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-500 mb-4">No skills added yet</p>
                      <Button onClick={addSkill}>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Your Skills
                      </Button>
                    </Card>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="w-1/2 p-6 bg-slate-50 overflow-y-auto">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Preview</h2>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleExport('copy')}
                  disabled={loading}
                >
                  {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Copy className="w-4 h-4 mr-2" />}
                  Copy
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleExport('docx')}
                  disabled={loading}
                >
                  {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Download className="w-4 h-4 mr-2" />}
                  DOCX
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleExport('pdf')}
                  disabled={loading}
                >
                  {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Download className="w-4 h-4 mr-2" />}
                  PDF
                </Button>
              </div>
            </div>
            
            {!jobDescription && (
              <Alert className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Add a job description above to unlock AI optimization features!
                </AlertDescription>
              </Alert>
            )}
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">
                    {content.personalInfo.firstName} {content.personalInfo.lastName}
                  </h1>
                  <div className="text-slate-600 space-y-1">
                    <p>{content.personalInfo.email} | {content.personalInfo.phone}</p>
                    <p>{content.personalInfo.location}</p>
                    {content.personalInfo.linkedinUrl && <p>{content.personalInfo.linkedinUrl}</p>}
                  </div>
                </div>
                
                {content.summary && (
                  <>
                    <h2 className="text-xl font-bold text-slate-900 mb-3 border-b-2 border-slate-200 pb-1">
                      Professional Summary
                    </h2>
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      {content.summary}
                    </p>
                  </>
                )}
                
                {content.experience.length === 0 && content.education.length === 0 && content.skills.length === 0 && !content.summary && (
                  <div className="text-center py-12">
                    <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <p className="text-slate-500">
                      Start filling out your information to see the preview
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}