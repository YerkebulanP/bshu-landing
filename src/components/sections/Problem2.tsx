import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { MinusCircleIcon } from "@/components/icons";

export async function Problem2() {
  const t = await getTranslations("problem2");
  const items = t.raw("items") as string[];

  return (
    <section className="bg-yellow-50 py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading title={t("h2")} subtitle={t("subtitle")} />

            <ul className="mt-10 space-y-3.5">
              {items.map((item, i) => (
                <FadeIn key={item} delay={i * 0.06}>
                  <li className="flex items-center gap-4">
                    <MinusCircleIcon className="mt-0.5 h-[30px] w-[30px] shrink-0 text-navy-800" />
                    <span className="text-ink">{item}</span>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>

          <FadeIn delay={0.15}>
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/problem-classroom.jpg"
                alt={t("subtitle")}
                fill
                sizes="(min-width: 1024px) 35vw, 90vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.25} className="mt-9">
          <div className="rounded-2xl border border-line bg-white px-8 py-6 text-center shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            <p className="text-xl leading-relaxed font-bold text-ink">
              {t("highlight")}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
