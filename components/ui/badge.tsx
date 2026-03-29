import type { HTMLAttributes } from "react";

export function Badge({
  className = "",
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground ${className}`}
      {...props}
    />
  );
}
