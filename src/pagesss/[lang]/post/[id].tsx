import { GetStaticProps, GetStaticPaths } from 'next';

import { getAllIds, getContentData } from '../../../lib/files';
import Layout from '../../../components/Layout';

type PostProps = {
  locale: string;
  postData: {
    lang: string;
    title: string;
    slug: string;
    date: string;
    category: string;
    contentHtml: string;
  };
};

export default function Post({ postData }: PostProps) {
  const { title, contentHtml } = postData;

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
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getContentData(`/${params.lang}/${params.id}`);

  return {
    props: {
      locale: params?.lang || 'pt',
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllIds();

  return {
    paths,
    fallback: false,
  };
};
