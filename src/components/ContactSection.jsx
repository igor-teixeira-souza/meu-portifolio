import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-28 bg-[#f8f9fb] text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Let’s Work Together</h2>
      <p className="text-gray-600 mb-10">
        Entre em contato e vamos conversar sobre seu projeto.
      </p>

      <a
        href="mailto:igor@email.com"
        className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <Mail size={22} />
        Send a Message
      </a>
    </section>
  );
}
