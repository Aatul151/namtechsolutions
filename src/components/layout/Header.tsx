import { useState } from 'react';
import { Button } from '../ui/Button';
import { useTheme } from '../../hooks/useTheme';
import { useScrollShadow } from '../../hooks/useScrollShadow';
import headerLogo from '../../assets/logo/namTechSolutions.png';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const hasShadow = useScrollShadow();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-bg-main/80 backdrop-blur-md border-b border-border transition-shadow duration-300 ${
        hasShadow ? 'shadow-strong' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img 
                src={headerLogo} 
                alt="Namtech Solutions" 
                className="h-8 md:h-10 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-text-secondary hover:text-text-primary transition-colors">
              Services
            </a>
            <a href="#why-us" className="text-text-secondary hover:text-text-primary transition-colors">
              Why Us
            </a>
            <a href="#testimonials" className="text-text-secondary hover:text-text-primary transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-text-secondary hover:text-text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* CTA Button */}
            <Button variant="primary" size="md" className="hidden sm:inline-flex">
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-4 pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-text-secondary hover:text-text-primary transition-colors">
                Services
              </a>
              <a href="#why-us" className="text-text-secondary hover:text-text-primary transition-colors">
                Why Us
              </a>
              <a href="#testimonials" className="text-text-secondary hover:text-text-primary transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-text-secondary hover:text-text-primary transition-colors">
                Contact
              </a>
              <Button variant="primary" size="md" className="w-full">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
