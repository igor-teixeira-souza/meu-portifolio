import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Card from "../ui/Card";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      title: "Email",
      value: "teixeiraigor525@gmail.com",
      action:
        "https://mail.google.com/mail/?view=cm&fs=1&to=teixeiraigor525@gmail.com",
    },
    {
      icon: <Phone className="text-green-400" size={24} />,
      title: "WhatsApp",
      value: "(11) 91589-1623",
      action: "https://wa.me/5511915891623",
    },
    {
      icon: <MapPin className="text-purple-400" size={24} />,
      title: "Localização",
      value: "Mogi das Cruzes, SP",
      action: null,
    },
    {
      icon: <Clock className="text-orange-400" size={24} />,
      title: "Disponibilidade",
      value: "Resposta em até 24h",
      action: null,
    },
  ];

  return (
    <Section id="contato" background="gradient">
      <Heading
        title="Vamos Trabalhar Juntos?"
        subtitle="Entre em contato e vamos conversar sobre seu projeto. Estou sempre aberto a novas oportunidades!"
        align="center"
        gradient
      />

      <div className="mx-auto max-w-[90rem]">
        {/* Cards de Contato */}
        <div className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {contactMethods.map((method) => (
            <Card
              key={method.title}
              hoverEffect={!!method.action}
              gradient="from-gray-800/50 to-gray-900/50"
              className={
                method.action
                  ? "cursor-pointer hover:scale-105 transition-transform"
                  : ""
              }
              onClick={
                method.action
                  ? () => window.open(method.action, "_blank")
                  : null
              }
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full bg-gray-800/50">
                  {method.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#f4f1e8]">
                    {method.title}
                  </h4>
                  <p className="mt-2 text-base text-[#b9b9ab]">
                    {method.value}
                  </p>
                </div>
                {method.action && (
                  <span className="text-sm font-medium text-[#a8e6cf]">
                    Clique para entrar em contato
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Mensagem final */}
        <div className="text-center">
          <p className="mb-5 text-lg leading-relaxed text-[#b9b9ab] sm:text-xl">
            Não hesite em entrar em contato! Estou pronto para ajudar a
            transformar suas ideias em realidade.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 text-base text-[#9fa59b] sm:flex-row">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Disponível para projetos freelance
            </div>
            <div className="hidden sm:block text-gray-600">•</div>
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Resposta garantida em até 24 horas
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
