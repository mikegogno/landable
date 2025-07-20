import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { 
  Zap, 
  Target, 
  Download, 
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Header from '@/components/layout/Header'

const features = [
  {
    icon: Zap,
    title: 'AI-Powered Optimization',
    description: 'Generate ATS-optimized resume bullets and cover letters in seconds using GPT-4o technology.'
  },
  {
    icon: Target,
    title: 'Job-Specific Tailoring',
    description: 'Paste any job description and get personalized content that matches exactly what employers want.'
  },
  {
    icon: Download,
    title: 'Multiple Export Formats',
    description: 'Download as PDF, DOCX, or copy to clipboard. Compatible with all major job application systems.'
  }
]

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Software Engineer',
    company: 'Google',
    content: 'Landed.io helped me get 3x more interviews. The AI suggestions were spot-on for each role I applied to.',
    rating: 5
  },
  {
    name: 'Marcus Johnson',
    role: 'Product Manager', 
    company: 'Meta',
    content: 'Cut my job application time by 80%. The cover letter generator is incredibly good at matching company tone.',
    rating: 5
  },
  {
    name: 'Elena Rodriguez',
    role: 'Data Scientist',
    company: 'Netflix',
    content: 'Finally, a resume builder that understands ATS systems. Got past screening for roles I never could before.',
    rating: 5
  }
]

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            🚀 Powered by GPT-4o
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            Land the interview.
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
              Every time.
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            AI-powered resume and cover letter personalization that gets you past ATS systems 
            and into the hands of hiring managers. Generate tailored documents in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" className="text-lg px-8 py-4">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              See Examples
            </Button>
          </div>
          
          <p className="text-sm text-slate-500 mt-4">
            Free forever • No credit card required • 2 AI generations included
          </p>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Landed.io beats the competition
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Built for job seekers who want results, not complexity. See why thousands choose us over Teal, Rezi, and Zety.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Trusted by job seekers at top companies
            </h2>
            <p className="text-xl text-slate-600">
              Join thousands who have landed their dream jobs with Landed.io
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-24" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-slate-600">
              Start free, upgrade when you need more power
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <Card className="p-8 border-2">
              <CardContent>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Free</h3>
                  <div className="text-4xl font-bold text-slate-900 mb-2">$0</div>
                  <p className="text-slate-600">Perfect for getting started</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>1 resume export</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>2 AI generations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Basic templates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>PDF & DOCX export</span>
                  </li>
                </ul>
                
                <Link to="/auth" className="block">
                  <Button variant="outline" className="w-full">
                    Get Started Free
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Pro Plan */}
            <Card className="p-8 border-2 border-blue-500 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                Most Popular
              </Badge>
              <CardContent>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Pro</h3>
                  <div className="text-4xl font-bold text-slate-900 mb-2">$12.99</div>
                  <p className="text-slate-600">per month</p>
                  <p className="text-sm text-green-600 mt-1">Save 37% with yearly ($99/year)</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Unlimited exports</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Unlimited AI generations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Premium templates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Cover letter generator</span>
                  </li>
                </ul>
                
                <Link to="/auth" className="block">
                  <Button className="w-full">
                    Start Pro Trial
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to land your dream job?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful job seekers who trust Landed.io
          </p>
          <Link to="/auth">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-xl font-bold text-white">Landed.io</span>
              <p className="text-slate-400 mt-2">
                AI-powered resume builder for the modern job seeker.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/pricing" className="text-slate-400 hover:text-white">Pricing</Link></li>
                <li><Link to="/templates" className="text-slate-400 hover:text-white">Templates</Link></li>
                <li><Link to="/examples" className="text-slate-400 hover:text-white">Examples</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-slate-400 hover:text-white">Help Center</Link></li>
                <li><Link to="/contact" className="text-slate-400 hover:text-white">Contact</Link></li>
                <li><Link to="/status" className="text-slate-400 hover:text-white">Status</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-slate-400 hover:text-white">Privacy</Link></li>
                <li><Link to="/terms" className="text-slate-400 hover:text-white">Terms</Link></li>
                <li><Link to="/cookies" className="text-slate-400 hover:text-white">Cookies</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              © 2025 Landed.io. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}