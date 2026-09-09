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
      {/* декоративные размытые пятна — «аврора» (позиции 1:1 из Figma, привязаны к верхней кромке секции) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        <div className="absolute top-[207px] left-[31.4%] h-[590px] w-[1028px] rounded-full bg-blue-50 blur-[80px]" />
        <div className="absolute top-[96px] left-[89.9%] h-[316px] w-[609px] rotate-[85deg] rounded-full bg-navy-600 blur-[80px]" />
        <div className="absolute top-[-186px] left-[-31.7%] h-[590px] w-[1028px] rounded-full bg-blue-50 blur-[80px]" />
        <div className="absolute top-[-71px] left-[-16.9%] h-[239px] w-[352px] rounded-full bg-[#216C53] blur-[80px]" />
        <div className="absolute top-[500px] right-0 left-0 h-[161px] bg-[#FBFDFC]" />
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
