import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { MarkedText } from '../ui/MarkedText';
import { useNavigate } from 'react-router-dom';
import detail from '../../assets/detail.json'
import Lottie from "lottie-react";
import homeanim from "../../assets/lottie/Codeeee.json";


export function Hero() {
  const navigate = useNavigate();
  const { profile } = detail

  return (
    <Section py="xs" className="relative overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <Container className="relative overflow-hidden ">
        {/* premium ambient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-secondary/20 blur-3xl" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left Side */}
          <div className="space-y-10">
            <div className="space-y-6">
              {profile?.short_title && (
                <MarkedText
                  as="h1"
                  text={profile.short_title}
                  className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.02] tracking-tight max-w-3xl"
                />
              )}

              {profile?.short_description && (
                <p className="text-lg md:text-xl text-text-secondary leading-8 max-w-2xl">
                  {profile.short_description}
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="primary"
                onClick={() => navigate('/about')}
                className="px-7 py-3.5 text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                About Us
              </Button>

              <Button
                variant="outline"
                onClick={() => navigate('/projects')}
                className="px-7 py-3.5 text-sm rounded-2xl border-2"
              >
                View Our Work
              </Button>
            </div>

            {profile?.statistics?.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 max-w-3xl">
                {profile.statistics.slice(0, 3).map((stat, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-xl px-6 py-5 shadow-sm dark:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <h3 className="text-3xl font-bold tracking-tight text-text-primary dark:text-white">
                      {stat?.number}
                    </h3>

                    <p className="mt-2 text-sm text-text-secondary dark:text-zinc-400">
                      {stat?.title}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Side */}
          <div className="relative hidden lg:flex justify-center items-center min-h-[640px] w-full">
            {/* ambient glow */}
            <div className="absolute w-[540px] h-[540px] rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/10 blur-3xl" />
            <div className="absolute top-12 right-12 w-40 h-40 rounded-full bg-primary/20 blur-2xl" />
            <div className="absolute bottom-16 left-6 w-32 h-32 rounded-full bg-secondary/20 blur-2xl" />

            {/* depth layer */}
            <div className="absolute w-[460px] h-[460px] rounded-[42px] bg-white/20 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rotate-6 shadow-2xl" />

            {/* main preview card */}
            <div className="relative z-10 w-full max-w-[520px] rounded-[36px] bg-white/75 dark:bg-white/10 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-white/5 dark:to-white/10 border border-border/40 dark:border-white/10">
                <Lottie animationData={homeanim} loop className="w-full h-auto" />
              </div>
            </div>

            {/* floating achievement cards */}
            {profile?.achievement?.slice(0, 3).map((item, idx) => {
              const positions = [
                "top-6 -right-4",
                "bottom-16 -left-8",
                "top-1/2 -left-12"
              ];

              return (
                <div
                  key={idx}
                  className={`absolute ${positions[idx]} z-20 min-w-[200px] rounded-2xl border border-white/60 dark:border-white/10 bg-white/90 dark:bg-zinc-900/80 backdrop-blur-xl px-4 py-3 shadow-xl`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item?.image}
                      alt={item?.title}
                      className="w-11 h-11 rounded-xl object-contain bg-muted dark:bg-white/5 p-1"
                    />
                    <div>
                      <p className="text-sm font-semibold text-text-primary dark:text-white leading-5">
                        {item?.title}
                      </p>
                      <p className="text-xs text-text-secondary dark:text-zinc-400">
                        {item?.issuing_organization}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
