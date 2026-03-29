import Link from "next/link";
import { blogPosts } from "@/lib/content";
import { Card, CardTitle } from "@/components/ui/card";

export function BlogIndexSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="mb-10 text-3xl font-bold tracking-tight text-foreground">
        Blog
      </h1>
      <ul className="space-y-4">
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block group">
              <Card className="transition-colors group-hover:border-accent">
                <p className="text-xs text-muted">{post.date}</p>
                <CardTitle className="mt-1">{post.title}</CardTitle>
                <p className="mt-2 text-sm text-muted">{post.summary}</p>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
