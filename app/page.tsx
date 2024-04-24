import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";

/**
 * The main component of the application.
 *
 * @returns {JSX.Element} The rendered JSX element for the home page.
 */
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Projects />
      <Skills />
      <About />
      <Experience />
      <Contact />
    </main>
  );
}
