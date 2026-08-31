import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function UserIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1.2-3.6 4-5.5 7.5-5.5s6.3 1.9 7.5 5.5" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 5 6v5.5c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-2.5Z" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 5 6v5.5c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-2.5Z" />
      <path d="m9.3 12 1.9 1.9 3.5-3.8" />
    </svg>
  );
}

export function GearIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M19.4 13.5a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.04 1.56V19.5a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1.04-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.04H4.5a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.56-1.04 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H10.6a1.7 1.7 0 0 0 1.04-1.56V4.5a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1.04 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V10.6c.14.7.63 1.28 1.56 1.04h.4a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.56 1.04Z" />
    </svg>
  );
}

export function LightbulbIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.2h5c0-.9.4-1.7 1.1-2.2A6 6 0 0 0 12 3Z" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="8.5" cy="8" r="3" />
      <circle cx="16" cy="9" r="2.5" />
      <path d="M2.8 19c1-3 3.3-4.6 5.7-4.6s4.7 1.6 5.7 4.6" />
      <path d="M14.5 14.7c2 .1 3.9 1.6 4.7 4.3" />
    </svg>
  );
}

export function MinusCircleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h8" />
    </svg>
  );
}

export function TrophyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
      <path d="M7 5H4v1a4 4 0 0 0 4 4" />
      <path d="M17 5h3v1a4 4 0 0 1-4 4" />
      <path d="M12 13v3" />
      <path d="M8.5 20h7" />
      <path d="M9.5 16.5h5l.6 3.5H8.9l.6-3.5Z" />
    </svg>
  );
}

export function MedalIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="15" r="5.5" />
      <path d="m9 3 3 6 3-6" />
      <path d="M10.2 13.5 12 12l1.8 1.5" />
    </svg>
  );
}

export function BadgeCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m12 3 2.3 1.2 2.6-.2 1 2.4 2.1 1.5-.6 2.5.6 2.5-2.1 1.5-1 2.4-2.6-.2L12 18l-2.3-1.4-2.6.2-1-2.4-2.1-1.5.6-2.5-.6-2.5 2.1-1.5 1-2.4 2.6.2L12 3Z" />
      <path d="m9.3 12 1.9 1.9 3.5-3.8" />
    </svg>
  );
}

export function BookOpenIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 6.5c-1.6-1.3-3.8-1.8-6.5-1.8v13c2.7 0 4.9.5 6.5 1.8" />
      <path d="M12 6.5c1.6-1.3 3.8-1.8 6.5-1.8v13c-2.7 0-4.9.5-6.5 1.8V6.5Z" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m12 3.5 2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L3.4 9.8l6-.8L12 3.5Z" />
    </svg>
  );
}

export function CoinsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="9" cy="7.5" rx="5.5" ry="3" />
      <path d="M3.5 7.5V13c0 1.66 2.46 3 5.5 3s5.5-1.34 5.5-3V7.5" />
      <path d="M3.5 10.25c0 1.66 2.46 3 5.5 3" />
      <path d="M14.5 10c2.9.2 5 1.4 5 2.9 0 1.5-2.1 2.7-5 2.9" />
      <path d="M14.5 15.9c2.9.2 5 1.4 5 2.9 0 1.66-2.46 3-5.5 3s-5.5-1.34-5.5-3" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h16" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m4 12 5.5 5.5L20 7" />
    </svg>
  );
}
