import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { useTheme } from '../../hooks/useTheme';
import { useScrollShadow } from '../../hooks/useScrollShadow';
import { useComponyDetail } from '../../context/componyContext';

export function Header({ navMenu }: any) {
  const { componyProfile } = useComponyDetail();
  const { profile } = componyProfile
  const { theme, toggleTheme } = useTheme();
  const hasShadow = useScrollShadow();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 bg-bg-main/80 backdrop-blur-md border-b border-border transition-shadow duration-300 ${hasShadow ? 'shadow-strong' : ''
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          {profile?.logo &&
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <img
                  src={profile?.logo}
                  alt="Namtech Solutions"
                  className="h-8 md:h-10 w-auto object-contain"
                  onClick={() => navigate("/")}
                />
              </a>
            </div>
          }

          {/* Desktop Navigation */}
          {/* <nav className="hidden md:flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-8">
              {navMenu?.filter((item: any) => !item?.isFooterLink)?.map((item: any) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  {item?.label}
                </Link>
              ))}
            </nav>
          </nav> */}
          <nav className="hidden md:flex items-center space-x-8">
            {navMenu
              ?.filter((item: any) => !item?.isFooterLink)
              ?.map((item: any) => (
                <div key={item.path} className="relative group">

                  {/* Main link */}
                  <Link to={item.path} className="text-text-secondary hover:text-text-primary transition-colors">
                    {item.label}
                  </Link>

                  {/* Dropdown */}
                  {item?.children && (
                    <div className="absolute left-0 top-full pt-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
                      <div className="w-[420px] rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-2xl p-4">
                        {/* Title */}
                        <div className="px-2 pb-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Explore
                        </div>

                        {/* Grid items */}
                        <div className="grid grid-cols-2 gap-2">
                          {item?.children?.map((sub: any) => (
                            <Link
                              key={sub?.path}
                              to={sub?.path}
                              className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200">
                              {/* Icon box */}
                              <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all">
                                <span className="text-lg">✨</span>
                              </div>

                              {/* Text */}
                              <div>
                                <div className="text-sm font-semibold text-gray-800 dark:text-white">{sub?.label}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{sub?.description || "Quick access"}</div>
                              </div>

                            </Link>
                          ))}

                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
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
            <Button variant="primary" size="md" className="hidden sm:inline-flex" onClick={() => navigate('/contact')}>
              Contact Us
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
          <div className="md:hidden fixed inset-x-0 top-[72px] z-50 p-4 animate-slide-down">
            {/* Solid Premium Container */}
            <nav className=" relative overflow-hidden rounded-[2.5rem] p-8 bg-white dark:bg-slate-950 border border-slate-100 dark:border-white/5 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.8)]">
              {/* Decorative Accent - Top "Diamond Cut" Bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-100 dark:bg-white/10 rounded-full mt-3" />
              <div className="flex flex-col space-y-2 mt-4">
                {navMenu?.filter((item: any) => !item?.isFooterLink)?.map((item: any) => {
                  const isOpen = openMenu === item?.label;

                  return (
                    <div key={item?.path || item?.label} className="group">
                      {/* Main Item */}
                      <div
                        className={`flex items-center justify-between cursor-pointer px-5 py-4 rounded-2xl transition-all duration-300 ${isOpen ? "bg-slate-50 dark:bg-white/5 shadow-inner" : "hover:bg-slate-50/80 dark:hover:bg-white/[0.03]"}`}
                        onClick={() => {
                          if (item?.children) {
                            setOpenMenu(isOpen ? null : item.label);
                          } else {
                            navigate(item.path);
                            setMobileMenuOpen(false);
                          }
                        }}
                      >
                        <span className={` text-[15px] tracking-tight font-medium transition-colors ${isOpen ? "text-blue-600 dark:text-blue-400" : "text-slate-800 dark:text-slate-200"}`}>
                          {item?.label}
                        </span>

                        {item?.children && (
                          <span className={`transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isOpen ? "text-blue-500" : "text-slate-400"}>
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          </span>
                        )}
                      </div>

                      {/* Submenu with Smooth Height Logic */}
                      {item?.children && (
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                          <div className="my-2 ml-7 flex flex-col space-y-1 border-l border-slate-200 dark:border-white/10">
                            {item.children.map((sub: any) => (
                              <Link
                                key={sub?.path}
                                to={sub?.path}
                                className="px-6 py-3 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {sub?.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Solid CTA Section */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5">
                <button
                  className="w-full py-4 rounded-[1.5rem] font-bold text-xs tracking-[0.2em] uppercase bg-slate-950 dark:bg-white text-white dark:text-slate-950  hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-slate-900/10 dark:shadow-white/5"
                  onClick={() => {
                    navigate("/contact");
                    setMobileMenuOpen(false);
                  }}
                >
                  Get in Touch
                </button>
              </div>
            </nav>
          </div>
        )}
      </div >
    </header >
  );
}
