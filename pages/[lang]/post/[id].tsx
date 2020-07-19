import { GetStaticProps, GetStaticPaths, NextPage } from "next";

import { getAllPostIds, getPostData } from "../../../lib/posts";
import Layout from "../../../components/Layout";

interface Props {
  locale: string;
  postData: {
    lang: string;
    title: string;
    slug: string;
    date: string;
    category: string;
    contentHtml: string;
  };
}

const Post: NextPage<Props> = ({ postData, locale }) => {
  const { lang, title, slug, date, category, contentHtml } = postData;

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
  const postData = await getPostData(`/${params.lang}/${params.id}`);

  return {
    props: {
      locale: params?.lang || "pt",
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export default Post;
