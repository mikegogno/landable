import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <span className="text-xl font-bold text-white">Landable.ai</span>
          <p className="text-slate-400 mt-2">
            AI-powered resume builder for the modern job seeker.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-2">
            <li><Link to="/pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</Link></li>
            <li><Link to="/templates" className="text-slate-400 hover:text-white transition-colors">Templates</Link></li>
            <li><Link to="/examples" className="text-slate-400 hover:text-white transition-colors">Examples</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            <li><Link to="/help" className="text-slate-400 hover:text-white transition-colors">Help Center</Link></li>
            <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            <li><Link to="/status" className="text-slate-400 hover:text-white transition-colors">Status</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy</Link></li>
            <li><Link to="/terms" className="text-slate-400 hover:text-white transition-colors">Terms</Link></li>
            <li><Link to="/cookies" className="text-slate-400 hover:text-white transition-colors">Cookies</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-slate-800 mt-8 pt-8 text-center">
        <p className="text-slate-400">
          © 2025 Landable.ai. All rights reserved.
        </p>
      </div>
    </div>
  )
}