import { Container } from '../ui/Container';
import { useComponyDetail } from '../../context/componyContext';

function formatStat(value: number | string) {
  const n = Number(value);
  if (Number.isNaN(n)) return String(value);
  if (!Number.isInteger(n)) return String(n);
  return `${n}+`;
}

export function Stats() {
  const { componyProfile } = useComponyDetail();
  const stats = componyProfile?.profile?.statistics ?? [];

  if (!stats.length) return null;

  return (
    <section
      className="relative overflow-hidden py-16 text-white"
      style={{
        background:
          'linear-gradient(135deg, var(--color-primary) 0%, color-mix(in srgb, var(--color-primary) 62%, var(--color-secondary)) 100%)',
      }}
    >
      <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-secondary/30 blur-3xl" />
      <Container className="relative">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat: any, index: number) => (
            <div key={index} className="text-center lg:text-left">
              <p className="text-3xl font-semibold tracking-tight md:text-4xl">
                {formatStat(stat.number)}
              </p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/75">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
