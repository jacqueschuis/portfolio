import Layout from "@/app/components/LongLayout";
import fs from "fs";
import path from "path";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { MDXRemote } from "next-mdx-remote/rsc";

import CustomLink from "@/app/components/mdx/CustomLink";
import { getBlogFromSlug } from "@/app/utils/blog";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight/lib";

import "@/styles/highlight-js/github-dark.css";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";

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
      <article className="w-full prose prose-sm md:prose-base lg:prose-lg xl:prose-xl prose-jp hover:prose-a:text-orange-600 prose-a:no-underline prose-a:transition-all mt-5">
        <div className="w-full flex flex-col text-center">
          <h1 className="text-blue-800 mb-0">{frontmatter.title}</h1>
          {frontmatter.subtitle && (
            <h2 className="font-normal m-0 text-sm">{frontmatter.subtitle}</h2>
          )}
          <div className="w-full flex md:flex-row flex-col justify-between text-xs md:text-sm text-blue-600">
            <p className="m-0">
              Published {dayjs(frontmatter.publishedAt).format("D MMMM, YYYY")}
            </p>
            {frontmatter.lastEdited && (
              <p className="m-0">
                Last Updated {dayjs(frontmatter.lastEdited).fromNow()}
              </p>
            )}
          </div>
        </div>

        <MDXRemote
          source={content}
          components={{ a: CustomLink }}
          options={options}
        />
      </article>
    </Layout>
  );
};

export default SingleBlog;
