import { clsx } from "clsx";
import type { ReactNode } from "react";
import { FadeIn } from "./FadeIn";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <FadeIn
      className={clsx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            "mb-3 inline-block rounded-full px-4 py-1 text-xs font-bold tracking-wide uppercase",
            light ? "bg-white/15 text-yellow-500" : "bg-yellow-50 text-navy-800",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "text-3xl font-bold sm:text-4xl",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-4 text-lg",
            light ? "text-white/80" : "text-ink",
          )}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
