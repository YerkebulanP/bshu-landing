import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  BadgeCheckIcon,
  ChevronRightIcon,
  DocumentIcon,
  LightbulbIcon,
  TrophyIcon,
  UsersIcon,
} from "@/components/icons";

type Step = { title: string; text: string };

const ICONS = [LightbulbIcon, DocumentIcon, BadgeCheckIcon, UsersIcon, TrophyIcon];

export async function HowItWorks() {
  const t = await getTranslations("howItWorks");
  const steps = t.raw("steps") as Step[];
  const bold = (chunks: ReactNode) => (
    <strong className="font-bold">{chunks}</strong>
  );

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <FadeIn>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">{t("h2")}</h2>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-5 sm:gap-5">
          {steps.map((step, i) => {
            const Icon = ICONS[i % ICONS.length];
            const isLast = i === steps.length - 1;
            return (
              <FadeIn key={step.title} delay={i * 0.08} className="relative">
                <div className="flex h-full flex-col gap-2 rounded-[14px] border border-line bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-800 text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-base font-bold text-ink">{step.title}</h3>
                  <p className="text-sm text-ink-soft">
                    {t.rich(`steps.${i}.text`, { b: bold })}
                  </p>
                </div>

                {!isLast && (
                  <div
                    className="absolute top-11 -right-[27px] z-10 hidden items-center text-navy-800 sm:flex"
                    aria-hidden
                  >
                    <span className="h-px w-3.5 border-t-2 border-dashed border-current" />
                    <ChevronRightIcon className="h-3.5 w-3.5" />
                  </div>
                )}
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
