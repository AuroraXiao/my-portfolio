import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { SITE } from '@/data/site';
import { resolveAsset } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type ProjectModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: {
    slug: string;
    title: string;
    tags: string[];
    gallery: string[];
    brief?: string;
    figmaUrl?: string;
  } | null;
};

export default function ProjectModal({ open, onOpenChange, project }: ProjectModalProps) {
  if (!project) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border">
            <Swiper>
              {project.gallery.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={resolveAsset(src)}
                    alt={`${project.title} ${idx + 1}`}
                    className="h-full w-full rounded-2xl object-cover"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="space-y-4 p-2 md:p-4">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            {project.brief && <p className="text-sm text-foreground/70">{project.brief}</p>}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <Badge key={t} variant="outline">
                  {t}
                </Badge>
              ))}
            </div>
            <div className="flex gap-2 pt-2">
              <Link to={`/project/${project.slug}`}>
                <Button>查看详情</Button>
              </Link>
              {project.figmaUrl && (
                <a className="inline-flex" href={project.figmaUrl} target="_blank" rel="noreferrer">
                  <Button variant="outline">打开 Figma</Button>
                </a>
              )}
            </div>
            <p className="pt-2 text-xs text-foreground/50">{SITE.tagline}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}


