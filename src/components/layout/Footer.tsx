import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function Footer() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  const links = [
    { href: "#about", label: t("about") },
    { href: "#pricing", label: t("pricing") },
    { href: "#cases", label: t("cases") },
    { href: "#contacts", label: t("contacts") },
  ];

  return (
    <footer className="bg-navy-900 text-white/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-14 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <Link href="/" className="text-lg font-extrabold text-white">
            {t("tagline")}
          </Link>
          <p className="mt-3 text-sm">{t("email")}</p>
          <p className="text-sm">{t("phone")}</p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-white/50">
            {t("linksTitle")}
          </p>
          <ul className="mt-3 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {year} {t("tagline")}. {t("rights")}.
      </div>
    </footer>
  );
}
