import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import minhaFoto from "../assets/minha-foto.png";
import Particles from "../components/Particles";

const HeroSection = () => {
  return (
    <section
      className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden bg-[#121412] px-4 pt-8 sm:px-6 lg:px-10 xl:px-20"
      id="inicio"
    >
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(168,230,207,0.12),transparent_30%),linear-gradient(135deg,#121412_0%,#1c211d_58%,#28372f_100%)]"></div>

      {/* Overlay de cor de destaque */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,117,87,0.08)_100%)]"></div>

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
      <div className="absolute left-0 top-24 h-40 w-40 rounded-full bg-[#ff7557]/10 blur-3xl sm:h-72 sm:w-72"></div>
      <div className="absolute bottom-40 right-4 h-48 w-48 rounded-full bg-[#a8e6cf]/10 blur-3xl sm:h-96 sm:w-96"></div>

      <div className="z-10 flex w-full max-w-7xl flex-col items-center justify-center gap-12 py-12 sm:py-16 lg:flex-row lg:justify-between lg:gap-8 lg:py-20">
        {/* Texto principal */}
        <div className="order-2 mt-2 w-full space-y-6 text-center lg:order-1 lg:mt-0 lg:w-[52%] lg:text-left">
          {/* Badge com destaque */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm shadow-lg shadow-blue-500/10">
            <Sparkles className="text-blue-300" size={14} md:size={16} />
            <span className="text-xs font-semibold text-[#a8e6cf] sm:text-sm">
              Desenvolvedor Frontend
            </span>
          </div>

          <div className="space-y-3 md:space-y-4">
            <p className="text-base font-light tracking-wide text-[#b9b9ab] sm:text-xl lg:text-2xl">
              Olá, meu nome é
            </p>
            <div className="overflow-hidden">
              <h1 className="text-4xl font-black leading-[0.95] tracking-tight text-[#f4f1e8] sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="animate-gradient bg-gradient-to-r from-[#ff7557] via-[#f4f1e8] to-[#a8e6cf] bg-clip-text text-transparent">
                  IGOR TEIXEIRA
                </span>
              </h1>
            </div>
          </div>

          <div className="max-w-lg mx-auto lg:mx-0">
            <p className="text-sm font-light leading-relaxed text-[#b9b9ab] sm:text-base lg:text-lg">
              Especializado em criar{" "}
              <span className="rounded bg-[#a8e6cf]/10 px-1 font-medium text-[#a8e6cf]">
                experiências digitais excepcionais
              </span>{" "}
              com React, JavaScript e design moderno.
            </p>
          </div>

          {/* Botões de contato */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4 md:pt-8">
            <div className="relative group w-full sm:w-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <a
                href="#contato"
                className="relative flex w-full items-center justify-center gap-2 rounded-full bg-[#ff7557] px-4 py-3 text-sm font-semibold text-[#121412] transition-all duration-300 hover:shadow-xl hover:shadow-[#ff7557]/20 sm:w-auto sm:px-6 sm:py-3.5 sm:text-base"
              >
                <Mail size={18} md:size={20} />
                <span className="font-semibold text-sm md:text-base">
                  Iniciar Conversa
                </span>
                <ArrowRight
                  className="ml-1 md:ml-2 group-hover:translate-x-1 transition-transform"
                  size={14}
                  md:size={16}
                />
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/igor-teixeira-souza/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 p-2.5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#a8e6cf] sm:p-3"
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
                className="rounded-xl border border-white/10 bg-white/5 p-2.5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#f4f1e8] sm:p-3"
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
        <div className="order-1 flex w-full justify-center lg:order-2 lg:w-[43%] lg:justify-end">
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
                    <linearGradient
                      id="gradient1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                      <stop
                        offset="100%"
                        stopColor="#8b5cf6"
                        stopOpacity="0.3"
                      />
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
                    <linearGradient
                      id="gradient2"
                      x1="100%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                      <stop
                        offset="100%"
                        stopColor="#3b82f6"
                        stopOpacity="0.2"
                      />
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
                    <linearGradient
                      id="gradient3"
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                      <stop
                        offset="100%"
                        stopColor="#06b6d4"
                        stopOpacity="0.1"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Container circular principal da foto */}
            <div className="group relative h-[min(72vw,20rem)] w-[min(72vw,20rem)] overflow-hidden rounded-full border border-white/20 sm:h-80 sm:w-80 lg:h-96 lg:w-96 xl:h-[28rem] xl:w-[28rem]">
              {/* Gradiente de fundo */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-950 z-0"></div>

              {/* Foto */}
              <img
                src={minhaFoto}
                alt="Igor Teixeira - Desenvolvedor Frontend"
                className="absolute inset-0 w-full h-full object-cover z-20 transform group-hover:scale-105 transition-transform duration-700"
                style={{
                  objectPosition: "center center",
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
          0%,
          100% {
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
