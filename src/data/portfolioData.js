export const personalInfo = {
  name: "Akash Kumar",
  title: "Full-Stack Developer & UI/UX Engineer",
  tagline: "Crafting resilient web architectures, responsive interfaces, and editorial digital experiences.",
  shortBio: "Specializing in React, Next.js, Node.js, and modern cloud ecosystems. Passionate about marrying bulletproof engineering with fluid micro-interactions.",
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
    email: "akashkumar23012005@gmail.com"
  },
  stats: [
    { label: "Years Experience", value: "2.5+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Code Commits", value: "300+" }
  ]
};

export const aboutData = {
  narrative: [
    "I am a passionate Full-Stack Developer and UI/UX Engineer driven by a relentless curiosity for how technology can create seamless human experiences. Over the past 3+ years, I have architected and deployed scalable web applications ranging from high-concurrency SaaS platforms to editorial micro-sites.",
    "My engineering philosophy centers on clean architectural patterns, robust type safety, and micro-interactions that make software feel alive. Whether refactoring a legacy backend pipeline or sculpting a pixel-perfect front-end component tree with GSAP and Framer Motion, I strive for uncompromised quality.",
    "When I'm not writing code, I actively participate in global hackathons, mentor junior developers, and dissect new web primitives."
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
      description: "Sub-second load times, optimized bundle sizes, and 60fps animations are standard benchmarks, never afterthoughts."
    },
    {
      title: "Architectural Rigor",
      description: "Modular components and testable backend endpoints designed for real-world maintenance and scale."
    },
    {
      title: "Design Empathy",
      description: "Bridging the gap between engineering logic and human aesthetic sensibility with deliberate typography and rhythm."
    }
  ]
};

export const skillCategories = [
  {
    category: "Frontend & UI Engineering",
    description: "Crafting fluid, accessible, and responsive user interfaces with modern web standards.",
    skills: [
      { name: "React.js", level: 80, icon: "Code2", experience: "6 month"},
      { name: "JavaScript (ES6+)", level: 75, icon: "FileCode", experience: "1+ yrs"},
      { name: "Tailwind CSS & CSS Modules", level: 80, icon: "Palette", experience: "1+ yrs"},
      { name: "GSAP & Framer Motion", level: 88, icon: "Sparkles", experience: "2+ yrs"},
      { name: "HTML5, Css", level: 85, icon: "Globe", experience: "2+ yrs"}
    ]
  },
  {
    category: "Backend & Systems",
    description: "Building robust, secure REST and RESTful APIs.",
    skills: [
      { name: "Node.js & Express", level: 80, icon: "Server", experience: "1+ yrs"},
      { name: "RESTful APIs", level: 75, icon: "Cpu", experience: "1+ yrs" },
      { name: "Authentication (JWT / OAuth2)", level: 70, icon: "ShieldCheck", experience: "1+ yrs" },
    ]
  },
  {
    category: "Databases & Storage",
    description: "Designing schema models, indexing strategies, and high-availability database solutions.",
    skills: [
      { name: "MYSQL", level: 75, icon: "Database", experience: "1+ yrs" },
      { name: "MongoDB & Mongoose", level: 91, icon: "FileSpreadsheet", experience: "1+ yrs" },
    ]
  },
  {
    category: "DevOps, Tools & Workflow",
    description: "Automating deployment lifecycles, version control, and containerization.",
    skills: [
      { name: "Git, GitHub", level: 90, icon: "GitBranch", experience: "2+ yrs" },
      // { name: "Docker & Containerization", level: 82, icon: "Box", experience: "2 yrs", highlight: "Multi-stage Builds, Compose" },
      { name: "Vercel, Render & Netlify", level: 90, icon: "CloudRain", experience: "2+ yrs" },
      { name: "Postman & API Testing", level: 86, icon: "CheckCircle2", experience: "1.5 yrs" },
    ]
  }
];

export const projectsData = [
  {
    id: "Livora",
    title: "Livora - FULL-Stack Travel & Rental Platform",
    category: "Full Stack",
    tagline: "Real-time task orchestration platform with drag-and-drop kanban, analytics, and automated Webhook triggers.",
    description: "An enterprise-ready project management and automation suite that powers distributed team workflows. Features real-time multi-user syncing via WebSockets, granular role-based permissions, and visual workflow builders.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tags: ["HTML5", "CSS3", "Bootstrap", "Node.js", "Express", "MongoDB", "Mongoose", "EJS",  ],
    featured: true,
    github: "https://github.com/akashkumar6205/MAJORPROJECT-LIVORA.git",
    live: "https://majorproject-livora.onrender.com",
    architecture: {
      overview: "Decoupled microservice architecture with React Single Page Application communicating with an Express/Node.js API gateway and a dedicated WebSocket cluster for sub-50ms sync times.",
      stackDetails: [
        { layer: "Frontend", tech: "HTML5, CSS3, Bootstrap"},
        { layer: "Backend", tech: "Node.js, Express" },
        { layer: "Database", tech: "MongoDB, Mongoose" },
      ],
      keyFeatures: [
        
      ],
      challengesSolved: ""
    }
  },
  {
    id: "aura-ai",
    title: "AuraStudio — Generative Design System Studio",
    category: "AI / ML",
    tagline: "AI-driven design token generator and accessible color harmony explorer for frontend developers.",
    description: "An intelligent design assistant that analyses UI mockups, generates WCAG-compliant color palettes, computes typography scales, and exports ready-to-use Tailwind configuration files in one click.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    tags: ["Next.js 14", "OpenAI API", "Tailwind CSS", "GSAP", "TypeScript", "Zustand"],
    featured: true,
    github: "https://github.com/akash-kumar-dev/aurastudio",
    live: "https://aurastudio.vercel.app",
    metrics: "Over 1,200 active palette generations per week",
    architecture: {
      overview: "Edge-rendered Next.js application utilizing streaming AI completions and Web Workers for instant contrast ratio matrix computations.",
      stackDetails: [
        { layer: "Frontend", tech: "Next.js App Router, GSAP timelines, Tailwind CSS" },
        { layer: "AI Integration", tech: "OpenAI GPT-4o-mini structured outputs & Chroma color engine" },
        { layer: "State Engine", tech: "Zustand with localStorage persistence" },
        { layer: "Export Engine", tech: "Dynamic AST generator for CSS, SCSS, JSON & Tailwind configs" }
      ],
      keyFeatures: [
        "Real-time WCAG 2.1 AAA contrast score verification algorithm",
        "One-click export to Tailwind v4 CSS, Figma Tokens, and CSS Custom Properties",
        "Interactive editorial preview canvas with live UI component previews",
        "Dark/Light auto-inversion algorithm preserving visual luminance balances"
      ],
      challengesSolved: "Engineered a client-side color interpolation worker that computes 500+ delta-E color difference variations in under 12ms without blocking the main browser thread."
    }
  },
  {
    id: "vault-crypto",
    title: "Krypton — Multi-Chain Asset & Portfolio Tracker",
    category: "Web3 / FinTech",
    tagline: "High-frequency crypto portfolio intelligence dashboard with interactive candlestick charts and gas tracking.",
    description: "A financial dashboard for monitoring decentralized wallet holdings, token balances, real-time price feeds, and DeFi yield positions across Ethereum, Polygon, and Solana networks.",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Chart.js", "Ethers.js", "CoinGecko API", "Tailwind CSS"],
    featured: true,
    github: "https://github.com/akash-kumar-dev/krypton-tracker",
    live: "https://krypton-tracker.vercel.app",
    metrics: "Real-time updates at 5-second polling intervals",
    architecture: {
      overview: "Client-heavy responsive financial platform leveraging WebSocket price streams, Ethers.js provider integration, and lightweight Chart.js canvas rendering.",
      stackDetails: [
        { layer: "Frontend", tech: "React, Chart.js / Recharts, Tailwind CSS" },
        { layer: "Web3 Layer", tech: "Ethers.js, Wagmi, WalletConnect modal" },
        { layer: "Data Streams", tech: "CoinGecko Pro API, Alchemy RPC nodes" },
        { layer: "Persistence", tech: "Encrypted IndexedDB for local watchlists" }
      ],
      keyFeatures: [
        "Live Candlestick, Line, and Depth charts with timeframe filters (1H, 24H, 7D, 1Y)",
        "Gas fee heatmaps and fee estimator for network transactions",
        "Portfolio PnL calculations with automatic currency conversion (USD, EUR, INR)",
        "Non-custodial: zero private keys requested or stored"
      ],
      challengesSolved: "Handled heavy financial WebSocket bursts by debouncing render passes with custom React batching hooks, avoiding UI stutter."
    }
  },
  {
    id: "editorial-journal",
    title: "Verve — Editorial Publishing & Knowledge Base",
    category: "Frontend",
    tagline: "Minimalist, distraction-free markdown publishing engine with instant search and typography controls.",
    description: "A publication platform built for writers and tech bloggers who appreciate typographic hierarchy, reading time estimators, interactive code blocks with syntax highlighting, and offline sync.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Markdown-IT", "Tailwind CSS", "Framer Motion", "IndexedDB"],
    featured: false,
    github: "https://github.com/akash-kumar-dev/verve-journal",
    live: "https://verve-journal.vercel.app",
    metrics: "100/100 Lighthouse Performance score",
    architecture: {
      overview: "Static-first architecture with dynamic client-side hydration, client-side fuzzy search, and local caching.",
      stackDetails: [
        { layer: "Frontend", tech: "React, Framer Motion, Tailwind Typography" },
        { layer: "Parser", tech: "Unified, Remark, Rehype" },
        { layer: "Search", tech: "Client-side indexed search" }
      ],
      keyFeatures: [
        "Customizable reading typography (Serif/Sans font switcher, line-height adjuster)",
        "Interactive code playground with copy-to-clipboard and line highlight",
        "Dark, Sepia, and Light editorial reading modes",
        "Offline reading support with Service Workers"
      ],
      challengesSolved: "Crafted a zero-layout-shift image loader with blurhash previews for buttery smooth reading flows."
    }
  }
];

export const achievementsData = {
  hackathons: [
    {
      title: "WebRush 2026",
      organizer: "Frontend Arena",
      date: "2026",
      highlight: "Secured Rank #39 in WebRush 2026",
      description: "A 6-hour frontend development hackathon recognizing creativity, technical skills, and successful completion of the challenge.",
      badge: "Certificate of Excellence",
      category: "Frontend Development Hackathon",
      certificateImage: "src/image/WEBRUSH2026.png"
    },
    {
      title: "AI for Bharat Hackathon",
      organizer: "Amazon Web Services (AWS)",
      date: "2026",
      highlight: "Built, submitted a qualified prototype",
      description: "Built and submitted a qualified prototype using generative AI tools to solve real-world challenges for India.",
      badge: "Certificate of Participation",
      category: "AI / Generative AI Hackathon",
      certificateImage: "src/image/H2S.png"
    },
    {
      title: "Vibe2Ship – India's Biggest Vibe Coding Hackathon",
      organizer: "Coding Ninjas in collaboration with Google for Developers",
      date: "2026",
      highlight: "India's Biggest Vibe Coding Hackathon",
      description: "Participated in an open-source community, contributing to projects, collaborating with developers, and gaining hands-on experience throughout the program.",
      badge: "Certificate of Participation",
      category: "Vibe Coding Hackathon",
      certificateImage: "src/image/VIBE2SHIP.png"
    },
   
    {
      title: "Elite Coders Summer of Code 2026",
      organizer: "ECSOC / Elite Coders",
      date: "2026",
      highlight: "Successfully participated in ECSO 2026",
      description: "Consistent problem solver in Data Structures, Dynamic Programming, Graph Theory, and Tree Traversal algorithms.",
      badge: "Certificate of Participation",
      category: "Open Source Program",
      certificateImage: "src/image/ECSOC.png"
    }
  ],
  certifications: [
    {
      title: "Programming in Java",
      issuer: "NPTEL (IIT Kharagpur)",
      issueDate: "Jan–Apr 2026 (12-week course)",
      credentialId: "NPTEL26CS36S763100540",
      skillsGained: "Java Programming, Object-Oriented Programming (OOP), Java Collections Framework",
      icon: "NPTEL Online Certification",
      certificateImage: "src/image/NPTEL.png"
    },
  ]
};
