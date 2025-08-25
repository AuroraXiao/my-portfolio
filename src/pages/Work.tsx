import Section from '@/components/Section';
import SearchInput from '@/components/SearchInput';
import FilterChips from '@/components/FilterChips';
import MasonryGrid from '@/components/MasonryGrid';
import { useEffect, useMemo, useState } from 'react';
import { allProjects, getAllTags } from '@/lib/utils';
import ProjectCard from '@/components/ProjectCard';
import GitHubCard from '@/components/GitHubCard';
// import ProjectModal from '@/components/ProjectModal';
import { useSearchParams } from 'react-router-dom';

export default function Work() {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState<string>(params.get('q') ?? '');
  const [selectedTags, setSelectedTags] = useState<string[]>(
    (params.get('tags') ?? '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
  );
  // const [openSlug, setOpenSlug] = useState<string | null>(null);

  const allTags = useMemo(() => getAllTags(allProjects), []);
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return allProjects.filter((p) => {
      const qMatch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      const tagMatch = selectedTags.length === 0 || selectedTags.every((t) => p.tags.includes(t));
      return qMatch && tagMatch;
    });
  }, [query, selectedTags]);

  useEffect(() => {
    const next = new URLSearchParams();
    if (query) next.set('q', query);
    if (selectedTags.length) next.set('tags', selectedTags.join(','));
    setParams(next, { replace: true });
  }, [query, selectedTags, setParams]);

  // const project = filtered.find((p) => p.slug === openSlug) ?? null;

  return (
    <>
      <Section title="Work" subtitle="作品集">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <SearchInput value={query} onChange={setQuery} />
          <FilterChips allTags={allTags} selected={selectedTags} onChange={setSelectedTags} multi className="md:justify-end" />
        </div>
      </Section>

      <Section>
        <MasonryGrid>
          {filtered.map((p) => (
            p.type === 'github' ? (
              <GitHubCard key={p.slug} project={p} />
            ) : (
              <ProjectCard key={p.slug} project={p} openMode="figma" />
            )
          ))}
        </MasonryGrid>
      </Section>
    </>
  );
}


