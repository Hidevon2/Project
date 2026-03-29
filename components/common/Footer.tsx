import Link from "next/link";

type FooterLink = { label: string; href: string };

const navigation: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const resources: FooterLink[] = [
  { label: "Category browser", href: "/category/guides/start" },
  { label: "Journal (date filter)", href: "/journal" },
  { label: "GitHub", href: "https://github.com/Hidevon2?tab=repositories" },
];

const legal: FooterLink[] = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Cookies", href: "#" },
  { label: "Accessibility", href: "#" },
];

const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter / X", href: "https://twitter.com" },
];

function LinkColumn({
  title,
  items,
}: {
  title: string;
  items: FooterLink[];
}) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Home-style footer: three text columns (mockup 2). */
export function FooterHome() {
  return (
    <footer className="mt-20 w-full border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="mb-3 text-sm font-semibold text-foreground">
            Quick links
          </p>
          <ul className="space-y-3">
            {navigation.map((item) => (
              <li key={item.href} className="flex items-start gap-2">
                <span
                  className="mt-1.5 h-3 w-3 shrink-0 rounded border border-border bg-background"
                  aria-hidden
                />
                <Link
                  href={item.href}
                  className="text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-foreground">Resources</p>
          <ul className="space-y-2">
            {resources.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-foreground">Legal</p>
          <ul className="space-y-2">
            {legal.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} Portfolio. Built with Next.js.
      </div>
    </footer>
  );
}

/** Portfolio page footer: four columns incl. social icons column (mockup 1). */
export function FooterPortfolio() {
  return (
    <footer className="mt-20 w-full border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
        <LinkColumn title="Navigation" items={navigation} />
        <LinkColumn title="Resources" items={resources} />
        <LinkColumn title="Legal" items={legal} />
        <div className="space-y-3">
          <p className="text-sm font-semibold text-foreground">Social</p>
          <ul className="flex flex-col gap-4">
            {socials.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-xs font-medium text-foreground shadow-sm hover:border-accent"
                  aria-label={item.label}
                >
                  {item.label.slice(0, 1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} Portfolio.
      </div>
    </footer>
  );
}
