import React from "react";
import { FiCode, FiShield, FiTerminal, FiUsers } from "react-icons/fi";
import { GiArtificialIntelligence } from "react-icons/gi";

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
    date: "March 2023 - Present",
    icon: React.createElement(FiCode),
  },
  {
    title: "AI Integrations Developer",
    location: "Remote (UK)",
    classification: "Part-Time",
    description: "Architecting and developing the core MVP for AI agents, designing scalable APIs and infrastructure to bridge research with production. Collaborated with founders to align technical implementation with strategic vision, prioritising maintainability and performance.",
    icon: React.createElement(GiArtificialIntelligence),
    date: "March 2025 - Present",
  },
  {
    title: "Software Engineer Intern",
    location: "Remote (USA)",
    classification: "Internship",
    description: "Modernised legacy systems by refactoring databases and APIs, while redesigning frontend components that increased engagement by 13%. Championed TDD (97% test coverage) and built trending-content algorithms using Agile methodologies.",
    icon: React.createElement(FiTerminal),
    date: "Feb 2024 - March 2024",
  },
  {
    title: "Software Support Engineer",
    location: "Remote (USA)",
    classification: "Permanent",
    description: "Delivered second-tier support for security SaaS platforms, resolving CI/CD and integration issues while maintaining 95% customer satisfaction. Partnered with cross-functional teams to diagnose critical incidents.",
    icon: React.createElement(FiShield),
    date: "Sep 2022 - Feb 2023",
  },
  {
    title: "Developer Relations Senior Associate",
    location: "Remote (USA)",
    classification: "Permanent",
    description: "Subject matter expert (SME) for Meta's developer platforms, managing SDK/API support queues and policy compliance. Improved team accuracy by 8% through process optimisations and documentation.",
    icon: React.createElement(FiUsers),
    date: "Aug 2020 - Jun 2022",
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
  // Core Stack (Prioritize what you want to be hired for)
  "TypeScript",
  "Python",
  "React (Vite)",
  "Next",
  "Node",
  "Go",
  "C#",

  // Frontend
  "Tailwind",
  "Vue",
  "Astro",
  "WordPress",
  "Webflow",

  // Backend & APIs
  "Express",
  "FastAPI",
  "RESTful APIs",

  // Databases
  "PostgreSQL",
  "MongoDB",

  // DevOps & Cloud (UK-relevant)
  "AWS",
  "Docker",
  "CI/CD",
  "Azure",

  // Testing
  "Playwright",
  "Vitest",

  // AI/ML (If targeting these roles)
  "LLM Integrations",
  "TensorFlow",
  "Pandas",

  // Tools
  "Git",
  "Figma",
  "Postman"
] as const;