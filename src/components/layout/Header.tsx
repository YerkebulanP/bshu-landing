import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

export async function Header() {
  const t = await getTranslations("nav");

  const links = [
    { href: "#about", label: t("about") },
    { href: "#how-it-works", label: t("howItWorks") },
    { href: "#platform", label: t("platform") },
    { href: "#cases", label: t("cases") },
    { href: "#pricing", label: t("pricing") },
    { href: "#contacts", label: t("contacts") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-navy-900">
          {t("logo")}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-navy-800"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#contacts"
            className="inline-flex items-center justify-center rounded-full bg-yellow-500 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-yellow-600"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </header>
  );
}
