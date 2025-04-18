import React from "react";

import joblyImg from "@/public/JoblyV2Demo.webp";
import frienderImg from "@/public/FrienderDemo.webp";
import warblerImg from "@/public/WarblerDemo.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer",
    location: "Remote (UK)",
    classification: "Contractor",
    description: "Designing, building, and optimising scalable web applications using React (TypeScript) with Python/Go backends. Focused on clean architecture and performance (e.g., reducing latency by 30%), bridging frontend and backend systems to deliver seamless user experiences while adhering to industry best practices.",
    icon: "FiCode",
    date: "March 2023 - Present",
    tags: ["React", "TypeScript", "Python", "Go", "AWS"]
  },
  {
    title: "AI Integrations Developer",
    location: "Remote (UK)",
    classification: "Part-Time",
    description: "Architecting and developing the core MVP for AI agents, designing scalable APIs and infrastructure to bridge research with production. Collaborated with founders to align technical implementation with strategic vision, prioritising maintainability and performance.",
    icon: "GiArtificialIntelligence",
    date: "March 2025 - Present",
    tags: ["AI/ML", "FastAPI", "LLMs", "Cloud"]
  },
  {
    title: "Software Engineer Intern",
    location: "Remote (USA)",
    classification: "Internship",
    description: "Modernised legacy systems by refactoring databases and APIs, while redesigning frontend components that increased engagement by 13%. Championed TDD (97% test coverage) and built trending-content algorithms using Agile methodologies.",
    icon: "FiTerminal",
    date: "Feb 2024 - March 2024",
    tags: ["React", "TDD", "Agile", "PostgreSQL"]
  },
  {
    title: "Software Support Engineer",
    location: "Remote (USA)",
    classification: "Permanent",
    description: "Delivered second-tier support for security SaaS platforms, resolving CI/CD and integration issues while maintaining 95% customer satisfaction. Partnered with cross-functional teams to diagnose critical incidents.",
    icon: "FiShield",
    date: "Sep 2022 - Feb 2023",
    tags: ["SaaS", "CI/CD", "DevOps", "Security"]
  },
  {
    title: "Developer Relations Senior Associate",
    location: "Remote (USA)",
    classification: "Permanent",
    description: "Subject matter expert (SME) for Meta's developer platforms, managing SDK/API support queues and policy compliance. Improved team accuracy by 8% through process optimisations and documentation.",
    icon: "FiUsers",
    date: "Aug 2020 - Jun 2022",
    tags: ["SDK", "API", "Documentation", "Meta"]
  },
] as const;

export const projectsData = [
  {
    slug: "jobly",
    title: "Jobly V2",
    imageUrl: joblyImg,
    description:
      "A fully functional job board with authentication, applications, and search features.",
    link: "https://rydel-jobly.surge.sh/",
    tags: ["React", "Node.js", "Bootstrap", "Express"],
  },
  {
    slug: "friender",
    title: "Friender",
    imageUrl: frienderImg,
    description:
      "An application for finding people with similar hobbies and interests within a geographic area.",
    link: "https://rydel-friender-demo.onrender.com/",
    tags: ["HTML", "CSS", "Bootstrap", "Flask", "PostgreSQL"],
  },
  {
    slug: "warbler",
    title: "Warbler",
    imageUrl: warblerImg,
    description:
      "A full stack social networking site from a forgotten era.",
    link: "https://rydel-warbler-demo.onrender.com/",
    tags: ["HTML", "CSS", "Bootstrap", "Flask", "PostgreSQL"],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "PostgreSQL",
  "Express",
  "Python",
  "Flask",
  "Webflow",
  "WordPress",
  "Shopify",
  "Framer Motion",
] as const;
