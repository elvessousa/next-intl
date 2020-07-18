import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="home" className="home">
      <section className="hero">
        <div className="message">
          <h1>Next INTL</h1>
          <p>slogan</p>
          <Link href="/about">
            <a className="button">About</a>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
