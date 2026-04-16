"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "motion/react";
import { useSectionInView } from "@/lib/hooks";

/**
 * The About component is a React component that displays information about the developer.
 * It uses motion from framer-motion to animate the section when it comes into view.
 *
 * @returns {JSX.Element} A React component that displays information about the developer.
 */
export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true}}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <h3 className="mb-3 text-xl">
        Full Stack Software Engineer with <span className="font-medium">3+ years</span> building secure, production-grade applications:
      </h3>

      <ul className="mb-5 text-left text-lg list-disc list-inside">
        <li>
          <span className="font-medium">Secure backends</span> (Django, FastAPI, PostgreSQL, Redis)
        </li>
        <li>
          <span className="font-medium">Modern frontends</span> (React, Next.js, Vue, TypeScript)
        </li>
        <li>
          <span className="font-medium">Cloud infrastructure</span> (AWS, Azure, Terraform, Docker, CI/CD)
        </li>
      </ul>

      <h3 className="mb-3 text-xl">
        Previously <span className="font-medium">7+ years in technical and developer relations support</span> (Apple, Accenture), giving me a sharp eye for <span className="font-medium">debugging, performance tuning, and user-centric design</span>.
      </h3>

      <p className="font-medium mb-1 mt-6">What I Do</p>
      <ul className="text-left list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-x-4">
        <li><span className="font-medium">Languages:</span> Python, TypeScript, Go, C#</li>
        <li><span className="font-medium">Frontend:</span> React, Next.js, TanStack Query, TailwindCSS</li>
        <li><span className="font-medium">Backend & Data:</span> Django, FastAPI, PostgreSQL, Redis</li>
        <li><span className="font-medium">Infrastructure:</span> Azure, AWS, Terraform, GitHub Actions, Docker</li>
      </ul>
    </motion.section>
  );
}