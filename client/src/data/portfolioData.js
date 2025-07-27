const portfolioData = {
  personal: {
    name: "Md Nazir",
    title: "Java Developer | Backend Engineer",
    bio: "Passionate Java Developer with 2+ years of experience building scalable backend systems using Spring Boot/MVC and Oracle PL/SQL, with a strong interest in debugging and efficiently solving complex challenges.",
    location: "New Delhi, India",
    email: "mdnazir2608@gmail.com",
    phone: "+91-9135621974",
    github: "https://github.com/Nazir2608",
    linkedin: "https://linkedin.com/in/mdnazir2608",
    twitter: null,
    resume: "/Md_Nazir_JavaDev_Resume.pdf"
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
      id: 1,
      company: "Opalina Technologies",
      position: "Java Developer",
      duration: "May 2023 - Present",
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
      id: 1,
      title: "PeerLink – P2P File Sharing App",
      description: "Engineered a Java 11 backend for a file-sharing system using invite codes & dynamic port allocation. Implemented WebSocket-based direct peer transfers and drag-and-drop UI built with Next.js/React.",
      technologies: ["Java 11", "Maven", "WebSocket", "Next.js", "Node.js", "React"],
      github: "https://github.com/Nazir2608/peerlink",
      demo: null,
      featured: true
    },
    {
      id: 2,
      title: "CRM – Customer Relationship Management System",
      description: "Built a role-based CRM system featuring employee, manager, owner, and admin roles. Implemented user/client management, contract approvals, event scheduling, real-time notifications, CSV import/export, and PDF generation with RESTful APIs.",
      technologies: ["Java 8", "Spring Boot", "Spring MVC", "Spring Data", "Hibernate", "Spring Security", "MySQL", "JUnit", "Thymeleaf", "Lombok", "OpenCV", "iText"],
      github: "https://github.com/Nazir2608/crm-system",
      demo: null,
      featured: true
    },
    {
      id: 3,
      title: "Email Writer – AI-Powered Email Assistant",
      description: "Built an AI-based email reply system using Gemini API with Gmail integration via Chrome Extension. Developed Spring Boot backend and React dashboard for generating, customizing, and serving AI-generated responses.",
      technologies: ["Java", "Spring Boot", "React.js", "Gemini API", "Tailwind CSS", "Chrome Extensions"],
      github: "https://github.com/Nazir2608/email-writer",
      demo: null,
      featured: true
    },
    {
      id: 4,
      title: "Banking Application (Core Modules)",
      description: "Professional project at Opalina Technologies - Collaborated on core banking modules with real-time production issue resolution, IBM MQ messaging integration, AES encryption implementation, and Oracle database migration.",
      technologies: ["Java", "Spring Boot", "Oracle", "IBM MQ", "WebSphere", "JMS", "REST APIs", "AES Encryption"],
      github: null,
      demo: null,
      featured: true
    },
    {
      id: 5,
      title: "Bookstore Inventory Management System",
      description: "Built during training with CRUD operations and inventory tracking using Spring Boot framework with comprehensive inventory management features.",
      technologies: ["Java", "Spring Boot", "MySQL", "Hibernate", "HTML5", "CSS3", "Bootstrap"],
      github: "https://github.com/Nazir2608/bookstore-inventory",
      demo: null,
      featured: false
    },
    {
      id: 6,
      title: "Doctor Suggestion REST API",
      description: "Designed RESTful API with Spring Boot architecture for doctor suggestion system with comprehensive medical consultation features.",
      technologies: ["Java", "Spring Boot", "REST API", "MySQL", "JSON"],
      github: "https://github.com/Nazir2608/doctor-suggestion-api",
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
