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
  "Notion",
  "Framer Motion",
  "Notion"
] as const;