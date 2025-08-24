import { LINKS } from '@/data/links';
import { Mail, Github, Linkedin, Globe } from 'lucide-react';

const socials = [
  { key: 'email', icon: Mail, href: `mailto:${LINKS.email}`, show: !!LINKS.email, label: 'Email' },
  { key: 'github', icon: Github, href: LINKS.github, show: !!LINKS.github, label: 'GitHub' },
  { key: 'linkedin', icon: Linkedin, href: LINKS.linkedin, show: !!LINKS.linkedin, label: 'LinkedIn' },
  { key: 'behance', icon: Globe, href: LINKS.behance, show: !!LINKS.behance, label: 'Behance' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <p className="text-sm text-foreground/60">© {new Date().getFullYear()} Ruitong Xiao</p>
        <div className="flex items-center gap-3">
          {socials
            .filter((s) => s.show)
            .map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-3 py-1.5 text-sm hover:bg-muted"
              >
                <s.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{s.label}</span>
              </a>
            ))}
        </div>
      </div>
    </footer>
  );
}


