"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

/**
 * ThemeContextProvider is a React context provider that manages the theme state and provides a way to toggle the theme.
 * It uses the useState hook to manage the theme state and the useEffect hook to handle theme persistence and initialisation.
 *
 * @param {React.ReactNode} children - The children components that will be wrapped by the ThemeContextProvider.
 *
 * @returns {JSX.Element} - A JSX.Element that wraps the children components and provides the theme state and toggleTheme function through the ThemeContext.
 */
export default function ThemeContextProvider({ children, }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  /**
   * Toggles the theme between "light" and "dark".
   * It updates the theme state, sets the corresponding CSS class on the document body, and saves the theme to local storage.
   */
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  /**
   * Initialises the theme state based on the local storage and the user's preferred color scheme.
   * It sets the initial theme state and applies the corresponding CSS class on the document body.
   */
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }

  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * useTheme is a custom React hook that allows child components to access the theme state and toggleTheme function provided by the ThemeContextProvider.
 * It uses the useContext hook to access the ThemeContext and returns the theme state and toggleTheme function.
 *
 * @returns {ThemeContextType} - An object containing the current theme state and the toggleTheme function.
 * @throws {Error} - If the hook is used outside of a `ThemeContextProvider`, it will throw an error.
 */
export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
