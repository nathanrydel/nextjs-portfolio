"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { PROJECTS } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";

/**
 * Renders the projects section of the website.
 */
export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {PROJECTS.map((project) => (
          <React.Fragment key={project.slug}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}