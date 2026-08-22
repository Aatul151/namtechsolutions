import { useMemo } from 'react';
import { useComponyDetail } from '../../context/componyContext';

const PREFERRED_LOGOS = [
  'React.js',
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'AWS',
  'Docker',
  'MongoDB',
  'Figma',
  'React Native',
  'NestJS',
];

const LOGO_SLOTS = [
  { top: '4%', left: '6%', delay: '0s', duration: '5.5s' },
  { top: '2%', left: '70%', delay: '0.4s', duration: '6.2s' },
  { top: '36%', left: '0%', delay: '0.8s', duration: '5.8s' },
  { top: '26%', left: '84%', delay: '1.1s', duration: '6.6s' },
  { top: '76%', left: '6%', delay: '0.2s', duration: '5.4s' },
  { top: '80%', left: '76%', delay: '0.9s', duration: '6s' },
  { top: '56%', left: '0%', delay: '1.4s', duration: '6.8s' },
  { top: '60%', left: '84%', delay: '0.6s', duration: '5.2s' },
];

export function HeroVisual() {
  const { componyProfile } = useComponyDetail();

  const logos = useMemo(() => {
    const listed = componyProfile?.our_services?.technologies ?? [];
    const nested = (componyProfile?.our_services?.services ?? []).flatMap(
      (service: any) => service?.technologis_ref ?? [],
    );
    const unique: { name: string; logo: string }[] = [];
    const seen = new Set<string>();

    const normalize = (name: string) =>
      name.replace(/\.js$/i, '').replace(/\s+/g, ' ').trim().toLowerCase();

    for (const item of [...listed, ...nested]) {
      const name = item?.name;
      const logo = item?.logo;
      if (!name || !logo) continue;
      const key = normalize(name);
      if (seen.has(key)) continue;
      seen.add(key);
      unique.push({ name, logo });
    }

    unique.sort((a, b) => {
      const ai = PREFERRED_LOGOS.indexOf(a.name);
      const bi = PREFERRED_LOGOS.indexOf(b.name);
      return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    });

    return unique.slice(0, LOGO_SLOTS.length);
  }, [componyProfile]);

  return (
    <div className="hero-visual relative mx-auto aspect-square w-full max-w-[560px]" aria-hidden>
      <svg
        viewBox="0 0 560 520"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heroScreen" x1="110" y1="80" x2="390" y2="270" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--color-primary)" />
            <stop offset="1" stopColor="color-mix(in srgb, var(--color-primary) 70%, var(--color-secondary))" />
          </linearGradient>
          <linearGradient id="heroPhone" x1="360" y1="180" x2="500" y2="460" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--color-primary)" />
            <stop offset="1" stopColor="color-mix(in srgb, var(--color-primary) 55%, var(--color-secondary))" />
          </linearGradient>
          <linearGradient id="heroAi" x1="400" y1="36" x2="520" y2="150" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--color-primary)" />
            <stop offset="1" stopColor="var(--color-secondary)" />
          </linearGradient>
          <filter id="heroGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle className="hero-orbit-ring" cx="270" cy="255" r="214" stroke="var(--color-primary)" strokeOpacity="0.18" strokeWidth="1.5" strokeDasharray="6 10" />
        <circle className="hero-orbit-ring hero-orbit-ring-slow" cx="270" cy="255" r="178" stroke="var(--color-secondary)" strokeOpacity="0.28" strokeWidth="1" strokeDasharray="3 8" />

        <g className="hero-float-main">
          <rect x="78" y="292" width="318" height="18" rx="6" className="fill-zinc-300 dark:fill-zinc-600" />
          <path d="M62 310h350c8 0 14 6 14 14v18H48v-18c0-8 6-14 14-14z" className="fill-zinc-200 dark:fill-zinc-700" />
          <rect x="268" y="318" width="38" height="6" rx="3" className="fill-zinc-400 dark:fill-zinc-500" />

          <rect x="88" y="62" width="298" height="232" rx="18" fill="var(--color-primary)" />
          <rect x="100" y="74" width="274" height="196" rx="10" fill="url(#heroScreen)" />
          <circle cx="237" cy="68" r="2.5" fill="#64748b" />

          <rect className="hero-code" x="118" y="96" width="88" height="8" rx="4" fill="#60a5fa" style={{ animationDelay: '0s' }} />
          <rect className="hero-code" x="214" y="96" width="52" height="8" rx="4" fill="#a78bfa" style={{ animationDelay: '0.15s' }} />
          <rect className="hero-code" x="118" y="116" width="128" height="8" rx="4" fill="#34d399" style={{ animationDelay: '0.3s' }} />
          <rect className="hero-code" x="118" y="136" width="70" height="8" rx="4" fill="#fbbf24" style={{ animationDelay: '0.45s' }} />
          <rect className="hero-code" x="196" y="136" width="96" height="8" rx="4" fill="#fb7185" style={{ animationDelay: '0.6s' }} />
          <rect className="hero-code" x="118" y="156" width="154" height="8" rx="4" fill="#60a5fa" style={{ animationDelay: '0.75s' }} />
          <rect className="hero-code" x="118" y="176" width="48" height="8" rx="4" fill="#a78bfa" style={{ animationDelay: '0.9s' }} />
          <rect className="hero-code" x="174" y="176" width="110" height="8" rx="4" fill="#34d399" style={{ animationDelay: '1.05s' }} />
          <rect x="118" y="204" width="238" height="48" rx="10" fill="#ffffff" fillOpacity="0.08" />
          <path d="M132 236l28-16 22 10 36-22 40 18" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none" className="hero-chart-line" />
        </g>

        <g className="hero-float-phone">
          <rect x="348" y="188" width="132" height="268" rx="28" fill="url(#heroPhone)" />
          <rect x="356" y="204" width="116" height="228" rx="18" fill="color-mix(in srgb, var(--color-primary) 82%, white)" fillOpacity="0.22" />
          <rect x="396" y="210" width="36" height="6" rx="3" fill="#ffffff" fillOpacity="0.35" />
          <rect x="372" y="230" width="84" height="44" rx="12" fill="var(--color-secondary)" fillOpacity="0.95" />
          <rect x="372" y="284" width="38" height="38" rx="10" fill="#ffffff" fillOpacity="0.14" stroke="#ffffff" strokeOpacity="0.25" />
          <rect x="418" y="284" width="38" height="38" rx="10" fill="#ffffff" fillOpacity="0.14" stroke="#ffffff" strokeOpacity="0.25" />
          <rect x="372" y="332" width="38" height="38" rx="10" fill="#ffffff" fillOpacity="0.14" stroke="#ffffff" strokeOpacity="0.25" />
          <rect x="418" y="332" width="38" height="38" rx="10" fill="#ffffff" fillOpacity="0.14" stroke="#ffffff" strokeOpacity="0.25" />
          <rect x="390" y="418" width="48" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.4" />
        </g>

        <g className="hero-float-ai" filter="url(#heroGlow)">
          <rect x="402" y="42" width="108" height="108" rx="28" fill="url(#heroAi)" />
          <circle cx="456" cy="84" r="16" fill="#fff" fillOpacity="0.18" />
          <circle cx="438" cy="102" r="8" fill="#fff" fillOpacity="0.22" />
          <circle cx="474" cy="98" r="6" fill="#fff" fillOpacity="0.22" />
          <path d="M438 102l18-18 18 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
          <text x="456" y="132" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700" fontFamily="system-ui">
            AI
          </text>
          <path d="M488 54l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="var(--color-secondary)" className="hero-spark" />
        </g>
      </svg>

      {logos.map((tech, index) => (
        <div
          key={tech.name}
          className={`hero-logo-chip absolute z-10 h-12 w-12 items-center justify-center rounded-2xl border border-border bg-bg-main p-2 shadow-strong sm:h-14 sm:w-14 ${
            index > 4 ? 'hidden sm:flex' : 'flex'
          }`}
          style={{
            top: LOGO_SLOTS[index].top,
            left: LOGO_SLOTS[index].left,
            animationDelay: LOGO_SLOTS[index].delay,
            animationDuration: LOGO_SLOTS[index].duration,
          }}
          title={tech.name}
        >
          <img src={tech.logo} alt={tech.name} className="h-full w-full object-contain" />
        </div>
      ))}
    </div>
  );
}
