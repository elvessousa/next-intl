import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '../components/Layout';
import useTranslation from '../intl/useTranslation';

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t('home')} className="home">
      <section className="hero">
        <div className="message">
          <h1>Next INTL</h1>
          <p>{t('slogan')}</p>
          <Link href="/about">
            <a className="button">{t('about')}</a>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
