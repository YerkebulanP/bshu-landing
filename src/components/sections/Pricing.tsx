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
  Basic: "bg-blue-50 text-navy-900",
  Pro: "bg-navy-900 text-white",
  Enterprise: "bg-yellow-500 text-navy-900",
};

export async function Pricing() {
  const t = await getTranslations("pricing");
  const plans = t.raw("plans") as Plan[];

  return (
    <section id="pricing" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading title={t("h2")} subtitle={t("note")} align="center" />

        <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:items-start">
          {plans.map((plan, i) => {
            const isPro = plan.name === "Pro";
            return (
              <FadeIn key={plan.name} delay={i * 0.08} className="h-full">
                <div
                  className={clsx(
                    "flex h-full flex-col rounded-3xl border border-navy-900/10 shadow-sm",
                    isPro && "lg:-translate-y-4 lg:shadow-xl",
                  )}
                >
                  <div
                    className={clsx(
                      "relative rounded-t-3xl px-7 py-8",
                      HEADER_STYLES[plan.name],
                    )}
                  >
                    {isPro && (
                      <span className="absolute top-4 right-4 rounded-full bg-yellow-500 px-3 py-1 text-xs font-bold text-navy-900">
                        {t("recommended")}
                      </span>
                    )}
                    <h3 className="text-2xl font-extrabold">{plan.name}</h3>
                  </div>

                  <div className="flex flex-1 flex-col gap-6 px-7 py-8">
                    {plan.groups.map((group) => (
                      <div key={group.title}>
                        <p className="text-xs font-bold tracking-wide text-ink-soft uppercase">
                          {group.title}
                        </p>
                        <ul className="mt-3 space-y-2.5">
                          {group.items.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-sm">
                              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-navy-700" />
                              <span className="text-ink">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <a
                      href="#contacts"
                      className={clsx(
                        "mt-auto inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors",
                        isPro
                          ? "bg-yellow-500 text-navy-900 hover:bg-yellow-600"
                          : "border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white",
                      )}
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
