import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">landable.ai</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/#features" className="text-slate-600 hover:text-blue-600 transition-colors">Features</Link>
            <Link to="/#showcase" className="text-slate-600 hover:text-blue-600 transition-colors">Templates</Link>
            <Link to="/pricing" className="text-slate-600 hover:text-blue-600 transition-colors">Pricing</Link>
          </nav>

          {/* Desktop CTA buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/auth?mode=login">Log in</Link>
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 rounded-full">
              <Link to="/auth?mode=signup">Sign up</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              to="/#features" 
              className="block py-2 text-slate-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/#showcase" 
              className="block py-2 text-slate-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Templates
            </Link>
            <Link 
              to="/pricing" 
              className="block py-2 text-slate-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="pt-4 space-y-3">
              <Button asChild variant="outline" className="w-full rounded-full">
                <Link to="/auth?mode=login" onClick={() => setIsMenuOpen(false)}>
                  Log in
                </Link>
              </Button>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 rounded-full">
                <Link to="/auth?mode=signup" onClick={() => setIsMenuOpen(false)}>
                  Sign up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
