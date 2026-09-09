import AboutSection from "./sections/AboutSection";
import CertificatesSection from "./sections/CertificatesSection";
import ContactSection from "./sections/ContactSection";
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import ServicesSection from "./sections/ServicesSection";
import TechnologiesSection from "./sections/TechnologiesSection";

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#121412]">
      <Header />
      <main className="portfolio-content w-full">
        <HeroSection />
        <ServicesSection />
        <TechnologiesSection />
        <ProjectsSection />
        <AboutSection />
        <CertificatesSection />
        <ContactSection />
      </main>

      {/* Footer simples */}
      <footer className="border-t border-white/10 bg-[#121412] px-4 py-8 text-center sm:py-10">
        <p className="text-sm text-[#b9b9ab]">
          © {new Date().getFullYear()} Igor Teixeira. Todos os direitos
          reservados.
        </p>
        <p className="mt-2 text-xs text-[#777b72]">
          Desenvolvido com React, Tailwind CSS e muita dedicação.
        </p>
      </footer>
    </div>
  );
}
