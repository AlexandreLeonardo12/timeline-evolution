import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

/**
 * ThemeContext provides a simple mechanism to toggle between light and dark
 * themes. The current theme is stored in localStorage so that a user's
 * preference persists between sessions. When the theme is toggled, the
 * corresponding CSS class ("dark") is added or removed from the root
 * document element. Tailwind CSS uses this class to apply dark mode
 * variants defined in the CSS file (`index.css`).
 */
interface ThemeContextValue {
  /**
   * The current theme: either "light" or "dark".
   */
  theme: 'light' | 'dark';
  /**
   * Toggle the theme between light and dark. Invoking this function
   * updates localStorage and toggles the `dark` class on the root
   * element.
   */
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      return stored === 'dark' ? 'dark' : 'light';
    }
    return 'light';
  });

  // Apply the theme class to the root element when the component mounts
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Hook to access the current theme and toggle function. Components can
 * consume this hook to read the current theme or toggle it when
 * rendering a button.
 */
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
};