import type { ReactNode } from "react";
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
    <svg
      viewBox="0 0 40 12"
      className="h-3 w-10 text-navy-800"
      fill="none"
      aria-hidden
    >
      <line
        x1="1"
        y1="6"
        x2="30"
        y2="6"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 4"
        strokeLinecap="round"
      />
      <path
        d="M27 1.5 34.5 6 27 10.5"
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

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-5 sm:gap-5">
          {steps.map((step, i) => {
            const Icon = ICONS[i % ICONS.length];
            const isLast = i === steps.length - 1;
            return (
              <FadeIn key={step.title} delay={i * 0.08} className="relative">
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

                {/* Иконка (48px) всегда выше строки заголовка, поэтому её
                    центр стабильно на padding(20px) + 24px = 44px от верха
                    карточки — независимо от того, в 1 или 2 строки ушёл title. */}
                {!isLast && (
                  <div className="absolute top-[38px] -right-[33px] z-10 hidden sm:block">
                    <DashedArrowConnector />
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
