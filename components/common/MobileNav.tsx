"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/projects", label: "Project" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="rounded-lg border border-border px-3 py-2 text-xs font-medium text-foreground"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
      >
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <nav
          id="mobile-nav-panel"
          className="absolute right-0 top-full z-50 mt-2 flex min-w-[12rem] flex-col gap-1 rounded-xl border border-border bg-card p-3 shadow-lg"
          aria-label="Mobile"
        >
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-background"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
