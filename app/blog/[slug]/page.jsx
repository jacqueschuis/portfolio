import Layout from "@/app/components/LongLayout";
import fs from "fs";
import path from "path";

import dayjs from "dayjs";
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
      title: frontmatter.title,
      description: frontmatter.description,
    };
  }
}

const SingleBlog = ({ params }) => {
  const { content, frontmatter } = getBlogFromSlug(params.slug);

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
      <article className="w-full prose prose-sm md:prose-base lg:prose-lg xl:prose-xl prose-jp hover:prose-a:text-orange-600 prose-a:no-underline prose-a:transition-all">
        <h1>{frontmatter.title}</h1>
        {dayjs(frontmatter.date).format("MMMM D, YYYY")}

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
