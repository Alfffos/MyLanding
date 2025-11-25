import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-brand-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/30 border border-brand-700/50 text-brand-300 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Disponible para proyectos
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-zinc-100">Alfonso</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">
                Martin Garay
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-lg leading-relaxed">
              Full Stack Developer especializado en <strong>Backend</strong> y soluciones con <strong>Inteligencia Artificial</strong>. Transformo ideas complejas en arquitecturas escalables.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a 
                href="#experience"
                onClick={(e) => handleScroll(e, '#experience')}
                className="group flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-lg transition-all shadow-[0_4px_20px_rgba(124,58,237,0.3)] hover:shadow-[0_4px_25px_rgba(124,58,237,0.5)] cursor-pointer"
              >
                Ver Experiencia
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold rounded-lg border border-zinc-700 hover:border-zinc-600 transition-all cursor-pointer"
              >
                Contactar
              </a>
            </div>

            <div className="flex items-center gap-6">
              <SocialLink href={CONTACT_INFO.github} icon={<Github className="w-5 h-5" />} label="GitHub" />
              <SocialLink href={CONTACT_INFO.linkedin} icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
              <SocialLink href={`mailto:${CONTACT_INFO.email}`} icon={<Mail className="w-5 h-5" />} label="Email" />
            </div>
          </motion.div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative z-10 rounded-2xl overflow-hidden border-4 border-zinc-800 shadow-2xl">
              {/* Using a tech/abstract image as per best practices when no direct user image file is available, 
                  but user asked to use their CV info. Since I cannot extract the image directly, 
                  I will use a high quality placeholder that fits the vibe. */}
              <img 
                src="https://picsum.photos/seed/alfonso/800/800" 
                alt="Alfonso Martin Garay" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent mix-blend-multiply"></div>
            </div>
            {/* Decorators */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-brand-500/30 rounded-2xl z-0" />
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-zinc-700/50 rounded-2xl z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 text-zinc-400 hover:text-brand-400 hover:bg-brand-900/20 rounded-full transition-all"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Hero;