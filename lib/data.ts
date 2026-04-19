import React from "react";
import { FiCode, FiServer, FiShield, FiSmartphone, FiTerminal, FiUsers } from "react-icons/fi";
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

export const RESUME_PATH = "/NathanRydel_Resume.pdf" as const;

export const experiencesData = [
  {
    title: "Full Stack Software Engineer (Backend Focused)",
    location: "Remote",
    classification: "Permanent",
    description: "Building secure RESTful APIs and authentication systems in Django with fully typed Python.",
    date: "Aug 2025 - Present",
    icon: React.createElement(FiServer),
  },
  {
    title: "AI Integrations Developer",
    location: "Remote",
    classification: "Part-Time",
    description: "Architected a full stack MVP for a sports tech startup with data pipelines and a ChatGPT-powered RAG system.",
    icon: React.createElement(GiArtificialIntelligence),
    date: "Mar 2025 - Aug 2025",
  },
  {
    title: "Full Stack Software Engineer",
    location: "Remote",
    classification: "Contract",
    description: "Built scheduling platforms, admin apps, and marketing sites for clients using React, Next.js, Vue, and FastAPI.",
    icon: React.createElement(FiCode),
    date: "Mar 2023 - Aug 2025",
  },
  {
    title: "Software Development Intern",
    location: "Remote",
    classification: "Internship",
    description: "Modernised legacy systems and led the team to 97% test coverage through strict TDD and Agile practices.",
    icon: React.createElement(FiTerminal),
    date: "Feb 2024 - Mar 2024",
  },
  {
    title: "Software Support Engineer",
    location: "Remote",
    classification: "Permanent",
    description: "Delivered second-tier support for security-focused SaaS products, resolving CI/CD integration issues.",
    icon: React.createElement(FiShield),
    date: "Sep 2022 - Feb 2023",
  },
  {
    title: "Developer Operations & Relations Platform Senior Associate",
    location: "Austin, TX (Remote)",
    classification: "Permanent",
    description: "SME for Meta's developer platforms, resolving SDK integration, API throttling, and compliance issues.",
    icon: React.createElement(FiUsers),
    date: "Aug 2020 - Jun 2022",
  },
  {
    title: "AppleCare Senior Associate",
    location: "Austin, TX",
    classification: "Permanent",
    description: "Managed escalated iOS and macOS support cases, leading a team of 3 and exceeding 95% CSAT targets.",
    icon: React.createElement(FiSmartphone),
    date: "Jan 2018 - Aug 2020",
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