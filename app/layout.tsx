import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from "next/font/google";
import "./globals.css";

import ActiveSectionContextProvider from "@/context/activeSectionContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeContextProvider from "@/context/themeContext";
import ThemeSwitch from "@/components/ThemeSwitch";
import { Toaster } from "react-hot-toast";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nathan Rydel | Software Engineer",
  description: "Nathan Rydel is a Full Stack Software Engineer specializing in React/Nextjs, Low Code, and E-commerce development",
};

/**
 * RootLayout component is the main layout component for the application.
 * It wraps the entire application and provides a consistent layout structure.
 *
 * @param children - The children components to be rendered within the layout.
 * @returns The rendered HTML structure for the application layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <GoogleTagManager gtmId="GTM-5XMVWDQN"/>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-100`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
