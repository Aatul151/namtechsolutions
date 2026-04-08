import { useRef } from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { MarkedText } from '../ui/MarkedText';
import detail from '../../assets/detail.json';

export function Services() {
  const { our_services } = detail;
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
            {our_services.services.map((service: any, index: number) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-[380px] snap-center bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer flex flex-col"
              >
                {/* Top image/icon */}
                <div className="h-28 flex items-center justify-center bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-t-2xl">
                  {service.image ? (
                    <img src={service.image} alt={service.Title} className="w-16 h-16 object-contain" />
                  ) : (
                    <div className="w-16 h-16 flex items-center justify-center bg-primary/20 text-primary rounded-full text-3xl font-bold">
                      {service.Title.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-center mt-4 mb-2 text-text-primary px-4">
                  {service.Title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-center px-4 flex-1">
                  {service.description}
                </p>

                {/* Technology badges */}
                <div className="flex flex-wrap justify-center gap-2 mt-4 mb-4 px-4">
                  {service.technologis_ref?.map((tech: any, tidx: number) => (
                    <span
                      key={tidx}
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-primary text-sm font-medium"
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
            onClick={() => scroll('left')}
            className="absolute top-1/2 -left-3 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </Container>
    </Section>
  );
}