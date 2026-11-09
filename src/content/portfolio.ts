// Single source of truth for portfolio content. Edit here to update the site.

export const profile = {
  name: "Mahmoud Gamal",
  nameAr: "محمود جمال",
  role: "Frontend Developer",
  location: "Egypt",
  email: "mahmoudG.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/mahmoud-gamal-abdelsalam/",
  github: "https://github.com/roone858",
  photo: { src: "/images/mahmoud-gamal.webp", width: 800, height: 1067 },
  /** Formal studio portrait (white background), used in the Experience section. */
  studio: { src: "/images/mahmoud-gamal-studio.webp", width: 900, height: 900 },
  /** Same portrait with a transparent background, for placing over the hero arch. */
  cutout: { src: "/images/mahmoud-gamal-cutout.webp", width: 800, height: 1067 },
  positioning:
    "I build modern, responsive, and scalable web applications with a focus on clean architecture, performance, and exceptional user experience.",
};

export const hero = {
  status: "Open to frontend roles & freelance projects",
  greeting: "Hi, I am Mahmoud Gamal",
  title: "a Frontend Developer",
  lede: "I build responsive, scalable, and user-focused web applications using React, Angular, TypeScript, and modern frontend technologies.",
  stack:
    "Full-stack capable: NestJS, Node.js, MongoDB and PostgreSQL behind the interface. Shipping in English and Arabic (RTL).",
};

// Figures come from the CV (public/cv/mahmoud-gamal-cv.pdf). Keep them in sync with it.
export const heroStats = [
  { value: "4+", label: "Years of experience" },
  { value: "5", label: "Featured projects" },
  { value: "2", label: "Languages shipped (EN · AR)" },
];

export const highlightStats = {
  lead: {
    value: "4+",
    label: "Years of experience",
    text: "Building responsive, scalable, production-ready web applications with React, TypeScript, Redux Toolkit, Next.js and Tailwind CSS.",
  },
  cards: [
    { value: "5,000+", label: "Students on Dolphin" },
    { value: "40%", label: "Instructor efficiency gain" },
    { value: "30+", label: "Technologies in use" },
    { value: "4", label: "Live websites" },
  ],
};

export const services = [
  { icon: "code", title: "Frontend Development", text: "React, Angular & Next.js" },
  { icon: "server", title: "Backend & APIs", text: "NestJS, Node.js & REST" },
  { icon: "languages", title: "Arabic (RTL) Interfaces", text: "Bilingual, right-to-left UI" },
  { icon: "zap", title: "Real-time & Payments", text: "WebSockets, Stripe & OAuth" },
] as const;

export const education = [
  {
    title: "Bachelor of Computer Science",
    org: "Assiut University",
    period: "Graduated with Good Honors",
    text: "Coursework in algorithms, data structures, database systems, and web development.",
  },
  {
    title: "Angular Frontend Developer",
    org: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Jun 2025 – Dec 2025",
    text: "Angular, TypeScript, Node.js, Express and MongoDB for scalable web applications, with responsive UI and RESTful APIs.",
  },
  {
    title: "Front-End Cross Platform (ICC)",
    org: "Information Technology Institute (ITI)",
    period: "Jul 2023 – Nov 2023",
    text: "Built “JUNO”, an interactive educational game, in an Agile team delivering a responsive cross-platform front end.",
  },
  {
    title: "Advanced Full-Stack Web Development",
    org: "Udacity",
    period: "Oct 2022 – Feb 2023",
    text: "Built and deployed a full-stack app on AWS with PostgreSQL, Express.js, JWT authentication, and CI/CD pipelines.",
  },
];

/** Shown as a wordmark grid, in place of client logos. */
export const stackWordmarks = [
  "React",
  "Angular",
  "Next.js",
  "TypeScript",
  "NestJS",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
];

// CV served from public/cv/. Set `available: false` to make the CV buttons open an email request instead.
// A full-stack variant also lives at /cv/mahmoud-gamal-fullstack-cv.pdf (not linked from the site).
export const cv = {
  available: true,
  url: "/cv/mahmoud-gamal-cv.pdf",
  fileName: "Mahmoud-Gamal-Frontend-Developer-CV.pdf",
};

export const cvHref = cv.available
  ? cv.url
  : `mailto:${profile.email}?subject=${encodeURIComponent("CV request — Frontend Developer")}`;

export const skillGroups = [
  {
    title: "Frontend",
    icon: "layout",
    items: [
      "React",
      "Angular",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: "server",
    items: ["Node.js", "Express.js", "NestJS", "OAuth", "Stripe"],
  },
  {
    title: "Databases",
    icon: "database",
    items: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma", "SQL"],
  },
  { title: "State Management", icon: "layers", items: ["Redux Toolkit"] },
  {
    title: "API & Integration",
    icon: "plug",
    items: ["REST APIs", "Axios", "JWT Authentication", "WebSockets"],
  },
  {
    title: "Tools",
    icon: "wrench",
    items: ["Git", "GitHub", "Vite", "npm", "VS Code", "Claude Code", "GitHub Copilot"],
  },
  { title: "Mobile", icon: "smartphone", items: ["React Native", "Expo"] },
] as const;

export type Project = {
  name: string;
  category: string;
  description: string;
  tech: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  preview: "edu" | "market" | "shop";
  /** Full-page screenshot in /public; shown instead of the illustrative preview and scrolls on hover. */
  image?: string;
};

export const projects: Project[] = [
  {
    name: "Learn at Dolphin",
    category: "Educational Platform",
    description:
      "A modern educational platform providing students and teachers with interactive learning experiences, dashboards, and educational management features.",
    tech: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "REST APIs"],
    highlights: [
      "Educational dashboards",
      "Responsive interfaces",
      "API integration",
      "Authentication",
      "Reusable components",
    ],
    preview: "edu",
    image: "/projects/dolphin.webp",
    liveUrl: "https://app.learnatdolphin.com/",
  },
  {
    name: "MITHAQ",
    category: "Classified Marketplace",
    description:
      "A modern classified marketplace designed to connect buyers and sellers through organized listings, product categories, and direct communication.",
    tech: [],
    highlights: [
      "Marketplace experience",
      "Listing management",
      "Responsive design",
      "SEO-friendly architecture",
      "Modern user experience",
    ],
    preview: "market",
  },
  {
    name: "TARAF Furniture",
    category: "E-commerce",
    description:
      "A modern furniture e-commerce experience focused on elegant product presentation, responsive shopping interfaces, and a premium visual identity.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Product presentation",
      "E-commerce UI",
      "Responsive layouts",
      "Brand-focused design",
    ],
    preview: "shop",
    image: "/projects/taraf.webp",
    liveUrl: "https://tarafhome.com/",
  },
  {
    name: "Sukoon",
    category: "E-commerce",
    description:
      "An Arabic (RTL) e-commerce store for mattresses and bedding, with product categories, size selection, order tracking, and WhatsApp ordering.",
    tech: ["React", "TypeScript", "NestJS", "MongoDB"],
    highlights: [
      "RTL Arabic interface",
      "Product catalog & sizes",
      "Order tracking",
      "WhatsApp ordering",
      "Customer reviews & FAQ",
    ],
    preview: "shop",
    image: "/projects/sukoon.webp",
    liveUrl: "https://www.sukoony.com/",
  },
  {
    name: "Tawba Islamic Center",
    category: "Organization Website",
    description:
      "An Arabic (RTL) website for an Islamic center, presenting its Quran courses, services, scholars, and articles, with donation campaigns that show live funding progress.",
    tech: [],
    highlights: [
      "RTL Arabic interface",
      "Donation campaigns",
      "Services & courses",
      "Scholars & articles",
      "Responsive design",
    ],
    preview: "edu",
    image: "/projects/tawba.webp",
    liveUrl: "https://tawba.vercel.app/",
  },
];

export const experience = [
  {
    role: "Frontend Developer",
    company: "ZonNet Digital Solutions",
    period: "July 2025 – Present",
    description:
      "Developing modern frontend experiences for educational platforms using React, TypeScript, and Tailwind CSS.",
    achievements: [
      "Developed Dolphin, an online education platform serving 5,000+ students.",
      "Engineered a Teacher Dashboard that increased instructor efficiency by 40% through automated progress tracking.",
    ],
    responsibilities: [
      "Building responsive interfaces",
      "Developing reusable components",
      "Integrating REST APIs",
      "Managing application state",
      "Implementing authentication workflows",
      "Improving UI consistency and maintainability",
      "Working with real-time communication features",
    ],
  },
];

export const approach = [
  {
    title: "Understand",
    text: "Clarify requirements, users, and constraints before writing code.",
  },
  { title: "Plan", text: "Map the interface and architecture: routes, state, and data flow." },
  { title: "Build", text: "Compose reusable, typed components with consistent styling." },
  { title: "Integrate", text: "Connect REST APIs, auth, and real-time features reliably." },
  { title: "Test", text: "Verify responsive behavior across mobile, tablet, and desktop." },
  { title: "Optimize", text: "Refine performance, accessibility, and overall experience." },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Resume" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
