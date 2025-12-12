import React, { useState, useEffect } from "react";
import TextType from "../components/TextType";
import { Menu, X, Home, User, Briefcase, Cpu, FolderKanban, Award, Mail, Sparkles } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const navItems = [
    { name: "Início", id: "inicio", icon: <Home size={20} /> },
    { name: "Sobre", id: "sobre", icon: <User size={20} /> },
    { name: "Serviços", id: "servicos", icon: <Briefcase size={20} /> },
    { name: "Tecnologias", id: "tecnologias", icon: <Cpu size={20} /> },
    { name: "Projetos", id: "projetos", icon: <FolderKanban size={20} /> },
    { name: "Certificados", id: "certificados", icon: <Award size={20} /> },
    { name: "Contato", id: "contato", icon: <Mail size={20} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Atualizar seção ativa
      const sections = navItems.map(item => document.getElementById(item.id));
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
        block: "start"
      });
    }
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  // Previne scroll do body quando menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-lg border-b border-gray-800/50' 
          : 'bg-black/80 backdrop-blur-md border-b border-gray-800/30'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Texto digitando no canto esquerdo */}
            <div className="flex items-center">
              <div className="text-sm md:text-xl font-bold text-white whitespace-nowrap">
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
            <nav className="hidden md:block">
              <ul className="flex space-x-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleScroll(item.id)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                        activeSection === item.id
                          ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
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
              className="md:hidden p-1.5 rounded-lg hover:bg-gray-800/50 transition-colors"
              aria-label="Abrir menu"
            >
              <Menu size={20} className="text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay do Side Menu */}
      <div 
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Side Menu Mobile */}
      <div 
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-gray-900 border-l border-gray-800 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Cabeçalho do Side Menu */}
        <div className="p-4 border-b border-gray-800 bg-gray-900">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-blue-400" />
              <h2 className="text-base font-bold text-white">Menu</h2>
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
        <nav className="p-3 flex-1 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <div className={`p-1.5 rounded ${
                    activeSection === item.id 
                      ? 'bg-blue-500/20' 
                      : 'bg-gray-800'
                  }`}>
                    {item.icon}
                  </div>
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Informações de Contato */}
          <div className="mt-6 pt-4 border-t border-gray-800">
            <h3 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
              Contato
            </h3>
            <div className="space-y-2">
              <button 
                onClick={() => {
                  window.open('mailto:teixeiraigor525@gmail.com', '_blank');
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-gray-800/50 rounded transition-colors"
              >
                ✉️ teixeiraigor525@gmail.com
              </button>
              <button 
                onClick={() => {
                  window.open('https://wa.me/5511915891623', '_blank');
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-gray-800/50 rounded transition-colors"
              >
                📱 (11) 91589-1623
              </button>
            </div>
          </div>
        </nav>

        {/* Rodapé */}
        <div className="p-4 border-t border-gray-800 bg-gray-900">
          <button
            onClick={() => {
              handleScroll('contato');
              setIsMenuOpen(false);
            }}
            className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg text-sm hover:opacity-90 transition-opacity"
          >
            Entrar em Contato
          </button>
          <p className="text-xs text-gray-500 text-center mt-2">
            Disponível para novos projetos
          </p>
        </div>
      </div>

      {/* Espaço para o header fixo */}
      <div className="h-14 md:h-16"></div>
    </>
  );
};

export default Header;