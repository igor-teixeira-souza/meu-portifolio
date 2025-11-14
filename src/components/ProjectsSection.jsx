import React from "react";

const projects = [
  {
    title: "Landing Page – Fintech",
    image: "/src/assets/projects/projeto1.png",
    category: "Web Design"
  },
  {
    title: "Dashboard – Analytics",
    image: "/src/assets/projects/projeto2.png",
    category: "UI/UX"
  },
  {
    title: "E-commerce – Moda",
    image: "/src/assets/projects/projeto3.png",
    category: "Frontend"
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-28 bg-[#f8f9fb]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-blue-600 font-semibold">{p.category}</p>
                <h3 className="text-xl font-bold text-gray-900 mt-1">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
