import { useRef } from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { MarkedText } from '../ui/MarkedText';
import { useComponyDetail } from '../../context/componyContext';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { ServiceLogo } from '../ui/ServiceLogo';

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

        {/* Scrollable Cards Container */}
        <div className="relative group/container px-4 md:px-0">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory py-10 hide-scrollbar"
          >
            {our_services?.services?.map((service: any, index: number) => (
              <div
                key={index}
                className="relative flex h-[420px] w-80 flex-shrink-0 snap-center cursor-pointer flex-col overflow-hidden rounded-[2rem] 
                   border border-zinc-200/60 dark:border-white/5 
                   bg-white/70 dark:bg-zinc-900/40 backdrop-blur-xl
                   shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]
                   transition-all duration-500 ease-out 
                   hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] 
                   dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] group"
              >
                {/* Glow Effect Background */}
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/5 blur-[80px] transition-opacity group-hover:opacity-100 opacity-0" />

                {/* Top image/icon section - Made more minimalist */}
                <div className="relative flex h-32 items-center justify-center overflow-hidden border-b border-zinc-100/50 dark:border-white/5 bg-zinc-50/50 dark:bg-white/[0.02]">
                  <ServiceLogo service={service} />
                </div>

                {/* Text Content */}
                <div className="flex flex-1 flex-col px-6 py-6">
                  <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                    {service?.Title}
                  </h3>

                  <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {service?.description}
                  </p>
                </div>

                {/* Technology badges - Re-styled for premium feel */}
                <div className="mb-6 flex flex-wrap gap-2 px-6">
                  {service?.technologis_ref?.slice(0, 3)?.map((tech: any, tidx: number) => (
                    <span
                      key={tidx}
                      className="rounded-lg border border-zinc-200/50 dark:border-white/5 bg-zinc-100/50 dark:bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
                    >
                      {tech?.name}
                    </span>
                  ))}
                  {service?.technologis_ref?.length > 3 && (
                    <span className="text-[10px] font-bold text-primary/60 mt-1">+{service?.technologis_ref?.length - 3}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons - Hidden on mobile, visible on group hover */}
          <div className="hidden md:block opacity-0 group-hover/container:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => scroll("left")}
              className="absolute top-1/2 -left-6 -translate-y-1/2 rounded-full border border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 p-3 shadow-xl backdrop-blur-md transition-all hover:bg-primary hover:text-white hover:scale-110 active:scale-90"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="absolute top-1/2 -right-6 -translate-y-1/2 rounded-full border border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 p-3 shadow-xl backdrop-blur-md transition-all hover:bg-primary hover:text-white hover:scale-110 active:scale-90"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}