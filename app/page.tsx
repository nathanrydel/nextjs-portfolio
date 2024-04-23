import Intro from "@/components/Intro";

/**
 * The main component of the application.
 *
 * @returns {JSX.Element} The rendered JSX element for the home page.
 */
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
    </main>
  );
}
