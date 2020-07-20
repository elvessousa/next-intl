import { createContext, useState } from "react";

export const defaultLocale = "pt";
export const locales = ["pt", "en"];
export const LanguageContext = createContext([]);

export const LanguageProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = useState("pt");

  return (
    <LanguageContext.Provider value={[locale, setLocale]}>
      {children}
    </LanguageContext.Provider>
  );
};
