import React from "react";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Card from "../ui/Card";
import CardsGrid from "../ui/CardsGrid";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { Award, ExternalLink, Download, BookOpen, CheckCircle, Star } from "lucide-react";

const certificates = [
  {
    title: "Oracle Database Foundations",
    issuer: "Oracle Academy",
    date: "2023",
    description: "Fundamentos de bancos de dados relacionais e SQL avançado",
    credentialId: "OC-DBF-2023",
    category: "Banco de Dados"
  },
  {
    title: "React & TypeScript Mastery",
    issuer: "Alura",
    date: "2024",
    description: "Desenvolvimento avançado com React e TypeScript moderno",
    credentialId: "AL-REACT-2024",
    category: "Frontend"
  },
  {
    title: "Frontend Development",
    issuer: "Rocketseat",
    date: "2023",
    description: "Desenvolvimento web completo com React e Node.js",
    credentialId: "RS-FRONT-2023",
    category: "Full Stack"
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Figma & Coursera",
    date: "2023",
    description: "Princípios de design de interface e experiência do usuário",
    credentialId: "FIG-UIUX-2023",
    category: "Design"
  },
  {
    title: "JavaScript ES6+ Avançado",
    issuer: "Digital Innovation One",
    date: "2023",
    description: "JavaScript moderno, assíncrono e boas práticas",
    credentialId: "DIO-JS-2023",
    category: "Linguagens"
  },
  {
    title: "Arduino & IoT Development",
    issuer: "Cursa",
    date: "2023",
    description: "Programação para Arduino, IoT e automação",
    credentialId: "CRS-ARD-2023",
    category: "IoT"
  },
  {
    title: "Técnico em Desenvolvimento de Sistemas",
    issuer: "SENAI",
    date: "2022-2023",
    description: "Formação técnica completa em desenvolvimento de software",
    credentialId: "SENAI-DS-2023",
    category: "Formação"
  },
  {
    title: "Power Apps & Low Code",
    issuer: "Microsoft Learn",
    date: "2023",
    description: "Desenvolvimento de soluções com Microsoft Power Platform",
    credentialId: "MS-POWER-2023",
    category: "Low Code"
  },
];

export default function CertificatesSection() {
  return (
    <Section id="certificados" background="dark">
      <Heading
        title="Certificações & Qualificações"
        subtitle="Certificações que comprovam meu conhecimento e dedicação ao aprendizado contínuo"
        align="center"
        gradient
      />

      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
          <Star className="text-yellow-400" size={16} />
          <span className="text-blue-300 text-sm">
            Formação técnica de 2 anos complementada por certificações especializadas
          </span>
        </div>
      </div>

      <CardsGrid cols={3} gap="gap-6">
        {certificates.map((cert) => (
          <Card
            key={cert.title}
            title={cert.title}
            subtitle={cert.issuer}
            icon={<Award className="text-yellow-500" size={24} />}
            gradient="from-yellow-500/20 to-orange-500/20"
            footer={
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">{cert.date}</span>
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-gray-800 rounded">
                    <ExternalLink size={16} className="text-gray-400" />
                  </button>
                  <button className="p-1 hover:bg-gray-800 rounded">
                    <Download size={16} className="text-gray-400" />
                  </button>
                </div>
              </div>
            }
          >
            <p className="text-gray-300 text-sm mb-3">
              {cert.description}
            </p>
            <div className="text-xs text-gray-500">
              ID: {cert.credentialId}
            </div>
          </Card>
        ))}
      </CardsGrid>

      <div className="mt-12 text-center space-y-6">
        <div className="inline-flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 border border-gray-700">
          <BookOpen className="text-blue-400" size={24} />
          <div className="text-left">
            <p className="text-white font-medium">Aprendizado Contínuo</p>
            <p className="text-gray-400 text-sm">
              Estou sempre em busca de novas certificações e cursos para me aprimorar
            </p>
          </div>
          <CheckCircle className="text-green-400" size={24} />
        </div>

        <Button
          icon={<Download size={20} />}
          variant="gradient"
          size="lg"
        >
          Baixar Currículo Completo
        </Button>
      </div>
    </Section>
  );
}