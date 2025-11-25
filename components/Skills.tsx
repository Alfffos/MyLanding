import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-zinc-900/30">
      <div className="container mx-auto px-6">
        <SectionHeading title="Conocimientos" subtitle="Stack tecnológico y herramientas." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS_DATA.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 hover:border-brand-600/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center text-brand-500 group-hover:bg-brand-900/20 group-hover:scale-110 transition-all duration-300 mb-6">
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-zinc-400 text-sm group-hover:text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;