import { Button } from './ui/button';

export default function FigmaEmbed({ url }: { url?: string }) {
  if (!url) return null;
  return (
    <div className="space-y-3">
      <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
        <iframe
          src={`${url}${url.includes('?') ? '&' : '?'}embed_host=share`}
          title="Figma Embed"
          className="h-full w-full"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <a href={url} target="_blank" rel="noreferrer" className="inline-flex">
        <Button variant="outline">Open in Figma</Button>
      </a>
    </div>
  );
}


