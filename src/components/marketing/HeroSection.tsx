import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  isVisible: boolean;
}

export function HeroSection({ isVisible }: HeroSectionProps) {
  return (
    <div className={`container mx-auto px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
            Land the interview. <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">Every time.</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-lg">
            AI-powered resume and cover letter personalization in seconds. Tailor your application to each job and stand out from the crowd.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg py-6 px-8">
              <Link to="/auth">
                Get started 
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full text-lg py-6 px-8 border-2 border-slate-300">
              <Link to="#features">
                How it works
              </Link>
            </Button>
          </div>
          <div className="pt-4 text-sm text-slate-600 flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#10b981"/>
            </svg>
            <span>No credit card required</span>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="absolute -top-8 -right-8 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-14 -left-8 w-64 h-64 bg-violet-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="relative z-10 bg-white p-2 rounded-2xl border border-slate-200 shadow-xl">
            <img 
              src="/assets/images/hero-image.svg" 
              alt="Landable.ai Resume Builder" 
              className="rounded-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
