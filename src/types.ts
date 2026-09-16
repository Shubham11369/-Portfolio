export interface NavItem {
  name: string;
  href: string;
}

export interface CompactStat {
  label: string;
  value: string;
  sublabel?: string;
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'state' | 'tools' | 'additional';
  experienceYears?: string;
  tag: string;
  description: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  overview: string;
  achievements: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: 'machine-learning' | 'blockchain' | 'frontend' | 'fullstack' | 'all';
  description: string;
  longDescription: string;
  tags: string[];
  keyHighlights: string[];
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  imageFallbackGradient: string;
  previewType: 'telemetry' | 'terminal' | 'dashboard' | 'ecommerce';
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  score?: string;
  year?: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  skills: string[];
  iconType: 'sql' | 'copilot' | 'ai' | 'python' | 'Award';
}
