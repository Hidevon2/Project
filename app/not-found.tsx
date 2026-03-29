import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <p className="text-sm font-medium text-muted">404</p>
      <h1 className="mt-2 text-2xl font-bold text-foreground">Page not found</h1>
      <Link
        href="/"
        className="mt-6 text-sm font-medium text-accent underline-offset-4 hover:underline"
      >
        Back to home
      </Link>
    </div>
  );
}
