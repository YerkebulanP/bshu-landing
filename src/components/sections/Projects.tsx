import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRightIcon } from "@/components/icons";
import { ProjectCarousel } from "./ProjectCarousel";

export type Project = {
  title: string;
  author: string;
  date: string;
  votes: number;
  status: string;
};

export async function Projects() {
  const t = await getTranslations("projects");
  const items = t.raw("items") as Project[];

  return (
    <section id="projects" className="bg-yellow-50 py-20 sm:py-28">
      <Container>
        <FadeIn className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">{t("h2")}</h2>
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 font-bold text-navy-800 underline underline-offset-4 hover:text-navy-700"
          >
            {t("linkText")}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10">
          <ProjectCarousel projects={items} />
        </FadeIn>
      </Container>
    </section>
  );
}
