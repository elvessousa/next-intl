import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { getSortedPostData } from "../../lib/posts";

import Layout from "../../components/Layout";
import Link from "next/link";

interface Props {
  locale: string;
  allPostsData: {
    date: string;
    title: string;
    lang: string;
    id: any;
  }[];
}

const Post: NextPage<Props> = ({ locale, allPostsData }) => {
  console.log(locale);
  const postsData = allPostsData.filter((post) => post.lang === locale);

  return (
    <Layout className="posts" title="Post">
      <section className="page-content">
        <h1>Articles</h1>
        {postsData.map((post) => (
          <article key={post.id} className="post">
            <Link href={`post/${post.id}`}>
              <a>
                <h3>{post.title}</h3>
              </a>
            </Link>
            <time>{post.date}</time>
            {/*<p>{post.excerpt}</p>*/}
          </article>
        ))}
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const allPostsData = getSortedPostData();

  return {
    props: {
      locale: ctx.params?.lang || "pt",
      allPostsData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { lang: "en" } }, { params: { lang: "pt" } }],
    fallback: false,
  };
};

export default Post;
