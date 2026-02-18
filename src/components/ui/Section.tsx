import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  py?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export function Section({
  children,
  className = '',
  id,
  py = 'lg',
}: SectionProps) {
  const padding = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-24',
    xl: 'py-32',
    '2xl': 'py-40',
  };

  return (
    <section id={id} className={`${padding[py]} ${className}`}>
      {children}
    </section>
  );
}
