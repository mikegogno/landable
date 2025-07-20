import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

interface HeroSectionProps {
  isVisible: boolean
}

export function HeroSection({ isVisible }: HeroSectionProps) {
  return (
    <div 
      className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="text-center mb-16">
        <Badge variant="secondary" className="mb-6 py-2 px-4">
          Powered by GPT-4o
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Land your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">dream job</span> with AI
        </h1>
        
        <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Create resumes and cover letters that pass any ATS system with our AI-powered platform. 
          Say goodbye to application rejections.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/auth">
            <Button size="lg" className="text-base px-8 py-7 rounded-full">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="text-base px-8 py-7 rounded-full">
            View Examples
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
        
        <p className="text-sm text-slate-500 mt-4">
          No credit card required • Free tier available
        </p>
      </div>
      
      <div className="relative">
        <div className="aspect-[16/9] max-w-5xl mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center border border-slate-200 shadow-xl">
          <p className="text-slate-400 text-lg">Resume Builder Interface Preview</p>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent -bottom-5 pointer-events-none"></div>
      </div>
    </div>
  )
}