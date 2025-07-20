import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.search.includes('mode=login');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
          <p className="mt-2 text-gray-600">
            {isLogin ? 'Log in to your account' : 'Sign up for Landable.ai'}
          </p>
        </div>
        
        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
              placeholder="••••••••"
            />
          </div>
          
          <div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              {isLogin ? 'Sign In' : 'Sign Up'}
            </Button>
          </div>
        </form>
        
        <div className="mt-4 text-center text-sm">
          {isLogin ? (
            <p>
              Don't have an account?{' '}
              <Link to="/auth?mode=signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <Link to="/auth?mode=login" className="text-blue-600 hover:underline">
                Log in
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
