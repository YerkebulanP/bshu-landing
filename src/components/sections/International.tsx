import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { TrophyIcon } from "@/components/icons";
import { FlagFR, FlagKR, FlagPT, FlagUS } from "@/components/flags";

type Country = {
  code: "PT" | "FR" | "KR" | "US";
  name: string;
  text: string;
  fact: string;
};

const FLAGS = { PT: FlagPT, FR: FlagFR, KR: FlagKR, US: FlagUS };

export async function International() {
  const t = await getTranslations("international");
  const countries = t.raw("countries") as Country[];

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <FadeIn className="max-w-3xl">
          <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">
            {t("h2")}
          </h2>
          <p className="mt-4 text-lg text-ink-soft">{t("intro")}</p>
        </FadeIn>

        <div className="mt-12 space-y-4">
          {countries.map((country, i) => {
            const Flag = FLAGS[country.code];
            return (
            <FadeIn key={country.name} delay={i * 0.06}>
              <div className="flex flex-col gap-4 rounded-2xl border border-navy-900/10 p-6 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3 sm:w-56 sm:shrink-0">
                  <Flag className="shrink-0 rounded shadow-sm ring-1 ring-navy-900/10" />
                  <span className="text-lg font-bold text-navy-900">
                    {country.name}
                  </span>
                </div>
                <div>
                  <p className="text-ink-soft">{country.text}</p>
                  <p className="mt-1 font-bold text-yellow-600">
                    {country.fact}
                  </p>
                </div>
              </div>
            </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.2} className="mt-10">
          <div className="flex items-center gap-4 rounded-3xl bg-navy-900 px-8 py-7">
            <TrophyIcon className="h-9 w-9 shrink-0 text-yellow-500" />
            <p className="font-script text-xl text-white sm:text-2xl">
              «{t("quote")}»
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
