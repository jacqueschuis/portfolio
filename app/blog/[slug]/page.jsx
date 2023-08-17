import Layout from "@/app/components/Layout";

import fs from "fs";
import path from "path";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import CustomLink from "@/app/components/mdx/CustomLink";
import Author from "@/app/components/mdx/Author";
import ArticleImage from "@/app/components/mdx/ArticleImage";

import { getBlogFromSlug } from "@/app/utils/blog";

import { MDXRemote } from "next-mdx-remote/rsc";

import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight/lib";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";

import "@/styles/highlight-js/github-dark.css";

import Link from "next/link";
import Image from "next/image";

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
          {frontmatter.featureImage && (
            <div className="w-full h-full flex items-center justify-center not-prose my-2">
              <div className="relative overflow-hidden rounded-xl shadow-xl bg-gradient-to-b to-transparent">
                <Image
                  src={frontmatter.featureImage}
                  alt={frontmatter.title + " image"}
                  placeholder="blur"
                  blurDataURL="/utils/blur.png"
                  width={1000}
                  height={800}
                  className="object-cover max-h-[300px] object-center"
                />
              </div>
            </div>
          )}
          <h1 className="mt-5 mb-0">{frontmatter.title}</h1>
          {frontmatter.subtitle && (
            <h2 className="font-normal m-0">{frontmatter.subtitle}</h2>
          )}
        </div>

        <MDXRemote
          source={content}
          components={{ a: CustomLink, ArticleImage, Author }}
          options={options}
        />
      </article>
    </Layout>
  );
};

export default SingleBlog;
