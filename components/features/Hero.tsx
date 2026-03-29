import Image from "next/image";
import { portfolioBioParagraphs } from "@/lib/content";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-wide text-muted">
            Portfolio
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Devon T. Descipulo
          </h1>
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            {portfolioBioParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-lg ring-1 ring-black/5 dark:ring-white/10">
            <Image
              src="/devon-portrait.png"
              alt="Devon T. Descipulo"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 420px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
