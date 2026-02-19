import { ReactNode, CSSProperties } from 'react';

export interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  style?: CSSProperties;
  noBaseStyles?: Boolean;
}

export function Card({ children, className = '', hover = false, glass = false, style, noBaseStyles = false }: CardProps) {
  const baseStyles = 'bg-bg-card border border-border rounded-xl p-6 shadow-soft';
  const hoverStyles = hover ? 'transition-all duration-300 hover:shadow-strong hover:-translate-y-1' : '';
  const glassStyles = glass ? 'backdrop-blur-sm bg-bg-card/80 border-border/50' : '';

  return (
    <div className={`${!noBaseStyles && baseStyles} ${hoverStyles} ${glassStyles} ${className}`} style={style}>
      {children}
    </div>
  );
}
