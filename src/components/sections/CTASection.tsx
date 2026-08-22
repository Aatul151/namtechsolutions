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
        <div
          className="relative overflow-hidden rounded-[2rem] px-8 py-16 text-center text-white md:px-16 md:py-20"
          style={{
            background:
              'linear-gradient(135deg, var(--color-primary) 0%, color-mix(in srgb, var(--color-primary) 55%, var(--color-secondary)) 100%)',
          }}
        >
          <div className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-secondary/40 blur-3xl" />

          <div className="relative z-10">
            <MarkedText
              as="h2"
              text="Ready to build something [[useful]]?"
              className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl"
              gradientClassName="from-white to-amber-200"
            />
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/85">
              Tell us what you are building. We’ll help you choose the right approach
              and start with a clear plan.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="!bg-white !text-primary hover:!bg-white/90"
              onClick={() => navigate('/contact')}
            >
              Talk to us
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
