import * as React from 'react';
import { cn } from '@/lib/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
      default: 'bg-foreground text-white hover:bg-black',
      outline: 'border border-border hover:bg-muted',
      ghost: 'hover:bg-muted',
      link: 'underline-offset-4 hover:underline p-0 h-auto',
    };
    const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
      sm: 'h-8 rounded-xl px-3 text-xs',
      md: 'h-10 rounded-2xl px-4 text-sm',
      lg: 'h-12 rounded-2xl px-6 text-base',
    };
    return (
      <button
        ref={ref}
        className={cn('inline-flex items-center justify-center gap-2 font-medium transition-colors', variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';


