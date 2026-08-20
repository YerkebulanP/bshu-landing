import { clsx } from "clsx";

export function WaveDivider({
  className,
  fill = "#EAF2FB",
  flip = false,
}: {
  className?: string;
  fill?: string;
  flip?: boolean;
}) {
  return (
    <div className={clsx("pointer-events-none w-full overflow-hidden leading-none", className)} aria-hidden>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={clsx("h-16 w-full sm:h-20", flip && "rotate-180")}
      >
        <path
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,88 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
