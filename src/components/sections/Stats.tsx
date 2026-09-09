import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

type Stat = { value: string; label: string };

export async function Stats() {
  const t = await getTranslations("stats");
  const items = t.raw("items") as Stat[];

  return (
    <section className="bg-yellow-50 py-16 sm:py-20">
      <Container>
        <FadeIn>
          <h2 className="text-center text-3xl font-bold text-ink sm:text-4xl">
            {t("h2")}
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {items.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08}>
              <div className="flex h-full flex-col items-center justify-center rounded-lg bg-white py-9 text-center shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                <p className="text-6xl font-bold text-navy-800 sm:text-7xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xl text-ink">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
