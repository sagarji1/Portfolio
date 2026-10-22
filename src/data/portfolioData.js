/**
 * Central Portfolio Configuration for Yash Sagar
 * 
 * Edit this file to update personal details, links, projects, and skills.
 * All sections consume this data to keep the site 100% maintainable.
 */

export const personalInfo = {
  name: "Yash Sagar",
  shortName: "YS.",
  role: "Full-Stack Web Developer",
  education: "Computer Engineering Student",
  institution: "Delhi Skill and Entrepreneurship University (DSEU)",
  location: "Delhi NCR, India",
  
  // NOTE: Replace this placeholder with your verified email address
  email: "sagar.dev5849@gmail.com",
  isEmailPlaceholder: true, // Flag indicating this is a placeholder to customize
  
  github: "https://github.com/sagarji1",
  linkedin: "https://linkedin.com/in/yash-sagar", // Update with your direct LinkedIn username
  
  // Resume configuration:
  // Place your resume PDF in the `public/` directory (e.g., `public/yash_sagar_resume.pdf`)
  // and set the path below to `/yash_sagar_resume.pdf`.
  // If set to null, the UI gracefully indicates that the PDF is available on request.
  resumeUrl: `/Resume.pdf`, 

  status: {
    available: true,
    label: "Open to internships & select projects",
    badge: "Available for opportunities",
  },
};

export const heroContent = {
  eyebrow: "COMPUTER ENGINEERING · FULL-STACK DEVELOPMENT",
  heading: "Hey, I'm Yash. I build for the web.",
  description:
    "I'm a Computer Engineering student at DSEU who enjoys building responsive web applications, practical products, and reliable backend systems using modern web technologies.",
  secondaryLine:
    "From clean interfaces to the APIs behind them, I like understanding how the whole product works.",
  primaryCta: {
    label: "Explore my work",
    href: "#work",
  },
  secondaryCta: {
    label: "Get in touch",
    href: "#contact",
  },
};

export const techStackStrip = [
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "API" },
  { name: "MongoDB", category: "Database" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "C++", category: "Core" },
  { name: "Git & GitHub", category: "Version Control" },
];

export const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Responsive React interfaces, reusable components, accessible layouts, and polished interactions built with modern CSS and JavaScript.",
    skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Component Design", "Responsive Layouts"],
  },
  {
    number: "02",
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications connecting responsive frontend interfaces with structured backend APIs, databases, and authenticated user flows.",
    skills: ["MERN Stack", "Next.js", "State Management", "REST Integration", "Full Lifecycle"],
  },
  {
    number: "03",
    title: "Backend & API Development",
    description:
      "REST API design, server-side business logic, MongoDB database integration, data validation, and secure JWT-based authentication.",
    skills: ["Node.js", "Express.js", "MongoDB / Mongoose", "JWT Security", "Input Validation"],
  },
  {
    number: "04",
    title: "Website UI Implementation",
    description:
      "Translating ideas, wireframes, and design specs into high-fidelity, accessible, and fast web experiences that look sharp on any device.",
    skills: ["Design-to-Code", "Modern CSS", "Accessibility (a11y)", "Cross-Browser Testing"],
  },
];

export const experience = [
  {
    role: "Full-Stack Developer Intern",
    company: "Webinex",
    type: "Internship",
    location: "Remote",
    period: "July – August",
    yearNote: "Duration confirmed · Year subject to verification",
    description: [
      "Contributed to web application development utilizing MERN stack technologies (MongoDB, Express.js, React, Node.js).",
      "Worked with modern frontend workflows including React and Next.js / TypeScript for responsive component architecture.",
      "Contributed to feature development for a school CRM dashboard and an e-commerce platform.",
      "Developed and tested backend REST APIs, performed database operations, crafted reusable UI components, and debugged application issues.",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Next.js", "TypeScript", "REST APIs"],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "Delhi Skill and Entrepreneurship University (DSEU)",
    campus: "Okhla 2 Campus",
    period: "2023 – 2027",
    status: "Currently Pursuing",
    highlights: "Core engineering coursework covering Data Structures & Algorithms, Operating Systems, Database Management Systems, and Software Engineering.",
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "Kendriya Vidyalaya",
    campus: "Greater Noida",
    period: "2022 – 2023",
    status: "Completed",
    highlights: "Scored 80% with a focus on Physics, Chemistry, and Mathematics (PCM).",
  },
];

export const technicalSkills = {
  frontend: [
    { name: "React.js", level: "Core" },
    { name: "Next.js", level: "Proficient" },
    { name: "JavaScript (ES6+)", level: "Core" },
    { name: "TypeScript", level: "Proficient" },
    { name: "HTML5 & Semantic Markup", level: "Core" },
    { name: "CSS3 & Modern Layouts", level: "Core" },
    { name: "Tailwind CSS", level: "Core" },
  ],
  backend: [
    { name: "Node.js", level: "Core" },
    { name: "Express.js", level: "Core" },
    { name: "REST APIs", level: "Core" },
    { name: "JWT Authentication", level: "Proficient" },
    { name: "bcrypt & Security Practices", level: "Proficient" },
  ],
  databases: [
    { name: "MongoDB", level: "Core" },
    { name: "Mongoose ODM", level: "Core" },
  ],
  programming: [
    { name: "C++", level: "Data Structures & Core" },
    { name: "Python", level: "Scripting & Basics" },
    { name: "JavaScript", level: "Primary Web Language" },
  ],
  tools: [
    { name: "Git", level: "Version Control" },
    { name: "GitHub", level: "Collaboration" },
    { name: "VS Code", level: "Development Environment" },
    { name: "Postman", level: "API Testing" },
  ],
};

export const projects = [
  {
    id: "01",
    title: "DailyMart",
    tagline: "Modern Grocery E-Commerce Experience",
    eyebrow: "E-COMMERCE · WEB APPLICATION",
    description:
      "A grocery shopping interface focused on product discovery, category browsing, and a clean shopping experience.",
    contribution:
      "Built the responsive user interface, intuitive category filtering, item quantity management, and shopping basket state.",
    technologies: ["React", "JavaScript", "CSS3", "Responsive UI"],
    liveUrl: "https://elaborate-fox-a1d2bb.netlify.app/",
    githubUrl: "https://github.com/sagarji1/Dailymart",
    previewType: "dailymart",
    featuredBadge: "Live Deployment",
  },
  {
    id: "02",
    title: "AgentHub",
    tagline: "AI Agent Marketplace & Workflow Engine",
    eyebrow: "AI SYSTEMS · WORKFLOW PLATFORM",
    description:
      "An AI-agent marketplace and workflow-building concept designed around connecting agents, composing workflows, and sharing reusable solutions.",
    contribution:
      "Contributed to backend authentication, JWT-based security implementation, and debugging database and authentication flows.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"],
    liveUrl: null, // No public live link verified yet
    githubUrl: "https://github.com/Mithlancal/agenthub",
    previewType: "agenthub",
    featuredBadge: "Workflow Architecture",
  },
  {
    id: "03",
    title: "BankEngine",
    tagline: "Secure Banking Backend & Lifecycle Core",
    eyebrow: "FINTECH · BACKEND ARCHITECTURE",
    description:
      "A banking backend project focused on account operations, authentication, and account lifecycle management.",
    contribution:
      "Backend implementation and account-related application logic, including status state-machines (Active, Frozen, Closed) and secured operations.",
    technologies: ["Node.js", "Express.js", "MongoDB", "bcrypt", "JWT", "REST APIs"],
    liveUrl: null,
    githubUrl: null, // Kept unset until repository is verified
    previewType: "bankengine",
    featuredBadge: "Backend Logic & Security",
  },
];
