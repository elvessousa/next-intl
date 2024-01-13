import Link from "next/link";

type ArticleData = {
  lang: "en" | "pt";
  title: string;
  slug: string;
  date: string;
  category: string;
  description: string;
};

type Props = { posts: ArticleData[] };

export function PostList({ posts }: Props) {
  return (
    <section>
      {posts.map(({ title, slug, description, lang }) => (
        <article className="post" key={slug}>
          <Link href={`/${lang}/post/${slug}`}>
            <h3>{title}</h3>
          </Link>

          <p>{description}</p>
        </article>
      ))}
    </section>
  );
}
