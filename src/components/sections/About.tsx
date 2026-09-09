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
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <FadeIn className="relative">
            <div
              className="absolute top-6 -left-10 -z-10 h-[75%] w-[110%] rounded-[140px] bg-blue-50"
              aria-hidden
            />
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/problem-classroom.jpg"
                alt={t("h2")}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
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
