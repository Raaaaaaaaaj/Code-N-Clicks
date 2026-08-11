export interface TechItem {
  name: string;
  desc: string;
}

export interface TechCategory {
  id: string;
  title: string;
  intro: string;
  techs: TechItem[];
  isDark?: boolean;
  bgVariant?: "white" | "mist" | "dark" | "darker";
  iconName: "Monitor" | "Server" | "Database" | "Cloud" | "BrainCircuit" | "BarChart3" | "Brush";
}

export const techIconUrlMap: Record<string, string> = {
  // Frontend
  React: "https://api.iconify.design/logos:react.svg",
  Angular: "https://api.iconify.design/logos:angular-icon.svg",
  Svelte: "https://api.iconify.design/logos:svelte-icon.svg",
  "Next.js": "https://api.iconify.design/logos:nextjs-icon.svg",
  Astro: "https://api.iconify.design/logos:astro-icon.svg",
  TypeScript: "https://api.iconify.design/logos:typescript-icon.svg",
  "Tailwind CSS": "https://api.iconify.design/logos:tailwindcss-icon.svg",
  Bootstrap: "https://api.iconify.design/logos:bootstrap.svg",
  "Vue.js": "https://api.iconify.design/logos:vue.svg",

  // Backend
  "Node.js": "https://api.iconify.design/logos:nodejs-icon.svg",
  "Express.js": "https://api.iconify.design/logos:express.svg",
  "Express JS": "https://api.iconify.design/logos:express.svg",
  NestJS: "https://api.iconify.design/logos:nestjs.svg",
  Laravel: "https://api.iconify.design/logos:laravel.svg",
  CodeIgniter: "https://api.iconify.design/logos:codeigniter-icon.svg",
  "ASP.NET Core": "https://api.iconify.design/logos:dotnet.svg",
  "Ruby on Rails": "https://api.iconify.design/logos:rails.svg",
  Go: "https://api.iconify.design/logos:go.svg",
  Python: "https://api.iconify.design/logos:python.svg",
  "Spring Boot": "https://api.iconify.design/logos:spring-icon.svg",
  SpringBoot: "https://api.iconify.design/logos:spring-icon.svg",
  Django: "https://api.iconify.design/logos:django-icon.svg",

  // Databases & APIs
  PostgreSQL: "https://api.iconify.design/logos:postgresql.svg",
  MongoDB: "https://api.iconify.design/logos:mongodb-icon.svg",
  MySQL: "https://api.iconify.design/logos:mysql-icon.svg",
  GraphQL: "https://api.iconify.design/logos:graphql.svg",
  Redis: "https://api.iconify.design/logos:redis.svg",

  // Cloud & DevOps
  AWS: "https://api.iconify.design/logos:aws.svg",
  "Microsoft Azure": "https://api.iconify.design/logos:microsoft-azure.svg",
  Azure: "https://api.iconify.design/logos:microsoft-azure.svg",
  "Google Cloud": "https://api.iconify.design/logos:google-cloud.svg",
  Docker: "https://api.iconify.design/logos:docker-icon.svg",
  Kubernetes: "https://api.iconify.design/logos:kubernetes.svg",
  "GitHub Actions": "https://api.iconify.design/logos:github-actions.svg",
  Vercel: "https://api.iconify.design/logos:vercel-icon.svg",
  Netlify: "https://api.iconify.design/logos:netlify-icon.svg",
  Render: "https://api.iconify.design/simple-icons:render.svg",
  Terraform: "https://api.iconify.design/logos:terraform-icon.svg",

  // AI & ML
  "OpenAI API": "https://api.iconify.design/logos:openai-icon.svg",
  "Hugging Face Transformers": "https://api.iconify.design/logos:hugging-face-icon.svg",
  TensorFlow: "https://api.iconify.design/logos:tensorflow.svg",
  PyTorch: "https://api.iconify.design/logos:pytorch-icon.svg",
  LangChain: "https://api.iconify.design/simple-icons:langchain.svg",
  Gemini: "https://api.iconify.design/logos:google-gemini.svg",
  "Gemini Pro": "https://api.iconify.design/logos:google-gemini.svg",

  // Analytics, Marketing & Growth
  "Google Analytics": "https://api.iconify.design/logos:google-analytics.svg",
  "Google Ads": "https://api.iconify.design/logos:google-ads.svg",
  "Meta Ads Manager": "https://api.iconify.design/logos:meta-icon.svg",
  SEMrush: "https://api.iconify.design/simple-icons:semrush.svg",
  Ahrefs: "https://api.iconify.design/tabler:seo.svg",
  Moz: "https://api.iconify.design/tabler:seo.svg",
  Hotjar: "https://api.iconify.design/logos:hotjar-icon.svg",
  HubSpot: "https://api.iconify.design/logos:hubspot.svg",
  Mailchimp: "https://api.iconify.design/logos:mailchimp-freddie.svg",

  // UI/UX & Creative
  Figma: "https://api.iconify.design/logos:figma.svg",
  "Adobe Creative Cloud": "https://api.iconify.design/logos:adobe-icon.svg",
  "Adobe Photoshop": "https://api.iconify.design/logos:adobe-photoshop.svg",
  Blender: "https://api.iconify.design/logos:blender.svg",
  Maya: "https://api.iconify.design/devicon:maya.svg",
  "Adobe Illustrator": "https://api.iconify.design/logos:adobe-illustrator.svg",
  Sketch: "https://api.iconify.design/logos:sketch.svg",
  Canva: "https://api.iconify.design/devicon:canva.svg",
  "Adobe XD": "https://api.iconify.design/logos:adobe-xd.svg",
  "Premiere Pro": "https://api.iconify.design/logos:adobe-premiere.svg",
  "After Effects": "https://api.iconify.design/logos:adobe-after-effects.svg",
};

export const getTechIconUrl = (name: string): string => {
  if (techIconUrlMap[name]) {
    return techIconUrlMap[name];
  }
  return `https://api.iconify.design/simple-icons:${name.toLowerCase().replace(/[^a-z0-9]/g, "")}.svg`;
};

export const frontendCategory: TechCategory = {
  id: "frontend",
  title: "FRONTEND TECHNOLOGIES",
  intro: "We use modern frontend frameworks and tools to build responsive, accessible, and maintainable interfaces. The choice depends on the application's complexity, rendering requirements, team workflow, and expected user experience.",
  iconName: "Monitor",
  bgVariant: "white",
  techs: [
    {
      name: "React",
      desc: "Component-based library for building interactive, reusable user interfaces and complex web applications.",
    },
    {
      name: "Angular",
      desc: "Full-featured framework suited to structured, enterprise-scale applications with complex workflows and long-term maintainability requirements.",
    },
    {
      name: "Svelte",
      desc: "Compiler-based framework that moves more work to build time, helping create lightweight interactive web experiences.",
    },
    {
      name: "Next.js",
      desc: "React framework supporting server-side rendering, static generation, routing, and full-stack web application development.",
    },
    {
      name: "Astro",
      desc: "Content-focused web framework designed to ship less JavaScript and deliver fast, performance-oriented websites.",
    },
    {
      name: "TypeScript",
      desc: "Strongly typed JavaScript that improves code reliability, developer tooling, and maintainability across larger applications.",
    },
    {
      name: "Tailwind CSS",
      desc: "Utility-first CSS framework for building consistent, responsive interfaces directly from reusable utility classes.",
    },
    {
      name: "Bootstrap",
      desc: "Established responsive UI framework with a large component and utility ecosystem for rapidly building mobile-first interfaces.",
    },
    {
      name: "Vue.js",
      desc: "Progressive JavaScript framework for building flexible interfaces ranging from lightweight applications to larger web products.",
    },
  ],
};

export const backendCategory: TechCategory = {
  id: "backend",
  title: "BACKEND TECHNOLOGIES",
  intro: "Our backend stack is built around APIs, business logic, integrations, authentication, data processing, and scalable server-side applications. We select the runtime or framework according to performance requirements, application complexity, team expertise, and deployment environment.",
  iconName: "Server",
  bgVariant: "mist",
  techs: [
    {
      name: "Node.js",
      desc: "JavaScript runtime well suited for APIs, real-time applications, integrations, and scalable server-side services.",
    },
    {
      name: "Express.js",
      desc: "Lightweight Node.js framework for building REST APIs, backend services, middleware, and integrations.",
    },
    {
      name: "NestJS",
      desc: "Structured Node.js framework for building modular, maintainable, and enterprise-oriented backend applications.",
    },
    {
      name: "Laravel",
      desc: "PHP framework for building secure web applications, APIs, business systems, and database-driven products efficiently.",
    },
    {
      name: "CodeIgniter",
      desc: "Lightweight PHP framework suited to applications where simplicity, speed, and a small framework footprint matter.",
    },
    {
      name: "ASP.NET Core",
      desc: "Cross-platform Microsoft framework for building high-performance APIs, web applications, and enterprise systems.",
    },
    {
      name: "Ruby on Rails",
      desc: "Convention-driven full-stack framework designed to accelerate development of database-backed web applications.",
    },
    {
      name: "Go",
      desc: "Compiled language suited to high-performance APIs, concurrent services, infrastructure tooling, and backend systems.",
    },
    {
      name: "Python",
      desc: "Flexible programming language used across APIs, automation, data processing, AI, and machine-learning applications.",
    },
    {
      name: "Spring Boot",
      desc: "Java framework for building production-ready APIs, microservices, and enterprise applications with the Spring ecosystem.",
    },
    {
      name: "Django",
      desc: "High-level Python framework providing a structured foundation for secure, database-driven web applications and APIs.",
    },
  ],
};

export const databasesCategory: TechCategory = {
  id: "databases-apis",
  title: "DATABASES & API TECHNOLOGIES",
  intro: "Data architecture affects application performance, reliability, scalability, and future development costs. We select relational, NoSQL, caching, and API technologies according to the application's data model and integration requirements.",
  iconName: "Database",
  bgVariant: "white",
  techs: [
    {
      name: "PostgreSQL",
      desc: "Advanced relational database for transactional systems, complex queries, structured data, and scalable applications.",
    },
    {
      name: "MongoDB",
      desc: "Document database suited to flexible data models, rapidly evolving applications, and document-oriented workloads.",
    },
    {
      name: "MySQL",
      desc: "Mature relational database widely used for transactional applications, websites, eCommerce platforms, and business systems.",
    },
    {
      name: "GraphQL",
      desc: "API query language that allows clients to request the data they need through a strongly defined schema.",
    },
    {
      name: "Redis",
      desc: "In-memory data platform used for caching, sessions, queues, real-time workloads, and performance-sensitive applications.",
    },
  ],
};

export const cloudDevopsCategory: TechCategory = {
  id: "cloud-devops",
  title: "CLOUD & DEVOPS TECHNOLOGIES",
  intro: "Modern software needs more than application code. We use cloud infrastructure, containers, CI/CD, and infrastructure-as-code to create deployment environments that are repeatable, observable, and easier to scale.",
  iconName: "Cloud",
  isDark: true,
  bgVariant: "dark",
  techs: [
    {
      name: "AWS",
      desc: "Cloud platform providing compute, storage, databases, networking, security, and application infrastructure.",
    },
    {
      name: "Microsoft Azure",
      desc: "Enterprise cloud platform for application hosting, data services, identity, integrations, and Microsoft-based environments.",
    },
    {
      name: "Google Cloud",
      desc: "Cloud infrastructure and managed services for scalable applications, data workloads, APIs, and AI systems.",
    },
    {
      name: "Docker",
      desc: "Container platform that packages applications and dependencies into consistent deployment environments.",
    },
    {
      name: "Kubernetes",
      desc: "Container orchestration platform for deploying, scaling, and managing containerized applications.",
    },
    {
      name: "GitHub Actions",
      desc: "CI/CD automation platform for testing, building, and deploying software directly from GitHub repositories.",
    },
    {
      name: "Vercel",
      desc: "Deployment platform optimized for modern frontend and Next.js applications with automated builds and global delivery.",
    },
    {
      name: "Netlify",
      desc: "Web development and deployment platform supporting automated builds, hosting, serverless functionality, and modern frontend workflows.",
    },
    {
      name: "Render",
      desc: "Cloud platform for deploying web applications, APIs, background workers, and managed infrastructure with simplified operations.",
    },
    {
      name: "Terraform",
      desc: "Infrastructure-as-code tool for defining and managing cloud infrastructure through version-controlled configuration.",
    },
  ],
};

export const aiMlCategory: TechCategory = {
  id: "ai-ml",
  title: "AI & MACHINE LEARNING TECHNOLOGIES",
  intro: "We integrate AI into software products where it creates a measurable business advantage—from intelligent search and content generation to workflow automation, recommendations, document processing, and conversational interfaces.",
  iconName: "BrainCircuit",
  isDark: true,
  bgVariant: "darker",
  techs: [
    {
      name: "OpenAI API",
      desc: "API platform for integrating generative AI capabilities such as text generation, structured outputs, reasoning, and AI-powered workflows.",
    },
    {
      name: "Hugging Face Transformers",
      desc: "Open-source ecosystem for working with pretrained transformer models across natural language and machine-learning workloads.",
    },
    {
      name: "TensorFlow",
      desc: "Machine-learning framework for developing, training, and deploying production ML models.",
    },
    {
      name: "PyTorch",
      desc: "Deep-learning framework widely used for model development, experimentation, and production AI workloads.",
    },
    {
      name: "LangChain",
      desc: "Framework and tooling ecosystem for developing applications that connect language models with tools, data sources, and workflows.",
    },
    {
      name: "Gemini",
      desc: "Google's generative AI model family for applications involving text, multimodal understanding, reasoning, and AI-assisted workflows.",
    },
  ],
};

export const analyticsCategory: TechCategory = {
  id: "analytics-marketing",
  title: "ANALYTICS, MARKETING & GROWTH",
  intro: "Product development doesn't end at deployment. We use analytics, SEO, user-behavior, CRM, and marketing platforms to measure how digital products perform and identify opportunities for growth.",
  iconName: "BarChart3",
  bgVariant: "white",
  techs: [
    {
      name: "Google Analytics",
      desc: "Web analytics platform for measuring traffic, user journeys, engagement, conversions, and product performance.",
    },
    {
      name: "Google Ads",
      desc: "Advertising platform for reaching high-intent audiences through search, display, video, and other Google channels.",
    },
    {
      name: "Meta Ads Manager",
      desc: "Platform for managing, targeting, measuring, and optimizing advertising campaigns across Meta's platforms.",
    },
    {
      name: "SEMrush",
      desc: "Digital marketing platform for keyword research, SEO analysis, competitor research, content planning, and visibility tracking.",
    },
    {
      name: "Ahrefs",
      desc: "SEO toolkit for backlink analysis, keyword research, competitor research, content opportunities, and site auditing.",
    },
    {
      name: "Moz",
      desc: "SEO platform providing keyword research, site auditing, rank tracking, and link analysis capabilities.",
    },
    {
      name: "Hotjar",
      desc: "Product analytics and feedback tools for understanding user behavior through interaction insights and qualitative feedback.",
    },
    {
      name: "HubSpot",
      desc: "CRM and marketing platform for managing customer relationships, lead generation, marketing automation, and sales workflows.",
    },
    {
      name: "Mailchimp",
      desc: "Email marketing and automation platform for campaigns, audience management, and customer communications.",
    },
  ],
};

export const designCategory: TechCategory = {
  id: "ui-ux-design",
  title: "UI/UX & CREATIVE TECHNOLOGIES",
  intro: "Good software starts with a clear user experience. Our design toolkit supports interface design, prototyping, visual assets, motion, video, and 3D content across digital products.",
  iconName: "Brush",
  bgVariant: "mist",
  techs: [
    {
      name: "Figma",
      desc: "Collaborative interface design and prototyping platform for designing product experiences, design systems, and developer-ready interfaces.",
    },
    {
      name: "Adobe Creative Cloud",
      desc: "Creative software ecosystem for design, illustration, photography, video, motion, and digital content production.",
    },
    {
      name: "Adobe Photoshop",
      desc: "Professional image editing and visual design tool for digital assets, product visuals, and creative production.",
    },
    {
      name: "Blender",
      desc: "Open-source 3D creation suite for modeling, animation, rendering, and interactive visual content.",
    },
    {
      name: "Maya",
      desc: "3D software for modeling, animation, simulation, and visual production workflows.",
    },
    {
      name: "Adobe Illustrator",
      desc: "Vector design tool for creating logos, icons, illustrations, and scalable visual assets.",
    },
    {
      name: "Sketch",
      desc: "Interface design toolkit focused on digital product design, prototyping, and collaborative workflows.",
    },
    {
      name: "Canva",
      desc: "Accessible design platform for quickly creating presentations, social content, marketing assets, and visual communications.",
    },
    {
      name: "Adobe XD",
      desc: "UI/UX design and prototyping tool for creating and testing digital product experiences.",
    },
    {
      name: "Premiere Pro",
      desc: "Professional video editing software for product videos, marketing content, and post-production.",
    },
    {
      name: "After Effects",
      desc: "Motion graphics and visual effects software for product animations, promotional content, and post-production.",
    },
  ],
};

export const selectionSteps = [
  {
    step: "01",
    title: "Product Requirements",
    desc: "We start with the product's functionality, users, workflows, integrations, and technical constraints.",
  },
  {
    step: "02",
    title: "Performance & Scalability",
    desc: "We evaluate expected traffic, data volume, response-time requirements, concurrency, and future growth before selecting core technologies.",
  },
  {
    step: "03",
    title: "Development Speed",
    desc: "The right stack should allow the team to ship quickly without creating unnecessary technical debt.",
  },
  {
    step: "04",
    title: "Security & Reliability",
    desc: "Authentication, authorization, data protection, dependency management, deployment practices, and infrastructure requirements influence architecture decisions.",
  },
  {
    step: "05",
    title: "Long-Term Maintainability",
    desc: "We consider ecosystem maturity, developer availability, documentation, tooling, upgrade paths, and the complexity of maintaining the product over several years.",
  },
  {
    step: "06",
    title: "Cloud & Integration Requirements",
    desc: "APIs, payment gateways, CRMs, third-party platforms, cloud services, analytics, and AI capabilities can influence the final architecture.",
  },
];

export const selectionMatrix = [
  {
    requirement: "Interactive web application",
    techs: "React, Angular, Vue.js",
  },
  {
    requirement: "SEO-focused website",
    techs: "Next.js, Astro",
  },
  {
    requirement: "Enterprise web application",
    techs: "Angular, React, TypeScript",
  },
  {
    requirement: "API-driven application",
    techs: "Node.js, Express.js, NestJS, ASP.NET Core, Django",
  },
  {
    requirement: "Data-heavy application",
    techs: "PostgreSQL, MySQL, MongoDB",
  },
  {
    requirement: "AI-powered application",
    techs: "Python, OpenAI API, Hugging Face, PyTorch, TensorFlow",
  },
  {
    requirement: "High-performance backend services",
    techs: "Go, Node.js",
  },
  {
    requirement: "Cloud-native application",
    techs: "AWS, Azure, Google Cloud, Docker, Kubernetes",
  },
  {
    requirement: "Rapid MVP development",
    techs: "React, Next.js, Node.js, Laravel",
  },
  {
    requirement: "Content-focused website",
    techs: "Astro, Next.js",
  },
];

export const faqList = [
  {
    q: "What is a technology stack?",
    a: "A technology stack is the combination of programming languages, frameworks, databases, APIs, cloud platforms, and development tools used to build and operate a software product.",
  },
  {
    q: "How do you choose the right technology stack?",
    a: "We evaluate the product requirements, expected scale, integrations, performance, security, development timeline, available expertise, and long-term maintenance requirements before recommending technologies.",
  },
  {
    q: "Which frontend technologies does Code N Clicks use?",
    a: "Our frontend stack includes React, Angular, Svelte, Next.js, Astro, Vue.js, TypeScript, Tailwind CSS, and Bootstrap.",
  },
  {
    q: "Which backend technologies do you use?",
    a: "Our backend technologies include Node.js, Express.js, NestJS, Laravel, CodeIgniter, ASP.NET Core, Ruby on Rails, Go, Python, Spring Boot, and Django.",
  },
  {
    q: "Do you build AI-powered applications?",
    a: "Yes. Our AI technology stack includes the OpenAI API, Hugging Face Transformers, TensorFlow, PyTorch, LangChain, and Google's Gemini ecosystem.",
  },
  {
    q: "Which databases do you work with?",
    a: "We work with PostgreSQL, MongoDB, MySQL, and Redis, selecting the database according to the application's data model and performance requirements.",
  },
  {
    q: "Can you work with a technology stack that isn't listed?",
    a: "Yes. The listed technologies represent our current toolkit, but technology selection depends on the project's requirements. During discovery, we can evaluate an existing stack or recommend an alternative where it provides a better technical fit.",
  },
  {
    q: "Should a startup choose the latest technology?",
    a: "Not necessarily. The newest technology isn't automatically the best choice. Startups should prioritize a stack that supports fast development while remaining maintainable, secure, and capable of handling expected growth.",
  },
];
