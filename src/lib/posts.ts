import fs from "fs";
import matter from "gray-matter";
import path from "path";

type ArticleData = {
  lang: "en" | "pt";
  title: string;
  slug: string;
  date: string;
  category: string;
  description: string;
};

export function getPostList(lang: "en" | "pt") {
  const folder = path.join(process.cwd(), "content", "posts", lang);
  const files = fs.readdirSync(folder);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));

  const content = markdownFiles.map((file) => {
    const content = fs.readFileSync(`${folder}/${file}`);
    return matter(content).data;
  });

  return content as ArticleData[];
}
