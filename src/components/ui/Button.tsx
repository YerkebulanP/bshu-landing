import { clsx } from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 whitespace-nowrap";

const variants = {
  primary: "bg-navy-800 text-white hover:bg-navy-700",
  outline: "border-2 border-white/70 text-white hover:bg-white/10",
  outlineNavy: "border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white",
  dark: "bg-navy-800 text-white hover:bg-navy-700",
};

type Variant = keyof typeof variants;

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button className={clsx(base, variants[variant], className)} {...props} />
  );
}

export function LinkButton({
  variant = "primary",
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  return (
    <a className={clsx(base, variants[variant], className)} {...props} />
  );
}
