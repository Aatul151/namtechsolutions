import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { MarkedText } from '../ui/MarkedText';

export function CTASection() {
  return (
    <Section id="contact" py="xl">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 border border-border p-12 md:p-16 text-center">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
          </div>

          <div className="relative z-10">
            <MarkedText
              as="h2"
              text="Ready to Build Something [[Amazing?]]"
              className="text-4xl md:text-5xl font-bold mb-6"
            />
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your ideas into reality. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Call
              </Button>
            </div>
            <p className="text-sm text-text-secondary mt-6">
              <span className="inline-flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Response within 5 minutes
              </span>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
