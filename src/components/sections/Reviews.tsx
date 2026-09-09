import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { UsersIcon } from "@/components/icons";

export async function Reviews() {
  const t = await getTranslations("reviews");

  return (
    <section id="reviews" className="bg-yellow-50 py-20 sm:py-28">
      <Container>
        <FadeIn>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">{t("h2")}</h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-8">
          <div className="flex flex-col items-center gap-4 rounded-[14px] border border-dashed border-line bg-white px-8 py-16 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-800 text-white">
              <UsersIcon className="h-6 w-6" />
            </span>
            <p className="text-ink-soft">{t("comingSoon")}</p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
