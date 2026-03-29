import Link from "next/link";
import { projects } from "@/lib/content";
import { ProjectCoverImage } from "@/components/features/ProjectCoverImage";
import { Card, CardTitle } from "@/components/ui/card";

const featured = projects.slice(0, 4);

export function ProjectsHomeSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Projects
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="group block">
            <Card className="h-full transition-colors group-hover:border-accent">
              <ProjectCoverImage src={p.imageSrc} alt={`${p.title} preview`} />
              <CardTitle className="text-sm">{p.title}</CardTitle>
            </Card>
          </Link>
        ))}
      </div>
      <div className="mt-10 flex justify-end">
        <Link
          href="/projects"
          className="text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          More Projects
        </Link>
      </div>
    </section>
  );
}
