import Link from "next/link";
import type { ProjectItem } from "@/lib/content";
import { ProjectCoverImage } from "@/components/features/ProjectCoverImage";
import { Card } from "@/components/ui/card";

export function ProjectDetailSection({ project }: { project: ProjectItem }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <Link
        href="/projects"
        className="text-sm font-medium text-accent underline-offset-4 hover:underline"
      >
        ← Back to projects
      </Link>
      <p className="mt-6 text-sm font-medium uppercase tracking-wide text-muted">
        {project.category}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
        {project.title}
      </h1>
      <p className="mt-4 text-lg text-muted">{project.excerpt}</p>
      <div className="mt-8">
        <ProjectCoverImage
          src={project.imageSrc}
          alt={`${project.title} screenshot`}
          variant="hero"
        />
      </div>
      <Card className="mt-10 p-6">
        <p className="text-sm leading-relaxed text-foreground">
          This is a placeholder detail view for{" "}
          <span className="font-mono">{project.slug}</span>. Replace with case
          studies, screenshots, and links to demos or repositories.
        </p>
      </Card>
    </article>
  );
}
