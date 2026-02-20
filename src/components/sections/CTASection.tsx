import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { MarkedText } from '../ui/MarkedText';
import { useNavigate } from 'react-router-dom';

export function CTASection() {
  const navigate = useNavigate();
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
              <Button variant="primary" size="lg" onClick={() => navigate('/contact')}>
                Contact now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
