import Hero from "../app/components/sections/Hero/page";
import DisplayShowcaseSection from "../app/components/sections/DisplayShowcaseSection/page";
import CustomizeTVSection from "../app/components/sections/CustomizeTVSection/page";
import FusionTelevision from "../app/components/sections/FusionTelevision/page";

import ModelShowcase from "../app/components/sections/ModelShowcase-Aura 4/page";

import ModelShowcaseAura55 from "../app/components/sections/ModelShowcaseAura55/page";

import ModelShowcaseAura65 from "../app/components/sections/ModelShowcaseAura65/page";
import WarrantyBenefitsSection from "../app/components/WarrantyBenefitsSection/page";

import OnTimeSupportSection from "../app/components/OnTimeSupportSection/page";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DisplayShowcaseSection />
      <CustomizeTVSection />
       <FusionTelevision />
      <ModelShowcase />
      <ModelShowcaseAura55 />
      <ModelShowcaseAura65 />
      <WarrantyBenefitsSection />
      
      <OnTimeSupportSection />
    </>
  );
}
