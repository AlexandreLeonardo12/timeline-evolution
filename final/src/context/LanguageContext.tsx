import React, { createContext, useContext, useState, ReactNode } from "react";

/**
 * Language context to provide current language and toggle function throughout
 * the application. Default language is Portuguese ("pt").
 */
interface LanguageContextProps {
  language: "pt" | "en";
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: "pt",
  toggleLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
