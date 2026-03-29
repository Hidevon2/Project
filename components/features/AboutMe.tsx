import Link from "next/link";
import { aboutSkillHighlights, portfolioBioParagraphs } from "@/lib/content";
import { Card, CardTitle } from "@/components/ui/card";

export function AboutMeSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          About Me
        </h2>
        <div className="mx-auto mt-4 h-px max-w-xs bg-border" />
      </div>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="space-y-4 text-base leading-relaxed text-muted">
          {portfolioBioParagraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {aboutSkillHighlights.map((label) => (
            <Card
              key={label}
              className="flex min-h-[88px] flex-col justify-center"
            >
              <CardTitle className="text-sm">{label}</CardTitle>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-end">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-background"
        >
          More about Me
        </Link>
      </div>
    </section>
  );
}
