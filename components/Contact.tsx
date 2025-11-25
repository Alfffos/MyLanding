import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-gradient-to-b from-zinc-900 to-zinc-950 pt-24 pb-12 border-t border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Empecemos a crear algo increíble.</h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-md">
              Estoy abierto a nuevas oportunidades y colaboraciones. Si buscas un desarrollador comprometido con la escalabilidad y la innovación, hablemos.
            </p>
            
            <div className="space-y-6">
              <ContactItem icon={<Mail />} text={CONTACT_INFO.email} href={`mailto:${CONTACT_INFO.email}`} />
              <ContactItem icon={<Phone />} text={CONTACT_INFO.phone} href={`tel:${CONTACT_INFO.phone}`} />
              <ContactItem icon={<MapPin />} text={CONTACT_INFO.location} />
            </div>

            <div className="flex gap-4 mt-8">
              <a href={CONTACT_INFO.github} target="_blank" className="bg-zinc-800 p-3 rounded-lg text-white hover:bg-brand-600 transition-colors">
                <Github />
              </a>
              <a href={CONTACT_INFO.linkedin} target="_blank" className="bg-zinc-800 p-3 rounded-lg text-white hover:bg-brand-600 transition-colors">
                <Linkedin />
              </a>
            </div>
          </div>

          <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-bold text-white mb-6">Envíame un mensaje</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Nombre</label>
                <input type="text" className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                <input type="email" className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" placeholder="tu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Mensaje</label>
                <textarea rows={4} className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" placeholder="¿En qué puedo ayudarte?"></textarea>
              </div>
              <button className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
                Enviar Mensaje
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-zinc-800 pt-8 text-center text-zinc-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Alfonso Martin Garay. Todos los derechos reservados.</p>
          <p>Desarrollado con React, Tailwind & Motion.</p>
        </div>
      </div>
    </footer>
  );
};

const ContactItem = ({ icon, text, href }: { icon: React.ReactNode; text: string; href?: string }) => (
  <div className="flex items-center gap-4">
    <div className="text-brand-500">{icon}</div>
    {href ? (
      <a href={href} className="text-zinc-300 hover:text-white transition-colors">{text}</a>
    ) : (
      <span className="text-zinc-300">{text}</span>
    )}
  </div>
);

export default Contact;