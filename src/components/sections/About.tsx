import type { ReactNode } from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export async function About() {
  const t = await getTranslations("about");
  const items = t.raw("items") as string[];
  const bold = (chunks: ReactNode) => (
    <strong className="font-bold">{chunks}</strong>
  );

  return (
    <section className="bg-yellow-50 py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <FadeIn className="relative aspect-[3/2] w-full scale-[1.15]">
            <Image
              src="/images/Union.png"
              alt=""
              fill
              aria-hidden
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-contain"
            />
            <Image
              src="/images/о-проекте-мальчики-девочки.png"
              alt={t("h2")}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-contain"
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              {t("h2")}
            </h2>

            <p className="mt-3 text-ink">{t("intro1")}</p>
            <p className="mt-3 text-ink">{t.rich("intro2", { b: bold })}</p>
            <p className="mt-3 text-ink">{t("intro3")}</p>

            <ul className="mt-4 space-y-2">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="h-[26px] w-[26px] shrink-0 rounded-full border-2 border-navy-800" />
                  <span className="text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
