import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface ShowcaseSectionProps {
  isVisible: boolean
}

interface ShowcaseItem {
  title: string
  description: string
  imagePosition: 'left' | 'right'
  color: string
}

export function ShowcaseSection({ isVisible }: ShowcaseSectionProps) {
  const showcaseItems: ShowcaseItem[] = [
    {
      title: "Tailored for Every Job",
      description: "Our AI analyzes job descriptions and tailors your resume to match exactly what recruiters are looking for. You'll never have to manually adjust your resume again.",
      imagePosition: "right",
      color: "blue"
    },
    {
      title: "Pass the ATS, Every Time",
      description: "Applicant Tracking Systems filter out 75% of resumes. Our AI optimization ensures yours makes it through with the right keywords and formatting.",
      imagePosition: "left",
      color: "purple"
    },
    {
      title: "Portfolio That Stands Out",
      description: "Create a professional online presence with our portfolio builder. Showcase your work with a custom subdomain that impresses hiring managers.",
      imagePosition: "right",
      color: "indigo"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {showcaseItems.map((item, index) => (
        <div 
          key={index}
          className={`flex flex-col ${item.imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 mb-32 last:mb-0 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex-1">
            <Badge 
              variant="outline" 
              className="mb-4"
            >
              Featured
            </Badge>
            <h2 className="text-4xl font-bold mb-6 tracking-tight">
              {item.title}
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {item.description}
            </p>
            <Link to="/auth">
              <Button 
                className="group rounded-full" 
                variant="outline"
              >
                Try It Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div className="flex-1">
            <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-50 border border-slate-200 shadow-lg flex items-center justify-center">
              <p className="text-slate-400 text-lg">Feature Preview {index + 1}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}