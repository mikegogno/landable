import { Badge } from '@/components/ui/badge'

interface FeaturesSectionProps {
  isVisible: boolean
}

interface Feature {
  title: string
  description: string
  icon: string
}

export function FeaturesSection({ isVisible }: FeaturesSectionProps) {
  const features: Feature[] = [
    {
      title: "AI Resume Optimization",
      description: "Generate ATS-optimized resume content tailored to specific job descriptions",
      icon: "✨"
    },
    {
      title: "Cover Letter Generator",
      description: "Create custom cover letters matching the company voice and job requirements",
      icon: "📝"
    },
    {
      title: "Multiple Export Formats",
      description: "Download as PDF, DOCX, or plain text for any application system",
      icon: "📤"
    },
    {
      title: "Version History",
      description: "Save multiple versions of your resumes for different job types",
      icon: "🔄"
    },
    {
      title: "Portfolio Builder",
      description: "Create a professional online presence with custom subdomains",
      icon: "🌐"
    },
    {
      title: "ATS Score Analysis",
      description: "Get real-time feedback on your resume's compatibility with ATS systems",
      icon: "📊"
    }
  ];

  return (
    <div 
      className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="text-center mb-20">
        <Badge variant="outline" className="mb-4">
          Features
        </Badge>
        <h2 className="text-4xl font-bold mb-6 tracking-tight">
          Everything you need to land interviews
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Our platform combines AI technology with proven resume strategies to get you past screening systems and in front of hiring managers.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {features.map((feature, index) => (
          <div key={index} className="group">
            <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors text-2xl">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
              {feature.title}
            </h3>
            <p className="text-slate-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}