import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { MarkedText } from '../ui/MarkedText';
import { useEffect, useState } from 'react';
import { getFormEntriesByFormName } from '../../services/formservices';
import { FORMNAMES } from '../../utilities/codes';

export function CompanyMilestones() {
  const [journey, setJourney] = useState([]);

  useEffect(() => {
    getJourney();
  }, [])

  const getJourney = async () => {
    try {
      const data = await getFormEntriesByFormName(FORMNAMES.JOURNEY);
      if (data && data?.length > 0) setJourney(data);
    } catch (error) { }
  }

  return (
    <Section py="xl" className="bg-bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <MarkedText
            as="h2"
            text="Our [[Journey]]"
          />
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mt-4">
            Key milestones in our growth and success story
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-primary opacity-30"></div>
          
          {/* Timeline line - Mobile */}
          <div className="md:hidden absolute left-4 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-primary opacity-30"></div>

          <div className="space-y-8 md:space-y-12">
            {journey.map((step: any, idx: number) => {
              const isEven = idx % 2 === 0;
              return (
                <>
                  {step?.payload?.active &&
                    <div
                      key={idx}
                      className="relative animate-fade-in"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      {/* Desktop Layout */}
                      <div className="hidden md:flex items-center gap-4">
                        {/* Left Side - Year Badge (even) or Content (odd) */}
                        <div className={`w-[calc(50%-20px)] flex ${isEven ? 'justify-end pr-4' : 'justify-start pl-4'}`}>
                          {isEven ? (
                            step?.payload?.year &&
                            (<Card className="p-4 md:p-6 transition-all duration-300" noBaseStyles={true}>
                              <div className="text-2xl md:text-3xl font-bold text-text-primary text-right">{step?.payload?.year}</div>
                            </Card>)
                          ) : (
                            (step?.payload?.title || step?.payload?.details) &&
                            (<Card className="p-4 md:p-6 lg:p-8 hover border-2 border-border/50 hover:border-primary/30 transition-all duration-300">
                              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-text-primary">{step?.payload?.title}</h3>
                              <p className="text-sm md:text-base text-text-secondary leading-relaxed"
                                dangerouslySetInnerHTML={{
                                  __html: step?.payload?.details
                                }}
                              ></p>
                            </Card>)
                          )}
                        </div>

                        {/* Center Timeline Dot */}
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary border-4 border-bg-main z-10 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>

                        {/* Right Side - Content (even) or Year Badge (odd) */}
                        <div className={`w-[calc(50%-20px)] flex ${!isEven ? 'justify-start pl-4' : 'justify-end pr-4'}`}>
                          {isEven ? (
                            (step?.payload?.title || step?.payload?.details) &&
                            (<Card className="p-4 md:p-6 lg:p-8 hover border-2 border-border/50 hover:border-primary/30 transition-all duration-300">
                              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-text-primary">{step?.payload?.title}</h3>
                              <p className="text-sm md:text-base text-text-secondary leading-relaxed"
                                dangerouslySetInnerHTML={{
                                  __html: step?.payload?.details
                                }}
                              ></p>
                            </Card>)
                          ) : (
                            step?.payload?.year &&
                            (<Card className="p-4 md:p-6 transition-all duration-300" noBaseStyles={true}>
                              <div className="text-2xl md:text-3xl font-bold text-text-primary text-right">{step?.payload?.year}</div>
                            </Card>)
                          )}
                        </div>
                      </div>

                      {/* Mobile Layout */}
                      <div className="md:hidden flex items-start gap-4">
                        {/* Timeline Dot */}
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary border-4 border-bg-muted z-10 mt-1"></div>

                        {/* Content */}
                        <div className="flex-1 space-y-3">
                          {step?.payload?.year &&
                            <Card className="p-4" noBaseStyles={true}>
                              <div className="text-xl font-bold text-text-primary">{step?.payload?.year}</div>
                            </Card>
                          }
                          {(step?.payload?.title || step?.payload?.details) &&
                            <Card className="p-4 md:p-6 lg:p-8 hover border-2 border-border/50 hover:border-primary/30 transition-all duration-300">
                              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-text-primary">{step?.payload?.title}</h3>
                              <p className="text-sm md:text-base text-text-secondary leading-relaxed"
                                dangerouslySetInnerHTML={{
                                  __html: step?.payload?.details
                                }}
                              ></p>
                            </Card>}
                        </div>
                      </div>
                    </div >
                  }
                </>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
