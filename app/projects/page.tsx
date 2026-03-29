import { SitePagePortfolio } from "@/components/common/SitePage";
import { ProjectsPortfolioSection } from "@/components/features/ProjectsPortfolio";
import { SkillsPortfolioSection } from "@/components/features/SkillsPortfolio";

export default function ProjectsPage() {
  return (
    <SitePagePortfolio>
      <SkillsPortfolioSection />
      <ProjectsPortfolioSection />
    </SitePagePortfolio>
  );
}
