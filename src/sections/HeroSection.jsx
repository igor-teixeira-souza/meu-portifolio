import React, { useState } from "react";
import { Mail, Linkedin, Github, Sparkles, ArrowRight, ChevronDown } from "lucide-react";
import Particles from "../components/Particles";
import minhaFoto from '../assets/minha-foto.png';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="min-h-screen bg-black flex items-center justify-center px-4 md:px-6 lg:px-20 relative overflow-hidden pt-16"
      id="inicio"
    >
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-950/40"></div>
      
      {/* Overlay de cor de destaque */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5 opacity-30"></div>

      {/* Particles background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#3b82f6", "#60a5fa", "#8b5cf6", "#06b6d4"]}
          particleCount={80}
          particleSpread={6}
          speed={0.1}
          particleBaseSize={60}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-4 w-40 h-40 md:w-72 md:h-72 bg-blue-500/10 rounded-full blur-xl md:blur-3xl"></div>
      <div className="absolute bottom-40 right-4 w-48 h-48 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-xl md:blur-3xl"></div>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full max-w-7xl z-10 py-8 md:py-12">
        {/* Texto principal */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 md:space-y-8 order-2 lg:order-1 mt-8 lg:mt-0">
          {/* Badge com destaque */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm shadow-lg shadow-blue-500/10">
            <Sparkles className="text-blue-300" size={14} md:size={16} />
            <span className="text-blue-200 text-xs md:text-sm font-medium">
              Desenvolvedor Frontend
            </span>
          </div>

          <div className="space-y-3 md:space-y-4">
            <p className="text-gray-300 text-base md:text-xl lg:text-2xl font-light tracking-wide">
              Olá, meu nome é
            </p>
            <div className="overflow-hidden">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent animate-gradient">
                  IGOR TEIXEIRA
                </span>
              </h1>
            </div>
          </div>

          <div className="max-w-lg mx-auto lg:mx-0">
            <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed font-light">
              Especializado em criar <span className="text-blue-300 font-medium bg-gradient-to-r from-blue-600/20 to-cyan-600/20 px-1 rounded">experiências digitais excepcionais</span> com React, TypeScript e design moderno.
            </p>
          </div>

          {/* Botões de contato */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4 md:pt-8">
            <div className="relative group w-full sm:w-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <a
                href="mailto:teixeiraigor525@gmail.com"
                className="relative flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 md:px-6 md:py-3.5 rounded-full hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 w-full sm:w-auto group-hover:scale-105"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Mail size={18} md:size={20} />
                <span className="font-semibold text-sm md:text-base">
                  Iniciar Conversa
                </span>
                <ArrowRight className="ml-1 md:ml-2 group-hover:translate-x-1 transition-transform" size={14} md:size={16} />
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/igor-teixeira-souza/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-400 hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-cyan-600/10 transition-all duration-300 hover:scale-105"
              >
                <Linkedin
                  size={18}
                  md:size={20}
                  className="text-gray-400 hover:text-blue-300 transition-colors"
                />
              </a>
              <a
                href="https://github.com/igor-teixeira-souza"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-300 hover:bg-gradient-to-r hover:from-gray-800/20 hover:to-gray-700/20 transition-all duration-300 hover:scale-105"
              >
                <Github
                  size={18}
                  md:size={20}
                  className="text-gray-400 hover:text-white transition-colors"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Foto com 3 círculos giratórios */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative">
            {/* Container para os círculos giratórios - ajustado para ficar próximo à imagem */}
            <div className="absolute -inset-3 sm:-inset-4 md:-inset-5">
              {/* Círculo 1 - Grande, gira para direita */}
              <div className="absolute inset-0">
                <svg 
                  className="w-full h-full animate-spin-slow"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="49"
                    fill="none"
                    stroke="url(#gradient1)"
                    strokeWidth="0.8"
                    strokeDasharray="290 10"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              {/* Círculo 2 - Médio, gira para esquerda */}
              <div className="absolute inset-3 sm:inset-4 md:inset-5">
                <svg 
                  className="w-full h-full animate-spin-slow-reverse"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="url(#gradient2)"
                    strokeWidth="0.6"
                    strokeDasharray="280 20"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              {/* Círculo 3 - Pequeno, gira para direita */}
              <div className="absolute inset-6 sm:inset-8 md:inset-10">
                <svg 
                  className="w-full h-full animate-spin-slow"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="43"
                    fill="none"
                    stroke="url(#gradient3)"
                    strokeWidth="0.5"
                    strokeDasharray="270 30"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient3" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Container circular principal da foto */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-full overflow-hidden group border border-gray-700/50">
              {/* Gradiente de fundo */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-950 z-0"></div>
              
              {/* Foto */}
              <img
                src={minhaFoto}
                alt="Igor Teixeira - Desenvolvedor Frontend"
                className="absolute inset-0 w-full h-full object-cover z-20 transform group-hover:scale-105 transition-transform duration-700"
                style={{
                  objectPosition: 'center center'
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-30 mix-blend-multiply rounded-full"></div>
              
              {/* Brilho interno sutil */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/3 to-purple-500/3 z-25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="animate-bounce">
          <div className="w-6 h-6 rounded-full border border-blue-500/30 flex items-center justify-center backdrop-blur-sm">
            <ChevronDown className="text-blue-400/70" size={16} />
          </div>
        </div>
      </div>

      {/* Borda indicadora do fim da Hero Section */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Linha principal suave */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        
        {/* Linha secundária */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent mt-0.5"></div>
      </div>

      {/* Adicione estas animações ao seu CSS global (index.css) */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;