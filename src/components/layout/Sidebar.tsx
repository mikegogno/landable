import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { 
  FileText, 
  Mail, 
  Settings, 
  LayoutDashboard,
  Crown
} from 'lucide-react'
import { useAuth } from '@/lib/auth'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Resume Builder', href: '/dashboard/resume', icon: FileText },
  { name: 'Cover Letters', href: '/dashboard/cover-letter', icon: Mail },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export default function Sidebar() {
  const location = useLocation()
  const { user } = useAuth()

  return (
    <div className="w-64 bg-white border-r border-slate-200 min-h-screen">
      <div className="p-6">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-blue-600">Landed.io</span>
        </Link>
      </div>
      
      <nav className="px-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.href
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              )}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          )
        })}
        
        {/* Free user upgrade prompt */}
        {user && (
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
            <div className="flex items-center mb-2">
              <Crown className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-slate-900">Upgrade to Pro</span>
            </div>
            <p className="text-xs text-slate-600 mb-3">
              Unlimited AI generations and exports
            </p>
            <Link to="/pricing">
              <Button size="sm" className="w-full">
                Upgrade Now
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  )
}