import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { Problem1 } from "@/components/sections/Problem1";
import { Problem2 } from "@/components/sections/Problem2";
import { Solution } from "@/components/sections/Solution";
import { Platform } from "@/components/sections/Platform";
import { InterfaceShowcase } from "@/components/sections/InterfaceShowcase";
import { Advantages } from "@/components/sections/Advantages";
import { Results } from "@/components/sections/Results";
import { Awards } from "@/components/sections/Awards";
import { Cases } from "@/components/sections/Cases";
import { International } from "@/components/sections/International";
import { Roles } from "@/components/sections/Roles";
import { Pricing } from "@/components/sections/Pricing";
import { CtaSection } from "@/components/sections/CtaSection";

export default async function HomePage({
  params,
}: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Problem1 />
      <Problem2 />
      <Solution />
      <Platform />
      <InterfaceShowcase />
      <Advantages />
      <Results />
      <Awards />
      <Cases />
      <International />
      <Roles />
      <Pricing />
      <CtaSection />
    </>
  );
}
