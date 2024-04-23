"use client";

import type { SectionName } from "@/lib/types";
import React, { useState, createContext, useContext } from "react";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

/**
 * @description This component is a provider for the ActiveSectionContext, which allows child components to access and update the active section and the time of the last click.
 * @param {React.ReactNode} children - The children components that will be wrapped by the provider.
 * @returns {JSX.Element} - The provider component that wraps the children components and provides the context values.
 */
export default function ActiveSectionContextProvider({ children, }: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

/**
 * @description This hook is used to access the values provided by the `ActiveSectionContextProvider`. It allows child components to access and update the active section and the time of the last click.
 * @returns {ActiveSectionContextType} - An object containing the current active section, a function to update it, the current time of the last click, and a function to update it.
 * @throws {Error} - If the hook is used outside of an `ActiveSectionContextProvider`, it will throw an error.
 */
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}