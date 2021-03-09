import { useState } from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';

import Layout from '../../components/Layout';
import { getSortedPostData } from '../../lib/files';
import useTranslation from '../../intl/useTranslation';

interface Props {
  locale: string;
  allPostsData: {
    date: string;
    title: string;
    lang: string;
    description: string;
    id: any;
  }[];
}

const Post: NextPage<Props> = ({ locale, allPostsData }) => {
  const { t } = useTranslation();
  const postsData = allPostsData.filter((post) => post.lang === locale);

  // Pagination
  const postsPerPage = 10;
  const numPages = Math.ceil(postsData.length / postsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const pagedPosts = postsData.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Date localization options
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <Layout className="posts" title={t('articles')}>
      <section className="page-content">
        <h1>{t('articles')}</h1>
        {pagedPosts.map((post) => (
          <article key={post.id} className="post">
            <Link href={`/[lang]/post/[id]`} as={`/${locale}/post/${post.id}`}>
              <a>
                <h3>{post.title}</h3>
              </a>
            </Link>
            <time>
              {new Date(post.date).toLocaleDateString(locale, dateOptions)}
            </time>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}

        {numPages > 1 && (
          <div className="pagination">
            {Array.from({ length: numPages }, (_, i) => (
              <button
                key={`pagination-number${i + 1}`}
                onClick={() => setCurrentPage(i + 1)}
                className={currentPage === i + 1 ? 'active' : ''}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const allPostsData = getSortedPostData();

  return {
    props: {
      locale: ctx.params?.lang || 'pt',
      allPostsData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { lang: 'en' } }, { params: { lang: 'pt' } }],
    fallback: false,
  };
};

export default Post;
