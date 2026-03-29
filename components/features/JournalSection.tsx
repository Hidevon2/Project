"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { JournalEntry } from "@/lib/content";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function JournalSection({
  segments,
  entries,
}: {
  segments: string[] | undefined;
  entries: JournalEntry[];
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.tags.some((t) => t.toLowerCase().includes(q)),
    );
  }, [entries, query]);

  const scope =
    segments && segments.length > 0
      ? `Year ${segments[0]}${segments[1] ? ` · Month ${segments[1]}` : ""}`
      : "All entries";

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Journal
      </h1>
      <p className="mt-2 text-sm text-muted">{scope}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href="/journal"
          className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground hover:border-accent"
        >
          All
        </Link>
        <Link
          href="/journal/2026"
          className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground hover:border-accent"
        >
          2026
        </Link>
        <Link
          href="/journal/2026/03"
          className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground hover:border-accent"
        >
          2026 / 03
        </Link>
      </div>
      <div className="mt-6 max-w-md">
        <Input
          placeholder="Filter by title or tag…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Filter journal entries"
        />
      </div>
      <ul className="mt-8 space-y-3">
        {filtered.map((e) => (
          <li key={e.id}>
            <Card className="flex flex-wrap items-baseline justify-between gap-2 p-4">
              <div>
                <p className="font-medium text-foreground">{e.title}</p>
                <p className="text-xs text-muted">{e.date}</p>
              </div>
              <div className="flex gap-1">
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-background px-2 py-0.5 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          </li>
        ))}
      </ul>
      {filtered.length === 0 ? (
        <p className="mt-6 text-sm text-muted">No entries match your filter.</p>
      ) : null}
    </section>
  );
}
