import React from "react";

/**
 * Footer component for the website.
 *
 * @returns {JSX.Element} The rendered footer element.
 */
export default function Footer() {
  /**
   * Get the current year.
   *
   * @returns {number} The current year.
   */
  const getCurrentYear = (): number => {
    return new Date().getFullYear();
  };

  const currentYear = getCurrentYear();

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2020 - {currentYear} Nathan Rydel. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}