import { ReactNode } from 'react';

interface IconBadgeProps {
  icon: ReactNode;
  text: string;
  className?: string;
}

export function IconBadge({ icon, text, className = '' }: IconBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-muted border border-border ${className}`}>
      <span className="text-primary">{icon}</span>
      <span className="text-sm font-medium text-text-primary">{text}</span>
    </div>
  );
}
