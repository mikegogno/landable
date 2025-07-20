import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from '@/components/layout/Header'

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Start free, upgrade when you need more power
            </p>
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to home
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <Card className="p-8 border-2">
              <CardHeader>
                <CardTitle className="text-center">
                  <div className="text-2xl font-bold text-slate-900 mb-2">Free</div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">$0</div>
                  <CardDescription>Perfect for getting started</CardDescription>
                </CardTitle>
              </CardHeader>
              <CardContent>
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
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>ATS optimization</span>
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
              <CardHeader>
                <CardTitle className="text-center">
                  <div className="text-2xl font-bold text-slate-900 mb-2">Pro</div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">$12.99</div>
                  <CardDescription>
                    per month
                    <div className="text-sm text-green-600 mt-1">Save 37% with yearly ($99/year)</div>
                  </CardDescription>
                </CardTitle>
              </CardHeader>
              <CardContent>
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
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Advanced customization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>LinkedIn integration</span>
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
          
          {/* FAQ Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Can I cancel my subscription anytime?
                </h3>
                <p className="text-slate-600">
                  Yes, you can cancel your subscription at any time. You'll continue to have access to Pro features until the end of your billing period.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  What happens to my data if I cancel?
                </h3>
                <p className="text-slate-600">
                  Your resumes and cover letters will remain accessible in your account. You can export them at any time, even on the free plan.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  How accurate is the AI optimization?
                </h3>
                <p className="text-slate-600">
                  Our AI is powered by GPT-4o and trained specifically for resume optimization. It analyzes job descriptions and creates ATS-friendly content that increases your chances of getting interviews.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Do you offer refunds?
                </h3>
                <p className="text-slate-600">
                  Yes, we offer a 7-day money-back guarantee. If you're not satisfied with Landed.io, contact us within 7 days for a full refund.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}