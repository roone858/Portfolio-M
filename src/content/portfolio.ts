// Single source of truth for portfolio content. Edit here to update the site.

export const profile = {
  name: "Mahmoud Gamal",
  role: "Frontend Developer",
  location: "Egypt",
  email: "mahmoudG.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/mahmoud-gamal-rooney",
  github: "https://github.com/roone858",
  positioning:
    "I build modern, responsive, and scalable web applications with a focus on clean architecture, performance, and exceptional user experience.",
};

// CV: drop a PDF at public/cv/mahmoud-gamal-cv.pdf and set `available: true`.
// While unavailable, the CV buttons open an email requesting the CV instead.
export const cv = {
  available: false,
  url: "/cv/mahmoud-gamal-cv.pdf",
  fileName: "Mahmoud-Gamal-Frontend-Developer-CV.pdf",
};

export const cvHref = cv.available
  ? cv.url
  : `mailto:${profile.email}?subject=${encodeURIComponent("CV request — Frontend Developer")}`;

export const skillGroups = [
  { title: "Frontend", icon: "layout", items: ["React", "Angular", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
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
