import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { CheckIcon } from "@/components/icons";

export async function Roles() {
  const t = await getTranslations("roles");

  const groups = [
    {
      key: "school",
      label: t("school.label"),
      sublabel: null,
      items: t.raw("school.items") as string[],
      tone: "bg-navy-800 text-white",
    },
    {
      key: "gpi",
      label: t("gpi.label"),
      sublabel: t("gpi.sublabel"),
      items: t.raw("gpi.items") as string[],
      tone: "bg-yellow-500 text-navy-900",
    },
  ];

  return (
    <section className="bg-blue-50/50 py-20 sm:py-28">
      <Container>
        <SectionHeading title={t("h2")} className="mb-12" />

        <div className="space-y-6">
          {groups.map((group, i) => (
            <FadeIn key={group.key} delay={i * 0.1}>
              <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-sm sm:flex-row sm:p-8">
                <div className="sm:w-56 sm:shrink-0">
                  <span
                    className={`inline-block rounded-full px-5 py-2 text-sm font-bold ${group.tone}`}
                  >
                    {group.label}
                  </span>
                  {group.sublabel && (
                    <p className="mt-2 text-sm text-ink-soft">{group.sublabel}</p>
                  )}
                </div>

                <ul className="flex-1 space-y-3 border-navy-900/10 sm:border-l sm:pl-8">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy-700" />
                      <span className="text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
