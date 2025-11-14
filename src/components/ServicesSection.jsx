import React from "react";
import { Layout, Code2, PenTool } from "lucide-react";

const services = [
  {
    title: "UI/UX Designer",
    description: "Design moderno e focado na experiência do usuário.",
    icon: <Layout className="text-blue-600" size={40} />
  },
  {
    title: "Frontend Developer",
    description: "Criação de interfaces profissionais com React.",
    icon: <Code2 className="text-purple-600" size={40} />
  },
  {
    title: "3D Designer",
    description: "Modelos e ilustrações visuais avançadas.",
    icon: <PenTool className="text-green-600" size={40} />
  },
];

export default function ServicesSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">
          What I Do
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-lg p-10 border border-gray-200 hover:shadow-xl transition duration-300 text-center"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
