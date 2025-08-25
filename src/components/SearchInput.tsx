import { Search } from 'lucide-react';
import { cn } from '@/lib/cn';

export default function SearchInput({
  value,
  onChange,
  placeholder = 'Search title or tags…',
  className,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={cn('flex items-center gap-2 rounded-2xl border border-border bg-white px-3 py-2', className)}>
      <Search className="h-4 w-4 text-foreground/60" />
      <input
        className="w-full bg-transparent text-sm outline-none placeholder:text-foreground/40"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}


