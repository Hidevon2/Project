import { SitePageHome } from "@/components/common/SitePage";
import { AboutMeSection } from "@/components/features/AboutMe";
import { HeroSection } from "@/components/features/Hero";
import { ProjectsHomeSection } from "@/components/features/ProjectsHome";

export default function Home() {
  return (
    <SitePageHome>
      <HeroSection />
      <AboutMeSection />
      <ProjectsHomeSection />
    </SitePageHome>
  );
}
