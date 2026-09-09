import {
  Award,
  Briefcase,
  Cpu,
  FolderKanban,
  Home,
  Mail,
  Menu,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import TextType from "../components/TextType";

const navItems = [
  { name: "Home", id: "home", icon: <Home size={20} /> },
  { name: "Sobre", id: "sobre", icon: <User size={20} /> },
  { name: "Serviços", id: "servicos", icon: <Briefcase size={20} /> },
  { name: "Tecnologias", id: "tecnologias", icon: <Cpu size={20} /> },
  { name: "Projetos", id: "projetos", icon: <FolderKanban size={20} /> },
  { name: "Certificados", id: "certificados", icon: <Award size={20} /> },
  { name: "Contato", id: "contato", icon: <Mail size={20} /> },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Atualizar seção ativa
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && scrollPosition >= sections[i].offsetTop) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  // Previne scroll do body quando menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#121412]/95 backdrop-blur-lg border-b border-white/10"
            : "bg-[#121412]/85 backdrop-blur-md border-b border-white/[0.06]"
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between sm:h-[4.5rem]">
            {/* Texto digitando no canto esquerdo */}
            <div className="flex items-center">
              <div className="whitespace-nowrap text-sm font-bold text-[#f4f1e8] sm:text-base lg:text-xl">
                <TextType
                  text={["Olá!", "Seja bem-vindo!", "Eu sou Igor Teixeira!"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  className="leading-tight"
                />
              </div>
            </div>

            {/* Navegação Desktop */}
            <nav className="hidden xl:block">
              <ul className="flex space-x-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleScroll(item.id)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                        activeSection === item.id
                          ? "text-[#f4f1e8] bg-[#ff7557]/15 border border-[#ff7557]/40"
                          : "text-[#b9b9ab] hover:text-[#f4f1e8] hover:bg-white/5"
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Botão do Menu Mobile */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="rounded-lg p-2 transition-colors hover:bg-white/10 xl:hidden"
              aria-label="Abrir menu"
            >
              <Menu size={20} className="text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay do Side Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Side Menu Mobile */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-[min(88vw,22rem)] border-l border-white/10 bg-[#1c211d] shadow-2xl transition-transform duration-300 ease-out xl:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cabeçalho do Side Menu */}
        <div className="border-b border-white/10 bg-[#1c211d] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-[#a8e6cf]" />
              <h2 className="text-base font-bold text-[#f4f1e8]">Menu</h2>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-1.5 rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="Fechar menu"
            >
              <X size={18} className="text-white" />
            </button>
          </div>
        </div>

        {/* Navegação */}
        <nav className="flex-1 overflow-y-auto p-3">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? "text-[#f4f1e8] bg-[#ff7557]/15 border border-[#ff7557]/40"
                      : "text-[#b9b9ab] hover:text-[#f4f1e8] hover:bg-white/5"
                  }`}
                >
                  <div
                    className={`p-1.5 rounded ${
                      activeSection === item.id
                        ? "bg-[#ff7557]/20"
                        : "bg-white/10"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Rodapé */}
        <div className="border-t border-white/10 bg-[#1c211d] p-4">
          <button
            onClick={() => {
              handleScroll("contato");
              setIsMenuOpen(false);
            }}
            className="w-full bottom-0 rounded-lg bg-[#ff7557] py-3 text-sm font-semibold text-[#121412] transition-opacity hover:opacity-90"
          >
            Entrar em Contato
          </button>
          <p className="mt-2 text-center text-xs text-[#777b72]">
            Disponível para novos projetos
          </p>
        </div>
      </div>

      {/* Espaço para o header fixo */}
      <div className="h-16 sm:h-[4.5rem]"></div>
    </>
  );
};

export default Header;
