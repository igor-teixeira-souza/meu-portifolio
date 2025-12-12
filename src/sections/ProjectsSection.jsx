import React from "react";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Card from "../ui/Card";
import CardsGrid from "../ui/CardsGrid";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { ExternalLink, Github, Eye } from "lucide-react";

const projects = [
  {
    title: "Senai-Id",
    description: "Carteirinha digital para estudantes/Funcionários do SENAI",
    category: "Backend & Frontend",
    technologies: ["React", "Tailwind", "MongoDB", "Node.js", "Express", "JWT"],
    image: "/assets/projects/projeto1.png",
    github: "https://github.com/igor-teixeira-souza/senai-id-1",
    live: "#"
  },
  {
    title: "Esportistas ícones Brasilieiros",
    description: "Site focado em esportes e atletas brasileiros, com acessibilidade garantida",
    category: "Frontend & Informação",
    technologies: ["HTML", "CSS", "JS"],
    image: "/assets/projects/projeto2.png",
    github: "https://github.com/igor-teixeira-souza/brasilidades-projeto",
    live: "https://brasilidades-projeto.vercel.app/"
  },
  {
    title: "Sistema de ocorrênciase gestão policial ",
    description: "Sistema interno para gestão de processos e ocorrências policiais",
    category: "Frontend & Backend",
    technologies: ["HTML", "Node.js", "CSS", "JS"],
    image: "/assets/projects/projeto3.png",
    github: "https://github.com/igor-teixeira-souza/projeto-site-ocorrencias",
    live: "https://projeto-site-ocorrencias.vercel.app/"
  },
];

export default function ProjectsSection() {
  return (
    <Section id="projetos" background="dark">
      <Heading
        title="Projetos em Destaque"
        subtitle="Alguns dos meus trabalhos que mostram minha paixão por desenvolvimento e design"
        align="center"
        gradient
      />

      <CardsGrid cols={3} gap="gap-5">
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            subtitle={project.category}
            image={project.image}
            gradient="from-blue-500 to-purple-500"
            footer={
              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <Badge key={tech} color="gray" variant="subtle" size="sm">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 2 && (
                    <Badge color="gray" variant="subtle" size="sm">
                      +{project.technologies.length - 2}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <a href={project.github} className="p-2 hover:bg-gray-800 rounded-lg">
                    <Github size={18} className="text-gray-400" />
                  </a>
                  <a href={project.live} className="p-2 hover:bg-gray-800 rounded-lg">
                    <ExternalLink size={18} className="text-gray-400" />
                  </a>
                </div>
              </div>
            }
          >
            <p className="text-gray-300 mb-4">
              {project.description}
            </p>
          </Card>
        ))}
      </CardsGrid>
    </Section>
  );
}