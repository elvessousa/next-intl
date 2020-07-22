import React, { useContext } from "react";
import { Helmet } from "react-helmet";

import Header from "../Header";
import Footer from "../Footer";
import { LanguageContext } from "../../intl/LanguageProvider";

interface Props {
  className?: string;
  children: React.ReactNode;
  title: string;
}

const Layout: React.FC<Props> = ({ className, children, title }) => {
  const [locale] = useContext(LanguageContext);

  return (
    <main className={className}>
      <Helmet>
        <html lang={locale} />
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content="A Next.js multilingual site" />
      </Helmet>
      <Header />
      {children}
      <Footer>
        <p>Elves Sousa - 2020</p>
      </Footer>
    </main>
  );
};

export default Layout;
