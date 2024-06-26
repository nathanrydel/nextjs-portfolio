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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
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
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Political Science</span> and a career in technical support engineering, I decided to pursue my passion for programming by offering freelancing services in Webflow and Shopify Development. After sometime, I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is turning ideas into reality. I <span className="underline">love</span> the feeling of taking a client's design and bringing it to life. My core stack
        is{" "}
        <span className="font-medium">
          React, Express, Node.js, and PostrgreSQL
        </span>. I am experienced with TypeScript and Next.js as well as Python and Flask. I am always looking to learn new technologies like the T3 stack or Web3. I am currently looking for a{" "}
        <span className="font-medium">full-time opportunity</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing golf. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I'm also
        re-learning how to play the guitar.
      </p>
    </motion.section>
  );
}