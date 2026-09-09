import { Award, BookOpen, Download, ExternalLink } from "lucide-react";
import Card from "../ui/Card";
import CardsGrid from "../ui/CardsGrid";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

const certificates = [
  {
    title: "Java Foundations",
    issuer: "Oracle Academy",
    date: "Junho 2025",
    description:
      "Fundamentos de programação Java e desenvolvimento de aplicações",
    credentialId: "Oracle Academy - SENAI",
    category: "Programação",
    completionDate: "6/3/2025",
  },
  {
    title: "Database Programming with SQL",
    issuer: "Oracle Academy",
    date: "Março 2025",
    description: "Programação de bancos de dados com SQL avançado",
    credentialId: "Oracle Academy - SENAI",
    category: "Banco de Dados",
    completionDate: "3/18/2025",
  },
  {
    title: "Database Foundations",
    issuer: "Oracle Academy",
    date: "Março 2025",
    description: "Fundamentos de bancos de dados relacionais e modelagem",
    credentialId: "Oracle Academy - SENAI",
    category: "Banco de Dados",
    completionDate: "3/19/2025",
  },
];

export default function CertificatesSection() {
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

      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-[#a8e6cf]/20 bg-[#a8e6cf]/10 px-5 py-3">
          <Award className="text-yellow-400" size={16} />
          <span className="text-base font-medium text-[#a8e6cf]">
            Certificações Oracle Academy concluídas em 2025
          </span>
        </div>
      </div>

      <CardsGrid cols={3} gap="gap-6 lg:gap-8">
        {certificates.map((cert) => (
          <Card
            key={cert.title}
            title={cert.title}
            subtitle={cert.issuer}
            icon={<Award className="text-yellow-500" size={24} />}
            gradient="from-yellow-500/20 to-orange-500/20"
            footer={
              <div className="flex items-center justify-between gap-4">
                <span className="text-base font-medium text-[#b9b9ab]">
                  {cert.date}
                </span>
                <div className="flex gap-2">
                  <button
                    className="rounded-lg p-2 transition-colors hover:bg-white/10"
                    title="Ver detalhes"
                    onClick={() => handleViewCertificate(cert.title)}
                  >
                    <ExternalLink size={18} className="text-[#b9b9ab]" />
                  </button>
                  <button
                    className="rounded-lg p-2 transition-colors hover:bg-white/10"
                    title="Baixar certificado"
                    onClick={() => handleDownloadCertificate(cert.title)}
                  >
                    <Download size={18} className="text-[#b9b9ab]" />
                  </button>
                </div>
              </div>
            }
          >
            <p className="mb-5 text-base leading-relaxed text-[#b9b9ab]">
              {cert.description}
            </p>
            <div className="mt-auto space-y-2 text-sm text-[#9fa59b]">
              <p>Conclusão: {cert.completionDate}</p>
              <p>Emitido por: {cert.credentialId}</p>
            </div>
            <div className="mt-5">
              <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-[#f4f1e8]">
                {cert.category}
              </span>
            </div>
          </Card>
        ))}
      </CardsGrid>

      <div className="mt-14 flex flex-col items-center gap-8 text-center">
        <div className="flex w-full max-w-xl items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 text-left">
          <BookOpen className="text-blue-400" size={24} />
          <div>
            <p className="text-lg font-semibold text-[#f4f1e8]">
              Aprendizado Contínuo
            </p>
            <p className="mt-1 text-base leading-relaxed text-[#9fa59b]">
              Instrutor: Bruno Messias (Oracle Academy Instructor)
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
