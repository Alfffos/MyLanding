export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}
