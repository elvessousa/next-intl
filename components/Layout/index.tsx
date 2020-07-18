import React from "react";
import { Helmet } from "react-helmet";

import Header from "../Header";
import Footer from "../Footer";

interface Props {
  className?: string;
  children: React.ReactNode;
  title: string;
}

const Layout: React.FC<Props> = ({ className, children, title }) => {
  return (
    <main className={className}>
      <Helmet>
        <html lang="pt" />
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
