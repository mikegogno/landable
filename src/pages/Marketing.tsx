import { useEffect, useState, useRef, useMemo } from 'react'
import Header from '@/components/layout/Header'
import { HeroSection } from '@/components/marketing/HeroSection'
import { FeaturesSection } from '@/components/marketing/FeaturesSection'
import { ShowcaseSection } from '@/components/marketing/ShowcaseSection'
import { PricingSection } from '@/components/marketing/PricingSection'
import { CTASection } from '@/components/marketing/CTASection'
import { Footer } from '@/components/marketing/Footer'

export default function Marketing() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    showcase: false,
    pricing: false,
    cta: false
  });
  
  const heroRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const showcaseRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  
  const sectionRefs = useMemo(() => ({
    hero: heroRef,
    features: featuresRef,
    showcase: showcaseRef,
    pricing: pricingRef,
    cta: ctaRef
  }), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setIsVisible(prev => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <section 
        id="hero" 
        ref={heroRef}
        className="py-20 md:py-32"
      >
        <HeroSection isVisible={isVisible.hero} />
      </section>
      
      {/* Features Section */}
      <section 
        id="features"
        ref={featuresRef}
        className="py-24 bg-slate-50"
      >
        <FeaturesSection isVisible={isVisible.features} />
      </section>
      
      {/* Showcase Section */}
      <section 
        id="showcase" 
        ref={showcaseRef}
        className="py-24"
      >
        <ShowcaseSection isVisible={isVisible.showcase} />
      </section>
      
      {/* Pricing Section */}
      <section 
        id="pricing"
        ref={pricingRef}
        className="py-24 bg-slate-50"
      >
        <PricingSection isVisible={isVisible.pricing} />
      </section>
      
      {/* CTA Section */}
      <section 
        id="cta"
        ref={ctaRef}
        className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600"
      >
        <CTASection isVisible={isVisible.cta} />
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-slate-900">
        <Footer />
      </footer>
    </div>
  )
}