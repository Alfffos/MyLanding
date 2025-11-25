import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Experiencia Laboral" subtitle="Mi trayectoria profesional y proyectos recientes." />

        <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE_DATA.map((job, index) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[5px] md:-left-[9px] top-0 w-3 h-3 md:w-5 md:h-5 rounded-full border-4 border-zinc-950 ${index === 0 ? 'bg-brand-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]' : 'bg-zinc-700'}`} />
              
              <div className="group relative bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800/60 hover:border-brand-500/30 transition-all hover:bg-zinc-900/60">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-brand-300 transition-colors">
                      {job.role}
                    </h3>
                    <div className="flex items-center gap-2 text-brand-400 font-medium mt-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.company}</span>
                      {job.link && (
                        <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-500 text-sm font-mono bg-zinc-950/50 px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-3 h-3" />
                    {job.period}
                  </div>
                </div>

                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs font-medium text-brand-200 bg-brand-900/20 border border-brand-800/30 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;