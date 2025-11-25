import React from 'react';
import { ExperienceItem, EducationItem, SkillCategory } from './types';
import { Terminal, Server, Database, Brain, Code2, Layout, GitBranch, Settings } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Inicio', href: '#home' },
  { name: 'Experiencia', href: '#experience' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Educación', href: '#education' },
  { name: 'Contacto', href: '#contact' },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'qgood',
    role: 'Backend Developer',
    company: 'Qgood / QgoodAI',
    period: 'Abril 2025 - Actualidad',
    description: 'Desarrollo de soluciones tecnológicas avanzadas en la división de IA (QgoodAI). Especializado en la construcción de arquitectura escalable mediante aprendizaje autodirigido y nuevas tecnologías. Implementación de soluciones impulsadas por Inteligencia Artificial para optimizar procesos.',
    tags: ['TypeScript', 'Next.js', 'React', 'AI SDK v5', 'PostgreSQL', 'Backend'],
    link: 'https://qgood.ai'
  },
  {
    id: 'tribal',
    role: 'Backend Developer',
    company: 'Tribal Software',
    period: 'Abril 2024 - Abril 2025',
    description: 'Participación en el desarrollo Back End utilizando Node.js como herramienta principal para la construcción de APIs Web. Especializado en diseño de lógica, arquitectura MVC y despliegue automatizado en servidores. Optimización de estructura de código y procesos con enfoque escalable.',
    tags: ['Node.js', 'API REST', 'MVC', 'Scalability', 'Scripts'],
  },
  {
    id: 'genexus',
    role: 'Genexus Developer',
    company: 'Genexus',
    period: 'Sept 2023 - Dic 2023',
    description: 'Pasantía en desarrollo de software utilizando Genexus 18. Colaboración en equipos ágiles para el ciclo de vida del desarrollo de aplicaciones empresariales.',
    tags: ['Genexus 18', 'Software Development', 'Agile'],
  },
  {
    id: 'esoftware',
    role: 'Freelance Full Stack Developer',
    company: 'eSoftware Agency',
    period: 'Junio 2022 - Actualidad',
    description: 'Emprendimiento especializado en desarrollo web. Foco principal en arquitectura Back End (.Net) y desarrollo de páginas web a medida.',
    tags: ['.Net', 'C#', 'Web Development', 'Freelance'],
    link: 'https://esoftware.com.ar/'
  },
  {
    id: 'teacher',
    role: 'Profesor Reemplazante',
    company: 'Escuela Nuestra Señora de la Guardia',
    period: 'Abril 2022 - Junio 2022',
    description: 'Docencia en materias técnicas para nivel secundario, guiando a alumnos en conceptos fundamentales de tecnología.',
    tags: ['Teaching', 'Leadership', 'Mentoring'],
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'austral',
    degree: 'Técnico Universitario Programador',
    institution: 'Universidad Austral',
    period: '2022 - 2024',
    description: 'Carrera finalizada. Título obtenido.'
  },
  {
    id: 'utn',
    degree: 'Ingeniería en Sistemas',
    institution: 'Universidad Tecnológica Nacional',
    period: '2021',
    description: 'Primer año de cursado completo, estableciendo bases sólidas en lógica y sistemas.'
  },
  {
    id: 'hs',
    degree: 'Técnico Electromecánico',
    institution: 'Escuela Nuestra Señora De La Guardia',
    period: '2014 - 2020',
    description: 'Formación técnica base con experiencia práctica en electricidad y mecánica.'
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Backend & Core',
    icon: <Server className="w-6 h-6" />,
    skills: ['.Net 7 / Entity Framework', 'Node.js / Express', 'TypeScript', 'C#', 'Python', 'MVC Pattern']
  },
  {
    title: 'Frontend & UI',
    icon: <Layout className="w-6 h-6" />,
    skills: ['React', 'Next.js', 'JavaScript', 'HTML5 / CSS3', 'Tailwind CSS', 'Wordpress / Elementor']
  },
  {
    title: 'Data & AI',
    icon: <Brain className="w-6 h-6" />,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Sequelize', 'AI SDK v5', 'GenAI Integration']
  },
  {
    title: 'DevOps & Tools',
    icon: <Terminal className="w-6 h-6" />,
    skills: ['Docker', 'Git / GitHub', 'Linux / Bash', 'JWT Auth', 'Scrum / Agile', 'RESTful APIs']
  }
];

export const CONTACT_INFO = {
  phone: '3416808333',
  email: 'alfonsogaray03@gmail.com',
  location: 'Rosario, Santa Fe, Argentina',
  linkedin: 'https://www.linkedin.com/in/alfonso-martin-garay',
  github: 'https://github.com/Alfffos'
};