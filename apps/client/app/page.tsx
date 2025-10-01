// app/page.tsx

import Container from "@/components/layout/container";
import FullContainer from "@/components/layout/full-container";

import HeroSection from "@/components/landing-page/hero-section";
import KomitmenTasty from "@/components/landing-page/komitmen-tasty";
import TastyUniverse from "@/components/landing-page/tasty-universe";
import WhatToCook from "@/components/landing-page/what-to-cook";
import MedsosTastyFruit from "@/components/landing-page/medsos-tasty-fruit";

export default function LandingPage() {
  return (
    <>
      <Container>
        <HeroSection />
        <KomitmenTasty />
      </Container>
      <TastyUniverse />
      <FullContainer>
        <WhatToCook />
      </FullContainer>
      <MedsosTastyFruit />
    </>
  );
}
