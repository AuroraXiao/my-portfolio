import { cn } from '@/lib/cn';

export default function Section({
  title,
  subtitle,
  className,
  children,
}: {
  title?: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={cn('py-10 md:py-14', className)}>
      <div className="container">
        {(title || subtitle) && (
          <header className="mb-6 md:mb-8">
            {subtitle && <p className="text-xs uppercase tracking-wider text-foreground/50">{subtitle}</p>}
            {title && <h2 className="mt-1 text-xl font-semibold tracking-tight md:text-2xl">{title}</h2>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}


