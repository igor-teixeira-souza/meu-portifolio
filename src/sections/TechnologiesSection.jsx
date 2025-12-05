import React from "react";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Card from "../ui/Card";
import CardsGrid from "../ui/CardsGrid";
import Badge from "../ui/Badge";
import IconBox from "../ui/IconBox";
import { 
  Server, CpuIcon, Database, FileText, 
  Smartphone, Zap, Globe, Palette, 
  Atom, Wind, Code2, Terminal, 
  Layers
} from "lucide-react";

const technologies = [
  { 
    name: "Node.js", 
    icon: <Server size={24} />, 
    level: "Intermediário",
    description: "Desenvolvimento backend com JavaScript",
    color: "from-green-500 to-emerald-600",
    category: "Backend"
  },
  { 
    name: "Arduino", 
    icon: <CpuIcon size={24} />, 
    level: "Intermediário",
    description: "IoT, automação e robótica",
    color: "from-blue-500 to-cyan-600",
    category: "IoT"
  },
  { 
    name: "Banco de Dados", 
    icon: <Database size={24} />, 
    level: "Oracle Certified",
    description: "Oracle, SQL e modelagem de dados",
    color: "from-orange-500 to-amber-600",
    category: "Backend"
  },
  { 
    name: "Levantamento de Requisitos", 
    icon: <FileText size={24} />, 
    level: "Experiente",
    description: "Análise e documentação de sistemas",
    color: "from-purple-500 to-pink-600",
    category: "Processos"
  },
  { 
    name: "React Native", 
    icon: <Smartphone size={24} />, 
    level: "Intermediário",
    description: "Aplicativos mobile multiplataforma",
    color: "from-cyan-500 to-blue-600",
    category: "Mobile"
  },
  { 
    name: "Power Apps", 
    icon: <Zap size={24} />, 
    level: "Básico",
    description: "Desenvolvimento Low Code Microsoft",
    color: "from-yellow-500 to-orange-600",
    category: "Low Code"
  },
  { 
    name: "HTML5", 
    icon: <Globe size={24} />, 
    level: "Avançado",
    description: "Estruturação semântica web",
    color: "from-red-500 to-rose-600",
    category: "Frontend"
  },
  { 
    name: "CSS3", 
    icon: <Palette size={24} />, 
    level: "Avançado",
    description: "Estilização e animações modernas",
    color: "from-pink-500 to-rose-600",
    category: "Frontend"
  },
  { 
    name: "React.js", 
    icon: <Atom size={24} />, 
    level: "Avançado",
    description: "Biblioteca frontend moderna",
    color: "from-blue-400 to-cyan-500",
    category: "Frontend"
  },
  { 
    name: "Tailwind CSS", 
    icon: <Wind size={24} />, 
    level: "Avançado",
    description: "Framework CSS utilitário",
    color: "from-teal-500 to-emerald-600",
    category: "Frontend"
  },
  { 
    name: "JavaScript", 
    icon: <Code2 size={24} />, 
    level: "Avançado",
    description: "Linguagem de programação principal",
    color: "from-yellow-400 to-amber-500",
    category: "Linguagens"
  },
  { 
    name: "TypeScript", 
    icon: <Terminal size={24} />, 
    level: "Intermediário",
    description: "JavaScript com tipagem estática",
    color: "from-blue-600 to-indigo-600",
    category: "Linguagens"
  },
  { 
    name: "Git & GitHub", 
    icon: <Layers size={24} />, 
    level: "Intermediário",
    description: "Controle de versão e colaboração",
    color: "from-gray-600 to-gray-800",
    category: "Ferramentas"
  },
];

export default function TechnologiesSection() {
  return (
    <Section id="tecnologias" background="gradient">
      <Heading
        title="Tecnologias & Habilidades"
        subtitle="Ferramentas e tecnologias que utilizo para criar soluções digitais inovadoras"
        align="center"
        gradient
      />

      <CardsGrid cols={4} gap="gap-6">
        {technologies.map((tech) => (
          <Card
            key={tech.name}
            title={tech.name}
            subtitle={tech.description}
            icon={<IconBox icon={tech.icon} gradient={tech.color} />}
            gradient={tech.color}
            badge={
              <Badge 
                color={
                  tech.level === 'Avançado' ? "green" :
                  tech.level === 'Experiente' ? "purple" :
                  tech.level === 'Intermediário' ? "blue" : "yellow"
                }
                variant="subtle"
              >
                {tech.level}
              </Badge>
            }
          >
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge color="gray" variant="subtle" size="sm">
                {tech.category}
              </Badge>
            </div>
          </Card>
        ))}
      </CardsGrid>

      <div className="mt-12 text-center">
        <div className="inline-block p-4 rounded-2xl bg-gray-800/30 border border-gray-700">
          <p className="text-gray-300 text-lg">
            Estou sempre aberto a aprender novas tecnologias e enfrentar desafios!
          </p>
        </div>
      </div>
    </Section>
  );
}