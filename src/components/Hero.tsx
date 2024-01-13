"use client";

import { useTranslation } from "@/contexts/LanguageContext";
import Link from "next/link";

export function Hero() {
  const { t, locale } = useTranslation();

  return (
    <section className="hero">
      <div className="message">
        <h1>Next INTL</h1>
        <p>{t("slogan")}</p>
        <Link
          className="button"
          href={`/${locale}/${t("about").toLowerCase()}`}
        >
          {t("about")}
        </Link>
      </div>
    </section>
  );
}
