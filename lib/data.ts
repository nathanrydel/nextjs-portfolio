import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { FaReact } from "react-icons/fa";
import { MdWork } from "react-icons/md";

import joblyImg from "@/public/JoblyV2Demo.webp";
import frienderImg from "@/public/FrienderDemo.webp";
import warblerImg from "@/public/WarblerDemo.webp";

export const HERO_CONTENT = `I am a passionate Full Stack Developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, Express, Flask, and PostgreSQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Full Stack Developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, PostgreSQL, Flask, and Express. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const LINKS = [
  {
    name: "Home",
    hash: "#home",
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
    name: "About",
    hash: "#about",
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

export const PROJECTS = [
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
];

export const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Express",
  "PostgreSQL",
  "Python",
  "Flask",
  "Bootstrap",
  "WordPress",
  "Webflow",
  "Vite",
  "Vitest",
  "Selenium",
  "AWS",
  "Azure",
  "Docker",
  "Cloudflare",
  "Framer Motion",
  "Notion"
] as const;

export const EXPERIENCES = [
  {
    title: "Technical Support Engineer",
    location: "Phoenix, AZ, USA",
    description: "Worked as a Technical Support Engineer for Mend.io and their Security as a Service products. Worked directly with external engineering and dev ops teams and partnered with internal software engineers to support the products.",
    icon: React.createElement(MdWork),
    date: "Sep 2022 - 2023"
  },
  {
    title: "Software Engineer Intern",
    location: "Phoenix, AZ, USA",
    description: "Completed an internship while at Rithm School that focused on modernizing Numbers API's front end with TypeScript and Sass, its backend with Python and Flask, and its databse with PostgreSQL.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024"
  },
  {
    title: "Graduated Rithm School",
    location: "Phoenix, AZ, USA",
    description:
      "Completed a full-stack web development program with a curriculum is centered around JavaScript/TypeScript and Python in a four-month accelerated learning experience.",
    icon: React.createElement(LuGraduationCap),
    date: "March 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "San Francisco, San Diego, Phoenix, Chicago, New York, European Union",
    description:
      "Currently seeking full time opportunities as a Full Stack | Front End | Back End Developer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and PostgreSQL as well as site development in Webflow and Shopify. If you'd like to contact about freelancing oportunties, please feel free to email me below or message me on Fiverr or Upwork.",
    icon: React.createElement(FaReact),
    date: "present",
  },
] as const;