import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { MarkedText } from '../ui/MarkedText';

const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'NAMTech Solutions was established in Navsari with a vision to deliver innovative software solutions.',
  },
  {
    year: '2021',
    title: 'First 50 Projects',
    description: 'Successfully delivered 50+ projects, building a strong reputation for quality and reliability.',
  },
  {
    year: '2022',
    title: 'Team Expansion',
    description: 'Grew to 50+ expert engineers, expanding our capabilities across multiple technologies.',
  },
  {
    year: '2023',
    title: '150+ Projects',
    description: 'Reached a milestone of 150+ completed projects with 4.9/5 client satisfaction rating.',
  },
  {
    year: '2024',
    title: 'Global Recognition',
    description: 'Expanded services globally, serving clients across different industries and continents.',
  },
  {
    year: '2025',
    title: 'Innovation Leader',
    description: 'Recognized as a leader in cutting-edge software development and digital transformation.',
  },
];

export function CompanyMilestones() {
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
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-center gap-4">
                    {/* Left Side - Year Badge (even) or Content (odd) */}
                    <div className={`w-[calc(50%-20px)] flex ${isEven ? 'justify-end pr-4' : 'justify-start pl-4'}`}>
                      {isEven ? (
                        <Card className="p-4 md:p-6 border-2 border-primary/30 bg-primary/5 hover:bg-primary/10 transition-all duration-300">
                          <div className="text-2xl md:text-3xl font-bold text-primary text-right">{milestone.year}</div>
                        </Card>
                      ) : (
                        <Card className="p-4 md:p-6 lg:p-8 hover border-2 border-border/50 hover:border-primary/30 transition-all duration-300">
                          <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-text-primary">{milestone.title}</h3>
                          <p className="text-sm md:text-base text-text-secondary leading-relaxed">{milestone.description}</p>
                        </Card>
                      )}
                    </div>

                    {/* Center Timeline Dot */}
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary border-4 border-bg-main z-10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>

                    {/* Right Side - Content (even) or Year Badge (odd) */}
                    <div className={`w-[calc(50%-20px)] flex ${!isEven ? 'justify-start pl-4' : 'justify-end pr-4'}`}>
                      {isEven ? (
                        <Card className="p-4 md:p-6 lg:p-8 hover border-2 border-border/50 hover:border-primary/30 transition-all duration-300">
                          <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-text-primary">{milestone.title}</h3>
                          <p className="text-sm md:text-base text-text-secondary leading-relaxed">{milestone.description}</p>
                        </Card>
                      ) : (
                        <Card className="p-4 md:p-6 border-2 border-primary/30 bg-primary/5 hover:bg-primary/10 transition-all duration-300">
                          <div className="text-2xl md:text-3xl font-bold text-primary text-left">{milestone.year}</div>
                        </Card>
                      )}
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start gap-4">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary border-4 border-bg-muted z-10 mt-1"></div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <Card className="p-4 border-2 border-primary/30 bg-primary/5">
                        <div className="text-xl font-bold text-primary">{milestone.year}</div>
                      </Card>
                      <Card className="p-4 hover border-2 border-border/50 hover:border-primary/30 transition-all duration-300">
                        <h3 className="text-lg font-semibold mb-2 text-text-primary">{milestone.title}</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">{milestone.description}</p>
                      </Card>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
