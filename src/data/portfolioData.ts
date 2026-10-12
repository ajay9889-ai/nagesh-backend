export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  category: "Full Stack" | "AI & ML" | "Systems & IoT" | "Agentic AI";
  technologies: string[];
  featured: boolean;
  badge?: string;
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: "Full-time" | "Contract" | "Internship" | "Freelance" | "Education";
  description: string[];
  skills: string[];
}

export const PROFILE = {
  name: "Nagesha R",
  title: "Full-Stack Developer | Machine Learning · Deep Learning · LLMs · RAG · Agentic AI Systems",
  tagline: "Software engineer with hands-on, production experience spanning machine learning, deep learning, LLM engineering, retrieval-augmented generation (RAG), agentic AI workflows, and full-stack backend systems.",
  bio: "Software engineer with hands-on, production experience spanning ML, deep learning, LLM engineering, RAG, agentic AI workflows, and full-stack backend systems. Core founding engineer intern at Brikup Technologies.",
  location: "Bangalore, India",
  availability: "Available for full-time engineering roles, AI projects & collaborations",
  email: "nagesha2r@gmail.com",
  phone: "+91 74831 58421",
  socials: {
    github: "https://github.com/nageshram",
    linkedin: "https://linkedin.com/in/nageshram2003",
  },
  stats: [
    { label: "MCA CGPA", value: "9.18" },
    { label: "B.Sc. CGPA", value: "8.61" },
    { label: "Projects Built", value: "4+" },
    { label: "Available", value: "Now" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "ai-business-analyst",
    title: "AI Business Analyst — Agentic Analytics & RAG Platform",
    slug: "ai-business-analyst",
    badge: "Production Agentic AI ⚡",
    tagline: "8 LangGraph tool-calling agents with structured outputs, hybrid RAG knowledge layer, and automated business KPI profiling.",
    description: "A production AI analyst that ingests CSV/XLSX business data, automatically profiles datasets, computes KPIs, detects trends and anomalies, finds correlations, and answers business questions through 8 LangGraph tool-calling agents with structured outputs.",
    category: "Agentic AI",
    technologies: ["Python", "FastAPI", "LangGraph", "RAG", "PostgreSQL", "ChromaDB", "OpenAI"],
    featured: true,
    metrics: [
      { label: "Architecture", value: "8 LangGraph Agents" },
      { label: "Reasoning", value: "GPT-4o-mini + RRF" }
    ],
    githubUrl: "https://github.com/nageshram"
  },
  {
    id: "production-rag-system",
    title: "Production RAG System — Hybrid Retrieval & Evaluation",
    slug: "production-rag-system",
    badge: "Enterprise Hybrid Search ⚡",
    tagline: "End-to-end document Q&A pipeline with Gemini embeddings, ChromaDB, BM25 hybrid search, and RRF re-ranking.",
    description: "Production document Q&A system featuring PDF/DOCX ingestion, recursive chunking, ChromaDB vector storage, BM25 hybrid search, and SSE streaming.",
    category: "AI & ML",
    technologies: ["Python", "FastAPI", "PyTorch", "Gemini Embeddings", "BM25", "ChromaDB", "Docker"],
    featured: true,
    metrics: [
      { label: "Retrieval", value: "BM25 + Dense + RRF" },
      { label: "Streaming", value: "Token SSE" }
    ],
    githubUrl: "https://github.com/nageshram"
  },
  {
    id: "gpt-from-scratch",
    title: "GPT From Scratch — Transformer Language Model",
    slug: "gpt-from-scratch",
    badge: "Deep Learning / PyTorch 🧠",
    tagline: "Decoder-only Transformer implemented from first principles in PyTorch with custom multi-head attention and training loops.",
    description: "Pure PyTorch implementation of a GPT decoder-only Transformer with causal masked self-attention and empirical training loops.",
    category: "AI & ML",
    technologies: ["Python", "PyTorch", "Transformers", "Neural Networks", "NLP"],
    featured: true,
    metrics: [
      { label: "Implementation", value: "Pure PyTorch" },
      { label: "Attention", value: "Masked Multi-Head" }
    ],
    githubUrl: "https://github.com/nageshram"
  },
  {
    id: "startup-station",
    title: "Startup Station — MERN Stack SaaS Platform",
    slug: "startup-station",
    badge: "Full-Stack SaaS 🚀",
    tagline: "Multi-tenant startup management SaaS with role-based dashboards, investor tracking, and JWT authentication.",
    description: "Comprehensive startup management SaaS enabling founders to manage teams, tasks, documents, and investor relations with role-based dashboards.",
    category: "Full Stack",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    featured: true,
    metrics: [
      { label: "Architecture", value: "Multi-tenant" },
      { label: "Auth", value: "JWT + RBAC" }
    ],
    githubUrl: "https://github.com/nageshram"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Python", level: 95, highlight: true },
      { name: "PyTorch", level: 90, highlight: true },
      { name: "Transformers", level: 88, highlight: true },
      { name: "Neural Networks & Training Loops", level: 90 },
      { name: "NumPy & Pandas", level: 92 },
      { name: "EDA & Feature Engineering", level: 88 }
    ]
  },
  {
    category: "Generative AI & LLMs",
    skills: [
      { name: "LLMs & Prompt Engineering", level: 95, highlight: true },
      { name: "LangGraph StateGraph", level: 92, highlight: true },
      { name: "Agentic AI Workflows", level: 90, highlight: true },
      { name: "Hybrid RAG (BM25 + Dense)", level: 94, highlight: true },
      { name: "ChromaDB & Embeddings", level: 90 },
      { name: "Reciprocal Rank Fusion (RRF)", level: 88 }
    ]
  },
  {
    category: "Backend & Systems",
    skills: [
      { name: "FastAPI", level: 92, highlight: true },
      { name: "Node.js & Express.js", level: 90, highlight: true },
      { name: "REST API Design", level: 94 },
      { name: "Spring Boot & Java", level: 80 },
      { name: "Redis Caching", level: 85 },
      { name: "JWT Auth & RBAC", level: 90 }
    ]
  },
  {
    category: "Databases & DevOps",
    skills: [
      { name: "PostgreSQL", level: 90, highlight: true },
      { name: "MySQL & MongoDB", level: 88 },
      { name: "Docker", level: 85, highlight: true },
      { name: "AWS & CloudFront", level: 80 },
      { name: "GitHub Actions CI/CD", level: 85 }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "brikup-founding",
    role: "Software Engineer Intern (Part of Core Founding Team)",
    company: "Brikup Technologies Pvt. Ltd.",
    period: "Feb 2026 – Jul 2026",
    location: "Bangalore, India",
    type: "Internship",
    description: [
      "Designed and developed a production Flutter application with a Node.js/Express backend, owning features end-to-end across application, API, database, and deployment layers.",
      "Architected REST APIs, scalable data models, authentication, caching, and asynchronous processing to ensure reliable product operation at scale.",
      "Built analytics dashboards and intent-tracking workflows to capture and process user behavior, enabling data-driven product decisions.",
      "Deployed application infrastructure on AWS and implemented CI/CD pipelines using GitHub Actions with CloudFront integration for continuous delivery.",
      "Integrated AI/LLM capabilities into core product workflows, owning the full lifecycle from requirements and architecture through coding, testing, deployment, and optimization."
    ],
    skills: ["Flutter", "Node.js", "Express.js", "AWS", "GitHub Actions", "CloudFront", "REST APIs", "AI/LLM Integration"]
  },
  {
    id: "mca-bmsit",
    role: "Master of Computer Applications (MCA)",
    company: "BMS Institute of Technology & Management",
    period: "Feb 2024 – Sep 2025",
    location: "Yelahanka, Bangalore, India",
    type: "Education",
    description: [
      "Graduated with 9.18 / 10 CGPA.",
      "Specialized in Advanced Algorithms, Machine Learning, Deep Learning, Cloud Architecture, and Distributed Systems."
    ],
    skills: ["Python", "PyTorch", "Transformers", "LangGraph", "FastAPI", "PostgreSQL", "Docker"]
  },
  {
    id: "bsc-ucs",
    role: "B.Sc. — Computer Science, Mathematics & Physics",
    company: "University College of Science",
    period: "Jan 2021 – Sep 2023",
    location: "Tumkur, Karnataka, India",
    type: "Education",
    description: [
      "Graduated with 8.61 / 10 CGPA.",
      "Rigorous coursework in Computer Science, Discrete Mathematics, Linear Algebra, and Statistical Physics."
    ],
    skills: ["C", "Java", "Python", "Data Structures", "DBMS", "Operating Systems"]
  }
];
