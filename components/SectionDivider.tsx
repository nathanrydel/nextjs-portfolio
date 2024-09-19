"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * SectionDivider is a React component that renders a motion.div element with specific styles and animations.
 * It is used to separate sections in a webpage.
 *
 * @returns A motion.div element with the following styles and animations:
 * - Background color: gray-200
 * - Height: 16px
 * - Width: 1px
 * - Rounded corners: full
 * - Initially hidden on small screens (sm:hidden)
 * - Animated from an initial state of opacity: 0 and y: 100px to a final state of opacity: 1 and y: 0
 * - Transition delay: 0.2 seconds
 */
export default function SectionDivider() {
  return (
    <motion.div
      className="bg-gray-200 my-16 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    ></motion.div>
  );
}
