import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ResearchSection from "@/components/ResearchSection";
import PublicationsSection from "@/components/PublicationsSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="font-body text-main leading-relaxed">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ResearchSection />
      <PublicationsSection />
      <ActivitiesSection />
      <AwardsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="opacity-75">&copy; 2025 Wooseok Song. All rights reserved.</p>
          <p className="opacity-75 mt-2">Designed with passion for research and innovation.</p>
        </div>
      </footer>
    </div>
  );
}
