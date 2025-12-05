import React from "react";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Card from "../ui/Card";
import CardsGrid from "../ui/CardsGrid";
import Badge from "../ui/Badge";
import { MapPin, Calendar, GraduationCap, Target, Heart, Rocket } from "lucide-react";

export default function AboutSection() {
  const personalInfo = [
    {
      icon: <Calendar className="text-blue-400" size={20} />,
      label: "Idade",
      value: "18 Anos"
    },
    {
      icon: <MapPin className="text-green-400" size={20} />,
      label: "Localização",
      value: "Mogi das Cruzes, SP"
    },
    {
      icon: <GraduationCap className="text-purple-400" size={20} />,
      label: "Formação",
      value: "Técnico em Desenvolvimento de Sistemas"
    },
    {
      icon: <Rocket className="text-orange-400" size={20} />,
      label: "Experiência",
      value: "2 anos SENAI + Projetos Pessoais"
    }
  ];

  const skills = [
    { name: "Resolução de Problemas", level: 95 },
    { name: "Aprendizado Rápido", level: 90 },
    { name: "Trabalho em Equipe", level: 85 },
    { name: "Comunicação", level: 80 },
    { name: "Criatividade", level: 88 },
    { name: "Organização", level: 92 }
  ];

  return (
    <Section id="sobre" background="gradient">
      <Heading
        title="Sobre Mim"
        subtitle="Conheça um pouco da minha jornada e filosofia de trabalho"
        align="center"
        gradient
      />

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Coluna 1: Informações Pessoais */}
        <Card
          gradient="from-blue-600/20 to-purple-600/20"
          icon={<Target className="text-blue-400" size={24} />}
          title="Minha História"
          subtitle="De Mogi das Cruzes para o mundo digital"
        >
          <div className="space-y-4 text-gray-300">
            <p>
              Sou um desenvolvedor frontend apaixonado por tecnologia desde os 16 anos, 
              quando descobri minha vocação para programação durante meu curso técnico.
            </p>
            <p>
              Minha formação de <span className="text-blue-400 font-semibold">2 anos como Técnico em Desenvolvimento de Sistemas pelo SENAI</span> 
              me deu uma base sólida em lógica de programação, estrutura de dados e boas práticas de desenvolvimento.
            </p>
            <p>
              Acredito que a tecnologia deve ser <span className="text-purple-400 font-semibold">acessível, intuitiva e transformadora</span>. 
              Meu objetivo é criar soluções que não apenas funcionem, mas que proporcionem experiências memoráveis.
            </p>
          </div>

          {/* Informações pessoais */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            {personalInfo.map((info) => (
              <div key={info.label} className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30">
                {info.icon}
                <div>
                  <p className="text-sm text-gray-400">{info.label}</p>
                  <p className="text-white font-medium">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Coluna 2: Filosofia e Habilidades */}
        <Card
          gradient="from-purple-600/20 to-pink-600/20"
          icon={<Heart className="text-purple-400" size={24} />}
          title="Minha Filosofia"
          subtitle="Como encaro cada projeto"
        >
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <p className="text-blue-300 font-medium italic">
                "Mesmo que não seja algo da minha área de especialização, estou sempre disposto a aprender 
                e me dedicar para entregar o melhor desempenho possível em qualquer desafio."
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Habilidades Interpessoais</h4>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Cards de Valores */}
      <CardsGrid cols={3} gap="gap-6">
        <Card
          title="Dedicação Total"
          subtitle="Comprometimento em cada linha de código"
          gradient="from-green-500 to-emerald-600"
          align="center"
        >
          <p className="text-gray-300 text-center mt-4">
            Acredito que a qualidade está nos detalhes. Cada projeto recebe atenção especial.
          </p>
        </Card>

        <Card
          title="Aprendizado Contínuo"
          subtitle="Sempre em busca de conhecimento"
          gradient="from-blue-500 to-cyan-600"
          align="center"
        >
          <p className="text-gray-300 text-center mt-4">
            A tecnologia evolui rapidamente. Me mantenho atualizado com as melhores práticas.
          </p>
        </Card>

        <Card
          title="Colaboração"
          subtitle="Trabalho em equipe é essencial"
          gradient="from-purple-500 to-pink-600"
          align="center"
        >
          <p className="text-gray-300 text-center mt-4">
            Acredito que as melhores soluções surgem da troca de ideias e experiências.
          </p>
        </Card>
      </CardsGrid>
    </Section>
  );
}