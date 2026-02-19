import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { MarkedText } from '../ui/MarkedText';

export function CompanyLocation() {
  return (
    <Section py="xl" className="bg-bg-muted">
      <Container>
        <div className="text-center mb-16">
          <MarkedText
            as="h2"
            text="Get in [[Touch]]"
          />
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mt-4">
            We're here to help you transform your ideas into reality
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Location */}
          <Card className="p-8 hover border-2 border-border/50 hover:border-primary/30 transition-all duration-300 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-text-primary">Location</h3>
            <p className="text-text-secondary">
              Navsari, Gujarat<br />
              India
            </p>
          </Card>

          {/* Email */}
          <Card className="p-8 hover border-2 border-border/50 hover:border-secondary/30 transition-all duration-300 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-text-primary">Email</h3>
            <p className="text-text-secondary">
              info@namtechsolutions.com<br />
              <span className="text-sm">Response within 5 minutes</span>
            </p>
          </Card>

          {/* Phone */}
          <Card className="p-8 hover border-2 border-border/50 hover:border-primary/30 transition-all duration-300 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-text-primary">Phone</h3>
            <p className="text-text-secondary">
              +1 (555) 123-4567<br />
              <span className="text-sm">24/7 Support Available</span>
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
