import { SitePageHome } from "@/components/common/SitePage";
import { CategoryBrowseSection } from "@/components/features/CategoryBrowse";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ segments: string[] }>;
}) {
  const { segments } = await params;

  return (
    <SitePageHome>
      <CategoryBrowseSection segments={segments} />
    </SitePageHome>
  );
}
