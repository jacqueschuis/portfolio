import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sync } from "glob";
import { notFound } from "next/navigation";

const blogsPath = path.join(process.cwd(), "blogs");

export const getSlug = () => {
  const paths = sync(`${blogsPath}/*.mdx`);

  return paths.map((path) => {
    const pathContent = path.split("/");
    const fileName = pathContent[pathContent.length - 1];
    const [slug] = fileName.split(".");

    return slug;
  });
};

export const getBlogFromSlug = (slug) => {
  try {
    const blogDir = path.join(blogsPath, `${slug}.mdx`);
    const source = fs.readFileSync(blogDir);
    const { content, data } = matter(source);
    return {
      content,
      frontmatter: {
        slug,
        title: data.title,
        publishedAt: data.date,
        ...data,
      },
    };
  } catch (err) {
    console.log(err);
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

export const getSortedBlogs = () => {
  const articles = getBlogs();

  const blogs = articles.map((article) => article);

  blogs.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return blogs;
};

export const getMostRecentBlogs = (num) => {
  const articles = getBlogs();

  const allBlogs = articles.map((article) => article);

  allBlogs.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const blogs = allBlogs.slice(0, num);

  return blogs;
};
