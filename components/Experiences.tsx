"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/themeContext";
import { motion } from "framer-motion";
import Experience from "./Experience";

/**
 * The Experience component is responsible for displaying the user's work experience in a timeline format.
 * It uses the react-vertical-timeline-component library to create a visually appealing timeline.
 *
 * @returns {JSX.Element} A JSX element representing the Experience component.
 */
export default function Experiences() {
  const { ref } = useSectionInView("Experience", 0.75);
  const { theme } = useTheme();

  return (


    <>
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <Experience key={index} experience={experience} theme={theme} />
        ))}
      </VerticalTimeline>
      </>
  );
}