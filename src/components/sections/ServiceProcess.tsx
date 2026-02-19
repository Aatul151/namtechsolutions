import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { MarkedText } from '../ui/MarkedText';

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals, target audience, and project requirements through detailed consultations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    description: 'Our design team creates wireframes, mockups, and interactive prototypes to visualize your solution before development.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'We build your solution using agile methodology with continuous testing, code reviews, and regular progress updates.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Deployment & Launch',
    description: 'We handle deployment, configuration, and launch preparation to ensure a smooth go-live experience.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    step: '05',
    title: 'Support & Maintenance',
    description: 'Ongoing support, updates, and maintenance to keep your solution running smoothly and up-to-date.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export function ServiceProcess() {
  return (
    <Section py="xl">
      <Container>
        <div className="text-center mb-16">
          <MarkedText
            as="h2"
            text="Our [[Process]]"
          />
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mt-4">
            A proven methodology that ensures successful project delivery
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-20" style={{ top: '60px' }}></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Connecting Line - Mobile/Tablet */}
                {index < processSteps.length - 1 && (
                  <div className="lg:hidden absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-secondary opacity-20 -z-10"></div>
                )}

                <Card className="p-4 md:p-6 hover border-2 border-border/50 hover:border-primary/30 transition-all duration-300 text-center relative">
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-base md:text-lg shadow-lg z-10">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="mt-6 md:mt-4 mb-3 md:mb-4 flex justify-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-text-primary">{step.title}</h3>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
