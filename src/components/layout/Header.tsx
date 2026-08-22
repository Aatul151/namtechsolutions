import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { useScrollShadow } from '../../hooks/useScrollShadow';
import { useComponyDetail } from '../../context/componyContext';

function SubmenuIcon({ label }: { label: string }) {
  const name = label.toLowerCase();
  if (name.includes('team')) {
    return (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198A5.97 5.97 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    );
  }
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21"
      />
    </svg>
  );
}

export function Header({ navMenu }: any) {
  const { componyProfile } = useComponyDetail();
  const { profile } = componyProfile;
  const hasShadow = useScrollShadow();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const links = navMenu?.filter((item: any) => !item?.isFooterLink) ?? [];

  const isActive = (item: any) => {
    if (item?.path && location.pathname === item.path) return true;
    return item?.children?.some((child: any) => location.pathname === child.path);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="h-[3px] bg-gradient-to-r from-primary via-secondary to-primary" />
      <div
        className={`border-b border-border bg-bg-main ${
          hasShadow ? 'shadow-soft' : ''
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex min-w-0 flex-shrink-0 items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
            {profile?.logo && (
              <img
                src={profile.logo}
                alt={profile?.name || 'NAMTech Solutions'}
                className="h-11 w-auto object-contain lg:h-12"
              />
            )}
            {profile?.slogan && (
              <>
                <span className="hidden h-8 w-px bg-border sm:block" aria-hidden="true" />
                <span className="hidden max-w-[10.5rem] text-[12px] font-semibold leading-snug tracking-wide sm:block lg:max-w-none">
                  <span className="text-primary">{profile.slogan.split(',')[0]}{profile.slogan.includes(',') ? ',' : ''}</span>
                  {profile.slogan.includes(',') && (
                    <span className="text-secondary">{profile.slogan.slice(profile.slogan.indexOf(',') + 1)}</span>
                  )}
                </span>
              </>
            )}
          </Link>

          <nav className="hidden items-center rounded-full border border-primary/15 bg-bg-card/80 p-1 shadow-soft lg:flex">
            {links.map((item: any) => {
              const active = isActive(item);

              if (item?.children) {
                return (
                  <div key={item.label} className="relative group">
                    <button
                      type="button"
                      className={`flex items-center gap-1 rounded-full px-4 py-2 text-[13px] font-medium transition-all ${
                        active
                          ? 'bg-primary text-white shadow-soft'
                          : 'text-text-secondary hover:bg-primary/8 hover:text-primary'
                      }`}
                    >
                      {item.label}
                      <svg className="h-3.5 w-3.5 opacity-70" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <div className="overflow-hidden rounded-[1.75rem] border border-primary/15 bg-bg-card p-1.5 shadow-strong">
                        {item.children.map((sub: any) => {
                          const selected = location.pathname === sub.path;
                          return (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className={`group/sub flex items-center gap-3 rounded-full px-3 py-2.5 transition-all ${
                                selected
                                  ? 'bg-primary text-white shadow-soft'
                                  : 'hover:bg-primary hover:text-white hover:shadow-soft'
                              }`}
                            >
                              <span
                                className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all ${
                                  selected
                                    ? 'bg-white/20 text-white'
                                    : 'bg-primary/10 text-primary group-hover/sub:bg-white/20 group-hover/sub:text-white'
                                }`}
                              >
                                <SubmenuIcon label={sub.label} />
                              </span>
                              <span>
                                <span
                                  className={`block text-[13px] font-semibold transition-colors ${
                                    selected ? 'text-white' : 'text-text-primary group-hover/sub:text-white'
                                  }`}
                                >
                                  {sub.label}
                                </span>
                                <span
                                  className={`block text-[11px] transition-colors ${
                                    selected ? 'text-white/80' : 'text-text-secondary group-hover/sub:text-white/80'
                                  }`}
                                >
                                  {sub.description}
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all ${
                    active
                      ? 'bg-primary text-white shadow-soft'
                      : 'text-text-secondary hover:bg-primary/8 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-[11px] font-medium text-text-secondary xl:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              Open for projects
            </span>

            <Button
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => navigate('/contact')}
            >
              Let&apos;s talk
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-card lg:hidden"
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border bg-bg-card p-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {links.map((item: any) => {
                const isOpen = openMenu === item?.label;
                const active = isActive(item);

                return (
                  <div key={item?.path || item?.label}>
                    <button
                      type="button"
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium ${
                        active ? 'bg-primary/10 text-primary' : 'text-text-primary hover:bg-primary/5'
                      }`}
                      onClick={() => {
                        if (item?.children) {
                          setOpenMenu(isOpen ? null : item.label);
                        } else {
                          navigate(item.path);
                          setMobileMenuOpen(false);
                        }
                      }}
                    >
                      {item.label}
                      {item?.children && (
                        <svg className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                    {item?.children && isOpen && (
                      <div className="mb-2 ml-3 flex flex-col gap-1">
                        {item.children.map((sub: any) => {
                          const selected = location.pathname === sub.path;
                          return (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className={`group/sub flex items-center gap-3 rounded-full px-3 py-2.5 text-sm font-medium transition-all ${
                                selected
                                  ? 'bg-primary text-white shadow-soft'
                                  : 'text-text-secondary hover:bg-primary hover:text-white'
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span
                                className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
                                  selected
                                    ? 'bg-white/20 text-white'
                                    : 'bg-primary/10 text-primary group-hover/sub:bg-white/20 group-hover/sub:text-white'
                                }`}
                              >
                                <SubmenuIcon label={sub.label} />
                              </span>
                              {sub.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
            <Button
              variant="primary"
              className="mt-4 w-full"
              onClick={() => {
                navigate('/contact');
                setMobileMenuOpen(false);
              }}
            >
              Let&apos;s talk
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
