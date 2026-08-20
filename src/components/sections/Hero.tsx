import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-16 pb-24 sm:pt-24 sm:pb-32"
    >
      <div
        className="bg-dot-pattern pointer-events-none absolute top-8 left-4 h-40 w-40 opacity-70 sm:top-12 sm:left-10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-20 h-72 w-72 rounded-full bg-yellow-500/25"
        aria-hidden
      />

      <Container className="relative grid items-center gap-14 lg:grid-cols-2">
        <FadeIn>
          <h1 className="text-4xl leading-tight font-extrabold text-navy-900 sm:text-5xl lg:text-6xl">
            {t("h1")}
          </h1>
          <p className="mt-6 text-xl font-medium text-navy-700 sm:text-2xl">
            {t("lead")}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contacts"
              className="inline-flex items-center justify-center rounded-full bg-yellow-500 px-7 py-3.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-yellow-600"
            >
              {t("ctaPrimary")}
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border-2 border-navy-800 px-7 py-3.5 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-800 hover:text-white"
            >
              {t("ctaSecondary")}
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="relative">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="/images/hero-students.jpg"
              alt={t("lead")}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-8 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-navy-900 px-6 py-5 text-white shadow-xl sm:w-[75%]">
            <p className="font-script text-lg text-yellow-500 sm:text-xl">
              {t("note")}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
