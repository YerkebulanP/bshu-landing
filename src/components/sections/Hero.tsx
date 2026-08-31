import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-white pt-16 pb-24 sm:pt-24 sm:pb-32"
    >
      {/* декоративные размытые пятна — «аврора» */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute top-[-20%] right-[-30%] h-[410px] w-[715px] rounded-full bg-blue-50 blur-[80px]" />
        <div className="absolute top-[15%] right-[-25%] h-[220px] w-[420px] rotate-[85deg] rounded-full bg-navy-600 blur-[80px]" />
        <div className="absolute top-[-25%] left-[-30%] h-[410px] w-[715px] rounded-full bg-blue-50 blur-[80px]" />
        <div className="absolute top-[-8%] left-[-15%] h-[165px] w-[245px] rounded-full bg-navy-700 blur-[80px]" />
      </div>

      <Container className="relative grid items-center gap-14 lg:grid-cols-2">
        <FadeIn>
          <h1 className="text-4xl leading-[1.05] font-extrabold text-ink sm:text-5xl lg:text-[60px]">
            {t("h1")}
          </h1>
          <p className="mt-6 text-xl text-ink sm:text-2xl">{t("lead")}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#platform"
              className="inline-flex items-center justify-center rounded-full bg-navy-800 px-9 py-3 text-lg font-semibold text-white transition-colors hover:bg-navy-700"
            >
              {t("ctaPrimary")}
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="relative">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-[2rem] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]">
            <Image
              src="/images/hero-students.jpg"
              alt={t("lead")}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-8 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-navy-800 px-6 py-5 text-white shadow-xl sm:w-[75%]">
            <p className="font-script text-lg text-white sm:text-xl">
              {t("note")}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
