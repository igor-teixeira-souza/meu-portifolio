import React from "react";
import TextType from "./TextType";

const Header = () => {
  const navItems = ["Work", "About", "Blog", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center text-white bg-black bg-opacity-80 backdrop-blur-sm border-b">
      {/* Logo/Nome */}
      <div className="flex items-center space-x-3">
        <div className="text-3xl font-bold leading-tight">
          <TextType
            text={["Seja bem vindo!", "", "Meu nome é Igor Teixeira!"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
      </div>

      {/* Navegação */}
      <nav>
        <ul className="flex space-x-8 text-2x font-semibold">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-gray-400 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
