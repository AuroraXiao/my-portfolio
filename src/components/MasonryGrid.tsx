import { cn } from '@/lib/cn';

export default function MasonryGrid({
  children,
  className,
  columns = { base: 1, md: 2, lg: 3 },
  gap = 16,
}: {
  children: React.ReactNode;
  className?: string;
  columns?: { base: number; md: number; lg: number };
  gap?: number;
}) {
  return (
    <div
      className={cn('masonry', className)}
      style={{
        columnGap: `${gap}px`,
      }}
    >
      <style>
        {`
        .masonry {
          columns: ${columns.base};
        }
        @media (min-width: 768px) {
          .masonry {
            columns: ${columns.md};
          }
        }
        @media (min-width: 992px) {
          .masonry {
            columns: ${columns.lg};
          }
        }
        .masonry > * {
          break-inside: avoid;
          margin-bottom: ${gap}px;
        }
      `}
      </style>
      {children}
    </div>
  );
}


