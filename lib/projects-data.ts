export type ProjectCategory = 'web' | 'mobile' | 'ai' | 'data';

export type Project = {
  slug: string;
  category: ProjectCategory;
  translationKey: string;
  year: string;
  client: string;
  role: string;
  stack: string[];
  images: string[];
  demoLink: string;
  repoLink: string;
};

export const projects: Project[] = [
  {
    slug: 'agriconnect',
    category: 'ai',
    translationKey: 'Project_AgriConnect',
    year: '2024',
    client: 'AgriTech Initiative',
    role: 'ML Engineer',
    stack: ['Python', 'PyTorch', 'FastAPI', 'Docker', 'PostGIS', 'Sentinel Hub'],
    images: ['/images/agri.png'],
    demoLink: '#',
    repoLink: 'https://github.com/IDOEFRAIM',
  },
  {
    slug: 'liber',
    category: 'web',
    translationKey: 'Project_Liber',
    year: '2023',
    client: 'Education NGO',
    role: 'Lead Full-Stack Developer',
    stack: ['Next.js', 'GraphQL', 'PWA', 'IndexedDB'],
    images: [],
    demoLink: '#',
    repoLink: 'https://github.com/IDOEFRAIM',
  },
  {
    slug: 'edutrack-lms',
    category: 'web',
    translationKey: 'Project_schola',
    year: '2024',
    client: 'West Africa Schools',
    role: 'Lead Architect',
    stack: ['Next.js', 'PostgreSQL', 'Docker', 'GraphQL'],
    images: [],
    demoLink: '#',
    repoLink: 'https://github.com/IDOEFRAIM',
  },
  {
    slug: 'fraud-detection',
    category: 'data',
    translationKey: 'Project_fraud-detection',
    year: '2023',
    client: 'Kaggle Research',
    role: 'Data Scientist',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'SMOTE', 'SHAP'],
    images: [],
    demoLink: 'https://github.com/IDOEFRAIM/kaggle/tree/master/fraud_detection',
    repoLink: 'https://github.com/IDOEFRAIM/kaggle/blob/master/fraud_detection/fraud.ipynb',
  },
  {
    slug: 'mindcare',
    category: 'web',
    translationKey: 'Project_mindcare',
    year: '2024',
    client: 'HealthTech Startup',
    role: 'AI & Full-Stack Engineer',
    stack: ['RAG', 'LLM (GPT-4)', 'Next.js', 'Tailwind'],
    images: ['/mindcare1.jpeg', '/mindcare2.jpeg', '/mindcare3.jpeg'],
    demoLink: 'https://mindcare-wheat.vercel.app/expertise',
    repoLink: 'https://github.com/IDOEFRAIM',
  },
  {
    slug: 'amira-shop',
    category: 'web',
    translationKey: 'Project_amira_shop',
    year: '2024',
    client: 'Regional E-commerce',
    role: 'Lead Developer',
    stack: ['Next.js', 'Stripe API', 'Zustand', 'ISR'],
    images: [],
    demoLink: '#',
    repoLink: 'https://github.com/IDOEFRAIM',
  },
];

export const getProject = (category: ProjectCategory, slug: string) =>
  projects.find((p) => p.category === category && p.slug === slug.toLowerCase());
