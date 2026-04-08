import { useEffect, useState } from "react";

interface CompactStatProps {
  value: number | string;
  label: string;
  icon?: string;
  delay?: number;
}

export function StatCard({ value, label, icon, delay = 0 }: CompactStatProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof value === 'number') {
      let start = 0;
      const duration = 1200;
      const increment = value / (duration / 20);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          start = value;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, 20);

      return () => clearInterval(timer);
    }
  }, [value]);

  return (
  <div
  className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/70 px-5 py-5 shadow-sm dark:shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  style={{
    animation: `fadeInUp 0.5s ease forwards`,
    animationDelay: `${delay}s`,
  }}
>
  {icon && (
    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 transition group-hover:scale-110">
      <img
        src={icon}
        alt="icon"
        className="h-5 w-5 object-contain"
      />
    </div>
  )}

  <div className="mb-1 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
    {typeof value === "number" ? count : value}
  </div>

  <div className="text-center text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
    {label}
  </div>
</div>
  );
}
