import { useEffect, useState } from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { MarkedText } from '../ui/MarkedText';
import { useComponyDetail } from '../../context/componyContext';

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

export function HomeWhyUs() {
  const { componyProfile } = useComponyDetail();
  const items = componyProfile?.why_us ?? [];
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!items.length || paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % items.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, [items.length, paused]);

  if (!items.length) return null;

  const current = items[active] ?? items[0];
  const count = items.length;

  return (
    <Section py="xl">
      <Container>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Why NAMTech
            </p>
            <MarkedText as="h2" text="A process you can [[trust]]" />
          </div>
        </div>

        <div
          className="relative mx-auto hidden aspect-square w-full max-w-[680px] lg:block"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden>
            <defs>
              <linearGradient id="processStroke" x1="0" y1="0" x2="100" y2="100">
                <stop stopColor="var(--color-primary)" />
                <stop offset="1" stopColor="var(--color-secondary)" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="34"
              fill="none"
              stroke="var(--color-primary)"
              strokeOpacity="0.12"
              strokeWidth="0.7"
            />
            <circle
              className="process-ring"
              cx="50"
              cy="50"
              r="34"
              fill="none"
              stroke="url(#processStroke)"
              strokeWidth="0.9"
              strokeDasharray="7 9"
              strokeLinecap="round"
            />
          </svg>

          <div className="absolute left-1/2 top-1/2 z-10 flex h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-border bg-bg-card px-8 text-center shadow-strong">
            <span className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Step {String(active + 1).padStart(2, '0')}
            </span>
            {current?.icon && (
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <img src={current.icon} alt="" className="h-6 w-6 object-contain" />
              </div>
            )}
            <h3 className="text-lg font-semibold text-text-primary">{current?.title}</h3>
            {current?.description && (
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {stripHtml(current.description)}
              </p>
            )}
          </div>

          {items.map((item: any, index: number) => {
            const angle = (index / count) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + 34 * Math.cos(angle);
            const y = 50 + 34 * Math.sin(angle);
            const selected = index === active;

            return (
              <button
                key={item.title || index}
                type="button"
                onClick={() => setActive(index)}
                className={`absolute z-20 flex w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center transition-transform duration-300 ${
                  selected ? 'scale-110' : 'hover:scale-105'
                }`}
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <span
                  className={`flex h-16 w-16 items-center justify-center rounded-full border-2 bg-bg-card shadow-strong ${
                    selected
                      ? 'border-secondary'
                      : 'border-primary/20'
                  }`}
                >
                  {item?.icon ? (
                    <img src={item.icon} alt="" className="h-7 w-7 object-contain" />
                  ) : (
                    <span className="text-sm font-bold text-primary">{index + 1}</span>
                  )}
                </span>
                <span className={`mt-2 text-xs font-semibold ${selected ? 'text-primary' : 'text-text-primary'}`}>
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        <ol className="relative mx-auto max-w-xl space-y-6 lg:hidden">
          <span className="absolute bottom-4 left-7 top-4 w-px bg-gradient-to-b from-primary to-secondary" />
          {items.map((item: any, index: number) => (
            <li key={item.title || index} className="relative flex gap-5 pl-2">
              <span className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary/20 bg-bg-card shadow-soft">
                {item?.icon ? (
                  <img src={item.icon} alt="" className="h-6 w-6 object-contain" />
                ) : (
                  <span className="text-sm font-bold text-primary">{index + 1}</span>
                )}
              </span>
              <div className="rounded-2xl border border-border bg-bg-card p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  Step {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-1 text-base font-semibold text-text-primary">{item.title}</h3>
                {item?.description && (
                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    {stripHtml(item.description)}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
