import React, { useState } from "react";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

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
      value: "(11) 91589-1623",
      action: "https://wa.me/5511915891623"
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ 
        type: 'error', 
        message: 'Por favor, preencha todos os campos obrigatórios.' 
      });
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ 
        type: 'error', 
        message: 'Por favor, insira um email válido.' 
      });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Envia o email usando EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Nova mensagem do portfólio',
        message: formData.message,
        to_name: 'Igor',
        reply_to: formData.email
      };

      // AQUI ESTÁ A MUDANÇA PRINCIPAL:
      // Removemos o quarto parâmetro (PUBLIC_KEY) pois já foi inicializado no main.jsx
      const response = await emailjs.send(
        'service_xkdyb22',     // ← SUBSTITUA pelo seu Service ID real
        'template_gt4c9ga',    // ← SUBSTITUA pelo seu Template ID real
        templateParams
        // NÃO passe o quarto parâmetro aqui!
      );

      if (response.status === 200) {
        setStatus({ 
          type: 'success', 
          message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.' 
        });
        
        // Limpa o formulário
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Erro detalhado ao enviar email:', error);
      setStatus({ 
        type: 'error', 
        message: error.text || 'Ocorreu um erro ao enviar a mensagem. Tente novamente ou entre em contato por outro meio.' 
      });
    } finally {
      setLoading(false);
    }
  };

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
              className={method.action ? "cursor-pointer hover:scale-105 transition-transform" : ""}
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
          {status.message && (
            <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
              status.type === 'success' 
                ? 'bg-green-500/10 border border-green-500/20' 
                : 'bg-red-500/10 border border-red-500/20'
            }`}>
              {status.type === 'success' ? (
                <CheckCircle className="text-green-400 mt-0.5" size={20} />
              ) : (
                <AlertCircle className="text-red-400 mt-0.5" size={20} />
              )}
              <p className={`text-sm ${
                status.type === 'success' ? 'text-green-300' : 'text-red-300'
              }`}>
                {status.message}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Digite seu nome"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Seu Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Assunto
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Sobre o que gostaria de conversar?"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Mensagem *
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500 resize-none transition-colors"
                placeholder="Descreva seu projeto ou ideia..."
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <Button
                icon={loading ? null : <Send size={20} />}
                variant="gradient"
                size="lg"
                fullWidth
                type="submit"
                disabled={loading}
                className={loading ? "opacity-80 cursor-not-allowed" : ""}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </span>
                ) : (
                  "Enviar Mensagem"
                )}
              </Button>
              <p className="text-gray-400 text-xs mt-3">
                * Campos obrigatórios
              </p>
            </div>
          </form>
        </Card>

        {/* Mensagem final */}
        <div className="text-center">
          <p className="text-gray-400 text-lg mb-4">
            Não hesite em entrar em contato! Estou pronto para ajudar a transformar suas ideias em realidade.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400">
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