import { useRef } from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { MarkedText } from '../ui/MarkedText';
import { useComponyDetail } from '../../context/componyContext';

export function Services() {
  const { componyProfile } = useComponyDetail();
  const { our_services } = componyProfile;
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 350;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <Section id="services" py="xl" className="relative overflow-hidden">
      <Container>
        {/* Heading */}
        <div className="text-center mb-16">
          <MarkedText as="h2" text="Our [[Services]]" />
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Comprehensive software development solutions tailored to your business needs
          </p>
        </div>

        {/* Scrollable Cards */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-6 hide-scrollbar"
          >
            {our_services?.services.map((service: any, index: number) => (
              <div
                key={index}
                className="flex h-[390px] w-80 flex-shrink-0 snap-center cursor-pointer flex-col overflow-hidden rounded-3xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/80 shadow-sm dark:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Top image/icon */}
                <div className="flex h-28 items-center justify-center bg-zinc-50 dark:bg-zinc-800/60 border-b border-zinc-100 dark:border-white/5">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.Title}
                      className="h-16 w-16 object-contain"
                    />
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl font-bold text-primary">
                      {service.Title.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="mt-5 px-4 text-center text-xl font-semibold text-zinc-900 dark:text-white">
                  {service.Title}
                </h3>

                {/* Description */}
                <p className="flex-1 px-5 pt-2 text-center text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>

                {/* Technology badges */}
                <div className="mb-4 mt-3 flex flex-wrap justify-center gap-1.5 px-4">
                  {service.technologis_ref?.map((tech: any, tidx: number) => (
                    <span
                      key={tidx}
                      className="rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-[11px] font-medium text-zinc-700 dark:text-zinc-300"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute top-1/2 -left-2 -translate-y-1/2 rounded-full border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 p-2 shadow-md transition hover:bg-primary hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute top-1/2 -right-2 -translate-y-1/2 rounded-full border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 p-2 shadow-md transition hover:bg-primary hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </Container>
    </Section>
  );
}