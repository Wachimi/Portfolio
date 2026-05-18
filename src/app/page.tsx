import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { GitHubActivitySection } from "@/components/GitHubActivitySection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eef8ee] text-[#102018]">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <GitHubActivitySection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
