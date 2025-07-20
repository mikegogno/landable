import { CheckCircle } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

interface FeaturesSectionProps {
  isVisible: boolean;
}

export function FeaturesSection({ isVisible }: FeaturesSectionProps) {
  return (
    <div className={`container mx-auto px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Features designed for job seekers
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Our AI-powered platform helps you create personalized application materials that get you noticed.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <FeatureCard
          icon={<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v3m0 4.5v9M5.636 5.636l2.121 2.121m8.485 8.486 2.121 2.121M3 12h3m4.5 0H21M5.636 18.364l2.121-2.121m8.485-8.486 2.121-2.121"/></svg></div>}
          title="AI Resume Builder"
          description="Create tailored, ATS-friendly resumes that highlight your relevant skills and experience for each job application."
        />
        <FeatureCard
          icon={<div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9 9-4.03 9-9z"/><path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/></svg></div>}
          title="Cover Letter Generator"
          description="Generate personalized cover letters that tell your story and explain why you're the perfect fit for the role."
        />
        <FeatureCard
          icon={<div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" x2="8" y1="16" y2="16"/><line x1="16" x2="16" y1="16" y2="16"/></svg></div>}
          title="Multiple Export Formats"
          description="Download your documents in multiple formats including PDF, DOCX, and plain text for different application systems."
        />
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Get more interviews, faster
            </h3>
            <p className="text-slate-600 mb-6">
              Landable.ai uses advanced AI to optimize your application materials for each specific job, increasing your chances of getting noticed by recruiters and ATS systems.
            </p>
            <ul className="space-y-3">
              {[
                "Perfect keyword optimization for ATS systems",
                "Tailored content that matches job descriptions",
                "Professional formatting that stands out",
                "Industry-specific templates and best practices",
                "Unlimited revisions and variations"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
            <div className="relative z-10 bg-gradient-to-br from-blue-50 to-indigo-50 p-1 rounded-2xl border border-slate-200 shadow-lg">
              <img 
                src="/assets/images/hero-image.svg"
                alt="Resume optimization" 
                className="rounded-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
