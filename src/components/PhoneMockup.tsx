import { cn } from '@/lib/cn';

export default function PhoneMockup({
  className,
  children,
  scrollPreview = false,
}: {
  className?: string;
  children?: React.ReactNode;
  scrollPreview?: boolean;
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[320px]', className)}>
      <div className="relative mx-auto aspect-[9/19.5] w-full rounded-[2.2rem] border border-border bg-white shadow-card">
        <div className="absolute inset-[10px] rounded-[1.8rem] bg-black">
          <div className="absolute inset-[2px] rounded-[1.6rem] bg-white overflow-hidden">
            <div className={cn('h-full w-full', scrollPreview && 'phone-scroll')}>
              {children}
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 top-1 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-black/80" />
        <div className="absolute right-0 top-20 h-16 w-0.5 bg-border" />
      </div>
    </div>
  );
}


