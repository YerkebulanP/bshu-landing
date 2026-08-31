import { clsx } from "clsx";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { CheckIcon } from "@/components/icons";

type Plan = {
  name: string;
  groups: { title: string; items: string[] }[];
};

const HEADER_STYLES: Record<string, string> = {
  Basic: "bg-blue-50 text-ink",
  Pro: "bg-navy-800 text-white",
  Enterprise: "bg-navy-600 text-white",
};

export async function Pricing() {
  const t = await getTranslations("pricing");
  const plans = t.raw("plans") as Plan[];

  return (
    <section id="pricing" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading title={t("h2")} subtitle={t("note")} align="center" />

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-start">
          {plans.map((plan, i) => {
            const isPro = plan.name === "Pro";
            return (
              <FadeIn key={plan.name} delay={i * 0.08} className="h-full">
                <div
                  className={clsx(
                    "flex h-full flex-col overflow-hidden rounded-[14px] border border-line",
                    isPro
                      ? "shadow-[0_8px_10px_rgba(0,0,0,0.1),0_2px_10px_rgba(0,0,0,0.05)]"
                      : "shadow-[0_2px_10px_rgba(0,0,0,0.05)]",
                  )}
                >
                  <div
                    className={clsx(
                      "flex items-center justify-between gap-3 px-[18px] py-4",
                      HEADER_STYLES[plan.name],
                    )}
                  >
                    <h3 className="text-xl font-extrabold">{plan.name}</h3>
                    {isPro && (
                      <span className="inline-flex items-center rounded-full border border-navy-700 bg-green-50 px-4 py-1.5 text-[13px] font-medium text-navy-700">
                        {t("recommended")}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col gap-4 px-[18px] py-8">
                    {plan.groups.map((group) => (
                      <div key={group.title}>
                        <p className="text-sm font-semibold tracking-wide text-ink uppercase">
                          {group.title}
                        </p>
                        <ul className="mt-2.5 space-y-2.5">
                          {group.items.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-sm">
                              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-navy-800" />
                              <span className="text-ink-soft">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <a
                      href="#contacts"
                      className="mt-auto inline-flex items-center justify-center rounded-full border border-navy-800 bg-yellow-50 px-9 py-3 text-base text-navy-800 transition-colors hover:bg-navy-800 hover:text-white"
                    >
                      {t("cta")}
                    </a>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
