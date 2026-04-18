const portfolioData = {
  personal: {
    name: "Md Nazir",
    title: "Java Backend Engineer | Fintech & Microservices",
    tagline: "Building Scalable Distributed Systems",
    bio: "Java Backend Engineer with 3+ years of experience building secure, scalable, mission-critical fintech systems. Currently engineering enterprise-grade backend services at The LCF Group, with strong expertise in Spring Boot, Microservices, Oracle, IBM MQ, and AI integrations. Passionate about clean architecture, distributed systems, and solving complex production challenges.",
    shortBio: "Java Backend Engineer specializing in Fintech & Banking systems. 3+ years building scalable microservices.",
    location: "Bengaluru, Karnataka, India",
    availability: "🟢 Open to Senior Backend / Java / Spring Boot opportunities",
    currentRole: "Software Engineer @ The LCF Group",
    email: "mdnazir2608@gmail.com",
    phone: "+91-9135621974",
    github: "https://github.com/Nazir2608",
    linkedin: "https://linkedin.com/in/mdnazir2608",
    whatsapp: "https://wa.me/919135621974",
    twitter: null,
    resume: process.env.PUBLIC_URL + "/Md_Nazir_JavaDev_Resume.pdf",
    roles: [
      "Java Backend Engineer",
      "Spring Boot Developer",
      "Microservices Architect",
      "Fintech Engineer",
      "AI Integration Specialist"
    ]
  },

  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "46+", label: "GitHub Repositories" },
    { value: "20+", label: "Technologies" },
    { value: "100+", label: "Production Issues Resolved" }
  ],

  skills: {
    languages: ["Java (8/11/17/21)", "Python", "JavaScript", "TypeScript", "PL/SQL", "SQL", "HTML5", "CSS3"],
    frameworks: [
      "Spring Boot 3",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "Spring Cloud",
      "Spring WebFlux",
      "Hibernate",
      "JUnit",
      "Mockito",
      "Microservices",
      "REST APIs",
      "Reactive Programming",
      "Quartz Scheduler",
      "Multithreading",
      "Collection Framework",
      "JMS",
      "JDBC",
      "Servlet",
      "JSP",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js"
    ],
    databases: ["Oracle", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
    messaging: ["Apache Kafka", "IBM MQ", "JMS", "RabbitMQ", "WebSockets", "Server-Sent Events"],
    ai: ["Google Gemini API", "DeepSeek API", "Vision-Language Models (VLM)", "RAG", "Prompt Engineering", "AI Agents"],
    cloud: ["AWS", "Docker", "Docker Compose", "Kubernetes", "IBM WebSphere", "Jenkins (CI/CD)", "Prometheus", "Grafana"],
    tools: ["IntelliJ IDEA", "Eclipse", "Maven", "Gradle", "Postman", "Swagger/OpenAPI", "SonarQube", "Git", "Bitbucket", "GitHub", "Linux", "Bash"],
    architecture: ["Microservices", "Event-Driven Architecture", "Clean Architecture", "SOLID Principles", "Design Patterns", "Distributed Systems", "REST", "API Gateway"]
  },

  topSkills: ["Java", "Spring Boot", "Microservices", "Oracle PL/SQL", "Apache Kafka", "IBM MQ", "Linux", "CI/CD", "Jenkins"],

  experience: [
    {
      id: 4,
      company: "The LCF Group",
      position: "Software Engineer",
      duration: "Nov 2025 - Present",
      location: "Bengaluru, Karnataka, India",
      current: true,
      description: "Engineering enterprise-grade backend systems in the Fintech domain. Building scalable Java & Spring-based microservices with focus on performance, reliability, and security. Designed and implemented a Quartz-based job scheduling system to automate backend workflows using cron and on-demand triggers. Built REST APIs for managing scheduled jobs with persistent execution and restart safety.",
      highlights: [
        "🚀 Built Quartz-based job scheduling system with persistent, restart-safe execution",
        "⚙️ Designed REST APIs for dynamic job management without application restart",
        "🔒 Contributing to business-critical fintech applications with focus on security",
        "📈 Improved system reliability, automation, and operational efficiency",
        "🛡️ Supporting production systems ensuring 24/7 stability"
      ],
      technologies: ["Java", "Spring Boot", "Quartz Scheduler", "Microservices", "REST APIs", "SQL", "Fintech Systems"]
    },
    {
      id: 3,
      company: "Opalina Technologies Pvt. Ltd.",
      position: "Junior Software Engineer",
      duration: "Nov 2023 - Nov 2025",
      durationDetail: "2 years 1 month",
      location: "Noida, India",
      description: "Developed and maintained core backend banking applications powering high-volume transactional workflows. Designed complex Oracle PL/SQL stored procedures and modernized legacy systems. Improved query and dashboard performance by 30% through indexing and SQL optimization.",
      highlights: [
        "✅ Improved query & dashboard performance by ~30% through indexing and SQL optimization",
        "✅ Designed complex Oracle PL/SQL stored procedures for high-volume banking transactions",
        "✅ Packaged and deployed EAR files on IBM WebSphere Application Server",
        "✅ Integrated IBM MQ messaging workflows for asynchronous communication",
        "✅ Implemented AES-256 encryption for sensitive banking data compliance",
        "✅ Modernized legacy SOAP services into REST/JMS-based architecture",
        "✅ Ensured smooth releases through CI/CD pipelines (Jenkins + Git)",
        "✅ Resolved 100+ production incidents, ensuring system reliability"
      ],
      technologies: ["Java", "Spring Boot", "Oracle PL/SQL", "IBM MQ", "IBM WebSphere", "JMS", "REST APIs", "AES Encryption", "Jenkins", "Git", "Bitbucket", "Linux"]
    },
    {
      id: 2,
      company: "Opalina Technologies Pvt. Ltd.",
      position: "Java Developer Trainee",
      duration: "May 2023 - Nov 2023",
      durationDetail: "7 months",
      location: "Noida, India",
      description: "Trained intensively on enterprise Java development and middleware integration in real production environments. Promoted to Junior Software Engineer in just 7 months for strong performance.",
      highlights: [
        "⭐ Promoted to Junior Software Engineer in 7 months",
        "📚 Hands-on with Java, Oracle Database, PL/SQL, and IBM WebSphere",
        "🔧 Gained expertise in IBM MQ, JMS, and middleware integration",
        "🐧 Mastered Linux environments, Git, and Bitbucket for deployment",
        "🔌 Built proficiency in consuming SOAP & REST APIs in enterprise systems"
      ],
      technologies: ["Java", "Oracle", "PL/SQL", "IBM WebSphere", "IBM MQ", "JMS", "Linux", "Git", "Bitbucket"]
    },
    {
      id: 1,
      company: "CETPA Infotech Pvt. Ltd.",
      position: "Java Full Stack Developer Trainee",
      duration: "Aug 2022 - Feb 2023",
      durationDetail: "7 months",
      location: "Noida, India",
      description: "Mastered full-stack web development from scratch, transitioning from Civil Engineering to Software Engineering. Built multiple production-style applications covering core and advanced Java concepts.",
      highlights: [
        "📖 Learned full-stack development with Java, Spring MVC, Hibernate, React, MySQL",
        "📚 Built BookStore Inventory Management System with stock tracking & sales reporting",
        "👥 Developed Employee Management Dashboard with complete CRUD functionality",
        "🩺 Created Doctor Suggestion REST API following MVC architectural patterns",
        "🎨 Designed responsive UIs using React and Bootstrap"
      ],
      technologies: ["Java", "Spring Boot", "Spring MVC", "Hibernate", "JDBC", "Servlet", "JSP", "HTML5", "CSS3", "Bootstrap", "MySQL", "React"]
    }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Technology - Civil Engineering",
      institution: "Roorkee Institute of Technology",
      duration: "Aug 2018 - June 2022",
      location: "Uttarakhand, India",
      grade: "CGPA: 8.74",
      note: "Self-transitioned to Software Engineering through intensive training and self-study"
    }
  ],

  projects: [
    {
      id: 1,
      title: "E-commerce Inventory Service",
      category: "Microservices",
      description: "Production-ready inventory service designed to handle Myntra-style flash sales with strict overselling protection and high concurrency safety. Built with event-driven architecture using Kafka for async processing and Redis for distributed locking.",
      highlights: [
        "Handles flash-sale traffic with zero overselling guarantee",
        "Event-driven architecture with Kafka for async order processing",
        "Redis-based distributed locking for concurrency safety",
        "Dockerized deployment with PostgreSQL persistence"
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Apache Kafka", "Docker"],
      github: "https://github.com/Nazir2608/ecommerce-inventory-service",
      demo: null,
      featured: true,
      tier: 1
    },
    {
      id: 2,
      title: "Banking API – Production-Grade Fintech Backend",
      category: "Fintech",
      description: "Production-ready banking backend that handles user accounts, transactions, transfers, loan management, and reporting — the kind of system real fintech companies build. Designed with security, scalability, and observability in mind.",
      highlights: [
        "Complete account & transaction management system",
        "Loan management with reporting capabilities",
        "Production-grade security with JWT authentication",
        "Dockerized with PostgreSQL & Redis caching"
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker Compose", "Maven", "JWT"],
      github: "https://github.com/Nazir2608/banking-api",
      demo: null,
      featured: true,
      tier: 1
    },
    {
      id: 3,
      title: "Social Media Microservices Platform",
      category: "Microservices",
      description: "Scalable, event-driven backend built with Java and Spring Boot for high-volume, real-time applications. Supports media uploads, personalized feed generation, and inter-service communication through Kafka events.",
      highlights: [
        "Event-driven microservices with Apache Kafka",
        "Personalized feed generation algorithm",
        "Media upload & processing service",
        "Production-ready with monitoring & observability"
      ],
      technologies: ["Java", "Spring Boot", "Apache Kafka", "Redis", "Microservices", "Docker"],
      github: "https://github.com/Nazir2608/social-media-microservices",
      demo: null,
      featured: true,
      tier: 1
    },
    {
      id: 4,
      title: "Online Auction Service – Real-Time Bidding",
      category: "Distributed Systems",
      description: "Enterprise-grade online auction system handling real-time competitive bidding, anti-snipe protection, concurrent bid resolution, and event-driven notifications. Portfolio-quality backend showcasing distributed systems concepts.",
      highlights: [
        "Real-time bidding with WebSocket support",
        "Anti-snipe protection algorithm",
        "Concurrent bid resolution with optimistic locking",
        "Event-driven notification system"
      ],
      technologies: ["Java", "Spring Boot", "WebSockets", "Kafka", "Redis", "PostgreSQL"],
      github: "https://github.com/Nazir2608/online-auction-service",
      demo: null,
      featured: true,
      tier: 1
    },
    {
      id: 5,
      title: "AI Invoice Analyzer Service",
      category: "AI/LLM",
      description: "Production-ready AI-powered invoice processing service built with Spring Boot, featuring clean architecture, audit support, pagination, and strategy-based AI integration for intelligent document understanding.",
      highlights: [
        "AI-powered invoice data extraction",
        "Strategy pattern for multiple AI providers",
        "Clean architecture with audit logging",
        "RESTful API with pagination support"
      ],
      technologies: ["Java", "Spring Boot", "AI APIs", "Clean Architecture", "PostgreSQL"],
      github: "https://github.com/Nazir2608/ai-invoice-analyzer-service",
      demo: null,
      featured: true,
      tier: 2
    },
    {
      id: 6,
      title: "AI Chatbot – Vision-Language Model",
      category: "AI/LLM",
      description: "Production-ready Spring Boot application that uses Vision-Language Models (VLM) to understand handwritten notes, diagrams, and corrections — going beyond traditional OCR text extraction.",
      highlights: [
        "VLM-based handwritten document understanding",
        "Diagram & visual content interpretation",
        "Production-ready Spring Boot architecture",
        "Cutting-edge AI engineering"
      ],
      technologies: ["Java", "Spring Boot", "Vision-Language Models", "AI", "REST APIs"],
      github: "https://github.com/Nazir2608/ai-chatbot",
      demo: null,
      featured: true,
      tier: 2
    },
    {
      id: 7,
      title: "URL Shortener Service",
      category: "Backend",
      description: "High-performance URL shortening service with click analytics, geo-location tracking, device detection, custom slugs, and tier-based rate limiting — built with modern Java 21 and Spring Boot 3.",
      highlights: [
        "Click analytics with geo-location tracking",
        "Device detection & user-agent parsing",
        "Custom slug support with conflict resolution",
        "Tier-based rate limiting"
      ],
      technologies: ["Java 21", "Spring Boot 3", "Redis", "PostgreSQL", "Docker"],
      github: "https://github.com/Nazir2608/url-shortener-service",
      demo: null,
      featured: true,
      tier: 2
    },
    {
      id: 8,
      title: "Real-Time Chat Service",
      category: "Distributed Systems",
      description: "Distributed-ready real-time chat system demonstrating production-level backend architecture. Includes secure authentication, real-time messaging, presence tracking, and event-driven modular design.",
      highlights: [
        "Real-time messaging with WebSockets",
        "User presence tracking",
        "Event-driven modular architecture",
        "Secure JWT-based authentication"
      ],
      technologies: ["Java", "Spring Boot", "WebSockets", "Redis", "Kafka"],
      github: "https://github.com/Nazir2608/real-time-chat-service",
      demo: null,
      featured: true,
      tier: 2
    },
    {
      id: 9,
      title: "PeerLink – P2P File Sharing App",
      category: "Backend",
      description: "Engineered a Java 11 backend for a file-sharing system using invite codes & dynamic port allocation. Implemented WebSocket-based direct peer transfers with a drag-and-drop UI built with Next.js/React.",
      highlights: [
        "Direct P2P file transfer via WebSockets",
        "Dynamic port allocation system",
        "Invite-code based peer discovery",
        "Modern Next.js/React frontend"
      ],
      technologies: ["Java 11", "Maven", "WebSockets", "Next.js", "Node.js", "React"],
      github: "https://github.com/Nazir2608/peerlink",
      demo: null,
      featured: false,
      tier: 3
    },
    {
      id: 10,
      title: "Enterprise Job Scheduler Platform",
      category: "Enterprise",
      description: "Enterprise job scheduling platform for automating backend workflows using cron-based and on-demand execution with persistent, restart-safe scheduling. Includes a React + Material UI admin interface.",
      highlights: [
        "Quartz Scheduler with persistent job store",
        "Dynamic job management via REST APIs",
        "Restart-safe execution with fault tolerance",
        "React admin dashboard for monitoring"
      ],
      technologies: ["Java", "Spring Boot", "Quartz Scheduler", "REST APIs", "MySQL", "React", "Material UI"],
      github: "https://github.com/Nazir2608/quartz-scheduler-service",
      demo: null,
      featured: false,
      tier: 3
    },
    {
      id: 11,
      title: "Event-Driven User Service",
      category: "Microservices",
      description: "Scalable Spring Boot backend demonstrating event-driven architecture using domain events. User registration triggers independent asynchronous services (email, audit, notification) via decoupled architecture.",
      highlights: [
        "Domain-driven event architecture",
        "Decoupled async services (email, audit, notification)",
        "Production-grade Spring Boot patterns",
        "Demonstrates clean event-driven design"
      ],
      technologies: ["Java", "Spring Boot", "Domain Events", "Kafka", "PostgreSQL"],
      github: "https://github.com/Nazir2608/event-driven-user-service",
      demo: null,
      featured: false,
      tier: 3
    },
    {
      id: 12,
      title: "CryptoPulse – Real-Time Crypto Streaming",
      category: "Reactive",
      description: "Real-time crypto price streaming platform built with a reactive backend and event-driven frontend. Uses Spring WebFlux and Server-Sent Events for live price updates.",
      highlights: [
        "Reactive programming with Spring WebFlux",
        "Server-Sent Events for live streaming",
        "Real-time crypto price updates",
        "Event-driven frontend integration"
      ],
      technologies: ["Java", "Spring Boot", "Spring WebFlux", "Reactive Programming", "SSE", "Maven"],
      github: "https://github.com/Nazir2608/cryptopulse",
      demo: null,
      featured: false,
      tier: 3
    },
    {
      id: 13,
      title: "Rate Limiter API – Bucket4J + Redis",
      category: "Backend",
      description: "Production-grade API rate limiting using Token Bucket Algorithm employing Bucket4J, Redis, and Spring Security. Demonstrates enterprise-level traffic management.",
      highlights: [
        "Token Bucket Algorithm implementation",
        "Distributed rate limiting with Redis",
        "Spring Security integration",
        "Production-ready throttling system"
      ],
      technologies: ["Java", "Spring Boot", "Bucket4J", "Redis", "Spring Security"],
      github: "https://github.com/Nazir2608/rate-limit-and-throttle-api",
      demo: null,
      featured: false,
      tier: 3
    },
    {
      id: 14,
      title: "AI Email Assistant – Gemini Integration",
      category: "AI/LLM",
      description: "Chrome extension backend leveraging Google's Gemini LLM to auto-draft email responses. Built a resilient REST API wrapper around the AI service with rate limiting and context caching.",
      highlights: [
        "Gemini LLM integration for email drafting",
        "Chrome Extension architecture",
        "Rate limiting & context caching",
        "Optimized token usage"
      ],
      technologies: ["Java", "Spring Boot", "Google Gemini API", "Chrome Extension", "React", "Tailwind CSS"],
      github: "https://github.com/Nazir2608/email-writer",
      demo: null,
      featured: false,
      tier: 3
    },
    {
      id: 15,
      title: "Core Banking Module – Transaction System",
      category: "Fintech",
      description: "Engineered secure financial transaction modules at Opalina Technologies handling high-concurrency requests. Integrated IBM MQ for reliable asynchronous messaging and implemented AES-256 encryption.",
      highlights: [
        "Handled high-concurrency banking transactions",
        "IBM MQ for reliable async messaging",
        "AES-256 encryption for compliance",
        "Reduced query latency by 30%"
      ],
      technologies: ["Java 17", "Spring Boot", "IBM MQ", "Oracle PL/SQL", "AES-256", "Microservices"],
      github: null,
      demo: null,
      featured: false,
      tier: 3,
      professional: true
    },
    {
      id: 16,
      title: "POS Suite – Scalable SaaS Platform",
      category: "Enterprise",
      description: "Multi-tenant, SaaS-ready Point of Sale platform combining POS, inventory, finance, and reporting into a single scalable system. Built with Spring Boot 3 and React.",
      highlights: [
        "Multi-tenant SaaS architecture",
        "JWT authentication with Spring Security",
        "Flyway database migrations",
        "Rate limiting & captcha for security"
      ],
      technologies: ["Java 21", "Spring Boot 3", "Spring Security", "MySQL", "Flyway", "React", "Redux Toolkit", "Tailwind CSS"],
      github: null,
      demo: null,
      featured: false,
      tier: 3
    }
  ],

  achievements: [
    "🚀 Promoted from Trainee to Junior Software Engineer at Opalina in just 7 months for outstanding performance",
    "📈 Improved SQL efficiency and dashboard performance by 30% in core banking projects through query optimization, indexing, and stored procedures",
    "🔄 Successfully modernized legacy SOAP services to REST/JMS architecture, enhancing scalability and reducing system latency",
    "🤖 Developed and deployed multiple AI-powered applications using Gemini, DeepSeek, and Vision-Language Models",
    "🛡️ Resolved 100+ critical production incidents in real-time across mission-critical fintech systems",
    "🏗️ Built and maintained 46+ open-source repositories on GitHub covering microservices, AI, and distributed systems",
    "🎓 Self-transitioned from Civil Engineering to Software Engineering through intensive self-learning"
  ],

  certifications: [
    {
      title: "Java Full Stack Developer Training",
      issuer: "CETPA Infotech",
      date: "Feb 2023"
    }
  ],

  highlights: {
    domains: ["Fintech", "Banking", "E-commerce", "AI/ML", "Distributed Systems"],
    architectures: ["Microservices", "Event-Driven", "Reactive", "Clean Architecture", "RESTful"],
    domainExperience: "3+ years in Banking & Fintech production environments"
  }
};

export default portfolioData;