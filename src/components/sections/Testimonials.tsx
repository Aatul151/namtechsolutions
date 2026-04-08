import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { MarkedText } from '../ui/MarkedText';
import detail from '../../assets/detail.json';

export function Testimonials() {
  const { testimonials } = detail;

  return (
    <>
      {testimonials.length > 0 &&
        <Section id="testimonials" py="xl" className="bg-bg-muted">
          <Container>
            <div className="text-center mb-16">
              <MarkedText
                as="h2"
                text="What Our [[Clients Say]]"
              />
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Don't just take our word for it - hear from businesses we've helped succeed
              </p>
            </div>

            <div className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {testimonials?.map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative pl-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* modern vertical accent */}
                  <div className="absolute left-0 top-0 h-full w-[2px] rounded-full bg-gradient-to-b from-primary via-secondary/50 to-transparent" />

                  {/* top row */}
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 dark:border-white/10 bg-gradient-to-br from-primary/10 to-secondary/10 text-sm font-bold text-primary shadow-sm">
                      {testimonial?.client_name?.charAt(4)}
                    </div>

                    <div>
                      {testimonial?.client_name && (
                        <h4 className="font-semibold tracking-tight text-zinc-900 dark:text-white">
                          {testimonial.client_name}
                        </h4>
                      )}
                      {testimonial?.designation && (
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                          {testimonial.designation}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* rating */}
                  {testimonial?.rating && (
                    <div className="mb-4 flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-4 w-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  )}

                  {/* quote */}
                  {testimonial?.message && (
                    <p className="text-[15px] leading-8 text-zinc-600 dark:text-zinc-300">
                      {testimonial.message}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </Section>
      }
    </>
  );
}
