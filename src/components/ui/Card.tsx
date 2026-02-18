import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export function Card({ children, className = '', hover = false, glass = false }: CardProps) {
  const baseStyles = 'bg-bg-card border border-border rounded-xl p-6 shadow-soft';
  const hoverStyles = hover ? 'transition-all duration-300 hover:shadow-strong hover:-translate-y-1' : '';
  const glassStyles = glass ? 'backdrop-blur-sm bg-bg-card/80 border-border/50' : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${glassStyles} ${className}`}>
      {children}
    </div>
  );
}
