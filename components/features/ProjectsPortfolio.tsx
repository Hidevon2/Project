"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { projects } from "@/lib/content";
import { ProjectCoverImage } from "@/components/features/ProjectCoverImage";
import { Card, CardTitle } from "@/components/ui/card";

const categories = Array.from(new Set(projects.map((p) => p.category))).sort();

export function ProjectsPortfolioSection() {
  const [active, setActive] = useState<string>("All");

  const visible = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
        Projects
      </h2>
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive("All")}
          className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
            active === "All"
              ? "border-accent bg-accent text-accent-foreground"
              : "border-border bg-card text-foreground hover:border-accent"
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              active === c
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border bg-card text-foreground hover:border-accent"
            }`}
          >
            {c}
          </button>
        ))}
        <span className="ml-auto text-xs text-muted">
          Showing {visible.length} of {projects.length}
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {visible.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="group block">
            <Card className="h-full transition-colors group-hover:border-accent">
              <ProjectCoverImage src={p.imageSrc} alt={`${p.title} preview`} />
              <CardTitle>{p.title}</CardTitle>
              <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
