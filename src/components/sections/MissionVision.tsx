import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { MarkedText } from '../ui/MarkedText';
import detail from '../../assets/detail.json'


export function MissionVision() {
  const { profile } = detail

  return (
    <>
      {(profile?.mission || profile?.vision) &&
        <Section py="xl" >
          <Container>
            <>
              <div className="text-center mb-16">
                <MarkedText
                  as="h2"
                  text="Our [[Mission]] & [[Vision]]"
                />
                <p className="text-xl text-text-secondary max-w-2xl mx-auto mt-4">
                  Driving innovation and excellence in software development
                </p>
              </div>

              <div className="relative grid gap-12 md:grid-cols-2">
                {/* center divider for desktop */}
                <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-zinc-200 dark:bg-white/10 md:block" />

                {/* Mission */}
                {profile?.mission && (
                  <div className="relative md:pr-10">
                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <svg
                          className="h-7 w-7"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>

                      <h3 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        Our Mission
                      </h3>
                    </div>

                    <p
                      className="text-base leading-8 text-zinc-600 dark:text-zinc-400"
                      dangerouslySetInnerHTML={{
                        __html: profile.mission,
                      }}
                    />
                  </div>
                )}

                {/* Vision */}
                {profile?.vision && (
                  <div className="relative md:pl-10">
                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                        <svg
                          className="h-7 w-7"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>

                      <h3 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        Our Vision
                      </h3>
                    </div>

                    <p
                      className="text-base leading-8 text-zinc-600 dark:text-zinc-400"
                      dangerouslySetInnerHTML={{
                        __html: profile.vision,
                      }}
                    />
                  </div>
                )}
              </div>
            </>
          </Container>
        </Section>
      }
    </>
  );
}
