import Layout from "@/app/components/Layout";
import { getMostRecentPublishedBlogs } from "@/app/utils/blog";

import Link from "next/link";

import dayjs from "dayjs";
import HorizontalTrail from "@/app/components/HorizontalTrail";

const BlogEntry = ({
  title,
  description,
  lastEdited,
  publishedAt,
  slug,
  subtitle,
}) => {
  return (
    <div className={"w-full h-full px-5 py-8 flex flex-col justify-evenly"}>
      <div className="flex flex-col">
        <p className="font-bold text-blue-600">
          {lastEdited ? (
            <>{dayjs(lastEdited).format("DD MMM YY")}</>
          ) : (
            <>{dayjs(publishedAt).format("DD MMM YY")}</>
          )}
        </p>
        <h2 className="font-bold text-3xl text-blue-800">{title}</h2>
        <h3 className="italic text-blue-600 text-sm ">
          {subtitle ? subtitle : ""}
        </h3>
      </div>
      <p className="mt-4 mb-6">{description}</p>

      <Link href={"/blog/" + slug} className="self-center">
        <button className="w-48 transition-all bg-transparent hover:bg-orange-600 mix-blend-multiply border-2 border-orange-600 text-orange-600 hover:text-white rounded-lg py-2">
          Read Article
        </button>
      </Link>
    </div>
  );
};

export const metadata = {
  title: "Jacques Pariseau | All Blogs",
  description:
    "All currently published developer blogs written by Jacques Pariseau, front-end web developer",
  keywords:
    "blog, article, how to, diy, help, web development, front end, front-end, engineering, UI, UX, programming, coding, developer, software engineer, react, nextjs, mongodb",
};

const AllBlogs = () => {
  const blogs = getMostRecentPublishedBlogs();

  return (
    <Layout dark={true} active={"blog"}>
      <div className="w-full h-full flex flex-col items-center">
        <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold lg:mb-10 mb-2">
          All Blogs
        </h1>
        <div className="2xl:w-1/3 md:w-1/2 h-fit flex flex-col items-center lg:gap-10 divide-y-2 divide-grey">
          <HorizontalTrail>
            {blogs.map((blog) => (
              <BlogEntry key={blog.slug} {...blog} />
            ))}
          </HorizontalTrail>
        </div>
      </div>
    </Layout>
  );
};

export default AllBlogs;
