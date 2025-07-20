import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { 
  User, 
  CreditCard, 
  Shield, 
  Trash2,
  CheckCircle,
  AlertTriangle
} from 'lucide-react'
import Sidebar from '@/components/layout/Sidebar'
import { useAuth } from '@/lib/auth'

export default function Settings() {
  const { user, signOut } = useAuth()
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: user?.email || '',
    phone: '',
    location: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSaveProfile = async () => {
    setLoading(true)
    // Mock save functionality
    setTimeout(() => {
      setLoading(false)
      alert('Profile updated successfully!')
    }, 1000)
  }

  const handleDeleteAccount = async () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      // Mock delete functionality
      alert('Account deletion initiated. You will receive a confirmation email.')
    }
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Settings</h1>
            <p className="text-slate-600">
              Manage your account settings and subscription
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Profile Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Profile Information
                </CardTitle>
                <CardDescription>
                  Update your personal information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    value={profileData.firstName}
                    onChange={(e) => setProfileData(prev => ({ ...prev, firstName: e.target.value }))}
                  />
                  <Input
                    placeholder="Last Name"
                    value={profileData.lastName}
                    onChange={(e) => setProfileData(prev => ({ ...prev, lastName: e.target.value }))}
                  />
                </div>
                
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={profileData.email}
                  onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Phone Number"
                    value={profileData.phone}
                    onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                  />
                  <Input
                    placeholder="Location"
                    value={profileData.location}
                    onChange={(e) => setProfileData(prev => ({ ...prev, location: e.target.value }))}
                  />
                </div>
                
                <Button onClick={handleSaveProfile} disabled={loading}>
                  {loading ? 'Saving...' : 'Save Changes'}
                </Button>
              </CardContent>
            </Card>
            
            {/* Subscription */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Subscription
                </CardTitle>
                <CardDescription>
                  Manage your subscription and billing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary">Free Plan</Badge>
                      <span className="text-sm text-slate-500">Active</span>
                    </div>
                    <p className="text-sm text-slate-600">
                      1 export remaining • 2 AI generations remaining
                    </p>
                  </div>
                  <Button>
                    Upgrade to Pro
                  </Button>
                </div>
                
                <Separator className="my-6" />
                
                <div className="space-y-4">
                  <h4 className="font-medium text-slate-900">Upgrade Benefits</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Unlimited AI generations</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Unlimited exports</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Premium templates</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Priority support</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Privacy & Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Privacy & Security
                </CardTitle>
                <CardDescription>
                  Manage your data and privacy settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-slate-900">Export Your Data</h4>
                    <p className="text-sm text-slate-600">
                      Download all your resumes and cover letters
                    </p>
                  </div>
                  <Button variant="outline">
                    Download Data
                  </Button>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-slate-900">Change Password</h4>
                    <p className="text-sm text-slate-600">
                      Update your account password
                    </p>
                  </div>
                  <Button variant="outline">
                    Change Password
                  </Button>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-slate-900">Sign Out</h4>
                    <p className="text-sm text-slate-600">
                      Sign out of your account on this device
                    </p>
                  </div>
                  <Button variant="outline" onClick={() => signOut()}>
                    Sign Out
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Danger Zone */}
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Trash2 className="w-5 h-5 mr-2" />
                  Danger Zone
                </CardTitle>
                <CardDescription>
                  Irreversible and destructive actions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Alert className="mb-4">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    Once you delete your account, there is no going back. Please be certain.
                  </AlertDescription>
                </Alert>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-slate-900">Delete Account</h4>
                    <p className="text-sm text-slate-600">
                      Permanently delete your account and all associated data
                    </p>
                  </div>
                  <Button 
                    variant="destructive" 
                    onClick={handleDeleteAccount}
                  >
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}