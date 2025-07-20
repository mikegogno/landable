import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Link } from 'react-router-dom'
import { 
  FileText, 
  Mail, 
  Plus, 
  Clock
} from 'lucide-react'
import Sidebar from '@/components/layout/Sidebar'
import { useAuth } from '@/lib/auth'
import { supabase } from '@/lib/supabase'
import { getUserUsage, type UsageLimits } from '@/lib/usage'
import type { Resume, CoverLetter } from '@/lib/supabase'

export default function Dashboard() {
  const { user } = useAuth()
  const [resumes, setResumes] = useState<Resume[]>([])
  const [coverLetters, setCoverLetters] = useState<CoverLetter[]>([])
  const [usage, setUsage] = useState<UsageLimits | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      loadDashboardData()
    }
  }, [user])

  const loadDashboardData = async () => {
    if (!user) return
    
    try {
      // Load resumes
      const { data: resumesData } = await supabase
        .from('resumes')
        .select('*')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false })
        .limit(5)
      
      // Load cover letters
      const { data: coverLettersData } = await supabase
        .from('cover_letters')
        .select('*')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false })
        .limit(5)
      
      // Load usage stats
      const usageData = await getUserUsage(user.id)
      
      setResumes(resumesData || [])
      setCoverLetters(coverLettersData || [])
      setUsage(usageData)
    } catch (error) {
      console.error('Error loading dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-200 rounded w-1/4 mb-4"></div>
            <div className="grid md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-32 bg-slate-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Welcome back! 👋
          </h1>
          <p className="text-slate-600">
            Ready to create your next winning resume or cover letter?
          </p>
        </div>
        
        {/* Usage Stats */}
        {usage && (
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-slate-600">
                  AI Generations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold">
                    {usage.ai_generations}
                  </span>
                  <span className="text-sm text-slate-500">
                    of {usage.max_ai_generations === 999999 ? '∞' : usage.max_ai_generations}
                  </span>
                </div>
                {usage.max_ai_generations !== 999999 && (
                  <Progress 
                    value={(usage.ai_generations / usage.max_ai_generations) * 100} 
                    className="h-2"
                  />
                )}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-slate-600">
                  Exports Used
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold">
                    {usage.exports}
                  </span>
                  <span className="text-sm text-slate-500">
                    of {usage.max_exports === 999999 ? '∞' : usage.max_exports}
                  </span>
                </div>
                {usage.max_exports !== 999999 && (
                  <Progress 
                    value={(usage.exports / usage.max_exports) * 100} 
                    className="h-2"
                  />
                )}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-slate-600">
                  Plan Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant={usage.max_exports === 999999 ? "default" : "secondary"}>
                    {usage.max_exports === 999999 ? 'Pro' : 'Free'}
                  </Badge>
                  {usage.max_exports !== 999999 && (
                    <Link to="/pricing">
                      <Button size="sm" variant="outline">
                        Upgrade
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        
        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link to="/dashboard/resume">
              <CardHeader>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle>Create Resume</CardTitle>
                    <CardDescription>
                      Build ATS-optimized resumes with AI assistance
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Link>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link to="/dashboard/cover-letter">
              <CardHeader>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <CardTitle>Write Cover Letter</CardTitle>
                    <CardDescription>
                      Generate personalized cover letters in seconds
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Link>
          </Card>
        </div>
        
        {/* Recent Resumes */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Resumes</CardTitle>
              <Link to="/dashboard/resume">
                <Button size="sm" variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  New Resume
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              {resumes.length === 0 ? (
                <div className="text-center py-8">
                  <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-500 mb-4">No resumes yet</p>
                  <Link to="/dashboard/resume">
                    <Button>Create Your First Resume</Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {resumes.map((resume) => (
                    <Link 
                      key={resume.id}
                      to={`/dashboard/resume/${resume.id}`}
                      className="block"
                    >
                      <div className="p-3 border rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-slate-900">
                              {resume.title}
                            </h4>
                            <p className="text-sm text-slate-500 flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {new Date(resume.updated_at).toLocaleDateString()}
                            </p>
                          </div>
                          <Badge variant="outline">Draft</Badge>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Recent Cover Letters */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Cover Letters</CardTitle>
              <Link to="/dashboard/cover-letter">
                <Button size="sm" variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  New Letter
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              {coverLetters.length === 0 ? (
                <div className="text-center py-8">
                  <Mail className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-500 mb-4">No cover letters yet</p>
                  <Link to="/dashboard/cover-letter">
                    <Button>Write Your First Letter</Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {coverLetters.map((letter) => (
                    <Link 
                      key={letter.id}
                      to={`/dashboard/cover-letter/${letter.id}`}
                      className="block"
                    >
                      <div className="p-3 border rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-slate-900">
                              {letter.job_title} at {letter.company_name}
                            </h4>
                            <p className="text-sm text-slate-500 flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {new Date(letter.updated_at).toLocaleDateString()}
                            </p>
                          </div>
                          <Badge 
                            variant="outline"
                            className={
                              letter.tone === 'formal' ? 'border-blue-200 text-blue-700' :
                              letter.tone === 'casual' ? 'border-green-200 text-green-700' :
                              'border-purple-200 text-purple-700'
                            }
                          >
                            {letter.tone}
                          </Badge>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}