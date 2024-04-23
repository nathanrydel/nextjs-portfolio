import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

/**
 * SectionHeading is a React component that renders a section heading.
 *
 * @param {React.ReactNode} children - The text content of the section heading.
 * @returns {JSX.Element} - A JSX element representing a section heading.
 */
export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
}