import React from "react";
import TextType from "../components/TextType";

const Header = () => {
  const navItems = [
    { name: "Início", id: "inicio" },
    { name: "Serviços", id: "servicos" },
    { name: "Tecnologias", id: "tecnologias" },
    { name: "Projetos", id: "projetos" },
    { name: "Sobre", id: "sobre" },
    { name: "Certificados", id: "certificados" },
    { name: "Contato", id: "contato" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 p-3 w-full md:p-6 flex justify-between items-center text-white bg-black/90 backdrop-blur-md border-b border-gray-800">
      {/* Logo/Nome */}
      <div className="flex items-center space-x-3">
        <div className="text-xl md:text-3xl font-bold leading-tight">
          <TextType
            text={["Olá!", "Seja bem-vindo!", "Eu sou Igor Teixeira!"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
      </div>

      {/* Navegação */}
      <nav className="hidden md:block">
        <ul className="flex space-x-4 lg:space-x-6 text-sm lg:text-base font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleScroll(item.id)}
                className="hover:text-blue-400 transition duration-300 px-2 py-1 rounded-md hover:bg-gray-800"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Menu Mobile */}
      <div className="md:hidden">
        <select 
          onChange={(e) => handleScroll(e.target.value)}
          className="bg-gray-900 text-white p-2 rounded-md"
        >
          <option value="">Navegar</option>
          {navItems.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
};

export default Header;