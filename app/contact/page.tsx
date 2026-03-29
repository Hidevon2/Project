import { SitePageBare } from "@/components/common/SitePage";
import { ContactHeroSection } from "@/components/features/ContactHero";
import { ContactMainSection } from "@/components/features/ContactMain";
import { ContactSayHiSection } from "@/components/features/ContactSayHi";

export default function ContactPage() {
  return (
    <SitePageBare>
      <ContactHeroSection />
      <ContactMainSection />
      <ContactSayHiSection />
    </SitePageBare>
  );
}
