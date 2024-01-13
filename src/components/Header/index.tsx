"use client";

import Logo from "../Logo";
import Navigation from "../Navigation";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useTranslation } from "@/contexts/LanguageContext";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export function Header({ className, children }: Props) {
  const { setLocale } = useTranslation();
  const route = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const headerClass = className || "header";
  const locales = ["en", "pt"];

  console.log("params", params);
  // console.log("route", route);
  console.log("path", pathname);

  function handleLocaleChange(language: string) {
    if (!window) {
      return;
    }

    // const regex = new RegExp(`^/(${locales.join("|")})`);
    localStorage.setItem("lang", language);
    setLocale(language);

    // if (!pathname.includes("post/")) {
    //   route.push(pathname, h.replace(regex, `/${language}`));
    // }
  }

  return (
    <header className={headerClass}>
      <Logo link={`/`} />
      <Navigation />
      {children}
      <div className="lang">
        {locales.map((locale) => (
          <button key={locale} onClick={() => handleLocaleChange(locale)}>
            {locale}
          </button>
        ))}
      </div>
    </header>
  );
}
