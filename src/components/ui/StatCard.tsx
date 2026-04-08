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
      className="flex flex-col items-center justify-center p-4 rounded-xl bg-white shadow-md border border-indigo-100 transform transition-all hover:scale-105 hover:shadow-lg"
      style={{ animation: `fadeInUp 0.5s ease forwards`, animationDelay: `${delay}s` }}
    >
      {icon && (
        <div className="mb-3 w-10 h-10 flex items-center justify-center bg-indigo-100 rounded-full">
          <img src={icon} alt="icon" className="w-5 h-5 object-contain" />
        </div>
      )}
      <div className="text-3xl font-bold text-indigo-700 mb-1">
        {typeof value === 'number' ? count : value}
      </div>
      <div className="text-sm text-indigo-500 uppercase tracking-wide text-center">{label}</div>
    </div>
  );
}
