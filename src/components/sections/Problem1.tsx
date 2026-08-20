import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { UserIcon } from "@/components/icons";

export async function Problem1() {
  const t = await getTranslations("problem1");

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading title={t("h2")} subtitle={t("subtitle")} />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <FadeIn delay={0.05}>
            <div className="h-full rounded-3xl border-2 border-yellow-500 bg-yellow-50/40 p-8">
              <h3 className="text-xl font-bold text-navy-900">
                {t("card1.title")}
              </h3>
              <p className="mt-3 text-ink-soft">{t("card1.text")}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="h-full rounded-3xl border-2 border-navy-700 bg-blue-50/50 p-8">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-navy-800 text-white">
                <UserIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900">
                {t("card2.title")}
              </h3>
              <p className="mt-3 text-ink-soft">{t("card2.text")}</p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
