import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { useAuth } from '@/lib/auth'
import { Link } from 'react-router-dom'
import { ArrowLeft, Mail, CheckCircle, Loader2 } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const { signInWithMagicLink, signInWithGoogle, signUp, signInWithPassword } = useAuth()

  const handleMagicLinkSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setError('Please enter your email address')
      return
    }
    
    setLoading(true)
    setError('')
    
    const { error } = await signInWithMagicLink(email)
    
    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setSent(true)
      setLoading(false)
    }
  }

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !password) {
      setError('Please enter both email and password')
      return
    }
    
    setLoading(true)
    setError('')
    
    if (authMode === 'signin') {
      const { error } = await signInWithPassword(email, password)
      if (error) {
        setError(error.message)
        setLoading(false)
      }
    } else {
      const { error } = await signUp(email, password)
      if (error) {
        setError(error.message)
        setLoading(false)
      } else {
        setSent(true)
      }
    }
    
    setLoading(false)
  }

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true)
    setError('')
    
    const { error } = await signInWithGoogle()
    
    if (error) {
      setError(error.message)
      setGoogleLoading(false)
    }
  }

  if (sent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <CardTitle>Check your email</CardTitle>
            <CardDescription>
              {authMode === 'signup' 
                ? `We've sent a confirmation email to ${email}` 
                : `We've sent a magic link to ${email}`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 text-center mb-4">
              Click the link in your email to {authMode === 'signup' ? 'confirm your account' : 'sign in'}.
              The link will expire in 1 hour.
            </p>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setSent(false)}
            >
              Try different email
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <Link to="/" className="flex items-center text-slate-600 hover:text-slate-900">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>
        </div>
        
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome to Landed.io</CardTitle>
            <CardDescription>
              Sign in or create an account to get started
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Google Sign In Button */}
            <Button 
              variant="outline" 
              className="w-full h-11 relative"
              onClick={handleGoogleSignIn}
              disabled={googleLoading}
            >
              {googleLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  <FcGoogle className="h-5 w-5 absolute left-4" />
                  Continue with Google
                </>
              )}
            </Button>

            <div className="flex items-center">
              <Separator className="flex-1" />
              <span className="px-3 text-xs text-slate-500">OR</span>
              <Separator className="flex-1" />
            </div>

            <Tabs defaultValue="magic" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="magic">Magic Link</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              
              <TabsContent value="magic" className="space-y-4 mt-4">
                <form onSubmit={handleMagicLinkSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                    disabled={loading}
                  />
                  
                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={loading}
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    ) : (
                      <Mail className="w-4 h-4 mr-2" />
                    )}
                    {loading ? 'Sending magic link...' : 'Send magic link'}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="password" className="space-y-4 mt-4">
                <div className="flex space-x-4 mb-4">
                  <Button 
                    variant={authMode === 'signin' ? 'default' : 'outline'}
                    className="flex-1"
                    onClick={() => setAuthMode('signin')}
                  >
                    Sign In
                  </Button>
                  <Button 
                    variant={authMode === 'signup' ? 'default' : 'outline'}
                    className="flex-1"
                    onClick={() => setAuthMode('signup')}
                  >
                    Sign Up
                  </Button>
                </div>
                
                <form onSubmit={handlePasswordSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                  />
                  
                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={loading}
                  >
                    {loading && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
                    {authMode === 'signin' ? 'Sign In' : 'Create Account'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
            
            <div className="text-center">
              <p className="text-xs text-slate-500">
                By signing up, you agree to our{' '}
                <Link to="/terms" className="underline hover:text-slate-700">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="underline hover:text-slate-700">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col">
            <div className="p-4 bg-blue-50 rounded-lg w-full">
              <p className="text-sm text-blue-800 font-medium mb-2">
                What you get for free:
              </p>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• 1 resume export (PDF/DOCX)</li>
                <li>• 2 AI-powered optimizations</li>
                <li>• Professional templates</li>
                <li>• ATS optimization</li>
              </ul>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}