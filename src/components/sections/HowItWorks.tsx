import type { ReactNode } from "react";
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

function DashedArrowConnector() {
  return (
    <svg viewBox="0 0 24 10" className="h-2.5 w-6 text-navy-800" fill="none" aria-hidden>
      <line
        x1="0"
        y1="5"
        x2="16"
        y2="5"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="3.5 3.5"
        strokeLinecap="round"
      />
      <path
        d="M14.5 1 21 5l-6.5 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

        {/* Flex-ряд: карточки и стрелки — соседние элементы одного потока,
            поэтому стрелка физически не может наехать на карточку — она
            просто занимает своё небольшое место между ними. */}
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-stretch sm:gap-0">
          {steps.map((step, i) => {
            const Icon = ICONS[i % ICONS.length];
            const isLast = i === steps.length - 1;
            return (
              <Fragment key={step.title}>
                <FadeIn delay={i * 0.08} className="min-w-0 flex-1">
                  <div className="flex h-full flex-col gap-3 rounded-[14px] border border-line bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-800 text-white">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="text-base font-bold text-ink">{step.title}</h3>
                    </div>
                    <p className="text-sm text-ink-soft">
                      {t.rich(`steps.${i}.text`, { b: bold })}
                    </p>
                  </div>
                </FadeIn>

                {!isLast && (
                  <div
                    className="hidden w-6 shrink-0 items-start justify-center pt-[110px] sm:flex"
                    aria-hidden
                  >
                    <DashedArrowConnector />
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
