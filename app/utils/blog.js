import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sync } from "glob";
import { notFound } from "next/navigation";
import dayjs from "dayjs";
import { error } from "console";

const blogsPath = path.join(process.cwd(), "blogs");

export const getBlogFromSlug = (slug) => {
  try {
    const blogDir = path.join(blogsPath, `${slug}.mdx`);
    const source = fs.readFileSync(blogDir);
    const { content, data } = matter(source);
    if (data.isDraft) {
      throw new error();
    }
    return {
      content,
      frontmatter: {
        ...data,
      },
    };
  } catch (err) {
    return notFound();
  }
};

export const getBlogs = () => {
  const blogs = fs.readdirSync(path.join(process.cwd(), "blogs"));

  return blogs.reduce((allBlogs, blogSlug) => {
    const source = fs.readFileSync(
      path.join(process.cwd(), "blogs", blogSlug),
      "utf-8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: blogSlug.replace(".mdx", ""),
      },
      ...allBlogs,
    ];
  }, []);
};

export const getMostRecentPublishedBlogs = (num) => {
  const allBlogs = getBlogs();

  const publishedBlogs = allBlogs.filter((blog) => !blog.isDraft);

  publishedBlogs.sort((a, b) => {
    return (
      new dayjs(b.lastEdited ? b.lastEdited : b.publishedAt) -
      new dayjs(a.lastEdited ? a.lastEdited : a.publishedAt)
    );
  });

  const blogs = publishedBlogs.slice(0, num);

  return blogs;
};

export const getRandomFeaturedBlogs = (num) => {
  const articles = getBlogs();

  const publishedBlogs = articles.filter((blog) => !blog.isDraft);

  const featuredBlogs = publishedBlogs.filter((blog) => blog.isFeaturable);

  const randomFeaturedBlogs = featuredBlogs
    .map((val) => ({ val, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ val }) => val);

  const blogs = randomFeaturedBlogs.slice(0, num);

  return blogs;
};

export const getRandomPublishedArticle = () => {
  const articles = getBlogs();

  const publishedBlogs = articles.filter((blog) => !blog.isDraft);

  const shuffledPublishedBlogs = publishedBlogs
    .map((val) => ({ val, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ val }) => val);

  return shuffledPublishedBlogs[0];
};
