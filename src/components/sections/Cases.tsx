import { clsx } from "clsx";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const CASE_IMAGES = [
  "/images/case-cozy.png",
  "/images/case-green.png",
  "/images/case-chess.png",
  "/images/case-bike.png",
];

export async function Cases() {
  const t = await getTranslations("cases");
  const items = t.raw("items") as { title: string; text: string }[];

  return (
    <section id="cases" className="bg-blue-50/50 py-20 sm:py-28">
      <Container>
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-wide text-navy-900 uppercase sm:text-4xl">
            {t("h2")}
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.06}>
              <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm sm:flex-row">
                <div className="relative h-40 w-full shrink-0 sm:h-auto sm:w-2/5">
                  <Image
                    src={CASE_IMAGES[i % CASE_IMAGES.length]}
                    alt={item.title}
                    fill
                    sizes="(min-width: 640px) 20vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className={clsx(
                    "flex flex-1 flex-col justify-center p-6",
                    i % 2 === 0 ? "bg-yellow-50/60" : "bg-blue-50/60",
                  )}
                >
                  <h3 className="text-lg font-bold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-ink-soft">{item.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
