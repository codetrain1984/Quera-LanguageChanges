import React from "react";
import { useState, createContext } from "react";

const translations = [
  {
    language: "English",
    words: {
      home: "Home",
      events: "Events",
      aboutUs: "About Us",
      contactUs: "Contact Us",
      language: "Language",
    },
  },
  {
    language: "Persian",
    words: {
      home: "خانه",
      events: "رویداد ها",
      aboutUs: "درباره ما",
      contactUs: "تماس با ما",
      language: "زبان",
    },
  },
];
export const LanguageContext = createContext(undefined);

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(translations[0].language);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const words = translations.find((t) => t.language === language).words;
  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        words,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
export default LanguageProvider;

export const useLanguage = () => {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
