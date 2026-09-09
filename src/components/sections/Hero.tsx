import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { HeroGallery, type GalleryImage } from "./HeroGallery";

export async function Hero() {
  const t = await getTranslations("hero");
  const bold = (chunks: ReactNode) => (
    <strong className="font-bold">{chunks}</strong>
  );

  const images: GalleryImage[] = [
    { src: "/images/школьники.png", alt: t("gallery.school") },
    { src: "/images/студенты.png", alt: t("gallery.students") },
    { src: "/images/завод.png", alt: t("gallery.factory") },
    { src: "/images/офис.png", alt: t("gallery.office") },
  ];

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

          <p className="mt-6 text-lg leading-relaxed text-ink">
            {t.rich("lead1", { b: bold })}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink">
            {t.rich("lead2", { b: bold })}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contacts"
              className="inline-flex items-center justify-center rounded-full bg-navy-800 px-9 py-3 text-lg font-semibold text-white transition-colors hover:bg-navy-700"
            >
              {t("ctaPrimary")}
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <HeroGallery images={images} />
        </FadeIn>
      </Container>
    </section>
  );
}
