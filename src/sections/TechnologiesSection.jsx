import React, { useState } from "react";
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
  Layers, Filter, ChevronDown, Sparkles,
  TrendingUp, Brain, Rocket
} from "lucide-react";

const technologies = [
  { 
    name: "Node.js", 
    icon: <Server size={20} />, 
    level: "Intermediário",
    description: "Desenvolvimento de APIs RESTful e aplicações server-side com JavaScript",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-500/10",
    category: "Backend",
    priority: 1
  },
  { 
    name: "React.js", 
    icon: <Atom size={20} />, 
    level: "Avançado",
    description: "Desenvolvimento de interfaces modernas, reativas e componentizadas",
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-500/10",
    category: "Frontend",
    priority: 1
  },
  { 
    name: "Oracle Database", 
    icon: <Database size={20} />, 
    level: "Oracle Certified",
    description: "Modelagem de dados, SQL avançado e administração de bancos de dados Oracle",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-500/10",
    category: "Backend",
    priority: 1
  },
  { 
    name: "Tailwind CSS", 
    icon: <Wind size={20} />, 
    level: "Avançado",
    description: "Desenvolvimento de interfaces responsivas com classes utilitárias",
    color: "from-teal-500 to-emerald-600",
    bgColor: "bg-teal-500/10",
    category: "Frontend",
    priority: 2
  },
  { 
    name: "JavaScript", 
    icon: <Code2 size={20} />, 
    level: "Intermediário",
    description: "Linguagem principal para desenvolvimento web full-stack",
    color: "from-yellow-400 to-amber-500",
    bgColor: "bg-yellow-500/10",
    category: "Linguagens",
    priority: 1
  },
  { 
    name: "Git & GitHub", 
    icon: <Layers size={20} />, 
    level: "Intermediário",
    description: "Controle de versão, colaboração em equipe e CI/CD",
    color: "from-gray-600 to-gray-800",
    bgColor: "bg-gray-500/10",
    category: "Ferramentas",
    priority: 2
  },
  { 
    name: "HTML5 & CSS3", 
    icon: <Globe size={20} />, 
    level: "Avançado",
    description: "Estrutura semântica e estilização moderna para web",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-500/10",
    category: "Frontend",
    priority: 2
  },
  { 
    name: "Arduino", 
    icon: <CpuIcon size={20} />, 
    level: "Intermediário",
    description: "Desenvolvimento de soluções IoT, automação e prototipagem eletrônica",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-500/10",
    category: "IoT",
    priority: 3
  },
  { 
    name: "Power Platform", 
    icon: <Zap size={20} />, 
    level: "Intermediário",
    description: "Desenvolvimento rápido de aplicações empresariais com Microsoft Power Apps",
    color: "from-yellow-500 to-orange-600",
    bgColor: "bg-yellow-500/10",
    category: "Low Code",
    priority: 3
  },
  { 
    name: "React Native", 
    icon: <Smartphone size={20} />, 
    level: "Básico",
    description: "Desenvolvimento de aplicativos mobile multiplataforma",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-500/10",
    category: "Mobile",
    priority: 3
  },
  { 
    name: "Análise de Requisitos", 
    icon: <FileText size={20} />, 
    level: "Intermediário",
    description: "Levantamento, documentação e modelagem de requisitos de software",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-500/10",
    category: "Processos",
    priority: 2
  },
];

const categories = [
  { id: "all", name: "Todas", icon: <Layers size={16} /> },
  { id: "frontend", name: "Frontend", icon: <Globe size={16} /> },
  { id: "backend", name: "Backend", icon: <Server size={16} /> },
  { id: "mobile", name: "Mobile", icon: <Smartphone size={16} /> },
  { id: "tools", name: "Ferramentas", icon: <Layers size={16} /> },
  { id: "iot", name: "IoT", icon: <CpuIcon size={16} /> },
];

export default function TechnologiesSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredTechnologies = technologies.filter(tech => {
    if (selectedCategory === "all") return true;
    return tech.category.toLowerCase() === selectedCategory;
  });

  const displayedTechnologies = showAll ? filteredTechnologies : filteredTechnologies.filter(tech => tech.priority <= 2);

  const getLevelColor = (level) => {
    switch(level) {
      case 'Avançado': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Oracle Certified': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Intermediário': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Básico': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <Section id="tecnologias" background="gradient">
      <div className="relative">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <Heading
          title="Stack Tecnológico"
          subtitle="Domínio prático de ferramentas modernas para desenvolvimento de soluções completas e escaláveis"
          align="center"
          gradient
        />

        {/* Categorias */}
        <div className="mb-8 overflow-x-auto pb-2">
          <div className="flex flex-wrap justify-center gap-2 min-w-max px-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-500/20 border-blue-500/50 text-white'
                    : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {category.icon}
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Cards de Tecnologias */}
        <CardsGrid cols={1} sm={2} lg={3} gap="gap-4">
          {displayedTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="group h-full"
            >
              <Card
                className="h-full hover:scale-[1.02] transition-transform duration-300"
                gradient="from-gray-900 to-gray-950"
                hoverEffect
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${tech.bgColor}`}>
                    <div className={`text-white bg-gradient-to-br ${tech.color} p-2 rounded-lg`}>
                      {tech.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-semibold text-white">{tech.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(tech.level)}`}>
                        {tech.level}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">{tech.description}</p>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <Badge 
                    color="gray" 
                    variant="subtle" 
                    size="sm"
                    className="bg-gray-800/50"
                  >
                    {tech.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <TrendingUp size={12} />
                    <span>{tech.priority === 1 ? 'Alto' : tech.priority === 2 ? 'Médio' : 'Explorando'}</span>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </CardsGrid>

        {/* Botão para mostrar mais/menos */}
        {filteredTechnologies.length > 6 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300 hover:bg-gray-700/50 transition-all hover:border-gray-600"
            >
              {showAll ? (
                <>
                  <ChevronDown size={18} className="rotate-180" />
                  Mostrar menos
                </>
              ) : (
                <>
                  Ver todas as tecnologias
                  <ChevronDown size={18} />
                </>
              )}
            </button>
          </div>
        )}

        {/* Destaques */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-blue-500/20">
                <Brain className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">Aprendizado Contínuo</h3>
            </div>
            <p className="text-gray-400">
              Mantenho-me atualizado com as últimas tendências e melhores práticas do desenvolvimento moderno.
            </p>
          </div>
          
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-purple-500/20">
                <Rocket className="text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">Foco em Resultados</h3>
            </div>
            <p className="text-gray-400">
              Escolho as ferramentas mais adequadas para cada projeto, garantindo eficiência e qualidade.
            </p>
          </div>
          
          <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-green-500/20">
                <Sparkles className="text-green-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">Versatilidade</h3>
            </div>
            <p className="text-gray-400">
              Domínio em múltiplas áreas, desde desenvolvimento web até IoT e soluções low-code.
            </p>
          </div>
        </div>

        {/* Mensagem final */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-4 max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-gray-800">
            <div className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20">
              <TrendingUp className="text-blue-400" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Stack em Constante Evolução
            </h3>
            <p className="text-gray-400 text-lg">
              Meu conjunto de habilidades está sempre expandindo para acompanhar as demandas do mercado 
              e as necessidades dos projetos. Pronto para aprender e aplicar novas tecnologias quando necessário.
            </p>
            <Badge 
              color="blue" 
              variant="subtle"
              className="mt-2 bg-blue-500/20 border-blue-500/30"
            >
              Aberto a novos desafios tecnológicos
            </Badge>
          </div>
        </div>
      </div>
    </Section>
  );
}