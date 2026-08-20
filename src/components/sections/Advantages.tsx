import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { LightbulbIcon, ShieldCheckIcon, UsersIcon } from "@/components/icons";

const ICONS = [LightbulbIcon, UsersIcon, ShieldCheckIcon];

export async function Advantages() {
  const t = await getTranslations("advantages");
  const items = t.raw("items") as { title: string; text: string }[];

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading title={t("h2")} className="mb-8" />

          <div className="space-y-6">
            {items.map((item, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <FadeIn key={item.title} delay={i * 0.08}>
                  <div className="flex items-start gap-4 rounded-2xl border border-navy-900/10 p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-800 text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-bold text-navy-900">{item.title}</h3>
                      <p className="mt-1 text-ink-soft">{item.text}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        <FadeIn delay={0.15}>
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-[2rem] shadow-lg">
            <Image
              src="/images/advantages-notes.jpg"
              alt={t("h2")}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
