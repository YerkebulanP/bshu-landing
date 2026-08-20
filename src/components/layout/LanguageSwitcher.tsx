import { routing } from "@/i18n/routing";

const LOCALE_LABELS: Record<string, string> = {
  ru: "RU",
  kk: "KZ",
  en: "EN",
};

export function LanguageSwitcher() {
  if (routing.locales.length <= 1) {
    return null;
  }

  return (
    <div className="flex items-center gap-1 text-sm font-medium text-ink-soft">
      {routing.locales.map((locale) => (
        <span key={locale}>{LOCALE_LABELS[locale] ?? locale}</span>
      ))}
    </div>
  );
}
