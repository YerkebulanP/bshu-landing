import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Platform } from "@/components/sections/Platform";
import { Advantages } from "@/components/sections/Advantages";
// import { Pricing } from "@/components/sections/Pricing"; // тарифы временно скрыты
import { Projects } from "@/components/sections/Projects";
import { Reviews } from "@/components/sections/Reviews";
import { Faq } from "@/components/sections/Faq";
import { CtaSection } from "@/components/sections/CtaSection";

export default async function HomePage({
  params,
}: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Stats />
      <About />
      <HowItWorks />
      <Platform />
      <Advantages />
      {/* <Pricing /> тарифы временно скрыты */}
      <Projects />
      <Reviews />
      <Faq />
      <CtaSection />
    </>
  );
}
