import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { GearIcon, ShieldIcon, UserIcon } from "@/components/icons";

const ICONS = [ShieldIcon, UserIcon, GearIcon];
const ICON_TONES = ["bg-navy-800", "bg-yellow-500", "bg-navy-700"];

export async function Platform() {
  const t = await getTranslations("platform");
  const items = t.raw("items") as { title: string; text: string }[];

  return (
    <section id="platform" className="bg-blue-50/50 py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <div className="relative rounded-[1.75rem] bg-navy-900 p-4 shadow-2xl sm:p-5">
            <div className="flex items-center gap-1.5 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
            </div>
            <div className="aspect-video rounded-xl bg-gradient-to-br from-navy-700 to-navy-800" />

            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white px-5 py-4 shadow-lg">
              <p className="text-xs font-semibold text-ink-soft">
                {t("accessCard.label")}
              </p>
              <p className="mt-1 font-mono text-lg font-bold text-navy-900">
                {t("accessCard.code")}
              </p>
            </div>
          </div>
        </FadeIn>

        <div>
          <SectionHeading title={t("h2")} className="mb-8" />

          <div className="space-y-6">
            {items.map((item, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <FadeIn key={item.title} delay={i * 0.08}>
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white ${ICON_TONES[i % ICON_TONES.length]}`}
                    >
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
      </Container>
    </section>
  );
}
