import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), 'posts');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
}

export interface Post extends PostMeta {
  contentHtml: string;
}

function slugFromFilename(filename: string): string {
  return filename.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');
}

export function getAllPosts(): PostMeta[] {
  const filenames = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'));

  const posts = filenames.map((filename) => {
    const slug = slugFromFilename(filename);
    const fullPath = path.join(postsDir, filename);
    const { data } = matter(fs.readFileSync(fullPath, 'utf8'));

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      tags: (data.tags as string[]) ?? [],
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith('.md'))
    .map(slugFromFilename);
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const filenames = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'));
  const filename = filenames.find((f) => slugFromFilename(f) === slug);

  if (!filename) {
    throw new Error(`Post not found: ${slug}`);
  }

  const fullPath = path.join(postsDir, filename);
  const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'));

  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    tags: (data.tags as string[]) ?? [],
    contentHtml: processed.toString(),
  };
}
