import React, { useContext } from "react";
import Head from "next/head";

import Header from "../Header";
import Footer from "../Footer";

interface Props {
  className?: string;
  children: React.ReactNode;
  desc?: string;
  title: string;
  thumb?: string;
}

const Layout: React.FC<Props> = ({
  className,
  children,
  title,
  desc,
  thumb,
}) => {
  const description = desc || "A Next.js multilingual site";
  const thumbnail =
    thumb ||
    "https://repository-images.githubusercontent.com/280748222/db50d880-cac8-11ea-8874-40a3c45a9fa7";

  return (
    <main className={className}>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={thumbnail} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={thumbnail} />
      </Head>
      <Header />
      {children}
      <Footer>
        <p>Elves Sousa - 2020</p>
      </Footer>
    </main>
  );
};

export default Layout;
