import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Search, Users } from 'lucide-react';
import SectionHeading from './SectionHeading';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Sobre Mí" subtitle="Pasión por la tecnología y la resolución de problemas." alignment="center" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-300 leading-relaxed text-lg text-center mb-12"
          >
            <p className="mb-6">
              Desde pequeño, fui un apasionado de la informática, armando computadoras y utilizando internet para informarme sobre hardware. 
              En la actualidad, me mantengo al tanto de los <span className="text-brand-400 font-semibold">patrones y tecnologías de diseño de aplicaciones</span>, 
              convirtiendo mi conocimiento en aplicaciones web reales.
            </p>
            <p>
              Me especializo en recopilar historias de usuarios y detectar deficiencias para optimizarlas, 
              guiando así a los usuarios hacia la <span className="text-brand-400 font-semibold">solución más eficaz</span>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Cpu />} 
              title="Hardware & Software" 
              desc="Entendimiento profundo desde el hierro hasta la nube." 
            />
            <FeatureCard 
              icon={<Search />} 
              title="Optimización" 
              desc="Detección de deficiencias y mejora continua de procesos." 
            />
            <FeatureCard 
              icon={<Users />} 
              title="Enfoque en Usuario" 
              desc="Soluciones guiadas por necesidades reales y feedback." 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-brand-600/50 transition-colors shadow-lg"
  >
    <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-brand-400 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-zinc-400 text-sm">{desc}</p>
  </motion.div>
);

export default About;