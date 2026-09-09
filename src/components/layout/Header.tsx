import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NAV_ITEMS = [
  { href: "#about", key: "about" },
  { href: "#platform", key: "platform" },
  { href: "#projects", key: "projects" },
  { href: "#reviews", key: "reviews" },
  { href: "#contacts", key: "contacts" },
] as const;

export async function Header() {
  const t = await getTranslations("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="font-nav text-lg font-extrabold tracking-tight text-navy-800">
          {t("logo")}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map(({ href, key }) => (
            <a
              key={key}
              href={href}
              className="font-nav text-sm font-medium text-ink transition-colors hover:text-navy-800"
            >
              {t(key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#login"
            className="inline-flex items-center justify-center rounded-full bg-navy-800 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-700"
          >
            {t("login")}
          </a>
        </div>
      </div>
    </header>
  );
}
