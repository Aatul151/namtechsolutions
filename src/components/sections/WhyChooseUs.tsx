import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { MarkedText } from '../ui/MarkedText';
import { useComponyDetail } from '../../context/componyContext';

export function WhyChooseUs() {
  const { componyProfile } = useComponyDetail();
  const { why_us } = componyProfile

  return (
    <Section id="why-us" py="xl">
      <Container>
        <div className="text-center mb-16">
          <MarkedText
            as="h2"
            text="Why Choose [[Us]]"
          />
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            We combine technical excellence with business acumen to deliver exceptional results
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {why_us?.map((feature: any, idx: number) => (
            <div
              key={idx}
              className="group flex items-start gap-4 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* icon */}
              {feature?.icon && (
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-primary/10 bg-primary/5 dark:border-primary/20 dark:bg-primary/10 transition-all duration-300 group-hover:scale-105">
                  <img
                    src={feature.icon}
                    alt="icon"
                    className="h-6 w-6 object-contain"
                  />
                </div>
              )}

              {/* content */}
              <div className="relative pl-5">
                {/* elegant divider */}
                <div className="absolute left-0 top-1 h-full w-px bg-gradient-to-b from-primary/40 via-zinc-200 to-transparent dark:via-white/10" />

                {feature?.title && (
                  <h3 className="mb-2 text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
                    {feature.title}
                  </h3>
                )}

                {feature?.description && (
                  <p
                    className="text-sm leading-7 text-zinc-600 dark:text-zinc-400"
                    dangerouslySetInnerHTML={{
                      __html: feature.description,
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
