import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { BookOpenIcon, CoinsIcon, StarIcon, TrophyIcon } from "@/components/icons";

const ICONS = [TrophyIcon, BookOpenIcon, StarIcon, CoinsIcon];

export async function Advantages() {
  const t = await getTranslations("advantages");
  const items = t.raw("items") as { title: string; text: string }[];

  return (
    <section className="bg-yellow-50 py-20 sm:py-28">
      <Container>
        <SectionHeading title={t("h2")} className="mb-8" />

        <div className="grid gap-5 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-white px-5 py-5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                  <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-navy-800 text-white">
                    <Icon className="h-[30px] w-[30px]" />
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-ink-soft">{item.text}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
