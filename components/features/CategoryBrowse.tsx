import Link from "next/link";
import { categoryPages, getCategoryContent } from "@/lib/content";
import { Card } from "@/components/ui/card";

export function CategoryBrowseSection({ segments }: { segments: string[] }) {
  const content = getCategoryContent(segments);
  const path = segments.join("/");

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-xs font-medium uppercase tracking-wide text-muted">
        Category / {path}
      </p>
      {content ? (
        <>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
            {content.title}
          </h1>
          <p className="mt-4 max-w-2xl text-muted">{content.description}</p>
        </>
      ) : (
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
          Category not found
        </h1>
      )}
      <div className="mt-10">
        <p className="mb-3 text-sm font-semibold text-foreground">
          Known paths
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {Object.keys(categoryPages).map((key) => (
            <li key={key}>
              <Link href={`/category/${key}`}>
                <Card className="p-3 text-sm transition-colors hover:border-accent">
                  /category/{key}
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
