import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { MarkedText } from '../ui/MarkedText';
import { useComponyDetail } from '../../context/componyContext';


interface AboutCompanyProps {
  title?: string;
}

export function AboutCompany({
  title = "About [[Our Company]]",
}: AboutCompanyProps) {
  const { componyProfile } = useComponyDetail();
  const { profile, about } = componyProfile;

  return (
    <Section id="about" py="md" className="relative overflow-hidden bg-gradient-to-b from-bg-main via-bg-card/50 to-bg-main">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }}></div>

      <Container className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium mb-8 animate-slide-up">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Our Story
          </div>
          <MarkedText
            as="h2"
            text={title}
          />
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Main Content - Asymmetric Layout */}
        {(profile?.about || profile?.secondary_logo || profile?.name || profile?.slogan) &&
          <div className="relative mb-20">

            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 blur-3xl rounded-full"></div>
              <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/10 blur-3xl rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

              {/* LEFT - ABOUT (Clean, no card) */}
              {profile?.about &&
                <div className="lg:col-span-7">

                  <div className="max-w-2xl">
                    <div
                      className="ckeditor-content text-text-secondary leading-relaxed space-y-4 text-base md:text-lg"
                      dangerouslySetInnerHTML={{ __html: profile?.about }}
                    />
                  </div>

                </div>
              }

              {/* RIGHT - LOGO PANEL */}
              {(profile?.secondary_logo || profile?.name || profile?.slogan) &&
                <div className="lg:col-span-5 flex justify-center">

                  <div className="relative w-full max-w-sm">

                    {/* Floating Glass Panel */}
                    <div className="relative rounded-3xl bg-white/70 backdrop-blur-xl 
                            border border-border shadow-xl 
                            p-8 md:p-10 text-center 
                            hover:shadow-2xl transition-all duration-300">

                      {/* Logo */}
                      {profile?.secondary_logo &&
                        <div className="mb-6 flex justify-center">
                          <img
                            src={profile?.secondary_logo}
                            alt="logo"
                            className="max-w-[160px] object-contain transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      }

                      {/* Divider */}
                      <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>

                      {/* Name + Slogan */}
                      <div>
                        {profile?.name &&
                          <h3 className="text-xl md:text-2xl font-semibold text-text-primary">
                            {profile?.name}
                          </h3>
                        }
                        {profile?.slogan &&
                          <p className="text-sm text-text-secondary mt-2">
                            {profile?.slogan}
                          </p>
                        }
                      </div>

                    </div>

                    {/* Floating Glow */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 blur-2xl rounded-full"></div>
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/20 blur-2xl rounded-full"></div>

                  </div>

                </div>
              }

            </div>
          </div>
        }

        {/* Bottom Feature Strip */}
        {about?.strengths?.length > 0 &&
          <div className="mt-24">

            <div className="flex flex-wrap justify-center gap-6 md:gap-8">

              {about?.strengths?.map((strength: any, idx: number) => (
                <div
                  key={idx}
                  className="group relative w-[260px] p-[1px] rounded-2xl 
                     bg-gradient-to-br from-primary/20 to-secondary/20"
                >

                  {/* Inner */}
                  <div className="h-full w-full rounded-2xl bg-bg-card px-6 py-7 text-center
                          transition-all duration-300 
                          group-hover:-translate-y-2 group-hover:shadow-xl">

                    {/* ICON */}
                    {strength?.icon &&
                      <div className="mb-4 flex justify-center">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 
                                flex items-center justify-center
                                transition-all duration-300 
                                group-hover:bg-primary/20 group-hover:scale-110">
                          <img
                            src={strength?.icon}
                            alt={strength?.title}
                            className="w-7 h-7 object-contain"
                          />
                        </div>
                      </div>
                    }

                    {/* TITLE */}
                    {strength?.title &&
                      <h4 className="text-base md:text-lg font-semibold text-text-primary mb-2">
                        {strength?.title}
                      </h4>
                    }

                    {/* DETAILS */}
                    {strength?.details &&
                      <p
                        className="text-sm text-text-secondary leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: strength?.details }}
                      />
                    }

                  </div>

                  {/* Glow */}
                  <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 
                          group-hover:opacity-100 transition duration-300 
                          bg-gradient-to-br from-primary/20 to-secondary/20 -z-10"></div>

                </div>
              ))}

            </div>

          </div>
        }
      </Container>
    </Section>
  );
}
