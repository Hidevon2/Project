export function ContactSayHiSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <p className="text-lg font-semibold text-foreground">Say hi!</p>
        <div className="my-4 h-px w-full bg-border" />
        <p className="flex items-center gap-2 text-sm text-muted">
          <span aria-hidden>✉</span>
          <a
            href="mailto:hello@example.com"
            className="text-foreground underline-offset-4 hover:underline"
          >
            devondescipulo10@gmail.com
          </a>
        </p>
        <div className="my-4 h-px w-full bg-border" />
        <a
          href=""
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-xs font-medium text-foreground hover:border-accent"
        >
          <span className="h-4 w-4 rounded border border-border bg-card" aria-hidden />
          Schedule
        </a>
      </div>
    </section>
  );
}
