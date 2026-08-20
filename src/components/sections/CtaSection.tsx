import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { LeadForm } from "./LeadForm";

export async function CtaSection() {
  const t = await getTranslations("cta");

  return (
    <section id="contacts" className="bg-blue-50/60 py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-start">
        <FadeIn>
          <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">
            {t("h2")}
          </h2>
          <p className="font-script mt-6 text-xl text-navy-700 sm:text-2xl">
            {t("mission")}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-9">
            <h3 className="mb-6 text-lg font-bold text-navy-900">
              {t("formTitle")}
            </h3>
            <LeadForm />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
