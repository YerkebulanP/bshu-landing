import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function Footer() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-14 sm:px-8 md:flex-row md:items-start md:justify-between md:gap-10">
        <div>
          <Link href="/" className="text-lg font-extrabold text-white">
            {t("tagline")}
          </Link>
          <p className="mt-3 max-w-sm text-sm">{t("description")}</p>
        </div>

        <div className="md:text-right">
          <p className="text-xs font-bold tracking-wide text-white/50 uppercase">
            {t("contactsTitle")}
          </p>
          <p className="mt-3 text-sm">
            <a href={`mailto:${t("email")}`} className="hover:text-white">
              {t("email")}
            </a>
          </p>
          <p className="text-sm">
            <a href={`tel:${t("phone")}`} className="hover:text-white">
              {t("phone")}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {year} {t("tagline")}. {t("rights")}.
      </div>
    </footer>
  );
}
