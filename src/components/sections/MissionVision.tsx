import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { MarkedText } from '../ui/MarkedText';
import { useComponyDetail } from '../../context/componyContext';

export function MissionVision() {
  const { componyProfile } = useComponyDetail();  
  return (
    <Section py="xl" >
      <Container>
        <div className="text-center mb-16">
          <MarkedText
            as="h2"
            text="Our [[Mission]] & [[Vision]]"
          />
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mt-4">
            Driving innovation and excellence in software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <Card className="p-8 md:p-10 hover border-2 border-border/50 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary">Our Mission</h3>
            </div>
            <p className="text-text-secondary text-lg leading-relaxed"
            dangerouslySetInnerHTML={{
              __html : componyProfile?.mission
            }}
            >
            </p>
          </Card>

          {/* Vision */}
          <Card className="p-8 md:p-10 hover border-2 border-border/50 hover:border-secondary/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary">Our Vision</h3>
            </div>
            <p className="text-text-secondary text-lg leading-relaxed"
              dangerouslySetInnerHTML={{
                __html : componyProfile?.vision
              }}
             >
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
