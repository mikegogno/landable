import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

interface PricingSectionProps {
  isVisible: boolean
}

interface PricingPlan {
  name: string
  price: string
  period?: string
  description: string
  discount?: string
  features: string[]
  cta: string
  ctaLink: string
  highlighted: boolean
}

export function PricingSection({ isVisible }: PricingSectionProps) {
  const pricingPlans: PricingPlan[] = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started",
      features: [
        "1 resume export",
        "2 AI optimizations",
        "Basic templates",
        "PDF & DOCX export"
      ],
      cta: "Get Started Free",
      ctaLink: "/auth",
      highlighted: false
    },
    {
      name: "Pro",
      price: "$12.99",
      period: "per month",
      description: "For serious job seekers",
      discount: "Save 37% with yearly ($99/year)",
      features: [
        "Unlimited exports",
        "Unlimited AI generations",
        "Premium templates",
        "Cover letter generator",
        "Portfolio builder",
        "Priority support"
      ],
      cta: "Start Pro Trial",
      ctaLink: "/auth",
      highlighted: true
    }
  ];

  return (
    <div 
      className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4">
          Pricing
        </Badge>
        <h2 className="text-4xl font-bold mb-6 tracking-tight">
          Simple, transparent pricing
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Start for free and upgrade when you're ready for more power. No hidden fees or surprises.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div 
            key={index}
            className={`rounded-2xl overflow-hidden border-2 ${
              plan.highlighted ? 'border-blue-500 shadow-lg shadow-blue-100' : 'border-slate-200'
            }`}
          >
            <div className={`p-8 ${plan.highlighted ? 'bg-gradient-to-br from-blue-50 to-indigo-50' : 'bg-white'}`}>
              {plan.highlighted && (
                <Badge className="mb-4">
                  Most Popular
                </Badge>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="ml-2 text-slate-600">{plan.period}</span>}
              </div>
              
              <p className="text-slate-600 mt-2 mb-6">
                {plan.description}
              </p>
              
              {plan.discount && (
                <p className="text-sm text-green-600 mb-6">
                  {plan.discount}
                </p>
              )}
              
              <Link to={plan.ctaLink} className="block mb-8">
                <Button 
                  className="w-full rounded-full" 
                  variant={plan.highlighted ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </Link>
              
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${
                      plan.highlighted ? 'text-blue-500' : 'text-slate-600'
                    }`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}