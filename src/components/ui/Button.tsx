import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'achromatic';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-95';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)]',
    secondary: 'bg-slate-800 text-white hover:bg-slate-900 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-white',
    outline: 'border border-slate-200 dark:border-white/10 bg-transparent text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5',
    achromatic: 'bg-slate-950 text-white dark:bg-white dark:text-slate-950 hover:opacity-90 shadow-xl'
  };

  const sizes = {
    // Luxury brands use small text with large padding
    sm: 'px-6 py-2 text-[10px]',
    md: 'px-8 py-3 text-[11px]',
    lg: 'px-10 py-4 text-[12px]',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}