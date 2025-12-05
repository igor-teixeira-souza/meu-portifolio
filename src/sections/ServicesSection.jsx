import React from "react";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Card from "../ui/Card";
import CardsGrid from "../ui/CardsGrid";
import IconBox from "../ui/IconBox";
import { Layout, Code2, PenTool, Users, Smartphone, Zap } from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    description: "Interfaces modernas focadas na experiência do usuário",
    icon: <Layout size={24} />,
    gradient: "from-blue-500 to-cyan-500",
    details: "Criação de protótipos, design system e experiência do usuário otimizada"
  },
  {
    title: "Desenvolvimento Frontend",
    description: "Soluções web responsivas e performáticas",
    icon: <Code2 size={24} />,
    gradient: "from-purple-500 to-pink-500",
    details: "React, TypeScript, Tailwind CSS e boas práticas de desenvolvimento"
  },
  {
    title: "Consultoria Técnica",
    description: "Análise e planejamento de soluções",
    icon: <Users size={24} />,
    gradient: "from-orange-500 to-yellow-500",
    details: "Levantamento de requisitos e definição de arquitetura"
  },
  {
    title: "Desenvolvimento Mobile",
    description: "Aplicativos para iOS e Android",
    icon: <Smartphone size={24} />,
    gradient: "from-red-500 to-rose-500",
    details: "React Native para apps multiplataforma"
  },
  {
    title: "Soluções Low Code",
    description: "Desenvolvimento ágil com Power Apps",
    icon: <Zap size={24} />,
    gradient: "from-yellow-500 to-amber-500",
    details: "Prototipagem rápida e soluções empresariais"
  },
];

export default function ServicesSection() {
  return (
    <Section id="servicos" background="dark">
      <Heading
        title="O Que Eu Faço"
        subtitle="Serviços especializados para transformar suas ideias em realidade digital"
        align="center"
        gradient
      />

      <CardsGrid cols={3} gap="gap-8">
        {services.map((service) => (
          <Card
            key={service.title}
            title={service.title}
            subtitle={service.description}
            icon={<IconBox icon={service.icon} gradient={service.gradient} />}
            gradient={service.gradient}
            align="center"
          >
            <p className="text-gray-300 mt-4 text-center">
              {service.details}
            </p>
            
            <div className="mt-6 text-center">
              <span className="inline-block px-4 py-2 text-sm font-medium text-blue-400 bg-blue-500/10 rounded-full">
                Saiba mais
              </span>
            </div>
          </Card>
        ))}
      </CardsGrid>

      <div className="mt-12 text-center">
        <p className="text-gray-400 text-lg">
          Cada projeto é único. Vamos conversar sobre como posso ajudar no seu!
        </p>
      </div>
    </Section>
  );
}