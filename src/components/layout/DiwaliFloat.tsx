import { Link, useLocation } from 'react-router-dom';
import '../../styles/celebration.css';

export function DiwaliFloat() {
  const { pathname } = useLocation();
  if (pathname === '/celebration') return null;

  return (
    <Link
      to="/celebration"
      aria-label="Open Diwali celebration page"
      className="group/diwali fixed bottom-28 right-5 z-[110] flex items-center sm:bottom-32 sm:right-8"
    >
      <span className="mr-3 hidden rounded-full border border-amber-200/20 bg-[#1a0d2b]/90 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-amber-100 opacity-0 shadow-strong backdrop-blur-md transition-opacity duration-300 group-hover/diwali:opacity-100 sm:block">
        Happy Diwali
      </span>
      <span className="diwali-float-glow relative flex h-14 w-14 items-center justify-center rounded-full border border-amber-200/30 bg-gradient-to-br from-amber-300 via-orange-500 to-amber-700 shadow-[0_10px_30px_rgba(205,116,14,0.55)]">
        <svg className="h-8 w-8" viewBox="0 0 64 64" fill="none" aria-hidden>
          <ellipse cx="32" cy="48" rx="20" ry="7" fill="#7a2e0e" />
          <ellipse cx="32" cy="44" rx="18" ry="6" fill="#c45c12" />
          <path d="M32 12c7 9 9 16 9 20 0 5-4 9-9 9s-9-4-9-9c0-4 2-11 9-20z" fill="#ffe08a" />
          <path d="M32 16c3.6 6 5 10 5 13.2C37 32 34.8 34 32 34s-5-2-5-4.8c0-3.2 1.4-7.2 5-13.2z" fill="#fff6d0" />
        </svg>
      </span>
    </Link>
  );
}
