"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import headshot from "@/public/RydelHeadshot.webp";
import { useActiveSectionContext } from "@/context/activeSectionContext";
import { RESUME_PATH } from "@/lib/data";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.4,
            }}
          >
            <Image
              src={headshot}
              alt="Nathan Rydel headshot"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.2,
              duration: 0.8,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Full Stack Software Engineer</span>
      </motion.h1>
      <motion.h2
        className="my-5 flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-xl font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
          With 3+ years of experience, I build secure, scalable backends and modern frontends across Python, TypeScript, and Go. From Django APIs to Next.js interfaces — shipped on AWS, Azure, and Vercel.
      </motion.h2>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-gray-200 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-90 group-hover:translate-x-1 transition" />
        </Link>

        <Link
          href="#projects"
          className="group px-7 py-3 flex items-center gap-2 rounded-full outline outline-2  outline-gray-950  focus:scale-110 hover:scale-110 hover:bg-gray-950 hover:text-gray-200 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Projects");
            setTimeOfLastClick(Date.now());
          }}
        >
          View my projects{" "}
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href={RESUME_PATH}
          type="application/pdf"
          aria-label="Download Nathan Rydel resume (PDF)"
          download
        >
          Download Resume{" "}
          <HiDownload aria-hidden="true" className="opacity-90 group-hover:translate-y-1 transition" />
        </a>
      </motion.div>
    </section>
  );
}
