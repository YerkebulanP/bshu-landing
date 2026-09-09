import { clsx } from "clsx";
import type { ReactNode } from "react";

/**
 * Decorative browser-window frame used as a placeholder for product
 * screenshots. Swap `children` for a real `<Image>` once final UI
 * captures are available.
 */
export function BrowserMockup({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "overflow-hidden rounded-[2rem] bg-white",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-line bg-[#F5F6F4] px-6 py-4">
        <span className="h-3 w-3 rounded-full bg-[#373737]" />
        <span className="h-3 w-3 rounded-full bg-[#8D8D8D]" />
        <span className="h-3 w-3 rounded-full bg-[#8D8D8D]" />
      </div>
      <div className="aspect-4/3 bg-gradient-to-br from-blue-50 via-white to-green-50">
        {children}
      </div>
    </div>
  );
}
