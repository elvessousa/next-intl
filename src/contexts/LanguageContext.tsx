"use client";

import { translationStrings } from "@/data/strings";
import { createContext, useContext, useEffect, useState } from "react";

type LanguageData = { locale: string; setLocale: Function };
type LanguageProviderProps = { children: React.ReactNode };

export const defaultLanguage = "en";
export const LanguageContext = createContext({} as LanguageData);

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const language = localStorage.getItem("lang") || defaultLanguage;
    setLocale(language);
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const { locale, setLocale } = useContext(LanguageContext);

  function t(string: string) {
    return translationStrings[locale][string];
  }

  return { t, locale, setLocale };
}
