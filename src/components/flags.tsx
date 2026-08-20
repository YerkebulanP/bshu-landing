import type { SVGProps } from "react";

type FlagProps = SVGProps<SVGSVGElement>;
const clip = { rx: 4, width: 28, height: 20 };

export function FlagPT(props: FlagProps) {
  return (
    <svg viewBox="0 0 28 20" width={28} height={20} {...props}>
      <rect {...clip} fill="#fff" />
      <clipPath id="pt-clip">
        <rect {...clip} />
      </clipPath>
      <g clipPath="url(#pt-clip)">
        <rect width="11" height="20" fill="#0B6E4F" />
        <rect x="11" width="17" height="20" fill="#D0342C" />
        <circle cx="11" cy="10" r="3.4" fill="#F5B921" stroke="#0B6E4F" strokeWidth="0.6" />
      </g>
    </svg>
  );
}

export function FlagFR(props: FlagProps) {
  return (
    <svg viewBox="0 0 28 20" width={28} height={20} {...props}>
      <clipPath id="fr-clip">
        <rect {...clip} />
      </clipPath>
      <g clipPath="url(#fr-clip)">
        <rect width="28" height="20" fill="#fff" />
        <rect width="9.3" height="20" fill="#0055A4" />
        <rect x="18.6" width="9.4" height="20" fill="#EF4135" />
      </g>
    </svg>
  );
}

export function FlagKR(props: FlagProps) {
  return (
    <svg viewBox="0 0 28 20" width={28} height={20} {...props}>
      <clipPath id="kr-clip">
        <rect {...clip} />
      </clipPath>
      <g clipPath="url(#kr-clip)">
        <rect width="28" height="20" fill="#fff" />
        <circle cx="14" cy="10" r="4.2" fill="#CD2E3A" />
        <path
          d="M14 5.8a4.2 4.2 0 0 1 0 8.4 2.1 2.1 0 0 1 0-4.2 2.1 2.1 0 0 0 0-4.2Z"
          fill="#0047A0"
        />
      </g>
    </svg>
  );
}

export function FlagUS(props: FlagProps) {
  return (
    <svg viewBox="0 0 28 20" width={28} height={20} {...props}>
      <clipPath id="us-clip">
        <rect {...clip} />
      </clipPath>
      <g clipPath="url(#us-clip)">
        <rect width="28" height="20" fill="#fff" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect key={i} y={i * (20 / 13) * 2} width="28" height={20 / 13} fill="#B22234" />
        ))}
        <rect width="12" height="10.8" fill="#3C3B6E" />
      </g>
    </svg>
  );
}
