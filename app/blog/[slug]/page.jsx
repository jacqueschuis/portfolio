import Layout from "@/app/components/Layout";
import fs from "fs";
import path from "path";

import HeaderImage from "@/app/components/mdx/HeaderImage";
import CustomLink from "@/app/components/mdx/CustomLink";
import Author from "@/app/components/mdx/Author";
import ArticleImage from "@/app/components/mdx/ArticleImage";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { MDXRemote } from "next-mdx-remote/rsc";

import { getBlogFromSlug } from "@/app/utils/blog";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight/lib";

import "@/styles/highlight-js/github-dark.css";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import Link from "next/link";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blogs"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

export async function generateMetadata({ params }) {
  const { frontmatter } = getBlogFromSlug(params.slug);

  if (frontmatter) {
    return {
      title: "Jacques Pariseau | " + frontmatter.title,
      description: frontmatter.description,
      keywords: frontmatter.tags,
    };
  }
}

const SingleBlog = ({ params }) => {
  const { content, frontmatter } = getBlogFromSlug(params.slug);

  dayjs.extend(relativeTime);

  const options = {
    mdxOptions: {
      remarkPlugins: [
        remarkGfm,
        [remarkToc, { tight: true, heading: "Overview" }],
      ],
      rehypePlugins: [rehypeHighlight, rehypeSlug],
    },
  };

  return (
    <Layout dark={true} active={"blog"}>
      <article className="w-full pb-12 min-h-fit prose prose-sm md:prose-base lg:prose-lg xl:prose-xl prose-jp hover:prose-a:text-orange-600 prose-a:no-underline prose-a:font-bold prose-a:transition-all mt-5 prose-h1:text-blue-800 prose-h2:text-blue-700 prose-h3:text-blue-600">
        <div className="w-full flex flex-col text-center">
          <div className="w-full flex md:flex-row flex-col text-xs md:text-sm lg:text-base justify-between text-blue-600">
            <Link
              href={"/blog/all"}
              className="flex items-center justify-center font-bold transition-all text-blue-700 md:order-first order-last"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-4 h-4"
              >
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
              </svg>
              All Blogs
            </Link>
            <p className="m-0">
              Published {dayjs(frontmatter.publishedAt).format("D MMMM, YYYY")}
              {frontmatter.lastEdited && (
                <> | Updated {dayjs(frontmatter.lastEdited).fromNow()}</>
              )}
            </p>
          </div>
          <h1 className="mt-5 mb-0">{frontmatter.title}</h1>
          {frontmatter.subtitle && (
            <h2 className="font-normal m-0">{frontmatter.subtitle}</h2>
          )}
        </div>

        <MDXRemote
          source={content}
          components={{ a: CustomLink, HeaderImage, ArticleImage, Author }}
          options={options}
        />
      </article>
    </Layout>
  );
};

export default SingleBlog;
