export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Github",
  "HTML",
  "C#",
] as const;

/** Shared intro copy for Hero and About sections. */
export const portfolioBioParagraphs: readonly [string, string] = [
  "Software developer focused on building interfaces that feel intentional—clean layouts, accessible patterns, and code that holds up in production.",
  "I enjoy bridging design and engineering: from component systems and performance to APIs and deployment, I ship work that teams can iterate on with confidence.",
];

/** About section 2×2 skill highlights (display order: row-major). */
export const aboutSkillHighlights = [
  "C#",
  "Next.js",
  "HTML",
  "GitHub",
] as const;

export type ProjectItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** Path under `/public`, e.g. `/project-shophub.png` */
  imageSrc: string;
};

export const projects: ProjectItem[] = [
  {
    slug: "Vercel",
    title: "Vercel-Resume",
    excerpt: "My start-up Resume",
    category: "Resume",
    imageSrc: "/project-resume.png",
  },
  {
    slug: "api-gateway",
    title: "Ecommer",
    excerpt: "A Shop of Pc Parts",
    category: "Nextjs",
    imageSrc: "/project-shophub.png",
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projects.find((p) => p.slug === slug);
}

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  body: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "shipping-faster-with-feature-flags",
    title: "Shipping faster with feature flags",
    date: "2026-03-10",
    summary: "Gradual rollouts without redeploys.",
    body: "Feature flags let you decouple release from deployment. Start with a simple boolean store, then add targeting and analytics as you grow.",
  },
  {
    slug: "css-architecture-in-app-router",
    title: "CSS architecture in the App Router",
    date: "2026-02-22",
    summary: "Colocation, tokens, and dark mode.",
    body: "Keep design tokens in one place, use CSS variables for theme switching, and prefer composition over deep selector trees.",
  },
  {
    slug: "notes-on-accessible-forms",
    title: "Notes on accessible forms",
    date: "2026-01-05",
    summary: "Labels, errors, and focus order.",
    body: "Every input needs an associated label. Surface errors inline, manage focus when validation fails, and test with keyboard only.",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export type JournalEntry = {
  id: string;
  title: string;
  date: string;
  tags: string[];
};

export const journalEntries: JournalEntry[] = [
  {
    id: "1",
    title: "Quarterly planning",
    date: "2026-03-15",
    tags: ["work"],
  },
  {
    id: "2",
    title: "Reading list refresh",
    date: "2026-03-02",
    tags: ["personal"],
  },
  {
    id: "3",
    title: "Conference notes",
    date: "2026-02-28",
    tags: ["work", "travel"],
  },
  {
    id: "4",
    title: "Side project reboot",
    date: "2026-02-01",
    tags: ["personal"],
  },
];

export type CategoryPageContent = {
  title: string;
  description: string;
};

/** Path keys use `/` between segments, e.g. `guides/start`. */
export const categoryPages: Record<string, CategoryPageContent> = {
  "guides/start": {
    title: "Getting started",
    description:
      "Orientation for this category: structure, conventions, and where to go next.",
  },
  "guides/advanced": {
    title: "Advanced guides",
    description:
      "Deeper topics: performance, architecture, and scaling patterns.",
  },
  "snippets/react": {
    title: "React snippets",
    description: "Short, copy-paste friendly examples for common UI tasks.",
  },
};

export function getCategoryContent(segments: string[]): CategoryPageContent | null {
  const key = segments.join("/");
  return categoryPages[key] ?? null;
}

export function filterJournalByDateSegments(
  entries: JournalEntry[],
  segments: string[] | undefined,
): JournalEntry[] {
  if (!segments?.length) return entries;
  const year = segments[0];
  const month = segments[1];
  return entries.filter((e) => {
    const d = new Date(e.date);
    if (year && String(d.getFullYear()) !== year) return false;
    if (month) {
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      if (mm !== month.padStart(2, "0")) return false;
    }
    return true;
  });
}
