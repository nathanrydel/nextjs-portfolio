import { useActiveSectionContext } from "@/context/activeSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

/**
 * A custom hook that listens for a section to come into view and sets the active
 *  section accordingly.
 *
 * @param sectionName The name of the section to set as active.
 * @param threshold The threshold for when a section is considered in view.
 * Defaults to 0.75.
 *
 * @returns An object containing the ref for the section element.
 */
export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
    inView,
  };
}
