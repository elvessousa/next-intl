import { NextPage } from 'next';

import Layout from '../components/Layout';
import useTranslation from '../intl/useTranslation';

const About: NextPage = () => {
  const { t, locale } = useTranslation();
  const tutorialSlug =
    locale == 'pt' ? '/post/next-multilingue' : 'en/post/next-intl/';

  return (
    <Layout title={t('about')} className="about">
      <section className="page-content">
        <h1>{t('about')}</h1>
        <div className="page-text">
          {locale === 'pt' ? (
            <p>
              Site feito para mostrar a criação de um site bilíngue utilizando o
              Next.js. O tutorial está em um artigo do meu blog. Fique a vontade
              para ver o código-fonte, fazer um fork, ou até usá-lo em seus
              projetos.
            </p>
          ) : (
            <p>
              Site made to showcase the creation of a bilingual website using
              Next.js. The tutorial is in an article on my blog. Feel free to
              view the source code, fork it, or even use it in your projects.
            </p>
          )}

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
                  href={`https://blog.elvessousa.com.br/${tutorialSlug}`}
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
