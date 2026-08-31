import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { Problem2 } from "@/components/sections/Problem2";
import { Platform } from "@/components/sections/Platform";
import { Advantages } from "@/components/sections/Advantages";
// import { Pricing } from "@/components/sections/Pricing"; // тарифы временно скрыты
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
      <Problem2 />
      <Platform />
      <Advantages />
      {/* <Pricing /> тарифы временно скрыты */}
      <Faq />
      <CtaSection />
    </>
  );
}
