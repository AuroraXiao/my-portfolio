import { useMemo, useState } from 'react';
import { cn } from '@/lib/cn';

export default function FilterChips({
  allTags,
  selected,
  onChange,
  multi = true,
  className,
}: {
  allTags: string[];
  selected: string[];
  onChange: (tags: string[]) => void;
  multi?: boolean;
  className?: string;
}) {
  const [internal, setInternal] = useState<string[]>(selected);
  const tags = useMemo(() => allTags, [allTags]);

  function toggle(tag: string) {
    let next: string[];
    if (multi) {
      next = internal.includes(tag) ? internal.filter((t) => t !== tag) : [...internal, tag];
    } else {
      next = internal.includes(tag) ? [] : [tag];
    }
    setInternal(next);
    onChange(next);
  }

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {tags.map((tag) => {
        const active = internal.includes(tag);
        return (
          <button
            key={tag}
            className={cn('chip', active && 'bg-foreground text-white border-transparent')}
            onClick={() => toggle(tag)}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}


