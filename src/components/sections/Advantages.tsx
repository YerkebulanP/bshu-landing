import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { LightbulbIcon, ShieldCheckIcon, UsersIcon } from "@/components/icons";

const ICONS = [LightbulbIcon, ShieldCheckIcon, UsersIcon];

export async function Advantages() {
  const t = await getTranslations("advantages");
  const items = t.raw("items") as { title: string; text: string }[];

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading title={t("h2")} className="mb-8" />

        <div className="grid gap-5 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <FadeIn key={item.title} delay={i * 0.06}>
                <div className="h-full rounded-[14px] border border-line bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-800 text-white">
                    <Icon className="h-5 w-5" />
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
