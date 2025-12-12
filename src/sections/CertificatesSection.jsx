import React from "react";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Card from "../ui/Card";
import CardsGrid from "../ui/CardsGrid";
import Button from "../ui/Button";
import { Award, ExternalLink, Download, BookOpen } from "lucide-react";

const certificates = [
  {
    title: "Java Foundations",
    issuer: "Oracle Academy",
    date: "Junho 2025",
    description: "Fundamentos de programação Java e desenvolvimento de aplicações",
    credentialId: "Oracle Academy - SENAI",
    category: "Programação",
    completionDate: "6/3/2025"
  },
  {
    title: "Database Programming with SQL",
    issuer: "Oracle Academy",
    date: "Março 2025",
    description: "Programação de bancos de dados com SQL avançado",
    credentialId: "Oracle Academy - SENAI",
    category: "Banco de Dados",
    completionDate: "3/18/2025"
  },
  {
    title: "Database Foundations",
    issuer: "Oracle Academy",
    date: "Março 2025",
    description: "Fundamentos de bancos de dados relacionais e modelagem",
    credentialId: "Oracle Academy - SENAI",
    category: "Banco de Dados",
    completionDate: "3/19/2025"
  },
];

export default function CertificatesSection() {
  // Função para baixar o currículo
  const handleDownloadCV = () => {
    // Cria um link temporário para download
    const link = document.createElement('a');
    
    // Supondo que o arquivo esteja na pasta public com o nome "curriculo_igor_teixeira.pdf"
    // Se o arquivo estiver em outro local, ajuste o caminho
    link.href = '/public/Currículo_Igor_Teixeira_Souza.pdf';
    
    // Define o nome do arquivo que será baixado
    link.download = 'Currículo de Igor Teixeira Souza.pdf';
    
    // Adiciona o link ao DOM (necessário para alguns navegadores)
    document.body.appendChild(link);
    
    // Simula o clique no link
    link.click();
    
    // Remove o link do DOM
    document.body.removeChild(link);
  };

  // Função para baixar certificado específico (exemplo)
  const handleDownloadCertificate = (certificateName) => {
    // Esta é uma função de exemplo - você precisará implementar a lógica específica
    // para cada certificado ou usar um link direto para o PDF
    console.log(`Baixando certificado: ${certificateName}`);
    
    // Exemplo de implementação para certificados individuais:
    // const link = document.createElement('a');
    // link.href = `/certificados/${certificateName.replace(/\s+/g, '_')}.pdf`;
    // link.download = `${certificateName}_Igor_Teixeira.pdf`;
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  // Função para visualizar detalhes do certificado (exemplo)
  const handleViewCertificate = (certificateName) => {
    // Esta função pode abrir um modal, uma nova página ou o PDF em uma nova aba
    console.log(`Visualizando certificado: ${certificateName}`);
    
    // Exemplo: Abrir em nova aba se tiver um link direto
    // window.open(`/certificados/${certificateName.replace(/\s+/g, '_')}.pdf`, '_blank');
  };

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
          <Award className="text-yellow-400" size={16} />
          <span className="text-blue-300 text-sm">
            Certificações Oracle Academy concluídas em 2025
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
                  <button 
                    className="p-1 hover:bg-gray-800 rounded" 
                    title="Ver detalhes"
                    onClick={() => handleViewCertificate(cert.title)}
                  >
                    <ExternalLink size={16} className="text-gray-400" />
                  </button>
                  <button 
                    className="p-1 hover:bg-gray-800 rounded" 
                    title="Baixar certificado"
                    onClick={() => handleDownloadCertificate(cert.title)}
                  >
                    <Download size={16} className="text-gray-400" />
                  </button>
                </div>
              </div>
            }
          >
            <p className="text-gray-300 text-sm mb-3">
              {cert.description}
            </p>
            <div className="text-xs text-gray-500 mb-2">
              Conclusão: {cert.completionDate}
            </div>
            <div className="text-xs text-gray-500">
              Emitido por: {cert.credentialId}
            </div>
            <div className="mt-2">
              <span className="inline-block px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded">
                {cert.category}
              </span>
            </div>
          </Card>
        ))}
      </CardsGrid>

      <div className="mt-12 gap-1 flex justify-around flex-col text-center space-y-6">
        <div className="inline-flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 border border-gray-700 max-w-md mx-auto">
          <BookOpen className="text-blue-400" size={24} />
          <div className="flex justify-center flex-col items-start text-left">
            <p className="text-white font-medium">Aprendizado Contínuo</p>
            <p className="text-gray-400 text-sm">
              Instrutor: Bruno Messias (Oracle Academy Instructor)
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button
            icon={<Download size={20} />}
            variant="gradient"
            size="lg"
            onClick={handleDownloadCV}
            className="cursor-pointer"
          >
            Baixar Currículo Completo
          </Button>
          <p className="text-gray-400 text-sm mt-2">
            Inclui todas as certificações e qualificações
          </p>
        </div>
      </div>
    </Section>
  );
}