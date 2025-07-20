import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth'
import { Link } from 'react-router-dom'

export default function Header() {
  const { user, signOut } = useAuth()

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Landed.io</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/pricing" className="text-slate-600 hover:text-slate-900">
              Pricing
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <Button variant="ghost" onClick={() => signOut()}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button>Get Started Free</Button>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}