import { useState, useEffect } from 'react';
import { useLoader } from '../../hooks/useLoader';

interface LoaderProps {
  logoImage?: string; // Path to logo image (e.g., '/logo.png' or from assets)
}

export function Loader({ logoImage }: LoaderProps) {
  const { isLoading } = useLoader();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // Fade out animation
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [isLoading]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-bg-main transition-opacity duration-300 ${!isLoading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex flex-col items-center gap-6">
        {/* Logo Image */}
        <div className="relative">
          {logoImage ? (
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <img 
                src={logoImage} 
                alt="Logo" 
                className="w-full h-full object-contain animate-pulse"
              />
              {/* Spinning ring */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-secondary animate-spin"></div>
            </div>
          ) : (
            <>
              {/* Logo Placeholder */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary to-secondary p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-bg-main flex items-center justify-center">
                  <div className="text-4xl md:text-5xl font-bold">
                    <span className="text-primary">N</span>
                    <span className="text-secondary">S</span>
                  </div>
                </div>
              </div>
              {/* Spinning ring */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-secondary animate-spin"></div>
            </>
          )}
        </div>

        {/* Loading text */}
        <div className="text-text-secondary text-sm md:text-base animate-pulse">
          Loading...
        </div>

        {/* Loading dots animation */}
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}
