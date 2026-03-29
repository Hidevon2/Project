import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  variant?: "card" | "hero";
};

export function ProjectCoverImage({ src, alt, variant = "card" }: Props) {
  const aspect = variant === "hero" ? "aspect-[16/10]" : "aspect-video";
  const spacing = variant === "hero" ? "" : "mb-3";
  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg border border-border bg-muted ${aspect} ${spacing}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
        sizes={
          variant === "hero"
            ? "(max-width: 768px) 100vw, 720px"
            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
        }
      />
    </div>
  );
}
