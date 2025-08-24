import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { formatYear, resolveAsset } from '@/lib/utils';
import { Button } from './ui/button';
import { Github, ExternalLink } from 'lucide-react';

type GitHubCardProps = {
  project: {
    slug: string;
    title: string;
    year?: number | null;
    tags: string[];
    cover: string;
    brief?: string;
    githubUrl?: string;
  };
};

export default function GitHubCard({ project }: GitHubCardProps) {
  const content = (
    <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
      <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5">
        <div className="relative aspect-[5/3] w-full overflow-hidden bg-muted">
          <img
            src={resolveAsset(project.cover)}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <CardContent className="space-y-3 p-5 pt-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            {project.year ? <span className="text-xs text-foreground/60">{formatYear(project.year)}</span> : null}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tags?.map((t) => (
              <Badge key={t} variant="outline" className="text-xs">
                {t}
              </Badge>
            ))}
          </div>
          {project.brief && <p className="line-clamp-2 text-sm text-foreground/70">{project.brief}</p>}
        </CardContent>
      </Card>
    </motion.div>
  );

  if (project.githubUrl) {
    return (
      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="group block">
        {content}
      </a>
    );
  }
  
  return content;
}
