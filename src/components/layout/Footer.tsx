import { Link } from 'react-router-dom';
import { useComponyDetail } from '../../context/componyContext';
import { APIENDPOINT } from '../../services/apihelper';

export function Footer() {
  const { componyProfile } = useComponyDetail();
  return (
    <footer className="bg-bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            {componyProfile?.logo &&
              <div className="flex-shrink-0 mb-4">
                <img
                  src={APIENDPOINT + componyProfile?.logo?.fileUrl}
                  alt="Namtech Solutions"
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </div>
            }
            {componyProfile?.short_description &&
              <p className="text-text-secondary mb-4 max-w-md">
                {componyProfile?.short_description}
              </p>
            }
            <div className="flex gap-4">
              {componyProfile?.facebook &&
                <a href={componyProfile?.facebook} className="text-text-secondary hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              }
              {componyProfile?.twitter &&
                <a href={componyProfile?.twitter} className="text-text-secondary hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              }
              {componyProfile?.linkedin &&
                <a href={componyProfile?.linkedin} className="text-text-secondary hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              }
              {componyProfile?.instagram &&
                <a href={componyProfile?.instagram} className="text-text-secondary hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.216 4 20 5.784 20 7.75v8.5C20 18.216 18.216 20 16.25 20h-8.5C5.784 20 4 18.216 4 16.25v-8.5C4 5.784 5.784 4 7.75 4zm4.25 2.5A5.75 5.75 0 1 0 17.75 12 5.757 5.757 0 0 0 12 6.5zm0 2A3.75 3.75 0 1 1 8.25 12 3.754 3.754 0 0 1 12 8.5zm4.75-2.75a1.25 1.25 0 1 0 1.25 1.25 1.252 1.252 0 0 0-1.25-1.25z" />
                  </svg>
                </a>
              }
              {componyProfile?.fiverr &&
                <a href={componyProfile?.fiverr} className="text-text-secondary hover:text-primary transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 7.5h2V6.3c0-.9.4-1.3 1.3-1.3H14V3h-2c-2 0-3 1-3 3v1.5H7.8V9H9v7h2V9h2l.3-1.5H11V7.5z" />
                    <path d="M16 11h2v5h-2z" />
                    <path d="M17 8.5c.6 0 1 .4 1 1s-.4 1-1 1-.9-.4-.9-1 .3-1 .9-1z" />
                  </svg>
                </a>
              }
              {componyProfile?.upwork &&
                <a href={componyProfile?.upwork} className="text-text-secondary hover:text-primary transition-colors">
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
              <li>
                <Link to="/" className="text-text-secondary hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-text-secondary hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-text-secondary hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-text-secondary hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="text-text-secondary hover:text-primary transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-text-secondary hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-text-secondary hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          {(componyProfile?.email || componyProfile?.mobile_number) &&
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Contact</h4>
              <ul className="space-y-2 text-text-secondary">
                {componyProfile?.email &&
                  <li>Email: {componyProfile?.email}</li>
                }
                {componyProfile?.mobile_number &&
                  <li>Phone: {componyProfile?.mobile_number}</li>
                }
              </ul>
            </div>
          }
        </div>

        {componyProfile?.copyright_text &&
          <div className="mt-8 pt-8 border-t border-border text-center text-text-secondary text-sm"
            dangerouslySetInnerHTML={{
              __html: componyProfile?.copyright_text
            }}
          >
          </div>
        }
      </div>
    </footer>
  );
}
