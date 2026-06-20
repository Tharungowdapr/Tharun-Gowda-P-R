import { Navbar } from "@/components/layout/Navbar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience, Education } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { ParallaxSection } from "@/components/ui/ParallaxSection";

export default function Home() {
  return (
    <>
      {/* Skip to main content — accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[hsl(var(--brand))] focus:text-[hsl(var(--brand-foreground))] focus:rounded-md focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <Navbar />
      <MobileNav />

      <main id="main" className="pb-24 md:pb-0">
        <Hero />
        <ParallaxSection><Projects /></ParallaxSection>
        <ParallaxSection><Skills /></ParallaxSection>
        <ParallaxSection><Experience /></ParallaxSection>
        <ParallaxSection><Education /></ParallaxSection>
        <ParallaxSection><Contact /></ParallaxSection>
      </main>

      <Footer />
    </>
  );
}
