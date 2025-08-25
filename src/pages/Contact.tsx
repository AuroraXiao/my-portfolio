import Section from '@/components/Section';
import { LINKS } from '@/data/links';

export default function Contact() {
  return (
    <Section title="Contact" subtitle="联系我">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <p className="text-foreground/70">Prefer email. I usually reply within 48 hours.</p>
          <a href={`mailto:${LINKS.email}`} className="inline-flex items-center rounded-2xl border border-border px-4 py-2 hover:bg-muted">
            {LINKS.email}
          </a>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium">GitHub</div>
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="inline-flex rounded-2xl border border-border px-4 py-2 hover:bg-muted">
            {LINKS.github}
          </a>
        </div>
      </div>
    </Section>
  );
}


