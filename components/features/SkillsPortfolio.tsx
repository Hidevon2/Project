import { skills } from "@/lib/content";
import { Badge } from "@/components/ui/badge";

export function SkillsPortfolioSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
        Skills
      </h2>
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {skills.map((s) => (
          <Badge key={s} className="justify-center py-2.5 text-center">
            {s}
          </Badge>
        ))}
      </div>
    </section>
  );
}
