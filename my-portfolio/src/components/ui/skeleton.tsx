import * as React from 'react';
import { cn } from '@/lib/cn';

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('animate-pulse rounded-2xl bg-muted', className)} {...props} />;
}


