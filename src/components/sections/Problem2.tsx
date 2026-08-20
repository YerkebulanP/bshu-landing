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
    <section className="bg-blue-50/60 py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <SectionHeading title={t("h2")} subtitle={t("subtitle")} />

          <ul className="mt-10 space-y-5">
            {items.map((item, i) => (
              <FadeIn key={item} delay={i * 0.06}>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-navy-900">
                    <MinusCircleIcon className="h-5 w-5" />
                  </span>
                  <span className="text-ink">{item}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <FadeIn delay={0.1}>
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-sm">
              <Image
                src="/images/problem-classroom.jpg"
                alt={t("subtitle")}
                fill
                sizes="(min-width: 1024px) 35vw, 90vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-3xl bg-green-50 p-8 shadow-sm">
              <p className="text-lg leading-relaxed font-semibold text-accent-rose">
                {t("highlight")}
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
