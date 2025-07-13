import CapturieHero from "@/components/HeroNavbar";
import OverviewSection from "@/components/OverviewSection";
import ServicesPreview from "@/components/ServicesPreview";
import TestimonialSection from "@/components/TestimonialSection";
// import Image from "next/image";

export default function Home() {
  return (
    <main>
      <CapturieHero  />
      <OverviewSection />
      <ServicesPreview />
      <TestimonialSection />
    </main>
  );
}
