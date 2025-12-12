import React from "react";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Card from "../ui/Card";
import CardsGrid from "../ui/CardsGrid";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { ExternalLink, Github, Eye, Code2, Database, Globe, ArrowRight } from "lucide-react";

// Importe as imagens corretamente
import senaiIdImage from "../assets/senai-id.png";
import brasilidadesImage from "../assets/brasilidades.png";
import ocorrenciasImage from "../assets/ocorrencias.png";

const projects = [
  {
    title: "Senai-ID",
    description: "Carteirinha digital para estudantes e funcionários do SENAI com sistema de autenticação e gestão de perfis.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Tailwind"],
    image: senaiIdImage,
    github: "https://github.com/igor-teixeira-souza/senai-id-1",
    live: "https://senai-id.vercel.app/",
    icon: <Code2 className="text-blue-400" size={20} />,
    accentColor: "from-blue-500 to-cyan-500"
  },
  {
    title: "Esportistas Brasileiros",
    description: "Portal dedicado aos maiores ícones do esporte brasileiro, com design responsivo e foco em acessibilidade.",
    category: "Frontend",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    image: brasilidadesImage,
    github: "https://github.com/igor-teixeira-souza/brasilidades-projeto",
    live: "https://brasilidades-projeto.vercel.app/",
    icon: <Globe className="text-green-400" size={20} />,
    accentColor: "from-green-500 to-emerald-500"
  },
  {
    title: "Sistema de Ocorrências",
    description: "Plataforma para gestão de processos e ocorrências policiais com interface intuitiva para registro e consulta.",
    category: "Full Stack",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
    image: ocorrenciasImage,
    github: "https://github.com/igor-teixeira-souza/projeto-site-ocorrencias",
    live: "https://projeto-site-ocorrencias.vercel.app/",
    icon: <Database className="text-purple-400" size={20} />,
    accentColor: "from-purple-500 to-pink-500"
  },
];

export default function ProjectsSection() {
  return (
    <Section id="projetos" background="dark">
      <Heading
        title="Meus Projetos"
        subtitle="Implementações práticas que demonstram minha capacidade de resolver problemas reais com tecnologia"
        align="center"
        gradient
      />

      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700">
          <Code2 className="text-blue-400" size={16} />
          <span className="text-gray-300 text-sm">
            Todos os projetos possuem código aberto disponível
          </span>
        </div>
      </div>

      <CardsGrid cols={1} sm={2} lg={3} gap="gap-5">
        {projects.map((project) => (
          <div key={project.title} className="flex flex-col h-full">
            <Card
              title={project.title}
              subtitle={project.category}
              icon={project.icon}
              gradient={project.accentColor}
              className="group h-full hover:border-gray-700 transition-all duration-300 border border-gray-800"
              hoverEffect
            >
              {/* Container da imagem com proporção fixa */}
              <div className="mb-4 rounded-lg overflow-hidden bg-gray-900/50 border border-gray-800">
                <div className="relative w-full pt-[56.25%]"> {/* 16:9 aspect ratio */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Badge no canto da imagem */}
                  <div className="absolute top-3 right-3">
                    <Badge 
                      color="gray" 
                      variant="subtle"
                      size="xs"
                      className="bg-black/60 backdrop-blur-sm"
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Descrição */}
              <p className="text-gray-300 text-sm mb-5 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Tecnologias */}
              <div className="mb-5">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      color="gray" 
                      variant="subtle" 
                      size="xs"
                      className="bg-gray-900/70 hover:bg-gray-800 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Botões de ação */}
              <div className="flex gap-2 mt-auto pt-4 border-t border-gray-800/50">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gray-900/50 hover:bg-gray-800 text-gray-300 hover:text-white text-sm font-medium transition-all group/btn"
                >
                  <Github size={16} />
                  <span>Código</span>
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white text-sm font-medium transition-all group/btn border border-gray-700"
                >
                  <ExternalLink size={16} />
                  <span>Demo</span>
                  <ArrowRight size={14} className="opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all" />
                </a>
              </div>
            </Card>
          </div>
        ))}
      </CardsGrid>

      {/* Seção de call-to-action */}
      <div className="mt-16 text-center">
        <div className="inline-flex flex-col items-center gap-6 max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-gray-800">
          <div className="p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20">
            <Code2 className="text-blue-400" size={28} />
          </div>
          
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white">
              Quer ver mais do meu trabalho?
            </h3>
            <p className="text-gray-400 text-lg">
              Explore meu GitHub para ver todos os projetos, contribuições e experimentos.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="gradient"
              size="lg"
              icon={<Github size={20} />}
              onClick={() => window.open('https://github.com/igor-teixeira-souza', '_blank')}
            >
              GitHub Completo
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={<ArrowRight size={20} />}
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Propor Projeto
            </Button>
          </div>
          
          <p className="text-gray-500 text-sm mt-4">
            Aberto para colaborações e novos desafios
          </p>
        </div>
      </div>
    </Section>
  );
}