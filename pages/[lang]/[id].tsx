import { GetStaticProps, GetStaticPaths, NextPage } from 'next';

import { getAllIds, getContentData } from '../../lib/files';
import Layout from '../../components/Layout';

interface PageProps {
  locale: string;
  pageData: {
    lang: string;
    title: string;
    slug: string;
    date: string;
    category?: string;
    contentHtml: string;
  };
}

const SitePage: NextPage<PageProps> = ({ pageData }) => {
  const { title, contentHtml } = pageData;

  return (
    <Layout title={title}>
      <article className="post-content">
        <h1>{title}</h1>
        <div
          className="post-text"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageData = await getContentData(`/${params.lang}/${params.id}`, 'page');

  return {
    props: {
      locale: params?.lang || 'pt',
      pageData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllIds('page');

  return {
    paths,
    fallback: false,
  };
};

export default SitePage;
