export const personalInfo = {
  name: "Akash Kumar",
  title: "Full-Stack Developer & UI/UX Engineer",
  tagline:
    "Crafting resilient web architectures, responsive interfaces, and editorial digital experiences.",
  shortBio:
    "Specializing in React, Next.js, Node.js, and modern cloud ecosystems. Passionate about marrying bulletproof engineering with fluid micro-interactions.",
  location: "Bhopal, India",
  email: "akashkumar23012005@gmail.com",
  phone: "+91 98765 43210",
  availableForHire: true,
  resumeUrl: "/Akash_Kumar_Resume.pdf",
  profileImage: "src/image/profile.jpg",
  socials: {
    github: "https://github.com/akashkumar6205",
    linkedin: "https://www.linkedin.com/in/akash-kumar-web/",
    twitter: "https://x.com/KumarAkash77152",
    email: "akashkumar23012005@gmail.com",
  },
  stats: [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Code Commits", value: "300+" },
  ],
};

export const aboutData = {
  narrative: [
    "I'm a Computer Science student and aspiring Software Engineer passionate about building innovative, scalable, and user-focused digital solutions. I enjoy transforming complex problems into elegant applications through clean code, thoughtful design, and efficient problem-solving.",
    "My technical interests span frontend development, full-stack engineering, data structures and algorithms, and modern web technologies. I love exploring new tools, developing real-world projects, and continuously improving my engineering skills.",
    "Beyond writing code, I focus on understanding how software works, designing maintainable architectures, and creating digital experiences that make a meaningful impact.",
    "My goal is simple: to engineer reliable software, solve challenging problems, and turn ambitious ideas into reality.",
  ],
  education: {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Orinetal institute of science and technology",
    year: "2024 — 2028",
    gpa: "7.7 / 10.0",
  },
  coreValues: [
    {
      title: "Performance First",
      description:
        "Sub-second load times, optimized bundle sizes, and 60fps animations are standard benchmarks, never afterthoughts.",
    },
    {
      title: "Architectural Rigor",
      description:
        "Modular components and testable backend endpoints designed for real-world maintenance and scale.",
    },
    {
      title: "Design Empathy",
      description:
        "Bridging the gap between engineering logic and human aesthetic sensibility with deliberate typography and rhythm.",
    },
  ],
};

export const skillCategories = [
  {
    category: "Frontend & UI Engineering",
    description:
      "Crafting fluid, accessible, and responsive user interfaces with modern web standards.",
    skills: [
      { name: "React.js", level: 80, icon: "Code2", experience: "6 month" },
      {
        name: "JavaScript (ES6+)",
        level: 75,
        icon: "FileCode",
        experience: "1+ yrs",
      },
      {
        name: "Tailwind CSS & CSS Modules",
        level: 80,
        icon: "Palette",
        experience: "1+ yrs",
      },
      {
        name: "GSAP & Framer Motion",
        level: 88,
        icon: "Sparkles",
        experience: "2+ yrs",
      },
      { name: "HTML5, Css", level: 85, icon: "Globe", experience: "2+ yrs" },
    ],
  },
  {
    category: "Backend & Systems",
    description: "Building robust, secure REST and RESTful APIs.",
    skills: [
      {
        name: "Node.js & Express",
        level: 80,
        icon: "Server",
        experience: "1+ yrs",
      },
      { name: "RESTful APIs", level: 75, icon: "Cpu", experience: "1+ yrs" },
      {
        name: "Authentication (JWT / OAuth2)",
        level: 70,
        icon: "ShieldCheck",
        experience: "1+ yrs",
      },
    ],
  },
  {
    category: "Databases & Storage",
    description:
      "Designing schema models, indexing strategies, and high-availability database solutions.",
    skills: [
      { name: "MYSQL", level: 75, icon: "Database", experience: "1+ yrs" },
      {
        name: "MongoDB & Mongoose",
        level: 91,
        icon: "FileSpreadsheet",
        experience: "1+ yrs",
      },
    ],
  },
  {
    category: "DevOps, Tools & Workflow",
    description:
      "Automating deployment lifecycles, version control, and containerization.",
    skills: [
      {
        name: "Git, GitHub",
        level: 90,
        icon: "GitBranch",
        experience: "2+ yrs",
      },
      // { name: "Docker & Containerization", level: 82, icon: "Box", experience: "2 yrs", highlight: "Multi-stage Builds, Compose" },
      {
        name: "Vercel, Render & Netlify",
        level: 90,
        icon: "CloudRain",
        experience: "2+ yrs",
      },
      {
        name: "Postman & API Testing",
        level: 86,
        icon: "CheckCircle2",
        experience: "1.5 yrs",
      },
    ],
  },
];

export const projectsData = [
  {
    id: "Livora",
    title: "Livora - FULL-Stack Travel & Rental Platform",
    category: "Full Stack",
    tagline: "Smarter Stays. Better Journeys",
    description:
      "An enterprise-ready project management and automation suite that powers distributed team workflows. Features real-time multi-user syncing via WebSockets, granular role-based permissions, and visual workflow builders.",
    image: "public/image/Livora.png",
    tags: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Cloudinary",
      "Passport",
    ],
    featured: true,
    github: "https://github.com/akashkumar6205/MAJORPROJECT-LIVORA.git",
    live: "https://majorproject-livora.onrender.com",
    architecture: {
      overview:
        "LIVORA is a full-stack travel and rental platform inspired by Airbnb. It enables users to discover properties, explore destinations, view property details, make reservations, and manage their travel experiences.",
      stackDetails: [
        { layer: "Frontend", tech: "HTML5, CSS3, Bootstrap, Ejs" },
        { layer: "Backend", tech: "Node.js, Express" },
        { layer: "Database", tech: "MongoDB, Mongoose" },
        { layer: "Image Storage", tech: "Cloudinary" },
        { layer: "Auth", tech: "Passport" },
      ],
      keyFeatures: [],
      challengesSolved: "",
    },
  },
  {
    id: "Portfolio",
    title: "Portfolio",
    category: "Frontend",
    tagline:
      "Turning Ideas into Interactive Experiences.",
    description:
      "A modern, responsive, and interactive developer portfolio designed to showcase my technical skills, projects, achievements, certifications, and professional journey as a Computer Science and Engineering student.",
    image:
      "public/image/Portfolio.png",
    tags: [
      "React",
      "Tailwind CSS",
      "HTML",
      "GSAP",
      "Framer Motion",
    ],
    featured: true,
    github: "https://github.com/akashkumar6205/Portfolio-Website.git",
    live: "https://portfolio-website-blond-five-89.vercel.app/",
    
    architecture: {
      overview:
        "",
      stackDetails: [
        {
          layer: "Frontend",
          tech: "HTML, React, Tailwind CSS",
        },
        {
          layer: "Animation",
          tech: "GSAP, Framer Motion, ",
        },
        
      ],
      keyFeatures: [
        "Hero Section- Introduce yourself with your name, developer role, tagline, and CTA buttons.",
        "About Me- Showcase your background, education, interests, and developer journey.",
        "Project Showcase- Present projects with screenshots, descriptions, technology stacks, GitHub repositories, and live demos.",
        "Interactive Tech Stack- Display programming languages, frameworks, databases, and development tools.",
        "Achievements & Certifications- Highlight certificates, workshops, awards, and academic achievements.",
        "Resume Download- Provide a prominent button to view or download your resume PDF.",
      ],
    },
  },
  {
    id: "SIH2026",
    title: "DhruvSetu — Digital Twin Platform for Indian Antarctic Research Stations",
    category: "AI/ML",
    tagline:
      "One Platform. Two Stations. Smarter Antarctic Operations.",
    description:
      "DhruvSetu is an intelligent digital platform designed to improve the remote monitoring, management, and operational efficiency of India's Antarctic research stations, Maitri and Bharati.",
    image:
      "public/image/SIH.png",
    tags: ["React", "Tailwind CSS", "Node.js", "Express.js", "JWT", "Three.js", "Postgress SQL", "GSAP"],
    featured: true,
    github: "https://github.com/akashkumar6205/SIH-2026.git",
    live: "https://sih-2026-alpha-steel.vercel.app/",
    metrics: "Real-time updates at 5-second polling intervals",
    architecture: {
      overview:
        "The solution follows a modular architecture consisting of a web frontend, backend services, a data-processing layer, a Digital Twin visualization engine, and external sensor integrations.",
      stackDetails: [
        { layer: "Frontend", tech: "React, Tailwind CSS, Vite" },
        { layer: "Backend", tech: "Node.js, Express.js, JWT" },
        { layer: "3D Motion", tech: "Three.js, GSAP" },
        { layer: "DataBase", tech: "Postgress SQL" },
      ],
      keyFeatures: [
        "Digital Twin and 3D Visualization",
        "AI-Powered Intelligence",
        "Real-Time Station Monitoring",
        " Energy and Resource Management",
        "Emergency and Personnel Management",
        "Reporting and Communication",
        "Reliability and Security",
      ],
      challengesSolved:
        "Antarctic Nexus addresses the challenges of remotely monitoring and managing India's Antarctic research stations, Maitri and Bharati, through a unified digital platform. It reduces dependence on fragmented monitoring systems by integrating infrastructure status, environmental conditions, energy consumption, inventory, and emergency alerts into a centralized dashboard.",
    },
  },
  // {
  //   id: "editorial-journal",
  //   title: "Verve — Editorial Publishing & Knowledge Base",
  //   category: "Frontend",
  //   tagline:
  //     "Minimalist, distraction-free markdown publishing engine with instant search and typography controls.",
  //   description:
  //     "A publication platform built for writers and tech bloggers who appreciate typographic hierarchy, reading time estimators, interactive code blocks with syntax highlighting, and offline sync.",
  //   image:
  //     "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop",
  //   tags: [
  //     "React",
  //     "Markdown-IT",
  //     "Tailwind CSS",
  //     "Framer Motion",
  //     "IndexedDB",
  //   ],
  //   featured: false,
  //   github: "https://github.com/akash-kumar-dev/verve-journal",
  //   live: "https://verve-journal.vercel.app",
  //   metrics: "100/100 Lighthouse Performance score",
  //   architecture: {
  //     overview:
  //       "Static-first architecture with dynamic client-side hydration, client-side fuzzy search, and local caching.",
  //     stackDetails: [
  //       {
  //         layer: "Frontend",
  //         tech: "React, Framer Motion, Tailwind Typography",
  //       },
  //       { layer: "Parser", tech: "Unified, Remark, Rehype" },
  //       { layer: "Search", tech: "Client-side indexed search" },
  //     ],
  //     keyFeatures: [
  //       "Customizable reading typography (Serif/Sans font switcher, line-height adjuster)",
  //       "Interactive code playground with copy-to-clipboard and line highlight",
  //       "Dark, Sepia, and Light editorial reading modes",
  //       "Offline reading support with Service Workers",
  //     ],
  //     challengesSolved:
  //       "Crafted a zero-layout-shift image loader with blurhash previews for buttery smooth reading flows.",
  //   },
  // },
];

export const achievementsData = {
  hackathons: [
    {
      title: "WebRush 2026",
      organizer: "Frontend Arena",
      date: "2026",
      highlight: "Secured Rank #39 in WebRush 2026",
      description:
        "A 6-hour frontend development hackathon recognizing creativity, technical skills, and successful completion of the challenge.",
      badge: "Certificate of Excellence",
      category: "Frontend Development Hackathon",
      certificateImage: "public/image/WEBRUSH2026.png",
    },
    {
      title: "AI for Bharat Hackathon",
      organizer: "Amazon Web Services (AWS)",
      date: "2026",
      highlight: "Built, submitted a qualified prototype",
      description:
        "Built and submitted a qualified prototype using generative AI tools to solve real-world challenges for India.",
      badge: "Certificate of Participation",
      category: "AI / Generative AI Hackathon",
      certificateImage: "public/image/H2S.png",
    },
    {
      title: "Vibe2Ship – India's Biggest Vibe Coding Hackathon",
      organizer: "Coding Ninjas in collaboration with Google for Developers",
      date: "2026",
      highlight: "India's Biggest Vibe Coding Hackathon",
      description:
        "Participated in an open-source community, contributing to projects, collaborating with developers, and gaining hands-on experience throughout the program.",
      badge: "Certificate of Participation",
      category: "Vibe Coding Hackathon",
      certificateImage: "public/image/VIBE2SHIP.png",
    },

    {
      title: "Elite Coders Summer of Code 2026",
      organizer: "ECSOC / Elite Coders",
      date: "2026",
      highlight: "Successfully participated in ECSO 2026",
      description:
        "Consistent problem solver in Data Structures, Dynamic Programming, Graph Theory, and Tree Traversal algorithms.",
      badge: "Certificate of Participation",
      category: "Open Source Program",
      certificateImage: "public/image/ECSOC.png",
    },
  ],
  certifications: [
    {
      title: "Programming in Java",
      issuer: "NPTEL (IIT Kharagpur)",
      issueDate: "Jan–Apr 2026 (12-week course)",
      credentialId: "NPTEL26CS36S763100540",
      skillsGained:
        "Java Programming, Object-Oriented Programming (OOP), Java Collections Framework",
      icon: "NPTEL Online Certification",
      certificateImage: "/image/NPTEL.png",
    },
    {
      title: "WebRush 2026",
      issuer: "Frontend Arena",
      issueDate: "September 20, 2026 ",
      credentialId: "FA-P3T7VNHE",
      skillsGained:
        "A 6-hour frontend development hackathon recognizing creativity, technical skills, and successful completion of the challenge.",
      icon: "Frontend Development Hackathon",
      certificateImage: "/image/WEBRUSH2026.png",
    },
  ],
};
