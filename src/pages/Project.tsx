import Section from '@/components/Section';
import { useParams } from 'react-router-dom';
import { Frown } from 'lucide-react';
import { getProjectBySlug, getRelatedProjects, resolveAsset } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PhoneMockup from '@/components/PhoneMockup';
import FigmaEmbed from '@/components/FigmaEmbed';
import { Badge } from '@/components/ui/badge';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Project() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <Section title="Not Found">
        <div className="flex items-center gap-3 text-foreground/60">
          <Frown className="h-5 w-5" />
          <p>Project not found.</p>
        </div>
      </Section>
    );
  }

  const related = getRelatedProjects(project, 3);

  return (
    <>
      <Section>
        <div className="grid items-start gap-8 md:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold tracking-tight">{project.title}</h1>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <Badge key={t} variant="outline">
                  {t}
                </Badge>
              ))}
            </div>
            {project.brief && <p className="text-foreground/70">{project.brief}</p>}
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
          </div>
          <div className="mx-auto w-full max-w-xs">
            <PhoneMockup>
              <img
                src={resolveAsset(project.gallery[0])}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </PhoneMockup>
          </div>
        </div>
      </Section>

      <Section title="Project Story" subtitle="项目故事">
        <Tabs defaultValue="problem" className="space-y-4">
          <TabsList>
            <TabsTrigger value="problem">问题</TabsTrigger>
            <TabsTrigger value="constraints">约束</TabsTrigger>
            <TabsTrigger value="wireframes">线框</TabsTrigger>
            <TabsTrigger value="visuals">视觉</TabsTrigger>
            <TabsTrigger value="interactions">交互</TabsTrigger>
            <TabsTrigger value="results">结果</TabsTrigger>
          </TabsList>

          <TabsContent value="problem">
            <p className="text-foreground/70">{project.problem ?? '—'}</p>
          </TabsContent>

          <TabsContent value="constraints">
            <ul className="list-disc space-y-1 pl-5 text-foreground/70">
              {project.constraints?.map((c, i) => <li key={i}>{c}</li>) ?? <li>—</li>}
            </ul>
          </TabsContent>

          <TabsContent value="wireframes">
            <div className="grid gap-3 sm:grid-cols-2">
              {project.process?.wireframes?.map((src, i) => (
                <img key={i} src={resolveAsset(src)} alt="Wireframe" className="rounded-2xl border border-border" loading="lazy" />
              )) ?? <p className="text-foreground/60">—</p>}
            </div>
          </TabsContent>

          <TabsContent value="visuals">
            <div className="grid gap-3 sm:grid-cols-2">
              {project.gallery?.map((src, i) => (
                <img key={i} src={resolveAsset(src)} alt="Visual" className="rounded-2xl border border-border" loading="lazy" />
              )) ?? <p className="text-foreground/60">—</p>}
            </div>
          </TabsContent>

          <TabsContent value="interactions">
            <ul className="list-disc space-y-1 pl-5 text-foreground/70">
              {project.process?.notes?.map((n, i) => <li key={i}>{n}</li>) ?? <li>—</li>}
            </ul>
          </TabsContent>

          <TabsContent value="results">
            <div className="space-y-3">
              <div>
                <h4 className="mb-1 font-medium">Metrics</h4>
                <ul className="list-disc space-y-1 pl-5 text-foreground/70">
                  {project.outcome?.metrics?.map((m, i) => <li key={i}>{m}</li>) ?? <li>—</li>}
                </ul>
              </div>
              <div>
                <h4 className="mb-1 font-medium">Learnings</h4>
                <ul className="list-disc space-y-1 pl-5 text-foreground/70">
                  {project.outcome?.learnings?.map((m, i) => <li key={i}>{m}</li>) ?? <li>—</li>}
                </ul>
              </div>
              <FigmaEmbed url={project.figmaUrl} />
            </div>
          </TabsContent>
        </Tabs>
      </Section>

      {related.length > 0 && (
        <Section title="Related Projects" subtitle="同标签推荐">
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((p) => (
              <a
                key={p.slug}
                href={`/my-portfolio/project/${p.slug}`}
                className="group rounded-2xl border border-border p-3 hover:bg-muted"
              >
                <img
                  src={resolveAsset(p.cover)}
                  alt={p.title}
                  className="mb-3 h-40 w-full rounded-xl object-cover"
                  loading="lazy"
                />
                <div className="text-sm font-medium">{p.title}</div>
                <div className="mt-1 text-xs text-foreground/60">{p.tags.join(' · ')}</div>
              </a>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}


