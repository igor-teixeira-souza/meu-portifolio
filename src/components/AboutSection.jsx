export default function AboutSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">About Me</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Sou um desenvolvedor frontend apaixonado por criar interfaces 
            modernas, funcionais e visualmente atraentes. Meu foco é entregar 
            experiências fluidas usando React, Tailwind e boas práticas de UI/UX.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Além de programação, adoro design, estudar novas tecnologias e 
            melhorar continuamente minhas habilidades.
          </p>
        </div>

        <div className="bg-[#f8f9fb] p-8 rounded-2xl shadow-inner border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h3>
          <ul className="space-y-3 text-gray-700">
            <li>• React.js</li>
            <li>• Tailwind CSS</li>
            <li>• JavaScript (ES6+)</li>
            <li>• UI/UX Understanding</li>
            <li>• Git & GitHub</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
