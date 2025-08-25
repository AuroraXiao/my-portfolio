import Section from '@/components/Section';
import { SITE } from '@/data/site';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { allProjects, resolveAsset } from '@/lib/utils';
import ProjectCard from '@/components/ProjectCard';
import GitHubCard from '@/components/GitHubCard';

export default function Home() {
  const featured = allProjects.filter((p) => p.featured);
  const githubProjects = allProjects.filter((p) => p.type === 'github' && p.featured);
  const uiProjects = allProjects.filter((p) => p.type !== 'github' && p.featured);

  return (
    <>
      <Section className="pt-10 md:pt-16">
        <div className="container grid items-center gap-10">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-widest text-foreground/50">Portfolio</p>
            <div className="flex items-center gap-3 md:gap-4">
              <img
                src={resolveAsset('/src/assets/images/avatar.jpg')}
                alt="Avatar"
                className="h-[clamp(5rem,8vw,7rem)] w-[clamp(5rem,8vw,7rem)] rounded-full border"
              />
              <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">{SITE.title}</h1>
            </div>
            <p className="text-foreground/70">{SITE.description}</p>
            <div className="flex gap-2 pt-2">
              <Link to="/work">
                <Button>View Work</Button>
              </Link>
              {/* <Link to="/about">
                <Button variant="outline">About</Button>
              </Link> */}
            </div>
          </div>
        </div>
      </Section>

      {githubProjects.length > 0 && (
        <Section title="GitHub Projects" subtitle="开源项目">
          <motion.div
            className="grid gap-6 md:grid-cols-2 md:gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          >
            {githubProjects.map((p) => (
              <motion.div
                key={p.slug}
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              >
                <GitHubCard project={p} />
              </motion.div>
            ))}
          </motion.div>
        </Section>
      )}

      {uiProjects.length > 0 && (
        <Section title="UI/UX Portfolio" subtitle="UI/UX 作品集">
          <motion.div
            className="grid gap-6 md:grid-cols-2 md:gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          >
            {uiProjects.map((p) => (
              <motion.div
                key={p.slug}
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              >
                <ProjectCard project={p} openMode="figma" />
              </motion.div>
            ))}
          </motion.div>
        </Section>
      )}
    </>
  );
}


