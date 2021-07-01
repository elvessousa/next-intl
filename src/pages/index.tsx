import Link from 'next/link';

import Layout from '../components/Layout';
import useTranslation from '../hooks/useTranslation';

export default function Home() {
  const { t, locale } = useTranslation();

  return (
    <Layout title={t('home')} className="home">
      <section className="hero">
        <div className="message">
          <h1>Next INTL</h1>
          <p>{t('slogan')}</p>
          <Link href={`/${locale}/${t('about').toLowerCase()}`}>
            <a className="button">{t('about')}</a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
