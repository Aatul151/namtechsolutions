import { Link } from 'react-router-dom';
import { useComponyDetail } from '../../context/componyContext';
import { resetCookieConsent } from './CookieConsent';

export function Footer({ navMenu }: any) {
  const { componyProfile } = useComponyDetail();
  const { profile } = componyProfile
  const quickLinks = navMenu
    ?.flatMap((item: any) => (item?.children ? item.children : [item]))
    ?.filter((item: any) => item?.path) ?? [];
  const splitAt = Math.ceil(quickLinks.length / 2);
  const primaryLinks = quickLinks.slice(0, splitAt);
  const secondaryLinks = quickLinks.slice(splitAt);

  return (
    <footer className="bg-bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            {profile?.logo &&
              <div className="flex-shrink-0 mb-4">
                <img
                  src={profile?.logo}
                  alt="NAMTech Solutions"
                  className="h-8 md:h-14 w-auto object-contain"
                />
              </div>
            }
            {profile?.short_description &&
              <p className="text-text-secondary mb-4 max-w-md">
                {profile?.short_description}
              </p>
            }
            <div className="flex gap-4">
              {profile?.facebook &&
                <a href={profile?.facebook} className="text-text-secondary hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              }
              {profile?.twitter &&
                <a href={profile?.twitter} className="text-text-secondary hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              }
              {profile?.linkedin &&
                <a href={profile?.linkedin} className="text-text-secondary hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              }
              {profile?.instagram &&
                <a href={profile?.instagram} className="text-text-secondary hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.216 4 20 5.784 20 7.75v8.5C20 18.216 18.216 20 16.25 20h-8.5C5.784 20 4 18.216 4 16.25v-8.5C4 5.784 5.784 4 7.75 4zm4.25 2.5A5.75 5.75 0 1 0 17.75 12 5.757 5.757 0 0 0 12 6.5zm0 2A3.75 3.75 0 1 1 8.25 12 3.754 3.754 0 0 1 12 8.5zm4.75-2.75a1.25 1.25 0 1 0 1.25 1.25 1.252 1.252 0 0 0-1.25-1.25z" />
                  </svg>
                </a>
              }
              {profile?.fiverr &&
                <a href={profile?.fiverr} className="text-text-secondary hover:text-primary transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 7.5h2V6.3c0-.9.4-1.3 1.3-1.3H14V3h-2c-2 0-3 1-3 3v1.5H7.8V9H9v7h2V9h2l.3-1.5H11V7.5z" />
                    <path d="M16 11h2v5h-2z" />
                    <path d="M17 8.5c.6 0 1 .4 1 1s-.4 1-1 1-.9-.4-.9-1 .3-1 .9-1z" />
                  </svg>
                </a>
              }
              {profile?.upwork &&
                <a href={profile?.upwork} className="text-text-secondary hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.5 3c-2.2 0-3.8 1.4-4.5 3.2C12.3 4.4 10.7 3 8.5 3 5.5 3 3 5.5 3 8.5v7h3v-7c0-1.4 1.1-2.5 2.5-2.5S11 7.1 11 8.5v7h3v-7c0-1.4 1.1-2.5 2.5-2.5S19 7.1 19 8.5c0 1.9-1.6 3.5-3.5 3.5-.7 0-1.3-.2-1.9-.6l-1.2 2.6c.9.5 2 .8 3.1.8 3.6 0 6.5-2.9 6.5-6.5C22 5.5 19.7 3 17.5 3z" />
                  </svg>
                </a>
              }
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {primaryLinks.map((item: any) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-4">Explore</h4>
            <ul className="space-y-2">
              {secondaryLinks.map((item: any) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          {(profile?.email || profile?.mobile_number) &&
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Contact</h4>
              <ul className="space-y-2 text-text-secondary ">
                {profile?.email &&
                  <li className='flex gap-2 items-center'>
                    <svg className="h-5 w-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                    >
                      {profile.email}
                    </a>
                  </li>
                }
                {profile?.mobile_number &&
                  <li className='flex gap-2 items-center'>
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <a
                      href={`https://wa.me/${profile?.mobile_number}?text=${encodeURIComponent(`${profile?.whatsApp_message}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-emerald-600 hover:underline dark:text-emerald-400"
                    >
                      {profile?.mobile_number}
                    </a>
                  </li>
                }
              </ul>
            </div>
          }
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-sm text-text-secondary sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile?.name || 'NAMTech Solutions'}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <button
              type="button"
              className="hover:text-primary transition-colors"
              onClick={resetCookieConsent}
            >
              Cookie preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
