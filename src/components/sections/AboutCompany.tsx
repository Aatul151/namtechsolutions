import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { MarkedText } from '../ui/MarkedText';
import { Card } from '../ui/Card';
import { useComponyDetail } from '../../context/componyContext';
import { APIENDPOINT } from '../../services/apihelper';
import { getFormEntriesByFormName } from '../../services/formservices';
import { FORMNAMES } from '../../utilities/codes';
import { useEffect, useState } from 'react';

interface AboutCompanyProps {
  title?: string;
}

export function AboutCompany({
  title = "About [[Our Company]]",
}: AboutCompanyProps) {
  const { componyProfile } = useComponyDetail();
  const [strengths, setStrengths] = useState([]);

  useEffect(() => {
    getStrengths();
  }, [])

  const getStrengths = async () => {
    try {
      const data = await getFormEntriesByFormName(FORMNAMES.STRENGTHS);
      if (data && data?.length > 0) setStrengths(data);
    } catch (error) { }
  }
  
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
        {(componyProfile?.about || componyProfile?.secondary_logo || componyProfile?.name || componyProfile?.slogan) &&
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
            {/* Left Column - Large Content Area */}
            {componyProfile?.about &&
              <div className="lg:col-span-7 space-y-8 animate-fade-in">
                <Card className="p-8 md:p-10 lg:p-12 border-2 border-border/50 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group">
                  {/* Decorative Corner Element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>

                  <div className="relative">
                    <div
                      className="ckeditor-content"
                      dangerouslySetInnerHTML={{ __html: componyProfile?.about }}
                    />
                  </div>
                </Card>
              </div>
            }

            {/* Right Column - Logo Display */}
            {(componyProfile?.secondary_logo || componyProfile?.name || componyProfile?.slogan) &&
              <div className="lg:col-span-5 flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="relative w-full max-w-md h-full">
                  {/* Decorative Background Elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 rounded-3xl blur-3xl opacity-50"></div>
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/5 rounded-full blur-2xl"></div>

                  {/* Logo Card */}
                  <Card className="p-8 md:p-12 lg:p-16 relative overflow-hidden border-2 border-border/50 hover:border-primary/30 transition-all duration-300 group">
                    {/* Animated Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Logo Container */}
                    <div className="relative flex flex-col items-center justify-center space-y-6">
                      {/* Logo Image */}
                      {componyProfile?.secondary_logo &&
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                          <div className="relative bg-bg-card p-8 rounded-2xl shadow-lg border border-border/50 group-hover:shadow-xl transition-shadow">
                            <img
                              src={APIENDPOINT + componyProfile?.secondary_logo?.fileUrl}
                              alt="NAMTech Solutions"
                              className="w-full h-auto max-w-[200px] object-contain filter group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>
                      }

                      {/* Decorative Elements */}
                      <div className="flex items-center gap-2 mt-4">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                        <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      </div>

                      {/* Company Name */}
                      {(componyProfile?.name || componyProfile?.slogan) &&
                        <div className="text-center space-y-2">
                          {componyProfile?.name &&
                            <h3 className="text-xl md:text-2xl font-bold text-text-primary">{componyProfile?.name}</h3>
                          }
                          {componyProfile?.slogan &&
                            <p className="text-sm text-text-secondary">{componyProfile?.slogan}</p>
                          }
                        </div>
                      }
                    </div>
                  </Card>
                </div>
              </div>
            }
          </div>
        }

        {/* Bottom Feature Strip */}
        {strengths?.length > 0 &&
          <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Card className="p-8 md:p-10 border-2 border-border/50 bg-gradient-to-r from-bg-card via-bg-main to-bg-card">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {strengths?.map((strength: any, idx: number) => (
                  <div key={idx} className="space-y-2">
                    {strength?.payload?.icon &&
                      <div className="mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                        <img
                          src={APIENDPOINT + strength?.payload?.icon?.fileUrl}
                          alt={strength?.payload?.title}
                          className='w-8 h-8'
                        />
                      </div>
                    }
                    {strength?.payload?.title &&
                      <h4 className="text-lg font-semibold text-text-primary">{strength?.payload?.title}</h4>
                    }
                    {strength?.payload?.details &&
                      <p className="text-sm text-text-secondary"
                        dangerouslySetInnerHTML={{
                          __html: strength?.payload?.details
                        }}
                      ></p>
                    }
                  </div>
                ))}
              </div>
            </Card>
          </div>
        }
      </Container>
    </Section>
  );
}
