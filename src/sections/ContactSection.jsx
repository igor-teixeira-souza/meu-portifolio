import React from "react";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { Mail, MessageSquare, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      title: "Email",
      value: "teixeiraigor525@gmail.com",
      action: "mailto:teixeiraigor525@gmail.com"
    },
    {
      icon: <Phone className="text-green-400" size={24} />,
      title: "WhatsApp",
      value: "(11) 99999-9999",
      action: "https://wa.me/5511999999999"
    },
    {
      icon: <MapPin className="text-purple-400" size={24} />,
      title: "Localização",
      value: "Mogi das Cruzes, SP",
      action: null
    },
    {
      icon: <Clock className="text-orange-400" size={24} />,
      title: "Disponibilidade",
      value: "Resposta em até 24h",
      action: null
    }
  ];

  return (
    <Section id="contato" background="gradient">
      <Heading
        title="Vamos Trabalhar Juntos?"
        subtitle="Entre em contato e vamos conversar sobre seu projeto. Estou sempre aberto a novas oportunidades!"
        align="center"
        gradient
      />

      <div className="max-w-4xl mx-auto">
        {/* Cards de Contato */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactMethods.map((method) => (
            <Card
              key={method.title}
              hoverEffect={!!method.action}
              gradient="from-gray-800/50 to-gray-900/50"
              className={method.action ? "cursor-pointer" : ""}
              onClick={method.action ? () => window.open(method.action, '_blank') : null}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full bg-gray-800/50">
                  {method.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{method.title}</h4>
                  <p className="text-gray-300 text-sm mt-1">{method.value}</p>
                </div>
                {method.action && (
                  <span className="text-blue-400 text-xs font-medium">
                    Clique para entrar em contato
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Card de Mensagem */}
        <Card
          gradient="from-blue-600/20 to-purple-600/20"
          icon={<Send className="text-blue-400" size={24} />}
          title="Envie uma Mensagem"
          subtitle="Estou ansioso para conhecer seu projeto!"
          className="mb-8"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm mb-2">Seu Nome</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Digite seu nome"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Seu Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Assunto</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                placeholder="Sobre o que gostaria de conversar?"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Mensagem</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500 resize-none"
                placeholder="Descreva seu projeto ou ideia..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <Button
                icon={<Send size={20} />}
                variant="gradient"
                size="lg"
                fullWidth
                type="submit"
              >
                Enviar Mensagem
              </Button>
            </div>
          </form>
        </Card>

        {/* Mensagem final */}
        <div className="text-center">
          <p className="text-gray-400 text-lg">
            Não hesite em entrar em contato! Estou pronto para ajudar a transformar suas ideias em realidade.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-blue-400">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Disponível para projetos freelance e oportunidades
          </div>
        </div>
      </div>
    </Section>
  );
}