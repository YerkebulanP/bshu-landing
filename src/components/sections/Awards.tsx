import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { BadgeCheckIcon, MedalIcon, TrophyIcon } from "@/components/icons";

const ICONS = [TrophyIcon, MedalIcon, BadgeCheckIcon];

export async function Awards() {
  const t = await getTranslations("awards");
  const items = t.raw("items") as { title: string; text: string }[];

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <FadeIn className="max-w-3xl">
          <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">
            {t("h2")}{" "}
            <span className="text-lg font-normal text-ink-soft">
              ({t("note")})
            </span>
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-blue-50/50 p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-navy-900">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-ink-soft">{item.text}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.25} className="mt-12">
          <div className="rounded-3xl bg-yellow-500 px-8 py-7 text-center">
            <p className="font-script text-2xl text-navy-900 sm:text-3xl">
              «{t("slogan")}»
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
