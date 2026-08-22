import { useMemo } from 'react';
import { useComponyDetail } from '../../context/componyContext';

type Tech = { name: string; logo: string };

const SIZE_CLASSES = [
  'h-6 w-6 md:h-7 md:w-7',
  'h-10 w-10 md:h-12 md:w-12',
  'h-8 w-8 md:h-9 md:w-9',
  'h-14 w-14 md:h-16 md:w-16',
  'h-7 w-7 md:h-8 md:w-8',
  'h-12 w-12 md:h-14 md:w-14',
  'h-9 w-9 md:h-10 md:w-10',
  'h-5 w-5 md:h-6 md:w-6',
  'h-16 w-16 md:h-20 md:w-20',
  'h-8 w-8 md:h-9 md:w-9',
];

const OFFSET_CLASSES = [
  'mt-0',
  'mt-1 md:mt-2',
  '-mt-1',
  'mt-2 md:mt-3',
  '-mt-0.5',
  'mt-1',
  '-mt-1 md:-mt-2',
  'mt-0.5',
];

function techKey(name: string) {
  return name.toLowerCase().replace(/[\s._-]+/g, '');
}

function collectTechnologies(profile: any): Tech[] {
  const byKey = new Map<string, Tech>();
  const add = (item: any) => {
    if (!item?.logo || !item?.name) return;
    const key = techKey(item.name);
    if (key === 'reactthreefiber' || key === 'sql') return;
    if (!byKey.has(key)) {
      byKey.set(key, { name: item.name, logo: item.logo });
    }
  };

  profile?.our_services?.technologies?.forEach(add);
  profile?.our_services?.services?.forEach((service: any) => {
    service?.technologis_ref?.forEach(add);
  });

  return Array.from(byKey.values());
}

export function TechnologySlider() {
  const { componyProfile } = useComponyDetail();
  const technologies = useMemo(
    () => collectTechnologies(componyProfile),
    [componyProfile],
  );

  if (!technologies.length) return null;

  return (
    <section className="relative w-full overflow-hidden border-y border-border/30 bg-bg-main">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(15_63_210/0.06),transparent_62%)]" />

      <div className="relative flex flex-wrap items-center justify-center gap-x-4 gap-y-4 px-4 py-5 sm:gap-x-5 sm:gap-y-5 sm:px-6 sm:py-6 md:px-8 md:py-7">
        {technologies.map((tech, index) => (
          <figure
            key={`${tech.logo}-${index}`}
            className={`tech-mosaic-item group relative flex items-center justify-center ${OFFSET_CLASSES[index % OFFSET_CLASSES.length]}`}
            style={{ animationDelay: `${(index % 9) * 0.28}s` }}
          >
            <img
              src={tech.logo}
              alt={tech.name}
              title={tech.name}
              className={`${SIZE_CLASSES[index % SIZE_CLASSES.length]} object-contain opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100`}
              onError={(event) => {
                const target = event.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <figcaption className="pointer-events-none absolute -bottom-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-bg-card px-1.5 py-0.5 text-[9px] font-semibold text-text-primary opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100">
              {tech.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
