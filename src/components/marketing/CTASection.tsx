import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  isVisible: boolean
}

export function CTASection({ isVisible }: CTASectionProps) {
  return (
    <div 
      className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <h2 className="text-4xl font-bold text-white mb-6">
        Ready to get more interviews?
      </h2>
      <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
        Join thousands of successful job seekers who have landed their dream jobs with Landable.ai
      </p>
      <Link to="/auth">
        <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-full">
          Get Started Free
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </Link>
    </div>
  )
}