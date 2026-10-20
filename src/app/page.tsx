import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { CvSection } from "@/components/CvSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MotionEffects } from "@/components/MotionEffects";
import { OfferSection } from "@/components/OfferSection";
import { PageIntro } from "@/components/PageIntro";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-paper text-brand-ink">
      <PageIntro />
      <MotionEffects />
      <Header />
      <HeroSection />
      <OfferSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <CvSection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
