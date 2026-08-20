import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { LightbulbIcon, ShieldCheckIcon, UsersIcon } from "@/components/icons";

export async function Results() {
  const t = await getTranslations("results");

  const cards = [
    { key: "students", icon: UsersIcon },
    { key: "school", icon: ShieldCheckIcon },
    { key: "system", icon: LightbulbIcon },
  ] as const;

  return (
    <section className="bg-blue-50/50 py-20 sm:py-28">
      <Container>
        <SectionHeading title={t("h2")} align="center" />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map(({ key, icon: Icon }, i) => (
            <FadeIn key={key} delay={i * 0.08}>
              <div className="h-full rounded-3xl bg-white p-7 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-800 text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy-900">
                  {t(`${key}.title`)}
                </h3>
                <p className="mt-2 text-ink-soft">{t(`${key}.text`)}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25} className="mt-12">
          <div className="rounded-3xl border-2 border-navy-800 bg-white px-8 py-7 text-center">
            <p className="font-script text-2xl text-navy-800 sm:text-3xl">
              «{t("quote")}»
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
