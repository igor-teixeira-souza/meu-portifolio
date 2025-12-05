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
    title: "Fintech - Dashboard",
    description: "Dashboard completo para análise financeira com gráficos interativos",
    category: "Web Design & Frontend",
    technologies: ["React", "TypeScript", "Tailwind", "Chart.js"],
    image: "/assets/projects/projeto1.png",
    github: "#",
    live: "#"
  },
  {
    title: "E-commerce Moderno",
    description: "Plataforma de e-commerce com carrinho de compras e checkout",
    category: "Frontend & Mobile",
    technologies: ["React Native", "Node.js", "MongoDB"],
    image: "/assets/projects/projeto2.png",
    github: "#",
    live: "#"
  },
  {
    title: "Sistema de Gestão",
    description: "Sistema interno para gestão de processos empresariais",
    category: "Full Stack",
    technologies: ["React", "Node.js", "PostgreSQL"],
    image: "/assets/projects/projeto3.png",
    github: "#",
    live: "#"
  },
  {
    title: "Landing Page Interativa",
    description: "Site institucional com animações e formulários dinâmicos",
    category: "UI/UX Design",
    technologies: ["Next.js", "Framer Motion", "Tailwind"],
    image: "/assets/projects/projeto1.png",
    github: "#",
    live: "#"
  },
  {
    title: "App de Fitness",
    description: "Aplicativo mobile para acompanhamento de treinos e dieta",
    category: "Mobile Development",
    technologies: ["React Native", "Firebase", "Expo"],
    image: "/assets/projects/projeto2.png",
    github: "#",
    live: "#"
  },
  {
    title: "Portal Educacional",
    description: "Plataforma de cursos online com videoaulas e quizzes",
    category: "Web Application",
    technologies: ["React", "Node.js", "MySQL", "AWS"],
    image: "/assets/projects/projeto3.png",
    github: "#",
    live: "#"
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

      <CardsGrid cols={3} gap="gap-8">
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            subtitle={project.category}
            image={project.image}
            gradient="from-blue-500 to-purple-500"
            badge={
              <Badge color="blue" variant="subtle">
                {project.technologies.length} techs
              </Badge>
            }
            footer={
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
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

      <div className="mt-12 text-center">
        <Button
          icon={<Eye size={20} />}
          variant="outline"
          size="lg"
        >
          Ver Todos os Projetos
        </Button>
      </div>
    </Section>
  );
}