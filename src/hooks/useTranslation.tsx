import { useContext } from "react";

import {
  LanguageContext,
  defaultLocale,
  locales,
} from "../contexts/LanguageContext";
import { LangStrings } from "../lib/strings";

export default function useTranslation() {
  const [locale, setLocale] = useContext(LanguageContext);

  function t(key: string) {
    return LangStrings[locale][key] || LangStrings[defaultLocale][key] || "";
  }

  return { t, locale, setLocale, locales };
}
