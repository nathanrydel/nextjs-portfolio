import Intro from "@/components/Intro";
import SectionDivider from "@/components/SectionDivider";

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
    </main>
  );
}
