import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { MdWork } from "react-icons/md";

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
    title: "Freelance Developer",
    location: "Phoenix, AZ, USA",
    description: "Find my profiles on Fiverr and Upwork for more information about my services",
    icon: React.createElement(MdWork),
    date: "Jan 2023 - Present"
  },
  {
    title: "Software Engineer Intern",
    location: "Remote USA",
    description:
      "Completed an internship while at Rithm School that focused on modernizing Numbers API's front end with TypeScript and Sass, its backend with Python and Flask, and its databse with PostgreSQL.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Full-Stack Developer",
    location: "San Francisco, San Diego, Phoenix, Chicago, New York, Netherlands, Portugal, Germany, France",
    description:
      "Currently seeking full time opportunities as a Full Stack | Front End | Back End Developer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and PostgreSQL as well as site development in Webflow and Shopify. If you'd like to contact about freelancing oportunties, please feel free to email me below or message me on Fiverr or Upwork.",
    icon: React.createElement(FaReact),
    date: "Current Job Search",
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
  "Wordpress",
  "Shopify",
  "Framer Motion",
] as const;
