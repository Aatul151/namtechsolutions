import { CSSProperties, ReactNode } from 'react';

interface StatCardProps {
  value: string | number;
  label: string;
  icon?: ReactNode;
  className?: string;
  floating?: boolean;
  style?: CSSProperties;
}

export function StatCard({
  value,
  label,
  icon,
  className = '',
  floating = false,
}: StatCardProps) {
  const floatingStyles = floating
    ? 'animate-float shadow-strong hover:shadow-strong hover:scale-105'
    : '';

  return (
    <div
      className={`bg-bg-card border border-border rounded-xl p-6 shadow-soft transition-all duration-300 ${floatingStyles} ${className}`}
    >
      {icon && <div className="mb-4 text-primary text-2xl">{icon}</div>}
      <div className="text-3xl font-bold text-text-primary mb-2">{value}</div>
      <div className="text-sm text-text-secondary">{label}</div>
    </div>
  );
}
