export const personalInfo = {
  name: 'Venkata Raja Pavan Kumar Reddy',
  shortName: 'Pavan Kumar Reddy',
  initials: 'VR',
  title: 'AI-Native Java Backend Engineer',
  tagline: 'Building scalable Java backend systems with Spring Boot while integrating AI into real-world applications.',
  email: 'rajapawanvalila@gmail.com',
  phone: '+91 XXXXXXXXXX',
  location: 'Pune, Maharashtra, India',
  birthDate: '',
  degree: 'Bachelor of Technology (B.Tech)',
  university: '',
  photo: '/pawan-photo.jpg',
  bio: 'Java Backend Engineer with 2+ years of experience building secure, scalable backend systems using Java, Spring Boot, Spring Security, REST APIs, SQL, and AI-integrated backend development. Passionate about solving complex backend problems and building production-quality systems.',
  description: 'I enjoy solving backend problems, designing APIs, and building production-quality systems. My goal is to transition into a high-paying product-based Java Backend Engineering role.',
  role: 'Software Engineer',
  city: 'Pune',
  freelance: 'Available',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/valila-venkata-raja-pavan-kumar-reddy/',
    github: 'https://github.com/PawanRaja-hub',
    naukri: 'https://www.naukri.com/mnjuser/profile',
    email: 'mailto:rajapawanvalila@gmail.com',
  },
  resumeUrl: '/resume.pdf',
};

export const stats = [
  { id: 1, value: 2, suffix: '+', label: 'Years of Experience' },
  { id: 2, value: 15, suffix: '+', label: 'REST APIs Built' },
  { id: 3, value: 3, suffix: '', label: 'Certifications' },
  { id: 4, value: 20, suffix: '+', label: 'Production Issues Resolved' },
];

export const skills = {
  backend: [
    { name: 'Java', level: 90, icon: '☕' },
    { name: 'Spring Boot', level: 90, icon: '🍃' },
    { name: 'Spring Security', level: 70, icon: '🔒' },
    { name: 'REST APIs', level: 90, icon: '🔗' },
    { name: 'JWT Authentication', level: 85, icon: '🔑' },
    { name: 'JPA / Hibernate', level: 85, icon: '💾' },
  ],
  coreJava: [
    { name: 'OOP Concepts', level: 95 },
    { name: 'Collections Framework', level: 90 },
    { name: 'Multithreading', level: 80 },
    { name: 'Exception Handling', level: 90 },
    { name: 'Java 8+ (Streams, Lambdas)', level: 90 },
    { name: 'Generics', level: 85 },
  ],
  aiIntegration: [
    { name: 'Spring AI', level: 70, icon: '🤖' },
    { name: 'Prompt Engineering', level: 70 },
    { name: 'LLM I/O Design', level: 65 },
    { name: 'AI-Augmented Backends', level: 70 },
  ],
  databases: [
    { name: 'MySQL', level: 85, icon: '🗄️' },
    { name: 'H2 Database', level: 70 },
    { name: 'PostgreSQL', level: 65 },
    { name: 'SQL Optimization', level: 80 },
  ],
  tools: [
    { name: 'Git & GitHub', level: 80 },
    { name: 'Postman', level: 90 },
    { name: 'IntelliJ IDEA', level: 95 },
    { name: 'Docker', level: 50 },
    { name: 'AWS', level: 40 },
    { name: 'Selenium', level: 65 },
    { name: 'TestNG', level: 65 },
  ],
};

export const skillCategories = [
  { key: 'backend', label: 'Backend Development' },
  { key: 'coreJava', label: 'Core Java' },
  { key: 'aiIntegration', label: 'AI Integration' },
  { key: 'databases', label: 'Databases' },
  { key: 'tools', label: 'Tools & DevOps' },
];

export const projects = [
  {
    id: 1,
    featured: true,
    title: 'AI-Powered Productivity Backend',
    category: 'backend',
    description: 'Designed and developed a scalable productivity backend with 15+ REST APIs supporting task management, goals, analytics, and AI-powered personalized productivity insights using Spring AI.',
    image: '/projects/ai-productivity.jpg',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'SQL', 'Spring AI'],
    highlights: ['15+ REST APIs', 'JWT Auth', 'RBAC', 'AI Insights', 'Modular Architecture'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    featured: false,
    title: 'Secure E-Commerce Backend',
    category: 'backend',
    description: 'Built secure backend services for products, orders, inventory, and users with JWT authentication and optimized API performance achieving 20% performance improvement.',
    image: '/projects/ecommerce.jpg',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'SQL'],
    highlights: ['10+ secured APIs', 'JWT Auth', '20% perf gain'],
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    featured: false,
    title: 'Portfolio Website (Live)',
    category: 'web',
    description: 'Modern, premium developer portfolio built with React, Tailwind CSS, Framer Motion, deployed on Cloudflare. Features glassmorphism UI, dark/light mode, and smooth animations.',
    image: '/projects/portfolio.jpg',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Cloudflare'],
    highlights: ['Lighthouse 90+', 'Responsive', 'Premium UI'],
    github: 'https://github.com/PawanRaja-hub/PawanRaja-Portfolio',
    demo: 'https://pawanraja-portfolio.rajapawanvalila.workers.dev',
  },
];

export const services = [
  {
    id: 1,
    icon: '⚙️',
    title: 'Backend Development',
    description: 'Building robust, scalable REST APIs and microservices with Java and Spring Boot. From authentication to complex business logic.',
  },
  {
    id: 2,
    icon: '🔒',
    title: 'Authentication & Security',
    description: 'Implementing JWT-based authentication, role-based access control, and Spring Security for enterprise-grade applications.',
  },
  {
    id: 3,
    icon: '🤖',
    title: 'AI Integration',
    description: 'Integrating LLMs and AI capabilities into backend systems using Spring AI for personalized user experiences.',
  },
  {
    id: 4,
    icon: '🗄️',
    title: 'Database Design',
    description: 'Designing normalized database schemas, writing optimized queries, and managing JPA/Hibernate for high-performance data access.',
  },
  {
    id: 5,
    icon: '🏗️',
    title: 'System Architecture',
    description: 'Designing clean layered architecture, MVC patterns, and microservices for maintainable and testable codebases.',
  },
  {
    id: 6,
    icon: '🐳',
    title: 'DevOps & Deployment',
    description: 'Containerizing applications with Docker, deploying to cloud platforms like AWS, and setting up CI/CD pipelines.',
  },
];

export const experience = [
  {
    id: 1,
    role: 'Systems Engineer (Assistant System Engineer)',
    company: 'Tata Consultancy Services (TCS)',
    period: 'Apr 2024 – Present',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    description: 'Working on enterprise backend systems with focus on Java, Spring Boot, and modern cloud technologies.',
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
    role: 'Backend Developer (Freelance)',
    company: 'Self-Employed',
    period: 'Jan 2023 – Mar 2023',
    location: 'Remote',
    type: 'Contract',
    description: 'Freelance backend development work focusing on PHP-based systems and SQL optimization.',
    achievements: [
      'PHP Backend development',
      'SQL database design and optimization',
      'REST API development',
      'Reduced manual processing by 25%',
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science / Information Technology',
    institution: 'University',
    period: '2020 – 2024',
    description: 'Graduated with strong foundation in computer science fundamentals, software engineering, and modern development practices.',
  },
];

export const certifications = [
  {
    id: 1,
    name: 'Claude Certified Architect – Foundations',
    issuer: 'Anthropic',
    year: '2024',
    icon: '🏆',
  },
  {
    id: 2,
    name: 'Oracle Certified Professional Java SE 8',
    issuer: 'Oracle',
    year: '2024',
    icon: '📜',
  },
  {
    id: 3,
    name: 'Microsoft Azure Security Engineer Associate',
    issuer: 'Microsoft',
    year: '2024',
    icon: '🛡️',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'TCS Project Manager',
    role: 'Senior PM, TCS',
    quote: 'Pavan consistently delivered high-quality backend solutions and showed great ownership of production systems.',
    avatar: '',
  },
  {
    id: 2,
    name: 'Freelance Client',
    role: 'Business Owner',
    quote: 'Reduced our manual processing by 25% and built reliable APIs that have been running smoothly for over a year.',
    avatar: '',
  },
];

export const navLinks = [
  { id: 'hero', icon: '🏠', label: 'Home', show: true },
  { id: 'about', icon: '👤', label: 'About' },
  { id: 'stats', icon: '📊', label: 'Stats' },
  { id: 'skills', icon: '💻', label: 'Skills' },
  { id: 'resume', icon: '📄', label: 'Resume' },
  { id: 'projects', icon: '📁', label: 'Portfolio' },
  { id: 'services', icon: '🛠️', label: 'Services' },
  { id: 'certifications', icon: '🏅', label: 'Certifications' },
  { id: 'contact', icon: '✉️', label: 'Contact' },
];

export const seoConfig = {
  title: 'Venkata Raja Pavan Kumar Reddy | AI-Native Java Backend Engineer',
  description: 'AI-Native Java Backend Engineer with 2+ years experience building scalable Spring Boot systems, REST APIs, and AI-integrated backends.',
  url: 'https://pawanraja-portfolio.rajapawanvalila.workers.dev',
  image: '/pawan-photo.jpg',
  siteName: 'Venkata Raja Pavan Kumar Reddy Portfolio',
};