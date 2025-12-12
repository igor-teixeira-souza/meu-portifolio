import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import TechnologiesSection from "./sections/TechnologiesSection";
import ProjectsSection from "./sections/ProjectsSection";
import AboutSection from "./sections/AboutSection";
import CertificatesSection from "./sections/CertificatesSection";
import ContactSection from "./sections/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen w-screen bg-black overflow-x-hidden sm:overflow-x-hidden">
      <Header />
      <main className="w-full">
        <HeroSection />
        <ServicesSection />
        <TechnologiesSection />
        <ProjectsSection />
        <AboutSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      
      {/* Footer simples */}
      <footer className="py-6 text-center border-t border-gray-900 bg-black px-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Igor Teixeira. Todos os direitos reservados.
        </p>
        <p className="text-gray-600 text-xs mt-1">
          Desenvolvido com React, Tailwind CSS e muita dedicação.
        </p>
      </footer>
    </div>
  );
}