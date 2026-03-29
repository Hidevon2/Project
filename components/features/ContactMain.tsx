import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ContactFormSection } from "@/components/features/ContactForm";

const contactRows = [
  { label: "Phone", value: "+63 992 790 6590" },
  { label: "Email", value: "devondescipulo10@gmail.com" },
  { label: "Location", value: "Poblacion Cordova Cebu" },
];

export function ContactMainSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <ContactFormSection />
        <div className="space-y-4">
          {contactRows.map((row) => (
            <Card key={row.label} className="flex items-center gap-3">
              <span
                className="h-10 w-10 shrink-0 rounded-lg border border-border bg-background"
                aria-hidden
              />
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted">
                  {row.label}
                </p>
                <p className="text-sm text-foreground">{row.value}</p>
              </div>
            </Card>
          ))}
          <Card className="space-y-3">
            <div className="flex items-start gap-3">
              <span
                className="h-10 w-10 shrink-0 rounded-lg border border-border bg-background"
                aria-hidden
              />
              <div>
                <p className="text-sm font-semibold text-foreground">Profile</p>
                <p className="text-sm text-muted">
                  follow me on my facebookaccount for forbiden Projects.
                </p>
              </div>
            </div>
            <div className="flex justify-center pt-2">
              <Link
                href="https://www.facebook.com/de.zyqj3/"
                className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground hover:border-accent"
              >
                Follow
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
