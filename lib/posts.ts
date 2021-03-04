import fs from 'fs';
import path from 'path';
import matter, { GrayMatterFile } from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.resolve(process.cwd(), 'posts');

// Get all filenames in posts directory as ['en/filename.md']
function getAllPostFileNames(directoryPath: string, filesList = []) {
  const files = fs.readdirSync(directoryPath);

  files.forEach((file) => {
    if (fs.statSync(`${directoryPath}/${file}`).isDirectory()) {
      filesList = getAllPostFileNames(`${directoryPath}/${file}`, filesList);
    } else {
      filesList.push(path.join(path.basename(directoryPath), '/', file));
    }
  });

  const filteredList = filesList.filter((file) => file.includes('.md'));
  return filteredList;
}

// Sorts posts by date
export function getSortedPostData() {
  const fileNames = getAllPostFileNames(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.split('/')[1].replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const frontMatter: GrayMatterFile<string> = matter(fileContents);

    return {
      id,
      ...(frontMatter.data as {
        lang: string;
        date: string;
        category: string;
      }),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Get IDs for posts
export function getAllPostIds() {
  const fileNames = getAllPostFileNames(postsDirectory);

  return fileNames.map((fileName) => ({
    params: {
      id: fileName.split('/')[1].replace(/\.md$/, ''),
      lang: fileName.split('/')[0],
    },
  }));
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const frontMatter = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(frontMatter.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    ...(frontMatter.data as { date: string; title: string }),
    contentHtml,
  };
}
