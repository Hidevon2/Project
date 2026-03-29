import { FooterHome, FooterPortfolio } from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";

export function SitePageHome({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <FooterHome />
    </div>
  );
}

export function SitePagePortfolio({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <FooterPortfolio />
    </div>
  );
}

export function SitePageBare({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
