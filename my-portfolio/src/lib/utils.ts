import projects from '@/data/projects.json';

export type Project = {
  slug: string;
  title: string;
  year?: number | null;
  tags: string[];
  role: string;
  tools: string[];
  cover: string;
  gallery: string[];
  figmaUrl?: string;
  githubUrl?: string;
  brief?: string;
  summary?: string[];
  problem?: string;
  constraints?: string[];
  process?: {
    wireframes?: string[];
    flows?: string[];
    notes?: string[];
  };
  outcome?: {
    metrics?: string[];
    learnings?: string[];
  };
  featured?: boolean;
  type?: 'github' | 'ui';
};

export const allProjects = projects as Project[];

// Map all local images to built URLs so JSON paths work in build and dev
export const assetUrlMap = import.meta.glob('/src/assets/images/**/*', {
  eager: true,
  as: 'url',
}) as Record<string, string>;

export function resolveAsset(path: string): string {
  const candidateSvg = path.endsWith('.png') ? path.replace('.png', '.svg') : path;
  return assetUrlMap[candidateSvg] ?? assetUrlMap[path] ?? candidateSvg;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

export function getAllTags(list: Project[] = allProjects): string[] {
  const set = new Set<string>();
  list.forEach((p) => p.tags?.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}

export function formatYear(year?: number | null): string {
  return typeof year === 'number' ? String(year) : '';
}

export function getRelatedProjects(base: Project, count = 3): Project[] {
  const tags = new Set(base.tags || []);
  return allProjects
    .filter((p) => p.slug !== base.slug)
    .map((p) => ({
      p,
      score: p.tags?.reduce((acc, t) => acc + (tags.has(t) ? 1 : 0), 0) ?? 0,
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((x) => x.p);
}


