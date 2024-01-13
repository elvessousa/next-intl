"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";

type Props = {
  className?: string;
};

export default function Navigation({ className }: Props) {
  const { t, locale } = useTranslation();
  const navClass = className || "navigation";

  return (
    <nav className={navClass}>
      <ul>
        <li>
          <Link href={`/`}>{t("home")}</Link>
        </li>
        <li>
          <Link href={`/${locale}/posts`}>{t("articles")}</Link>
        </li>
        <li>
          <Link href={`/${locale}/${t("about").toLowerCase()}`}>
            {t("about")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
