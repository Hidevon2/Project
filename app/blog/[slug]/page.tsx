import { notFound } from "next/navigation";
import { SitePageHome } from "@/components/common/SitePage";
import { BlogPostSection } from "@/components/features/BlogPost";
import { getPostBySlug } from "@/lib/content";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return (
    <SitePageHome>
      <BlogPostSection post={post} />
    </SitePageHome>
  );
}
