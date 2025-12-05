import React, { useState } from "react";
import { Mail, Linkedin, Github, Sparkles, ArrowRight } from "lucide-react";
import Particles from "../components/Particles";
import minhaFoto from '../assets/minha-foto.png';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 flex items-center justify-center px-4 md:px-20 relative overflow-hidden"
      id="inicio"
    >
      {/* Particles background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#60a5fa", "#3b82f6"]}
          particleCount={150}
          particleSpread={8}
          speed={0.15}
          particleBaseSize={80}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full gap-8 md:gap-12 z-10">
        {/* Texto principal */}
        <div className="flex-1 space-y-8 text-center lg:text-left animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Sparkles className="text-blue-400" size={16} />
            <span className="text-blue-300 text-sm font-medium">Desenvolvedor Frontend</span>
          </div>

          <div className="space-y-4">
            <p className="text-gray-300 text-xl md:text-2xl font-light tracking-wide">
              Olá, meu nome é
            </p>
            <div className="flex items-center justify-center lg:justify-start">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none">
                <span className="bg-gradient-to-r from-white via-white to-blue-400 bg-clip-text text-transparent">
                  IGOR TEIXEIRA
                </span>
              </h1>
            </div>
          </div>

          <div className="max-w-lg">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
              Especializado em criar <span className="text-blue-400 font-medium">experiências digitais excepcionais</span> com React, TypeScript e design moderno. Transformo conceitos complexos em interfaces intuitivas e performáticas.
            </p>
          </div>

          {/* Botões de contato */}
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <a
                href="mailto:teixeiraigor525@gmail.com"
                className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 min-w-[240px]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Mail size={22} />
                {isHovered ? (
                  <span className="font-semibold text-base">
                    teixeiraigor525@gmail.com
                  </span>
                ) : (
                  <span className="font-semibold">Iniciar Conversa</span>
                )}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:scale-110"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <Linkedin
                  size={24}
                  className="text-gray-400 group-hover:text-blue-400 transition-colors relative z-10"
                />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 hover:border-gray-400 transition-all duration-300 hover:scale-110"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <Github
                  size={24}
                  className="text-gray-400 group-hover:text-white transition-colors relative z-10"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Foto dentro de um CÍRCULO - TAMANHO AUMENTADO */}
        <div className="flex-1 flex justify-center items-center lg:justify-end relative">
          <div className="relative">
            {/* Anéis concêntricos decorativos */}
            <div className="absolute -inset-10">
              <div className="absolute inset-0 border-2 border-blue-400/10 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 border border-cyan-400/5 rounded-full animate-spin-slow-reverse"></div>
              <div className="absolute inset-8 border border-purple-400/5 rounded-full"></div>
            </div>

            {/* Efeito de brilho externo */}
            <div className="absolute -inset-6 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

            {/* Container circular principal - TAMANHO AUMENTADO */}
            <div className="relative w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full overflow-hidden group">
              {/* Gradiente de fundo escuro */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 z-0"></div>
              
              {/* Efeito de brilho interno */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Foto - object-cover para cobrir TODO o círculo */}
              <img
                src={minhaFoto}
                alt="Igor Teixeira - Desenvolvedor Frontend"
                className="absolute inset-0 w-full h-full object-cover z-20 transform group-hover:scale-105 transition-transform duration-700"
                style={{
                  objectPosition: 'center center' // Centraliza perfeitamente
                }}
              />
              
              {/* Overlay circular gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-30 mix-blend-multiply rounded-full"></div>
              
              {/* Filtro de cor sutil */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 mix-blend-overlay z-25 rounded-full"></div>
              
              {/* Borda circular luminosa */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/30 transition-all duration-500 rounded-full z-40"></div>
            </div>

            {/* Pontos decorativos ao redor do círculo */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3">
              <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3">
              <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute top-1/2 right-0 transform translate-x-3 -translate-y-1/2">
              <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-x-3 -translate-y-1/2">
              <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
            </div>

            {/* Anéis animados externos */}
            <div className="absolute -inset-16 pointer-events-none">
              <div className="absolute inset-0 border border-blue-400/5 rounded-full animate-ping-slow"></div>
              <div className="absolute inset-6 border border-cyan-400/5 rounded-full animate-ping-slow delay-300"></div>
            </div>
            
            {/* Linha decorativa */}
            <div className="absolute -right-10 top-1/2 hidden lg:block">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <ArrowRight className="text-blue-400" size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;