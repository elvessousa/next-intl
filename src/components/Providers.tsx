"use client";

import { LanguageProvider } from "../contexts/LanguageContext";

type Props = { children: React.ReactNode };

export function Providers({ children }: Props) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
