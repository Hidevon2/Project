import { SitePageHome } from "@/components/common/SitePage";
import { JournalSection } from "@/components/features/JournalSection";
import {
  filterJournalByDateSegments,
  journalEntries,
} from "@/lib/content";

export default async function JournalPage({
  params,
}: {
  params: Promise<{ date?: string[] }>;
}) {
  const { date } = await params;
  const entries = filterJournalByDateSegments(journalEntries, date);

  return (
    <SitePageHome>
      <JournalSection segments={date} entries={entries} />
    </SitePageHome>
  );
}
