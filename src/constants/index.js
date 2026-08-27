export const personalInfo = {
  name: 'Venkata Raja Pavan Kumar Reddy',
  fullName: 'Venkata Raja Pavan Kumar Reddy Valila',
  title: 'AI-Native Java Backend Engineer',
  tagline: 'Building scalable Java backend systems with Spring Boot while integrating AI into real-world applications.',
  email: 'rajapawanvalila@gmail.com',
  location: 'Pune, Maharashtra (Originally from Kadapa, Andhra Pradesh)',
  phone: '+91-XXXXXXXXXX', // Update with actual phone
  linkedin: 'https://www.linkedin.com/in/valila-venkata-raja-pavan-kumar-reddy/',
  github: 'https://github.com/PawanRaja-hub',
  naukri: 'https://www.naukri.com/mnjuser/profile',
  resumeUrl: '/resume.pdf',
  socialLinks: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/valila-venkata-raja-pavan-kumar-reddy/', icon: 'FaLinkedin' },
    { name: 'GitHub', url: 'https://github.com/PawanRaja-hub', icon: 'FaGithub' },
    { name: 'Naukri', url: 'https://www.naukri.com/mnjuser/profile', icon: 'FaBriefcase' },
    { name: 'Email', url: 'mailto:rajapawanvalila@gmail.com', icon: 'FaEnvelope' },
  ],
};

export const skills = {
  backend: [
    { name: 'Java', level: 'Advanced', icon: 'FaJava', color: '#ED8B00' },
    { name: 'Spring Boot', level: 'Advanced', icon: 'FaLeaf', color: '#6DB33F' },
    { name: 'Spring Security', level: 'Intermediate', icon: 'FaShieldAlt', color: '#6DB33F' },
    { name: 'REST APIs', level: 'Advanced', icon: 'FaExchangeAlt', color: '#009688' },
    { name: 'JWT', level: 'Advanced', icon: 'FaKey', color: '#FF6B35' },
    { name: 'JPA', level: 'Advanced', icon: 'FaDatabase', color: '#F44336' },
    { name: 'Hibernate', level: 'Advanced', icon: 'FaCogs', color: '#59666C' },
  ],
  coreJava: [
    { name: 'OOP', level: 'Advanced', icon: 'FaCube', color: '#ED8B00' },
    { name: 'Collections', level: 'Advanced', icon: 'FaList', color: '#ED8B00' },
    { name: 'Multithreading', level: 'Advanced', icon: 'FaThreads', color: '#ED8B00' },
    { name: 'Exception Handling', level: 'Advanced', icon: 'FaExclamationTriangle', color: '#ED8B00' },
    { name: 'Java 8+', level: 'Advanced', icon: 'FaCode', color: '#ED8B00' },
    { name: 'Streams', level: 'Advanced', icon: 'FaStream', color: '#ED8B00' },
    { name: 'Lambdas', level: 'Advanced', icon: 'FaLambda', color: '#ED8B00' },
  ],
  aiIntegration: [
    { name: 'Spring AI', level: 'Intermediate', icon: 'FaBrain', color: '#8B5CF6' },
    { name: 'Prompt Engineering', level: 'Intermediate', icon: 'FaMagic', color: '#8B5CF6' },
    { name: 'LLM I/O Design', level: 'Intermediate', icon: 'FaMicrochip', color: '#8B5CF6' },
    { name: 'AI-Augmented Backend', level: 'Intermediate', icon: 'FaRobot', color: '#8B5CF6' },
  ],
  architecture: [
    { name: 'Microservices', level: 'Intermediate', icon: 'FaSitemap', color: '#06B6D4' },
    { name: 'Layered Architecture', level: 'Advanced', icon: 'FaLayerGroup', color: '#06B6D4' },
    { name: 'MVC', level: 'Advanced', icon: 'FaSitemap', color: '#06B6D4' },
    { name: 'API Design', level: 'Advanced', icon: 'FaProjectDiagram', color: '#06B6D4' },
  ],
  databases: [
    { name: 'MySQL', level: 'Advanced', icon: 'FaDatabase', color: '#4479A1' },
    { name: 'H2', level: 'Intermediate', icon: 'FaDatabase', color: '#4479A1' },
    { name: 'PostgreSQL', level: 'Intermediate', icon: 'FaDatabase', color: '#336791' },
  ],
  tools: [
    { name: 'Git', level: 'Intermediate', icon: 'FaGitAlt', color: '#F05032' },
    { name: 'GitHub', level: 'Intermediate', icon: 'FaGithub', color: '#181717' },
    { name: 'Postman', level: 'Advanced', icon: 'FaPaperPlane', color: '#FF6C37' },
    { name: 'IntelliJ IDEA', level: 'Advanced', icon: 'FaCode', color: '#000000' },
    { name: 'Docker', level: 'Beginner', icon: 'FaDocker', color: '#2496ED' },
    { name: 'AWS', level: 'Beginner', icon: 'FaAws', color: '#FF9900' },
    { name: 'Selenium', level: 'Intermediate', icon: 'FaRobot', color: '#43B02A' },
    { name: 'TestNG', level: 'Intermediate', icon: 'FaVial', color: '#C71A36' },
  ],
};

export const skillCategories = [
  { key: 'backend', label: 'Backend', icon: 'FaServer' },
  { key: 'coreJava', label: 'Core Java', icon: 'FaCode' },
  { key: 'aiIntegration', label: 'AI Integration', icon: 'FaBrain' },
  { key: 'architecture', label: 'Architecture', icon: 'FaSitemap' },
  { key: 'databases', label: 'Databases', icon: 'FaDatabase' },
  { key: 'tools', label: 'Tools & DevOps', icon: 'FaTools' },
];

export const projects = [
  {
    id: 1,
    featured: true,
    name: 'AI-Powered Productivity Backend System',
    description: 'Designed and developed a scalable productivity backend with 15+ REST APIs supporting task management, goals, analytics, and AI-powered personalized productivity insights using Spring AI.',
    highlights: [
      'JWT Authentication',
      'Role-Based Access Control',
      'Centralized Exception Handling',
      'Modular Architecture',
      'AI-generated recommendations',
    ],
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'SQL', 'Spring AI'],
    githubUrl: '#',
    demoUrl: '#',
    image: '/projects/ai-productivity.png',
  },
  {
    id: 2,
    featured: false,
    name: 'Secure E-Commerce Backend System',
    description: 'Built secure backend services for products, orders, inventory, and users with JWT authentication and optimized API performance.',
    highlights: [
      '10+ secured REST APIs',
      '20% performance improvement',
      'JWT Authentication',
      'Optimized Queries',
    ],
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'SQL', 'JPA'],
    githubUrl: '#',
    demoUrl: '#',
    image: '/projects/ecommerce.png',
  },
  {
    id: 3,
    featured: false,
    name: 'Portfolio Website (This Website)',
    description: 'Modern, premium developer portfolio built with React, Tailwind CSS, Framer Motion, and deployed on Cloudflare Pages. Features glassmorphism UI, dark/light mode, and smooth animations.',
    highlights: [
      'React + Vite + Tailwind CSS',
      'Framer Motion Animations',
      'Glassmorphism Design',
      'Cloudflare Pages Deployment',
      'SEO Optimized (Lighthouse > 90)',
    ],
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Cloudflare Pages'],
    githubUrl: '#',
    demoUrl: '#',
    image: '/projects/portfolio.png',
  },
];

export const experience = [
  {
    id: 1,
    company: 'Tata Consultancy Services (TCS)',
    role: 'Systems Engineer',
    period: 'Apr 2024 – Present',
    location: 'Pune, Maharashtra',
    achievements: [
      'Legacy modernization of enterprise applications',
      'Cloud migration initiatives',
      '20+ production issues resolved with zero escalation',
      '100% on-time delivery recognition',
      'Extensive exposure to enterprise backend workflows',
    ],
  },
  {
    id: 2,
    company: 'Freelance Backend Developer',
    role: 'Backend Developer',
    period: 'Jan 2023 – Mar 2023',
    location: 'Remote',
    achievements: [
      'PHP Backend development',
      'SQL database design and optimization',
      'REST API development',
      'Reduced manual processing by 25%',
    ],
  },
];

export const certifications = [
  {
    id: 1,
    name: 'Claude Certified Architect – Foundations',
    issuer: 'Anthropic',
    year: '2024',
    icon: 'FaAward',
    color: '#8B5CF6',
  },
  {
    id: 2,
    name: 'Oracle Certified Professional Java SE 8',
    issuer: 'Oracle',
    year: '2024',
    icon: 'FaCertificate',
    color: '#ED8B00',
  },
  {
    id: 3,
    name: 'Microsoft Azure Security Engineer Associate',
    issuer: 'Microsoft',
    year: '2024',
    icon: 'FaShieldAlt',
    color: '#0078D4',
  },
];

export const seoConfig = {
  title: 'Venkata Raja Pavan Kumar Reddy | AI-Native Java Backend Engineer',
  description: 'AI-Native Java Backend Engineer with 2+ years experience building scalable Spring Boot systems, REST APIs, and AI-integrated backends. Open to high-impact product engineering roles.',
  url: 'https://pawanraja-portfolio.pages.dev',
  image: '/og-image.png',
  twitterHandle: '@yourhandle',
  siteName: 'Venkata Raja Pavan Kumar Reddy Portfolio',
};