export const personalInfo = {
  name: "Phelobater Bassem Basha",
  role: "Software Engineer",
  tagline: "Building scalable web platforms, robust data pipelines, and high-reliability enterprise solutions.",
  roles: [
    "Software Engineer",
    "Full-Stack MERN Developer",
    "Data & Cloud Engineer"
  ],
  bio: "Passionate Software Engineer currently studying at Helwan University (Faculty of Computers & Artificial Intelligence, Information Systems). Experienced in end-to-end web engineering with the MERN stack (MongoDB, Express, React, Node.js) and cloud data engineering with Python, SQL, and Azure. Driven by writing clean, maintainable code and solving complex technical challenges.",
  email: "terobassem.5@gmail.com",
  phone: "01228646329",
  phoneFormatted: "+20 122 864 6329",
  location: "19 Eladawy St, El Maadi, Cairo, Egypt",
  status: "Available for Full-time Roles & Internships",
  socials: {
    linkedin: "https://www.linkedin.com/in/phelobater-b-basha",
    github: "https://github.com",
    email: "mailto:terobassem.5@gmail.com"
  },
  stats: [
    { label: "University Year", value: "FCI Helwan" },
    { label: "Core Stacks", value: "MERN & SQL" },
    { label: "Primary Focus", value: "Full Stack" },
    { label: "Data Engineering", value: "Python & Azure" }
  ]
};

export const education = {
  degree: "Bachelor of Science in Computers and Artificial Intelligence",
  department: "Information Systems Department",
  institution: "Helwan University",
  period: "09/2023 – Present",
  location: "Cairo, Egypt",
  highlights: [
    "Comprehensive study of Algorithms, Data Structures, OOP, Database Systems, and Network Architecture",
    "Active contributor in student tech organizations and software engineering initiatives"
  ]
};

export const experiences = [
  {
    id: "depi",
    title: "Data Engineering Trainee",
    company: "DEPI Data Engineering",
    type: "Specialized Track",
    period: "07/2026 – Present",
    location: "Egypt",
    badge: "Current",
    description: "Hands-on data engineering track focused on distributed systems, data manipulation pipelines, and enterprise cloud data warehouse practices.",
    skills: ["Python", "SQL", "Big Data", "Azure Cloud", "Data Analysis", "ETL"],
    highlights: [
      "Engineered automated data analysis pipelines utilizing Python for transformation and aggregation",
      "Designed advanced SQL schemas, stored procedures, and complex data validation queries",
      "Explored Big Data distributed processing paradigms and scalable data modeling",
      "Implemented cloud data workflows and storage configurations within Microsoft Azure"
    ]
  },
  {
    id: "smg-erp",
    title: "Oracle ERP Techno-Functional Intern",
    company: "SMG Engineering Auto",
    type: "Enterprise ERP",
    period: "07/2026 – 08/2026",
    location: "Cairo, Egypt",
    badge: "Enterprise",
    description: "Configured and validated enterprise-grade supply chain and financial business processes within Oracle ERP suite.",
    skills: ["Oracle ERP", "Order Management (OM)", "Order to Cash (O2C)", "Oracle SQL", "Inventory", "Receivables"],
    highlights: [
      "Configured Order Management (OM) transaction types, lines, and system approval workflows",
      "Engineered end-to-end Order to Cash (O2C) flows connecting sales orders, shipping, and invoicing",
      "Assisted in Accounts Receivables setup, transaction batch creation, and reconciliation",
      "Managed master data: created, categorized, and assigned inventory items and unit-of-measure mappings",
      "Authored Oracle SQL queries for backend data integrity checks and transactional auditing"
    ]
  },
  {
    id: "orange",
    title: "Sales and Customer Support Representative",
    company: "Orange Egypt",
    type: "Professional Experience",
    period: "07/2025 – Present",
    location: "Cairo, Egypt",
    badge: "Telecom",
    description: "Frontline technical problem-solver and client communications specialist at one of Egypt's leading telecom corporations.",
    skills: ["Problem Solving", "Customer Support", "Crisis Management", "Communication", "CRM Tools"],
    highlights: [
      "Diagnosed and resolved telecom, network, and account service challenges for diverse client bases",
      "Maintained superior customer satisfaction ratings by delivering rapid, empathetic resolution paths",
      "Mastered corporate communication, negotiation, and high-pressure team workflows"
    ]
  },
  {
    id: "pro-egypt",
    title: "IT Technical Support Intern",
    company: "Pro Egypt Company",
    type: "IT Infrastructure",
    period: "06/2024 – 08/2024",
    location: "Cairo, Egypt",
    badge: "Infrastructure",
    description: "System administration and enterprise infrastructure support across hardware, networks, and Windows Server ecosystems.",
    skills: ["Windows Server", "Active Directory", "IT Helpdesk", "System Diagnostics", "Networking"],
    highlights: [
      "Administered Windows Server environments, user permission groups, and network file shares",
      "Provided tier-1 and tier-2 help desk support resolving hardware, software, and domain connectivity issues",
      "Assisted in rolling out enterprise IT solutions, system upgrades, and workstation deployments"
    ]
  },
  {
    id: "codealpha",
    title: "Frontend Web Developer Intern",
    company: "CodeAlpha",
    type: "Web Development",
    period: "03/2025 – 04/2025",
    location: "Remote",
    badge: "Frontend",
    description: "Developed modern, responsive front-end web applications with clean code architecture and responsive CSS styling.",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design", "Git"],
    highlights: [
      "Engineered responsive, cross-browser user interfaces adhering to UI/UX accessibility standards",
      "Implemented modular JavaScript components and clean CSS layout techniques",
      "Collaborated remotely using Git version control and milestone-driven task boards"
    ]
  },
  {
    id: "msp",
    title: "Web Development Member",
    company: "MSP-TECH Helwan University",
    type: "Student Activity",
    period: "04/2024 – 01/2025",
    location: "Cairo, Egypt",
    badge: "Leadership",
    description: "Collaborated in university tech chapter delivering frontend development workshops and community web applications.",
    skills: ["Front-End Dev", "Teamwork", "Agile", "Mentorship", "Community"],
    highlights: [
      "Collaborated in team sprints to develop front-end web modules for student events and platforms",
      "Conducted knowledge-sharing sessions on modern JavaScript, HTML5/CSS3 semantics, and Git workflows"
    ]
  }
];

export const projects = [
  {
    id: "khedma-app",
    title: "Khedma 5&6 Web Application",
    featured: true,
    tag: "Featured MERN Stack App",
    subtitle: "Educational & Church Activity Management Platform",
    description: "Comprehensive MERN Stack (MongoDB, Express.js, React.js, Node.js) web application engineered for organizing educational and church activities for 5th and 6th-grade students.",
    architecture: "Built with a scalable Node/Express RESTful backend communicating with MongoDB Atlas. Features a dynamic React frontend with responsive styling, role-based JWT authentication, and interactive event dashboards.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST API"],
    highlights: [
      "Multi-tier role authentication for Administrators, Teachers/Servants, and Students",
      "Real-time attendance tracking with summary reports and engagement analytics",
      "Interactive weekly event schedule and digital lesson material distribution",
      "Responsive UI optimized for tablets and mobile devices used in classrooms"
    ],
    demoLink: "https://khedma-5-6.up.railway.app/",
    codeLink: "https://khedma-5-6.up.railway.app/",
    metrics: "Live Production Deployment on Railway"
  }
];

export const skillCategories = [
  {
    name: "Front-End",
    icon: "Layout",
    skills: [
      { name: "React.js", highlighted: true },
      { name: "JavaScript (ES6+)", highlighted: true },
      { name: "Tailwind CSS", highlighted: true },
      { name: "HTML5 & Semantic Markup", highlighted: false },
      { name: "CSS3 & Modern Layouts", highlighted: false },
      { name: "Responsive & Adaptive UI", highlighted: false },
      { name: "State Management", highlighted: false }
    ]
  },
  {
    name: "Back-End & APIs",
    icon: "Server",
    skills: [
      { name: "Node.js", highlighted: true },
      { name: "Express.js", highlighted: true },
      { name: "RESTful API Design", highlighted: true },
      { name: "PHP (ITI Certified)", highlighted: false },
      { name: "Object-Oriented Programming (OOP)", highlighted: true },
      { name: "Authentication & JWT", highlighted: false }
    ]
  },
  {
    name: "Databases & Data Engineering",
    icon: "Database",
    skills: [
      { name: "SQL", highlighted: true },
      { name: "MySQL", highlighted: true },
      { name: "MongoDB", highlighted: true },
      { name: "Oracle SQL", highlighted: true },
      { name: "Python for Data Analysis", highlighted: true },
      { name: "Big Data Principles", highlighted: false },
      { name: "Azure Cloud", highlighted: false }
    ]
  },
  {
    name: "CS Fundamentals & Infrastructure",
    icon: "Cpu",
    skills: [
      { name: "Data Structures", highlighted: true },
      { name: "Algorithms", highlighted: true },
      { name: "Computer Networking", highlighted: false },
      { name: "Windows Server", highlighted: false },
      { name: "IT Helpdesk & Troubleshooting", highlighted: false },
      { name: "Git & GitHub", highlighted: false }
    ]
  },
  {
    name: "Professional Soft Skills",
    icon: "Users",
    skills: [
      { name: "Team Work & Collaboration", highlighted: true },
      { name: "Time Management", highlighted: true },
      { name: "Thriving Under Pressure", highlighted: true },
      { name: "Analytical Problem Solving", highlighted: true },
      { name: "Customer & Client Communication", highlighted: false }
    ]
  }
];

export const certifications = [
  {
    title: "Building Web Applications using PHP & MYSQL",
    issuer: "Mahara-Tech ITI (Information Technology Institute)",
    badge: "Full-Stack Web",
    date: "Certified",
    description: "Comprehensive certification covering relational database integration, backend PHP script architecture, session management, and secure web application development.",
    skills: ["PHP", "MySQL", "Web Security", "Database Systems"]
  },
  {
    title: "Frontend Development",
    issuer: "S.E Future Academy",
    badge: "Frontend Engineering",
    date: "Certified",
    description: "Rigorous program in modern client-side technologies, DOM manipulation, responsive cross-device layouts, and modern JavaScript standards.",
    skills: ["JavaScript", "HTML5", "CSS3", "Responsive Web Design"]
  },
  {
    title: "Artificial Intelligence Course",
    issuer: "HP LIFE Online Learning",
    badge: "AI & Innovation",
    date: "Certified",
    description: "Foundational training in Artificial Intelligence paradigms, data ethics, practical business applications, and machine learning fundamentals.",
    skills: ["AI Fundamentals", "Machine Learning Concepts", "Tech Strategy"]
  },
  {
    title: "Fundamentals of Digital Marketing",
    issuer: "Banque Misr & Google",
    badge: "Industry Program",
    date: "06/2026",
    description: "Strategic program on digital presence, consumer behavior analytics, search optimization, and modern online marketing channels.",
    skills: ["Digital Strategy", "Analytics", "Web Presence"]
  },
  {
    title: "AI in Banking & Renewable Energy Systems",
    issuer: "CIB Bank",
    badge: "Fintech & Sustainability",
    date: "06/2026",
    description: "Specialized corporate internship exploring AI deployment within commercial banking operations, sustainability via renewable energy, and workplace soft skills.",
    skills: ["AI in Banking", "Renewable Energy", "Corporate Skills", "Fintech"]
  }
];
