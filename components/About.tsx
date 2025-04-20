"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
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
        Full-Stack Developer with <span className="font-medium">3+ years</span> of hands-on experience building:
      </h3>

      <ul className="mb-5 text-left text-lg list-disc list-inside">
        <li>
          <span className="font-medium">AI-integrated web apps</span> (GripLab AI, Python/TypeScript)
        </li>
        <li>
          <span className="font-medium">Scalable backends</span> (REST APIs, Go, C#, SQL)
        </li>
        <li>
          <span className="font-medium">DevOps pipelines</span> (AWS, Docker, CI/CD)
        </li>
      </ul>

      <p className="mb-3">
        Previously <span className="font-medium">7+ years in technical support</span> (Apple, Accenture), giving me a sharp eye for <span className="font-medium">debugging, performance tuning, and user-centric design</span>.
      </p>

      <p className="font-medium mb-1 mt-6">What I Do</p>
      <ul className="text-left list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-x-4">
        <li><span className="font-medium">Front-End:</span> React, Vue, Next.js, TailwindCSS</li>
        <li><span className="font-medium">Back-End:</span> Python, Go, Node.js, RESTful APIs</li>
        <li><span className="font-medium">DevOps & Cloud:</span> AWS, Azure, Docker, CI/CD</li>
        <li><span className="font-medium">AI/ML:</span> LLM integrations, data analytics models</li>
      </ul>
    </motion.section>
  );
}