import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import Particles from "../components/Particles";
import TextType from "../components/TextType";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-[#000000] flex items-center justify-center px-10 md:px-20 relative overflow-hidden">
      <div style={{ width: "100%", height: "100%", position: "absolute"}}>
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
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl w-full gap-10">
        {/* Texto principal */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <p className="text-white text-lg">Hello, I'm</p>
          <h1 className="text-6xl md:text-7xl font-extrabold text-amber-50 leading-tight">
            IGOR <span className="text-blue-600">TEIXEIRA</span>
          </h1>
          <h2 className="text-2xl text-blue-800 font-semibold">
            Frontend Developer
          </h2>
          <p className="text-amber-50 max-w-md">
            I’m a passionate developer focused on creating modern and responsive
            web experiences using React, Tailwind CSS, and clean design
            principles.
          </p>

          {/* Botões de contato */}
          <div className="flex items-center gap-4 justify-center md:justify-start pt-4">
            <a
              href="mailto:igor@email.com"
              className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
            >
              <Mail size={18} />
              Let’s Talk
            </a>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 rounded-full border border-gray-300 hover:bg-blue-100 transition duration-300"
              >
                <Linkedin size={20} className="text-blue-600" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full border border-gray-300 hover:bg-blue-100 transition duration-300"
              >
                <Github size={20} className="text-gray-800" />
              </a>
            </div>
          </div>
        </div>

        {/* Foto */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          <div className="w-full h-full md:w-100 md:h-100 overflow-hidden shadow-lg border-2 rounded-full border-gray-200 bg-transparent">
            <img
              src="/src/assets/minha-foto.png"
              alt="Foto de perfil"
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Elemento decorativo */}
          <div className="absolute -z-10 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl top-10 right-10 opacity-40"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
