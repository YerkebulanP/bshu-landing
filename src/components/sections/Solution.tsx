import { clsx } from "clsx";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export async function Solution() {
  const t = await getTranslations("solution");
  const steps = t.raw("steps") as string[];

  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-28">
      <Container>
        <FadeIn className="max-w-3xl">
          <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">
            {t("h2")}
          </h2>
          <p className="mt-4 text-lg text-ink-soft">{t("description")}</p>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <FadeIn key={step} delay={i * 0.08}>
                <div
                  className={clsx(
                    "flex h-full flex-col gap-4 rounded-2xl p-6",
                    isLast
                      ? "border-2 border-navy-800 bg-navy-800 text-white"
                      : "border border-navy-900/10 bg-blue-50/40",
                  )}
                >
                  <span
                    className={clsx(
                      "flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold",
                      isLast ? "bg-yellow-500 text-navy-900" : "bg-navy-800 text-white",
                    )}
                  >
                    {i + 1}
                  </span>
                  <p className={clsx("font-medium", isLast ? "text-white" : "text-ink")}>
                    {step}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
