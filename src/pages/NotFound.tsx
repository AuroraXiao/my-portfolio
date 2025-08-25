import Section from '@/components/Section';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Section title="404" subtitle="Not Found">
      <p className="text-foreground/70">The page you’re looking for does not exist.</p>
      <Link to="/" className="mt-4 inline-block rounded-2xl border border-border px-4 py-2 hover:bg-muted">Go Home</Link>
    </Section>
  );
}


