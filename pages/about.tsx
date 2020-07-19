import { NextPage } from "next";
import Layout from "../components/Layout";

const About: NextPage = () => {
  return (
    <Layout className="about" title="About">
      <section className="page-content">
        <h1>About</h1>
        <div className="page-text">
          <p>
            Site feito para mostrar a criação de um site bilíngue utilizando o
            Next.js. O tutorial está em um artigo do meu blog. Fique a vontade
            para ver o código-fonte, fazer um fork, ou até usá-lo em seus
            projetos.
          </p>

          <div className="links">
            <h2>Links</h2>
            <ul>
              <li>
                <a
                  href={`https://blog.elvessousa.com.br`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href={`https://blog.elvessousa.com.br`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Tutorial
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/elvessousa/next-intl"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Next INTL - Github Repo
                </a>
              </li>
              <li>
                <a
                  href={`https://elvessousa.com.br`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Elves Sousa - Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
