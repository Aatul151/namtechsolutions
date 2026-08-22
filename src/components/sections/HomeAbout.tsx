import { useNavigate } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { MarkedText } from '../ui/MarkedText';
import { Button } from '../ui/Button';
import { useComponyDetail } from '../../context/componyContext';

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function formatStat(value: number | string) {
  const n = Number(value);
  if (Number.isNaN(n)) return String(value);
  if (!Number.isInteger(n)) return String(n);
  return `${n}+`;
}

export function HomeAbout() {
  const navigate = useNavigate();
  const { componyProfile } = useComponyDetail();
  const { profile, about } = componyProfile;
  const strengths = about?.strengths?.slice(0, 4) ?? [];
  const badge = profile?.achievement?.[0];
  const highlights = profile?.statistics?.slice(0, 3) ?? [];

  if (!profile?.about && strengths.length === 0) return null;

  return (
    <Section py="xl" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8" />

      <Container className="relative">
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div className="flex flex-col rounded-[2rem] border border-border bg-bg-card p-8 shadow-soft md:p-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Who we are
            </p>
            <MarkedText
              as="h2"
              text="Software built around [[real business needs]]"
              className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl"
            />

            {profile?.about && (
              <div
                className="ckeditor-content flex-1 text-base leading-7 text-text-secondary"
                dangerouslySetInnerHTML={{ __html: profile.about }}
              />
            )}

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-text-secondary">
              {profile?.scroller?.title && (
                <span className="rounded-full border border-border bg-bg-main px-3 py-1.5">
                  {profile.scroller.title}
                  {profile.scroller.subTitle ? ` · ${profile.scroller.subTitle}` : ''}
                </span>
              )}
              {profile?.address && (
                <span className="rounded-full border border-border bg-bg-main px-3 py-1.5">
                  Navsari, Gujarat
                </span>
              )}
              {profile?.email && (
                <span className="rounded-full border border-border bg-bg-main px-3 py-1.5">
                  {profile.email}
                </span>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="primary" onClick={() => navigate('/about')}>
                Read our story
              </Button>
              <Button variant="outline" onClick={() => navigate('/contact')}>
                Talk to us
              </Button>
            </div>
          </div>

          <div
            className="relative flex flex-col overflow-hidden rounded-[2rem] p-8 text-white md:p-10"
            style={{
              background:
                'linear-gradient(160deg, var(--color-primary) 0%, color-mix(in srgb, var(--color-primary) 58%, var(--color-secondary)) 100%)',
            }}
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-secondary/30 blur-2xl" />

            <div className="relative flex flex-1 flex-col">
              {profile?.secondary_logo && (
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-3 shadow-strong">
                  <img
                    src={profile.secondary_logo}
                    alt={profile?.name || 'NAMTech Solutions'}
                    className="h-full w-full object-contain"
                  />
                </div>
              )}

              <h3 className="text-2xl font-semibold tracking-tight">
                {profile?.name || 'NAMTech Solutions'}
              </h3>
              {profile?.slogan && (
                <p className="mt-2 text-sm text-white/80">{profile.slogan}</p>
              )}
              {profile?.welcome_message && (
                <p className="mt-5 text-base leading-7 text-white/90">
                  {profile.welcome_message}
                </p>
              )}

              {badge && (
                <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/12 px-4 py-3 ring-1 ring-white/20">
                  {badge.image && (
                    <img
                      src={badge.image}
                      alt={badge.title}
                      className="h-10 w-10 rounded-lg object-contain bg-white p-1"
                    />
                  )}
                  <div>
                    <p className="text-sm font-semibold">{badge.title}</p>
                    <p className="text-xs text-white/70">{badge.issuing_organization}</p>
                  </div>
                </div>
              )}

              {highlights.length > 0 && (
                <div className="mt-auto grid grid-cols-3 gap-4 border-t border-white/20 pt-6">
                  {highlights.map((stat: any, idx: number) => (
                    <div key={idx}>
                      <p className="text-2xl font-semibold">{formatStat(stat.number)}</p>
                      <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white/70">
                        {stat.title}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {strengths.length > 0 && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item: any, idx: number) => (
              <article
                key={idx}
                className="rounded-3xl border border-border bg-bg-card p-6 shadow-soft"
              >
                {item?.icon && (
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <img src={item.icon} alt="" className="h-6 w-6 object-contain" />
                  </div>
                )}
                <h3 className="text-base font-semibold text-text-primary">{item.title}</h3>
                {item?.details && (
                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    {stripHtml(item.details)}
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
