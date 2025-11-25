import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { EDUCATION_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading title="Formación Académica" alignment="right" />

        <div className="grid gap-8 md:grid-cols-3">
          {EDUCATION_DATA.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 p-8 rounded-2xl border-t-4 border-brand-600 shadow-lg hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mb-4 text-brand-400">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
              <div className="text-lg text-brand-200 mb-4">{edu.institution}</div>
              <p className="text-sm font-mono text-zinc-500 mb-4">{edu.period}</p>
              {edu.description && (
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {edu.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;