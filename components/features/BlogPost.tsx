import Link from "next/link";
import type { BlogPost } from "@/lib/content";

export function BlogPostSection({ post }: { post: BlogPost }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <Link
        href="/blog"
        className="text-sm font-medium text-accent underline-offset-4 hover:underline"
      >
        ← Back to blog
      </Link>
      <p className="mt-6 text-sm text-muted">{post.date}</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
        {post.title}
      </h1>
      <p className="mt-4 text-lg text-muted">{post.summary}</p>
      <div className="mt-10">
        <p className="whitespace-pre-wrap leading-relaxed text-foreground">
          {post.body}
        </p>
      </div>
    </article>
  );
}
