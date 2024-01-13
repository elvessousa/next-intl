import fs from "fs";
import { getPostList } from "@/lib/posts";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

type Props = { params: { lang: "en" | "pt"; slug: string } };

export default function Post({ params: { lang, slug } }: Props) {
  const { data, content } = getPostContent(lang, slug);

  return (
    <article className="post-content">
      <h1>{data.title}</h1>
      <div className="post-text">
        <Markdown>{content}</Markdown>
      </div>
    </article>
  );
}

function getPostContent(lang: string, slug: string) {
  const file = `content/posts/${lang}/${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  return matter(content);
}

export async function generateStaticParams() {
  const en = getPostList("en");
  const pt = getPostList("pt");
  const posts = [...en, ...pt].map(({ slug, lang }) => ({ slug, lang }));

  return posts;
}
