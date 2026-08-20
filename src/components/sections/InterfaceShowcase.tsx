import { clsx } from "clsx";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

type Project = {
  title: string;
  author: string;
  date: string;
  votes: number;
  status: string;
};

export async function InterfaceShowcase() {
  const t = await getTranslations("interface");
  const statuses = t.raw("filters.statuses") as string[];
  const projects = t.raw("projects") as Project[];

  return (
    <section className="bg-navy-900 py-20 sm:py-28">
      <Container>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-wide text-white uppercase sm:text-4xl">
            {t("h2")}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12">
          <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-navy-900/10 bg-blue-50/60 px-5 py-3">
              <div className="flex flex-wrap gap-5 text-sm font-semibold text-navy-800">
                <span className="border-b-2 border-navy-800 pb-1">
                  {t("menu.projects")}
                </span>
                <span className="text-ink-soft">{t("menu.submit")}</span>
                <span className="text-ink-soft">{t("menu.results")}</span>
              </div>
              <span className="text-xs font-medium text-ink-soft">
                {t("menu.logout")}
              </span>
            </div>

            <div className="grid gap-0 lg:grid-cols-[220px_1fr]">
              <aside className="space-y-6 border-b border-navy-900/10 p-5 lg:border-r lg:border-b-0">
                <div>
                  <p className="text-xs font-bold tracking-wide text-ink-soft uppercase">
                    {t("filters.contestLabel")}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-navy-900">
                    {t("filters.contestName")}
                  </p>
                  <p className="text-xs text-ink-soft">{t("filters.contestDates")}</p>
                </div>

                <div>
                  <p className="text-xs font-bold tracking-wide text-ink-soft uppercase">
                    {t("filters.statusLabel")}
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {statuses.map((status, i) => (
                      <li
                        key={status}
                        className={clsx(
                          "rounded-lg px-2.5 py-1.5 text-sm",
                          i === 0
                            ? "bg-navy-800 text-white"
                            : "text-ink-soft hover:bg-blue-50",
                        )}
                      >
                        {status}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>

              <div className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-navy-900">
                    {t("sectionTitle")}
                  </h3>
                  <span className="text-sm text-ink-soft">{t("counter")}</span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {projects.map((project) => (
                    <div
                      key={project.title}
                      className="rounded-xl border border-navy-900/10 p-4"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-semibold text-navy-900">
                          {project.title}
                        </h4>
                        <span
                          className={clsx(
                            "shrink-0 rounded-full px-2.5 py-1 text-xs font-bold",
                            project.status === "Финалист"
                              ? "bg-yellow-50 text-yellow-600"
                              : "bg-blue-50 text-navy-700",
                          )}
                        >
                          {project.status}
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-ink-soft">
                        {project.author} · {project.date}
                      </p>
                      <p className="mt-3 text-sm font-semibold text-navy-800">
                        ♥ {project.votes}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-10 text-center">
          <p className="font-script text-2xl text-yellow-500 sm:text-3xl">
            «{t("slogan")}»
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
