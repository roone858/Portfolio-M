// Single source of truth for portfolio content. Edit here to update the site.

export const profile = {
  name: "Mahmoud Gamal",
  role: "Frontend Developer",
  location: "Egypt",
  email: "mahmoudG.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/mahmoud-gamal-abdelsalam/",
  github: "https://github.com/roone858",
  positioning:
    "I build modern, responsive, and scalable web applications with a focus on clean architecture, performance, and exceptional user experience.",
};

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
  { title: "Frontend", icon: "layout", items: ["React", "Angular", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
  { title: "Backend", icon: "server", items: ["Node.js", "Express.js", "NestJS", "OAuth", "Stripe"] },
  { title: "Databases", icon: "database", items: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma", "SQL"] },
  { title: "State Management", icon: "layers", items: ["Redux Toolkit"] },
  { title: "API & Integration", icon: "plug", items: ["REST APIs", "Axios", "JWT Authentication", "WebSockets"] },
  { title: "Tools", icon: "wrench", items: ["Git", "GitHub", "Vite", "npm", "VS Code", "Claude Code", "GitHub Copilot"] },
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
    highlights: ["Educational dashboards", "Responsive interfaces", "API integration", "Authentication", "Reusable components"],
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
    highlights: ["Marketplace experience", "Listing management", "Responsive design", "SEO-friendly architecture", "Modern user experience"],
    preview: "market",
  },
  {
    name: "TARAF Furniture",
    category: "E-commerce",
    description:
      "A modern furniture e-commerce experience focused on elegant product presentation, responsive shopping interfaces, and a premium visual identity.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: ["Product presentation", "E-commerce UI", "Responsive layouts", "Brand-focused design"],
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
    highlights: ["RTL Arabic interface", "Product catalog & sizes", "Order tracking", "WhatsApp ordering", "Customer reviews & FAQ"],
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
    highlights: ["RTL Arabic interface", "Donation campaigns", "Services & courses", "Scholars & articles", "Responsive design"],
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
  { title: "Understand", text: "Clarify requirements, users, and constraints before writing code." },
  { title: "Plan", text: "Map the interface and architecture: routes, state, and data flow." },
  { title: "Build", text: "Compose reusable, typed components with consistent styling." },
  { title: "Integrate", text: "Connect REST APIs, auth, and real-time features reliably." },
  { title: "Test", text: "Verify responsive behavior across mobile, tablet, and desktop." },
  { title: "Optimize", text: "Refine performance, accessibility, and overall experience." },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
