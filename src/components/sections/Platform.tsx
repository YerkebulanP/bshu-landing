import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-8 w-8" aria-hidden>
      <path d="M8 5v14l11-7Z" />
    </svg>
  );
}

export async function Platform() {
  const t = await getTranslations("platform");
  const videoId = t("videoId");
  const hasVideo = Boolean(videoId) && videoId !== "videoId";

  return (
    <section id="platform" className="bg-yellow-50 py-20 sm:py-28">
      <Container>
        <FadeIn className="text-center">
          <h2 className="text-3xl font-bold tracking-[0.05em] text-ink uppercase sm:text-4xl">
            {t("h2")}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10">
          <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-blue-50 bg-gradient-to-br from-blue-50 to-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
            {hasVideo ? (
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={t("h2")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <a
                href="#contacts"
                title={t("comingSoon")}
                className="flex h-[73px] w-[73px] items-center justify-center rounded-full border-4 border-white bg-navy-800 text-white shadow-md transition-colors hover:bg-navy-700"
              >
                <PlayIcon />
              </a>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-9 text-center">
          <p className="font-script text-3xl text-navy-800 sm:text-4xl">
            «{t("slogan")}»
          </p>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-8 flex justify-center">
          <a
            href="#contacts"
            className="inline-flex h-[50px] w-[270px] items-center justify-center rounded-full bg-navy-800 text-lg font-bold text-white transition-colors hover:bg-navy-700"
          >
            {t("cta")}
          </a>
        </FadeIn>
      </Container>
    </section>
  );
}
