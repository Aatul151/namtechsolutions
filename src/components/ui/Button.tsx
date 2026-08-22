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
    primary: 'bg-primary text-white hover:opacity-90 hover:shadow-[0_10px_25px_-5px_rgba(15,63,210,0.45)]',
    secondary: 'bg-secondary text-white hover:opacity-90',
    outline: 'border border-primary/20 bg-transparent text-primary hover:bg-primary/5 dark:border-white/20 dark:text-white dark:hover:bg-white/5',
    achromatic: 'bg-primary text-white hover:opacity-90 shadow-xl'
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