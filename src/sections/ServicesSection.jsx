import React, { useState } from "react";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Card from "../ui/Card";
import CardsGrid from "../ui/CardsGrid";
import IconBox from "../ui/IconBox";
import Button from "../ui/Button";
import { Layout, Code2, PenTool, Users, Smartphone, Zap, ChevronRight, Sparkles, Target, Clock, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    description: "Interfaces modernas focadas na experiência do usuário",
    icon: <Layout size={24} />,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/5 to-cyan-500/5",
    details: "Criação de protótipos, design system e experiência do usuário otimizada",
    features: ["Wireframes & Protótipos", "Design System", "User Research", "Testes de Usabilidade"],
    duration: "2-4 semanas"
  },
  {
    title: "Desenvolvimento Frontend",
    description: "Soluções web responsivas e performáticas",
    icon: <Code2 size={24} />,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/5 to-pink-500/5",
    details: "React, TypeScript, Tailwind CSS e boas práticas de desenvolvimento",
    features: ["React/Next.js", "TypeScript", "Tailwind CSS", "SEO Otimizado"],
    duration: "3-6 semanas"
  },
  {
    title: "Consultoria Técnica",
    description: "Análise e planejamento de soluções",
    icon: <Users size={24} />,
    gradient: "from-orange-500 to-yellow-500",
    bgGradient: "from-orange-500/5 to-yellow-500/5",
    details: "Levantamento de requisitos e definição de arquitetura",
    features: ["Análise de Requisitos", "Arquitetura de Software", "Tech Stack", "Estimativas"],
    duration: "1-2 semanas"
  },
  {
    title: "Desenvolvimento Mobile",
    description: "Aplicativos para iOS e Android",
    icon: <Smartphone size={24} />,
    gradient: "from-red-500 to-rose-500",
    bgGradient: "from-red-500/5 to-rose-500/5",
    details: "React Native para apps multiplataforma",
    features: ["React Native", "iOS & Android", "Push Notifications", "Store Deployment"],
    duration: "4-8 semanas"
  },
  {
    title: "Soluções Low Code",
    description: "Desenvolvimento ágil com Power Apps",
    icon: <Zap size={24} />,
    gradient: "from-yellow-500 to-amber-500",
    bgGradient: "from-yellow-500/5 to-amber-500/5",
    details: "Prototipagem rápida e soluções empresariais",
    features: ["Microsoft Power Apps", "Automação de Processos", "Integrações", "Dashboards"],
    duration: "1-3 semanas"
  },
  {
    title: "Brand & Identity",
    description: "Identidade visual e marca",
    icon: <PenTool size={24} />,
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/5 to-emerald-500/5",
    details: "Desenvolvimento de marca e identidade visual completa",
    features: ["Logo Design", "Paleta de Cores", "Tipografia", "Brand Guidelines"],
    duration: "2-3 semanas"
  },
];

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <Section id="servicos" background="dark">
      <div className="relative">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <Heading
          title="Serviços Especializados"
          subtitle="Soluções completas para transformar suas ideias em produtos digitais de alta qualidade"
          align="center"
          gradient
        />

        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-gray-800">
            <Sparkles className="text-yellow-400" size={18} />
            <span className="text-gray-300">+15 projetos entregues com excelência</span>
            <Target className="text-blue-400" size={18} />
          </div>
        </div>

        <CardsGrid cols={3} gap="gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.bgGradient} transition-all duration-500 ${
                hoveredCard === index ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}></div>
              
              <Card
                title={service.title}
                subtitle={service.description}
                icon={
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                }
                className="relative z-10 transition-all duration-300 hover:-translate-y-2"
                header={
                  <div className="flex justify-between items-start mb-4">
                    <div></div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock size={14} />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                }
              >
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.details}
                </p>
                
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-gray-300">Inclui:</h4>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-400" />
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <button className="group w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/10">
                    <span>Saber mais</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </Card>
            </div>
          ))}
        </CardsGrid>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-blue-500/20">
                <Target className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">Foco no Cliente</h3>
            </div>
            <p className="text-gray-400">
              Entendimento profundo das necessidades do seu negócio para entregar exatamente o que você precisa.
            </p>
          </div>
          
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-purple-500/20">
                <Zap className="text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">Agilidade</h3>
            </div>
            <p className="text-gray-400">
              Metodologias ágeis para entregas rápidas e contínuas, mantendo você sempre atualizado.
            </p>
          </div>
          
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-green-500/20">
                <CheckCircle className="text-green-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">Qualidade Garantida</h3>
            </div>
            <p className="text-gray-400">
              Código limpo, testes rigorosos e padrões de qualidade para garantir soluções robustas.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}