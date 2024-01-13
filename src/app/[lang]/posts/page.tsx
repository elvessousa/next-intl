import { PostList } from "@/components/PostList";
import { getPostList } from "@/lib/posts";

type Props = { params: { lang: "en" | "pt" } };

export default function PostsPage({ params: { lang } }: Props) {
  const posts = getPostList(lang);

  return (
    <section className="page-content">
      <h1>Articles</h1>
      <PostList posts={posts} />
    </section>
  );
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pt" }];
}
