/**
 * Cloudflare Worker Backend for Portfolio Headless CMS
 * Routes:
 *   - GET  /api/portfolio          -> Public: Fetch portfolio data from KV
 *   - POST /api/portfolio          -> Protected: Overwrite all portfolio data in KV
 *   - PUT  /api/portfolio/:section -> Protected: Update a single section
 *   - POST /api/auth/login         -> Protected: Authenticate with admin password
 *   - GET  /admin                  -> Serves Admin Dashboard UI
 */

const DEFAULT_PORTFOLIO_DATA = {
  personalInfo: {
    name: "Venkata Raja Pavan Kumar Reddy",
    shortName: "Pavan Kumar Reddy",
    initials: "VR",
    title: "AI-Native Java Backend Engineer",
    tagline: "Building scalable Java backend systems with Spring Boot while integrating AI into real-world applications.",
    email: "rajapawanvalila@gmail.com",
    phone: "+91 98765 43210",
    location: "Pune, Maharashtra, India",
    birthDate: "15 August 2001",
    age: "24",
    degree: "Bachelor of Technology (B.Tech)",
    university: "Computer Science & Engineering",
    photo: "/pawan-photo.jpg",
    bio: "Java Backend Engineer with 2+ years of experience building secure, scalable backend systems using Java, Spring Boot, Spring Security, REST APIs, SQL, and AI-integrated backend development. Passionate about solving complex backend problems and building production-quality systems.",
    description: "I enjoy solving backend problems, designing APIs, and building production-quality systems. My goal is to transition into a high-paying product-based Java Backend Engineering role.",
    role: "Systems Engineer",
    city: "Pune, India",
    website: "https://pawanraja-portfolio.rajapawanvalila.workers.dev",
    freelance: "Available",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/valila-venkata-raja-pavan-kumar-reddy/",
      github: "https://github.com/PawanRaja-hub",
      naukri: "https://www.naukri.com/mnjuser/profile",
      twitter: "https://twitter.com",
      email: "mailto:rajapawanvalila@gmail.com",
    },
    resumeUrl: "/resume.pdf",
  },
  stats: [
    { id: 1, value: 2, suffix: "+", label: "Years Experience", icon: "smile" },
    { id: 2, value: 15, suffix: "+", label: "REST APIs Built", icon: "server" },
    { id: 3, value: 3, suffix: "", label: "Certifications", icon: "award" },
    { id: 4, value: 20, suffix: "+", label: "Issues Resolved", icon: "check" },
  ],
  skills: {
    backend: [
      { name: "Java & Core Java", level: 95 },
      { name: "Spring Boot & Microservices", level: 90 },
      { name: "RESTful APIs & Swagger", level: 92 },
      { name: "Spring Security & JWT", level: 85 },
      { name: "JPA / Hibernate / ORM", level: 88 },
      { name: "Spring AI & LLM Pipelines", level: 80 },
    ],
    databasesAndTools: [
      { name: "MySQL & PostgreSQL", level: 88 },
      { name: "SQL Query Optimization", level: 85 },
      { name: "Git, GitHub & Version Control", level: 90 },
      { name: "Docker & Containerization", level: 75 },
      { name: "Postman API Testing", level: 95 },
      { name: "AWS Cloud Fundamentals", level: 70 },
    ],
  },
  projects: [
    {
      id: 1,
      featured: true,
      title: "AI-Powered Productivity Backend",
      category: "backend",
      categoryLabel: "Backend & AI",
      description: "Designed and developed a scalable productivity backend with 15+ REST APIs supporting task management, goals, analytics, and AI-powered personalized productivity insights using Spring AI.",
      image: "/projects/ai-productivity.jpg",
      tech: ["Java", "Spring Boot", "Spring Security", "JWT", "SQL", "Spring AI"],
      highlights: ["15+ REST APIs", "JWT Auth", "RBAC Security", "AI Insights Engine", "Modular Architecture"],
      github: "https://github.com/PawanRaja-hub",
      demo: "https://pawanraja-portfolio.rajapawanvalila.workers.dev",
    },
    {
      id: 2,
      featured: true,
      title: "Secure E-Commerce Backend",
      category: "backend",
      categoryLabel: "Backend & APIs",
      description: "Built secure backend microservices for products, orders, inventory, and users with JWT authentication and optimized API performance achieving 20% performance improvement.",
      image: "/projects/ecommerce.jpg",
      tech: ["Java", "Spring Boot", "Spring Security", "JPA", "MySQL"],
      highlights: ["10+ secured APIs", "JWT Token Auth", "20% latency reduction", "Transaction Management"],
      github: "https://github.com/PawanRaja-hub",
      demo: "https://pawanraja-portfolio.rajapawanvalila.workers.dev",
    },
    {
      id: 3,
      featured: false,
      title: "Modern Developer Portfolio",
      category: "web",
      categoryLabel: "Web & Full Stack",
      description: "High-performance interactive portfolio built with React, Vite, Tailwind CSS, and Framer Motion based on the iconic iPortfolio aesthetic, deployed globally on Cloudflare.",
      image: "/projects/portfolio.jpg",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Cloudflare"],
      highlights: ["Lighthouse 95+", "Fully Responsive", "Interactive Lightbox", "Dark/Light Theme"],
      github: "https://github.com/PawanRaja-hub/PawanRaja-Portfolio",
      demo: "https://pawanraja-portfolio.rajapawanvalila.workers.dev",
    },
  ],
  services: [
    {
      id: 1,
      icon: "server",
      title: "Backend Architecture",
      description: "Building robust, scalable REST APIs and microservices with Java and Spring Boot. Clean architecture with robust exception handling and validation.",
    },
    {
      id: 2,
      icon: "shield",
      title: "Authentication & Security",
      description: "Implementing JWT-based authentication, role-based access control (RBAC), and Spring Security for hardened enterprise-grade applications.",
    },
    {
      id: 3,
      icon: "cpu",
      title: "AI & LLM Integration",
      description: "Integrating LLMs, prompt engineering, and AI capabilities into backend workflows using Spring AI for automated data extraction and insights.",
    },
    {
      id: 4,
      icon: "database",
      title: "Database & SQL Optimization",
      description: "Designing normalized schemas, indexing, writing complex queries, and managing JPA/Hibernate for high-throughput data pipelines.",
    },
    {
      id: 5,
      icon: "layers",
      title: "Microservices & Systems",
      description: "Architecting decoupled microservices, service registry, API gateways, and asynchronous event processing for maintainable codebases.",
    },
    {
      id: 6,
      icon: "cloud",
      title: "DevOps & Containerization",
      description: "Containerizing services with Docker, deploying to cloud platforms like AWS and Cloudflare, and establishing CI/CD automation pipelines.",
    },
  ],
  experience: [
    {
      id: 1,
      role: "Systems Engineer (Assistant System Engineer)",
      company: "Tata Consultancy Services (TCS)",
      period: "2024 - Present",
      location: "Pune, Maharashtra, India",
      type: "Full-time",
      description: "Working on enterprise backend systems with focus on Java, Spring Boot, and modern cloud technologies.",
      achievements: [
        "Legacy modernization of mission-critical enterprise applications",
        "Developed and optimized secure Spring Boot REST endpoints",
        "Resolved 20+ production issues with zero escalation and high reliability",
        "Awarded 100% on-time delivery recognition across project milestones",
        "Deep expertise in enterprise backend workflows and incident management",
      ],
    },
    {
      id: 2,
      role: "Backend Developer (Freelance)",
      company: "Self-Employed",
      period: "2023 - 2023",
      location: "Remote",
      type: "Contract",
      description: "Delivered client backend systems, database structuring, and API integrations.",
      achievements: [
        "Engineered backend services and optimized complex SQL database schemas",
        "Implemented automated endpoints reducing manual processing by 25%",
        "Integrated third-party APIs and provided thorough API documentation",
      ],
    },
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institution: "University / Engineering College",
      period: "2020 - 2024",
      description: "Graduated with strong foundation in algorithms, data structures, object-oriented design, database management systems, and modern software engineering principles.",
    },
  ],
  certifications: [
    {
      id: 1,
      name: "Claude Certified Architect – Foundations",
      issuer: "Anthropic",
      year: "2024",
      icon: "award",
      badge: "AI Architecture",
    },
    {
      id: 2,
      name: "Oracle Certified Professional Java SE 8",
      issuer: "Oracle",
      year: "2024",
      icon: "file-text",
      badge: "Java Certified",
    },
    {
      id: 3,
      name: "Microsoft Azure Security Engineer Associate",
      issuer: "Microsoft",
      year: "2024",
      icon: "shield",
      badge: "Cloud & Security",
    },
  ],
  testimonials: [
    {
      id: 1,
      name: "TCS Project Lead",
      role: "Technical Lead, Tata Consultancy Services",
      quote: "Pavan has demonstrated strong ownership and technical depth in Java and Spring Boot. His ability to troubleshoot and resolve production issues quickly made a direct impact on our project stability.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Freelance Project Client",
      role: "Product Manager",
      quote: "Delivered high-performance APIs and clean database schemas that reduced our manual workflow by 25%. Extremely professional, communicative, and skilled backend engineer.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Senior Systems Architect",
      role: "Enterprise Architect",
      quote: "Pavan is proactive about learning emerging technologies like Spring AI while maintaining rock-solid fundamentals in Core Java, concurrency, and security.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    },
  ],
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Admin-Password",
  "Access-Control-Max-Age": "86400",
};

function jsonResponse(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders,
      ...extraHeaders,
    },
  });
}

function verifyAuth(request, env) {
  const adminPassword = env.ADMIN_PASSWORD || "admin123";
  const authHeader = request.headers.get("Authorization") || "";
  const customPassHeader = request.headers.get("X-Admin-Password") || "";

  // Check Bearer token or direct password match
  if (authHeader.startsWith("Bearer ")) {
    const token = authHeader.substring(7);
    if (token === adminPassword || token === `token_${adminPassword}`) {
      return true;
    }
  }

  if (customPassHeader && customPassHeader === adminPassword) {
    return true;
  }

  return false;
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const method = request.method;

    // 1. Handle CORS Preflight
    if (method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    // 2. Route: POST /api/auth/login
    if (url.pathname === "/api/auth/login" && method === "POST") {
      try {
        const body = await request.json();
        const expectedPassword = env.ADMIN_PASSWORD || "admin123";

        if (body.password === expectedPassword) {
          return jsonResponse({
            success: true,
            message: "Authentication successful",
            token: `token_${expectedPassword}`,
          });
        }
        return jsonResponse({ success: false, error: "Invalid admin password" }, 401);
      } catch (err) {
        return jsonResponse({ success: false, error: "Invalid JSON payload" }, 400);
      }
    }

    // 3. Route: GET /api/portfolio (Public Read)
    if (url.pathname === "/api/portfolio" && method === "GET") {
      let data = null;

      if (env.PORTFOLIO_KV) {
        try {
          data = await env.PORTFOLIO_KV.get("portfolio_data", "json");
        } catch (e) {
          console.error("KV read error:", e);
        }
      }

      if (!data) {
        data = DEFAULT_PORTFOLIO_DATA;
        // Lazily initialize KV if empty
        if (env.PORTFOLIO_KV) {
          ctx.waitUntil(env.PORTFOLIO_KV.put("portfolio_data", JSON.stringify(DEFAULT_PORTFOLIO_DATA)));
        }
      }

      return jsonResponse(data, 200, {
        "Cache-Control": "public, max-age=15, s-maxage=30, stale-while-revalidate=60",
      });
    }

    // 4. Route: POST /api/portfolio (Save full portfolio data)
    if (url.pathname === "/api/portfolio" && method === "POST") {
      if (!verifyAuth(request, env)) {
        return jsonResponse({ success: false, error: "Unauthorized: Invalid credentials" }, 401);
      }

      try {
        const newData = await request.json();
        if (!newData || typeof newData !== "object") {
          return jsonResponse({ success: false, error: "Invalid payload format" }, 400);
        }

        if (env.PORTFOLIO_KV) {
          await env.PORTFOLIO_KV.put("portfolio_data", JSON.stringify(newData));
        }

        return jsonResponse({
          success: true,
          message: "Portfolio data saved successfully to Cloudflare KV",
          timestamp: new Date().toISOString(),
        });
      } catch (err) {
        return jsonResponse({ success: false, error: "Failed to process update: " + err.message }, 500);
      }
    }

    // 5. Route: PUT /api/portfolio/:section (Update specific section)
    if (url.pathname.startsWith("/api/portfolio/") && method === "PUT") {
      if (!verifyAuth(request, env)) {
        return jsonResponse({ success: false, error: "Unauthorized: Invalid credentials" }, 401);
      }

      const section = url.pathname.replace("/api/portfolio/", "").trim();
      try {
        const sectionData = await request.json();
        let fullData = null;

        if (env.PORTFOLIO_KV) {
          fullData = await env.PORTFOLIO_KV.get("portfolio_data", "json");
        }

        if (!fullData) {
          fullData = { ...DEFAULT_PORTFOLIO_DATA };
        }

        fullData[section] = sectionData;

        if (env.PORTFOLIO_KV) {
          await env.PORTFOLIO_KV.put("portfolio_data", JSON.stringify(fullData));
        }

        return jsonResponse({
          success: true,
          section,
          message: `Section '${section}' updated successfully`,
        });
      } catch (err) {
        return jsonResponse({ success: false, error: err.message }, 500);
      }
    }

    // 6. Route: GET /api/health
    if (url.pathname === "/api/health") {
      return jsonResponse({ status: "healthy", timestamp: new Date().toISOString(), kvReady: !!env.PORTFOLIO_KV });
    }

    // 7. Route: Redirect /admin to admin dashboard
    if (url.pathname === "/admin") {
      return Response.redirect(`${url.origin}/admin.html`, 302);
    }

    // 8. Serve Static Assets (React app, admin.html, images, CSS, JS)
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return jsonResponse({ error: "Endpoint not found" }, 404);
  },
};
