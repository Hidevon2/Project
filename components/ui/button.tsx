import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50";
  const styles = {
    primary:
      "bg-accent text-accent-foreground shadow-sm hover:opacity-90",
    secondary:
      "border border-border bg-card text-foreground shadow-sm hover:bg-background",
    ghost: "text-foreground hover:bg-card",
  }[variant];
  return (
    <button
      type="button"
      className={`${base} ${styles} ${className}`}
      {...props}
    />
  );
}
