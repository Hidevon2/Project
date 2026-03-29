import { notFound } from "next/navigation";
import { SitePagePortfolio } from "@/components/common/SitePage";
import { ProjectDetailSection } from "@/components/features/ProjectDetail";
import { getProjectBySlug } from "@/lib/content";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  return (
    <SitePagePortfolio>
      <ProjectDetailSection project={project} />
    </SitePagePortfolio>
  );
}
