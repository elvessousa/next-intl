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

const Post: NextPage<PageProps> = ({ pageData }) => {
  const { title, contentHtml } = pageData;
  console.log(pageData);

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
  console.log(pageData);

  return {
    props: {
      locale: params?.lang || 'pt',
      pageData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllIds('page');
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export default Post;
