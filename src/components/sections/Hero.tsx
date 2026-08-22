import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { MarkedText } from '../ui/MarkedText';
import { useNavigate } from 'react-router-dom';
import { useComponyDetail } from '../../context/componyContext';
import { HeroVisual } from './HeroVisual';

function formatStat(value: number | string) {
  const n = Number(value);
  if (Number.isNaN(n)) return String(value);
  if (!Number.isInteger(n)) return String(n);
  return `${n}+`;
}

export function Hero() {
  const navigate = useNavigate();
  const { componyProfile } = useComponyDetail();
  const { profile } = componyProfile;
  const stats = profile?.statistics?.slice(0, 4) ?? [];

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,63,210,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,63,210,0.06)_1px,transparent_1px)] bg-[size:72px_72px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]" />
        <div className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl dark:bg-primary/30" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/15 blur-3xl" />
      </div>

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="max-w-2xl">
            {profile?.slogan && (
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-card/80 px-3 py-1.5 text-xs font-medium tracking-wide text-text-secondary backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {profile.slogan}
              </div>
            )}

            {profile?.short_title && (
              <MarkedText
                as="h1"
                text={profile.short_title}
                className="text-[2.5rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl xl:text-[4.25rem]"
              />
            )}

            {profile?.short_description && (
              <p className="mt-6 max-w-xl text-base leading-8 text-text-secondary sm:text-lg">
                {profile.short_description}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" onClick={() => navigate('/contact')}>
                Start a project
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/projects')}>
                View our work
              </Button>
            </div>

            {stats.length > 0 && (
              <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-4">
                {stats.map((stat: any, idx: number) => (
                  <div key={idx}>
                    <p className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
                      {formatStat(stat?.number)}
                    </p>
                    <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-text-secondary">
                      {stat?.title}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
