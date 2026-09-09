import { Fragment } from "react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  BadgeCheckIcon,
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

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <FadeIn>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">{t("h2")}</h2>
        </FadeIn>

        <div className="mt-10 flex flex-col items-stretch gap-6 sm:flex-row sm:items-center sm:gap-0">
          {steps.map((step, i) => {
            const Icon = ICONS[i % ICONS.length];
            const isLast = i === steps.length - 1;
            return (
              <Fragment key={step.title}>
                <FadeIn delay={i * 0.08} className="flex-1">
                  <div className="flex h-full flex-col gap-2 rounded-[14px] border border-line bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-800 text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-base font-bold text-ink">{step.title}</h3>
                    <p className="text-sm text-ink-soft">{step.text}</p>
                  </div>
                </FadeIn>

                {!isLast && (
                  <div
                    className="mx-auto hidden h-px w-6 shrink-0 border-t-2 border-dashed border-navy-800 sm:block"
                    aria-hidden
                  />
                )}
              </Fragment>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
