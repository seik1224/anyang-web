import { IntroLoader } from "@/components/IntroLoader";
import { PillNav } from "@/components/PillNav";
import { SiteBadge } from "@/components/SiteBadge";
import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { BeyondKoreaSection } from "@/components/sections/BeyondKoreaSection";
import { AerialSection } from "@/components/sections/AerialSection";
import { StoriesSection } from "@/components/sections/StoriesSection";
import { SpecialtiesSection } from "@/components/sections/SpecialtiesSection";
import { VisitSection } from "@/components/sections/VisitSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <IntroLoader />
      <PillNav />
      <SiteBadge />
      <HeroSection />
      <PhilosophySection />
      <BeyondKoreaSection />
      <AerialSection />
      <StoriesSection />
      <SpecialtiesSection />
      <VisitSection />
      <FooterSection />
    </main>
  );
}
