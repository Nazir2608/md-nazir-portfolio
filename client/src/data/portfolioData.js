const portfolioData = {
  personal: {
    name: "Md Nazir",
    title: "Java Developer | Backend Engineer",
    bio: "Backend Engineer specializing in scalable Java systems, Spring Boot microservices, and performance optimization. Experienced in building enterprise-grade applications with Oracle and modern cloud technologies.",
    location: "New Delhi, India",
    email: "mdnazir2608@gmail.com",
    phone: "+91-9135621974",
    github: "https://github.com/Nazir2608",
    linkedin: "https://linkedin.com/in/mdnazir2608",
    whatsapp: "https://wa.me/919135621974", // Add this line
    twitter: null,
    resume: process.env.PUBLIC_URL + "/Md_Nazir_JavaDev_Resume.pdf",
  },
  skills: {
    languages: ["Java", "JavaScript", "PL/SQL", "HTML5", "CSS3"],
    frameworks: ["Java 8/17", "Spring Boot", "Spring MVC", "Hibernate", "JUnit", "Node.js", "Express.js", "React.js", "Multithreading", "Collection Framework", "JMS", "JDBC", "Servlet", "Microservices"],
    databases: ["MySQL", "Oracle", "MongoDB"],
    cloud: ["AWS", "Docker", "Kubernetes", "Jenkins", "IBM WebSphere", "Kafka", "IBM MQ Client"],
    tools: ["Eclipse", "IntelliJ IDEA", "Maven", "Postman", "SonarQube", "Git", "Bitbucket", "Linux"]
  },
  experience: [
    {
      id: 3,
      company: "The LCF Group",
      position: "Software Engineer",
      duration: "Nov 2025 - Present",
      location: "Bengaluru, Karnataka, India",
      description: "Working on enterprise-grade backend systems in the fintech/banking domain using Java and Spring-based services. Designed and implemented a Quartz-based job scheduling system to automate backend workflows using cron and on-demand triggers. Built REST APIs for managing scheduled jobs with persistent execution and restart safety. Contributed to system reliability, automation, and operational efficiency across backend services while supporting production systems and ensuring the stability of business-critical applications.",
      technologies: ["Java", "Spring Boot", "Quartz Scheduler", "Microservices", "REST APIs", "SQL"]
    },
    {
      id: 1,
      company: "Opalina Technologies",
      position: "Java Developer",
      duration: "May 2023 - Oct 2025",
      location: "Noida, India",
      description: "Collaborated on the development and maintenance of core banking modules, addressing real-time production issues to ensure uninterrupted service availability. Integrated IBM MQ messaging and implemented AES-based encryption for secure banking transactions. Led Oracle database migration and modernized SOAP-based services to JMS architecture.",
      technologies: ["Java", "Spring Boot", "Oracle", "IBM MQ", "WebSphere", "JMS", "REST APIs", "AES Encryption"]
    },
    {
      id: 2,
      company: "CETPA Infotech Pvt. Ltd",
      position: "Java Full Stack Developer Trainee",
      duration: "Aug 2022 - Feb 2023",
      location: "Noida, India",
      description: "Developed multiple full-stack web applications covering core and advanced Java concepts. Built projects like Mini Online Exam, Banking System, Employee Dashboard, Bookstore Inventory Management, and Doctor Suggestion REST API using various technologies.",
      technologies: ["Java", "Spring Boot", "Spring MVC", "Hibernate", "JDBC", "Servlet", "JSP", "HTML5", "CSS3", "Bootstrap", "MySQL"]
    }
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Civil Engineering",
      institution: "Roorkee Institute of Technology",
      duration: "Aug 2018 - June 2022",
      location: "Uttarakhand, India",
      grade: "CGPA: 8.74"
    }
  ],
  projects: [
    {
      id: 7,
      title: "POS Suite – Scalable SaaS Point of Sale Platform",
      description: "Multi-tenant, SaaS-ready Point of Sale platform combining POS, inventory, finance, and reporting into a single scalable system. Designed and developed a scalable Spring Boot backend supporting multiple businesses and stores. Implemented secure authentication and authorization using Spring Security with JWT. Built core modules for POS billing, inventory management, finance, customer management, and reporting. Designed REST APIs for real-time sales, stock updates, and financial workflows. Implemented database migrations using Flyway and optimized transactional queries in MySQL. Added rate limiting, captcha, and request blocking to improve platform security and abuse prevention. Structured the project as a clean monorepo supporting backend, business UI, and platform UI.",
      technologies: ["Java 21", "Spring Boot 3", "Spring Security", "MySQL", "Flyway", "Quartz Scheduler", "React", "Redux Toolkit", "Tailwind CSS"],
      github: null,
      demo: null,
      featured: true
    },
    {
      id: 6,
      title: "Enterprise Job Scheduler Platform",
      description: "Enterprise job scheduling platform for automating backend workflows using cron-based and on-demand execution with persistent, restart-safe scheduling. Designed and implemented a job scheduling system using Quartz Scheduler and Spring Boot, supporting cron-based and on-demand execution of HTTP jobs for internal service workflows. Built REST APIs to dynamically manage scheduled jobs without application restart, ensuring persistence and fault tolerance via a database-backed Quartz job store. Additionally developed a React + Material UI admin interface for job monitoring and manual execution.",
      technologies: ["Java", "Spring Boot", "Quartz Scheduler", "REST APIs", "MySQL", "React", "Material UI"],
      github: null,
      demo: null,
      featured: true
    },
    {
      id: 4,
      title: "Core Banking Module – Transaction System",
      description: "Engineered secure financial transaction modules handling high-concurrency requests. Integrated IBM MQ for reliable asynchronous messaging and implemented AES-256 encryption for sensitive data compliance. Optimized Oracle PL/SQL stored procedures, reducing query latency by 30%.",
      technologies: ["Java 17", "Spring Boot", "IBM MQ", "Oracle PL/SQL", "AES-256", "Microservices"],
      github: null,
      demo: null,
      featured: true
    },
    {
      id: 2,
      title: "Enterprise CRM & RBAC System",
      description: "Designed a role-based access control (RBAC) system for multi-tenant enterprise usage. Implemented Spring Security for granular permission management and automated PDF contract generation using iText. Built a real-time notification service using Spring Events to track user activities.",
      technologies: ["Spring Boot", "Spring Security", "MySQL", "Hibernate", "Thymeleaf", "iText PDF"],
      github: "https://github.com/Nazir2608/crm-system",
      demo: null,
      featured: true
    },
    {
      id: 1,
      title: "PeerLink – Real-Time P2P File Sharing",
      description: "Architected a low-latency file sharing platform using WebSockets for direct peer-to-peer data transfer. Implemented dynamic port allocation and invite-code logic to bypass traditional cloud storage costs. Designed a non-blocking I/O backend with Java NIO principles.",
      technologies: ["Java 11", "WebSockets", "Java NIO", "React", "Next.js", "P2P Protocols"],
      github: "https://github.com/Nazir2608/peerlink",
      demo: null,
      featured: true
    },
    {
      id: 3,
      title: "AI Email Assistant – Gemini Integration",
      description: "Developed a chrome extension backend that leverages Google's Gemini LLM to auto-draft email responses. Built a resilient REST API wrapper around the AI service with rate limiting and context caching to optimize token usage and response time.",
      technologies: ["Spring Boot", "Google Gemini API", "REST Architecture", "Chrome Extension", "Rate Limiting"],
      github: "https://github.com/Nazir2608/email-writer",
      demo: null,
      featured: true
    },
    {
      id: 5,
      title: "Bookstore Inventory System",
      description: "Full-stack inventory tracking application with CRUD capabilities.",
      technologies: ["Java", "Spring Boot", "MySQL", "Hibernate"],
      github: "https://github.com/Nazir2608/bookstore-inventory",
      demo: null,
      featured: false
    }
  ],
  achievements: [
    "Improved SQL efficiency and dashboard performance by 30% in a core banking project through query optimization and stored procedures",
    "Successfully migrated legacy SOAP services to JMS architecture, enhancing scalability and reducing system latency",
    "Developed and deployed an AI-powered email assistant using Gemini API, integrating Spring Boot backend and Chrome Extension",
    "Resolved critical production issues in real-time and mentored junior developers on WebSphere, Spring Boot, and system design"
  ],
  certifications: [
    {
      title: "Java Full Stack Developer Trainee",
      issuer: "CETPA Infotech",
      date: "Feb 2023"
    }
  ]
};

export default portfolioData;
