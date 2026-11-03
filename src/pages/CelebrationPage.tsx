import { useNavigate } from 'react-router-dom';
import { Seo } from '../components/seo/Seo';
import { pageSeo } from '../seo/pageSeo';
import { Button } from '../components/ui/Button';
import { useComponyDetail } from '../context/componyContext';
import { DiwaliCrackers } from '../components/sections/DiwaliCrackers';
import '../styles/celebration.css';

const SPARKS = [
  { top: '8%', left: '12%', delay: '0s', size: 4 },
  { top: '14%', left: '78%', delay: '0.4s', size: 3 },
  { top: '22%', left: '32%', delay: '1.1s', size: 5 },
  { top: '18%', left: '58%', delay: '0.7s', size: 3 },
  { top: '38%', left: '8%', delay: '1.6s', size: 4 },
  { top: '42%', left: '88%', delay: '0.2s', size: 5 },
  { top: '55%', left: '18%', delay: '1.3s', size: 3 },
  { top: '62%', left: '72%', delay: '0.9s', size: 4 },
  { top: '74%', left: '40%', delay: '1.8s', size: 3 },
  { top: '80%', left: '84%', delay: '0.5s', size: 5 },
  { top: '28%', left: '92%', delay: '1.4s', size: 3 },
  { top: '68%', left: '6%', delay: '0.8s', size: 4 },
];

const WISHES = [
  {
    title: 'Light',
    text: 'May every new idea light up like a diya — clear, warm, and built to last.',
  },
  {
    title: 'Code',
    text: 'From our keyboards to your products, we wish you software that shines through the year.',
  },
  {
    title: 'Together',
    text: 'Thank you to our clients and partners. This festival is brighter because we build with you.',
  },
];

function Diya({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
      <ellipse cx="32" cy="48" rx="22" ry="8" fill="#7a2e0e" />
      <ellipse cx="32" cy="44" rx="20" ry="7" fill="#c45c12" />
      <ellipse cx="32" cy="42" rx="16" ry="5" fill="#f0b429" />
      <path d="M32 14c6 8 8 14 8 18 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-4 2-10 8-18z" fill="#ffce54" />
      <path d="M32 18c3.2 5 4.4 9 4.4 12 0 2.4-2 4.4-4.4 4.4s-4.4-2-4.4-4.4c0-3 1.2-7 4.4-12z" fill="#fff4c2" />
    </svg>
  );
}

export function CelebrationPage() {
  const navigate = useNavigate();
  const { componyProfile } = useComponyDetail();
  const profile = componyProfile?.profile;
  const company = profile?.name || 'NAMTech Solutions';
  const slogan = profile?.slogan || 'Dil Se, Tech Tak.';

  return (
    <>
      <Seo {...pageSeo.celebration} />
      <section className="relative min-h-screen overflow-hidden bg-[#12081f] text-amber-50">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(205,116,14,0.28),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(15,63,210,0.22),transparent_36%)]" />

        <DiwaliCrackers />

        {SPARKS.map((spark, index) => (
          <span
            key={index}
            className="diwali-spark pointer-events-none absolute rounded-full bg-amber-200"
            style={{
              top: spark.top,
              left: spark.left,
              width: spark.size,
              height: spark.size,
              animationDelay: spark.delay,
            }}
          />
        ))}

        <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-amber-300/90">
            {company} · Festival of Lights
          </p>

          <div className="mb-8 flex items-end justify-center gap-3 sm:gap-5">
            <Diya className="diwali-diya h-12 w-12 sm:h-14 sm:w-14" />
            <Diya className="diwali-diya h-16 w-16 sm:h-20 sm:w-20" />
            <Diya className="diwali-diya h-12 w-12 sm:h-14 sm:w-14" />
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Happy <span className="bg-gradient-to-r from-amber-200 via-orange-300 to-amber-100 bg-clip-text text-transparent">Diwali</span>
          </h1>
          <p className="mt-3 text-lg font-medium text-amber-200/90 sm:text-xl">{slogan}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-amber-100/75 sm:text-lg">
            From our team of engineers, designers, and problem-solvers — we wish you a year of
            bright ideas, reliable systems, and work that lights up the people you serve.
          </p>

          <div className="mt-12 grid w-full gap-4 sm:grid-cols-3">
            {WISHES.map((wish) => (
              <article
                key={wish.title}
                className="rounded-3xl border border-amber-200/15 bg-white/5 p-6 text-left backdrop-blur-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">{wish.title}</p>
                <p className="mt-3 text-sm leading-7 text-amber-50/80">{wish.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Button
              variant="secondary"
              size="lg"
              className="!bg-amber-400 !text-[#3a1604] hover:!bg-amber-300"
              onClick={() => navigate('/contact')}
            >
              Start a project
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="!border-amber-200/30 !text-amber-100 hover:!bg-white/10"
              onClick={() => navigate('/')}
            >
              Back home
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
