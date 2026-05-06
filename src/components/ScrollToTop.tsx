import { useState, useEffect } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[99] flex h-14 w-14 items-center justify-center 
                 rounded-2xl border border-white/20 dark:border-white/10 
                 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl
                 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)]
                 text-zinc-900 dark:text-white transition-all duration-500 ease-in-out
                 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}
                 hover:-translate-y-2 hover:text-primary group`}
    >
      {/* Icon with subtle hover bounce */}
      <div className="transition-transform duration-300 group-hover:-translate-y-1">
        <KeyboardArrowUpIcon sx={{ fontSize: 32 }} />
      </div>

      {/* Premium Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10" />
    </button>
  );
};

export default ScrollToTop;