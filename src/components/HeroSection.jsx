import React, { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import Particles from "../components/Particles";
import TextType from "../components/TextType";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen bg-[#000000] flex items-center justify-center px-10 md:px-20 relative overflow-hidden">
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 0,
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl w-full gap-10 z-10">
        {/* Texto principal */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <p className="text-white text-lg">Olá, Meu nome é</p>
          <h1 className="text-6xl md:text-7xl font-extrabold text-amber-50 leading-tight">
            IGOR <span className="text-blue-500">TEIXEIRA</span>
          </h1>
          <h2 className="text-2xl text-blue-500 font-semibold">
            Frontend Developer
          </h2>
          <p className="text-amber-50 max-w-md">
            Sou um desenvolvedor Frontend, focado na criação de experiências web
            modernas e responsivas usando React, Tailwind CSS e princípios de
            design limpo.
          </p>

          {/* Botões de contato */}
          <div className="flex items-center gap-4 justify-center md:justify-start pt-4">
            <a
              href="mailto:teixeiraigor525@gmail.com"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full hover:scale-105 transition-transform duration-100 min-w-[260px] "
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Mail size={30} />
              {isHovered ? (
                <span className="font-medium text-sm md:text-base">
                  teixeiraigor525@gmail.com
                </span>
              ) : (
                <span className="font-medium">
                 Contato
                </span>
              )}
            </a>
            <div className="flex gap-4">
              <a
                href="#"
                className="group p-3 rounded-full border border-gray-300 hover:bg-blue-100 hover:border-blue-100 transition duration-300"
              >
                <Linkedin
                  size={30}
                  className="text-white group-hover:text-blue-600 transition-colors"
                />
              </a>
              <a
                href="#"
                className="group p-3 rounded-full border border-gray-300 hover:bg-blue-100 hover:border-blue-100 transition duration-300"
              >
                <Github
                  size={30}
                  className="text-white group-hover:text-gray-900 transition-colors"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Foto */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          <div className="w-auto h-[800px]">
            <img
              src="/src/assets/minha-foto.png"
              alt="Foto de perfil"
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
