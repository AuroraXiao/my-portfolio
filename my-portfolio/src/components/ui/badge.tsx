import * as React from 'react';
import { cn } from '@/lib/cn';

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'default' | 'outline';
};

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const styles =
    variant === 'outline'
      ? 'border border-border text-foreground/80'
      : 'bg-foreground text-white';
  return <div className={cn('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs', styles, className)} {...props} />;
}


