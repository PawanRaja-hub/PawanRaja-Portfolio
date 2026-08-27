export const defaultPortfolioData = {
  // Personal & Header details
  personal: {
    name: "Alex Smith",
    realName: "Venkata Raja Pavan Kumar Reddy",
    sitename: "Alex Smith",
    title: "Java Backend Engineer & AI Integrator",
    avatar: "/pawan-photo.jpg",
    typedItems: ["Designer", "Developer", "Freelancer", "Photographer", "Java Backend Engineer", "AI Integrator"],
    socialLinks: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      skype: "https://skype.com",
      linkedin: "https://www.linkedin.com/in/valila-venkata-raja-pavan-kumar-reddy/",
      github: "https://github.com/PawanRaja-hub",
      naukri: "https://www.naukri.com/mnjuser/profile",
      email: "mailto:rajapawanvalila@gmail.com"
    }
  },

  // About Section
  about: {
    title: "About",
    description: "Java Backend Engineer with 2+ years of experience building secure, scalable backend systems using Java, Spring Boot, Spring Security, REST APIs, SQL, and AI-integrated backend development. Passionate about solving complex backend problems and building production-quality systems.",
    image: "/pawan-photo.jpg",
    heading: "UI/UX Designer & Web Developer.",
    italicText: "Building scalable Java backend systems with Spring Boot while integrating AI into real-world applications.",
    detailsCol1: [
      { label: "Birthday", value: "1 May 1995" },
      { label: "Website", value: "pawanraja-portfolio.workers.dev", url: "https://pawanraja-portfolio.rajapawanvalila.workers.dev" },
      { label: "Phone", value: "+123 456 7890" },
      { label: "City", value: "New York, USA (Pune, India)" }
    ],
    detailsCol2: [
      { label: "Age", value: "30" },
      { label: "Degree", value: "Master (B.Tech Computer Science)" },
      { label: "Email", value: "rajapawanvalila@gmail.com", url: "mailto:rajapawanvalila@gmail.com" },
      { label: "Freelance", value: "Available" }
    ],
    footerText: "Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque."
  },

  // Stats Section
  stats: [
    { id: 1, icon: "bi-emoji-smile", count: 232, label: "Happy Clients", sublabel: "consequuntur quae" },
    { id: 2, icon: "bi-journal-richtext", count: 521, label: "Projects", sublabel: "adipisci atque cum quia aut" },
    { id: 3, icon: "bi-headset", count: 1453, label: "Hours Of Support", sublabel: "aut commodi quaerat" },
    { id: 4, icon: "bi-people", count: 32, label: "Hard Workers", sublabel: "rerum asperiores dolor" }
  ],

  // Skills Section
  skills: {
    title: "Skills",
    description: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",
    itemsLeft: [
      { name: "HTML", level: 100 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 75 }
    ],
    itemsRight: [
      { name: "PHP", level: 80 },
      { name: "WordPress/CMS", level: 90 },
      { name: "Photoshop", level: 55 }
    ]
  },

  // Resume Section
  resume: {
    title: "Resume",
    description: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
    summary: {
      name: "Brandon Johnson",
      realName: "Venkata Raja Pavan Kumar Reddy",
      text: "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
      items: [
        "Portland par 127,Orlando, FL",
        "(123) 456-7891",
        "alice.barkley@example.com"
      ]
    },
    education: [
      {
        id: 1,
        degree: "Master of Fine Arts & Graphic Design",
        period: "2015 - 2016",
        institution: "Rochester Institute of Technology, Rochester, NY",
        description: "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada portitor auteri severio."
      },
      {
        id: 2,
        degree: "Bachelor of Fine Arts & Graphic Design",
        period: "2010 - 2014",
        institution: "Rochester Institute of Technology, Rochester, NY",
        description: "Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila."
      }
    ],
    experience: [
      {
        id: 1,
        role: "Senior graphic design specialist",
        period: "2019 - Present",
        institution: "Experion, New York, NY",
        bullets: [
          "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
          "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.",
          "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design",
          "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000"
        ]
      },
      {
        id: 2,
        role: "Graphic design specialist",
        period: "2017 - 2018",
        institution: "Stepping Stone Advertising, New York, NY",
        bullets: [
          "Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).",
          "Managed up to 5 projects or tasks at a given time while under pressure to meet weekly deadlines",
          "Recommended and consulted with clients on the most appropriate graphic design",
          "Created 4+ design presentations and proposals a month for clients and account managers"
        ]
      }
    ]
  },

  // Portfolio Section
  portfolio: {
    title: "Portfolio",
    description: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
    filters: ["All", "App", "Card", "Web"],
    items: [
      {
        id: 1,
        title: "App 1",
        category: "App",
        filterKey: "filter-app",
        image: "https://themewagon.github.io/iPortfolio/assets/img/portfolio/app-1.jpg",
        description: "App 1 Project showcasing modern design and interactive functionality."
      },
      {
        id: 2,
        title: "Product 1",
        category: "Product",
        filterKey: "filter-product",
        image: "https://themewagon.github.io/iPortfolio/assets/img/portfolio/product-1.jpg",
        description: "Product 1 design and development."
      },
      {
        id: 3,
        title: "Branding 1",
        category: "Branding",
        filterKey: "filter-branding",
        image: "https://themewagon.github.io/iPortfolio/assets/img/portfolio/branding-1.jpg",
        description: "Branding 1 identity design."
      },
      {
        id: 4,
        title: "Books 1",
        category: "Books",
        filterKey: "filter-books",
        image: "https://themewagon.github.io/iPortfolio/assets/img/portfolio/books-1.jpg",
        description: "Books 1 layout and editorial design."
      },
      {
        id: 5,
        title: "App 2",
        category: "App",
        filterKey: "filter-app",
        image: "https://themewagon.github.io/iPortfolio/assets/img/portfolio/app-2.jpg",
        description: "App 2 mobile application design."
      },
      {
        id: 6,
        title: "Product 2",
        category: "Product",
        filterKey: "filter-product",
        image: "https://themewagon.github.io/iPortfolio/assets/img/portfolio/product-2.jpg",
        description: "Product 2 e-commerce showcase."
      },
      {
        id: 7,
        title: "Branding 2",
        category: "Branding",
        filterKey: "filter-branding",
        image: "https://themewagon.github.io/iPortfolio/assets/img/portfolio/branding-2.jpg",
        description: "Branding 2 identity system."
      },
      {
        id: 8,
        title: "Books 2",
        category: "Books",
        filterKey: "filter-books",
        image: "https://themewagon.github.io/iPortfolio/assets/img/portfolio/books-2.jpg",
        description: "Books 2 magazine editorial design."
      },
      {
        id: 9,
        title: "App 3",
        category: "App",
        filterKey: "filter-app",
        image: "https://themewagon.github.io/iPortfolio/assets/img/portfolio/app-3.jpg",
        description: "App 3 full stack application."
      }
    ]
  },

  // Services Section
  services: {
    title: "Services",
    description: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
    items: [
      { id: 1, icon: "bi-activity", title: "Nesciunt Mete", description: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur." },
      { id: 2, icon: "bi-broadcast", title: "Eosle Commodi", description: "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem." },
      { id: 3, icon: "bi-easel", title: "Ledo Markt", description: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti." },
      { id: 4, icon: "bi-bounding-box-circles", title: "Asperiores Commodit", description: "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque." },
      { id: 5, icon: "bi-calendar-week", title: "Velit Doloremque", description: "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore." },
      { id: 6, icon: "bi-chat-square-text", title: "Dolori Architecto", description: "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim." }
    ]
  },

  // Testimonials Section
  testimonials: {
    title: "Testimonials",
    description: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",
    items: [
      {
        id: 1,
        quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
        name: "Saul Goodman",
        role: "Ceo & Founder",
        image: "https://themewagon.github.io/iPortfolio/assets/img/testimonials/testimonials-1.jpg"
      },
      {
        id: 2,
        quote: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
        name: "Sara Wilsson",
        role: "Designer",
        image: "https://themewagon.github.io/iPortfolio/assets/img/testimonials/testimonials-2.jpg"
      },
      {
        id: 3,
        quote: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
        name: "Jena Karlis",
        role: "Store Owner",
        image: "https://themewagon.github.io/iPortfolio/assets/img/testimonials/testimonials-3.jpg"
      },
      {
        id: 4,
        quote: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
        name: "Matt Brandon",
        role: "Freelancer",
        image: "https://themewagon.github.io/iPortfolio/assets/img/testimonials/testimonials-4.jpg"
      },
      {
        id: 5,
        quote: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
        name: "John Larson",
        role: "Entrepreneur",
        image: "https://themewagon.github.io/iPortfolio/assets/img/testimonials/testimonials-5.jpg"
      }
    ]
  },

  // Contact Section
  contact: {
    title: "Contact",
    description: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",
    address: "A108 Adam Street, New York, NY 535022",
    phone: "+1 5589 55488 55",
    email: "info@example.com",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
  }
};
