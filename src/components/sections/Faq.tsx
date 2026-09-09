"use client";

import { clsx } from "clsx";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ChevronDownIcon } from "@/components/icons";

type Item = { question: string; answer: string };

export function Faq() {
  const t = useTranslations("faq");
  const items = t.raw("items") as Item[];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-yellow-50 py-20 sm:py-28">
      <Container className="max-w-3xl">
        <FadeIn>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            {t("h2")}
          </h2>
        </FadeIn>

        <div className="mt-10 space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <FadeIn key={item.question} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-line bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                  >
                    <span className="font-semibold text-ink">
                      {item.question}
                    </span>
                    <ChevronDownIcon
                      className={clsx(
                        "h-5 w-5 shrink-0 text-navy-800 transition-transform duration-200",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                  {isOpen && (
                    <p className="px-6 pb-5 text-ink-soft">{item.answer}</p>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
