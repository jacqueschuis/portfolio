import Layout from "../components/Layout";
import { getFeaturedBlogs, getMostRecentPublishedBlogs } from "../utils/blog";
import Link from "next/link";
import dayjs from "dayjs";

const BlogCard = ({
  title,
  description,
  lastEdited,
  publishedAt,
  slug,
  subtitle,
  isFeatured,
  featuredTags,
}) => {
  let tags;
  if (featuredTags) {
    tags = featuredTags.split(",");
  }

  return (
    <div
      className={`${
        isFeatured ? "w-full" : "w-1/5"
      } h-full rounded-xl bg-white shadow-xl p-5 flex flex-col justify-between transition-all hover:rotate-1 hover:-translate-y-2 gap-5`}
    >
      <div className="w-full flex justify-end text-xs text-blue-600">
        <p>
          {lastEdited ? (
            <>{dayjs(lastEdited).format("DD MMM YY")}</>
          ) : (
            <>{dayjs(publishedAt).format("DD MMM YY")}</>
          )}
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold text-3xl text-blue-800">{title}</h2>
        <h3 className="italic text-blue-600 text-sm ">
          {subtitle ? subtitle : ""}
        </h3>
      </div>
      <p>{description}</p>

      <div className="w-full flex flex-col">
        <Link href={"/blog/" + slug}>
          <button className="w-full transition-all bg-transparent hover:bg-orange-600 mix-blend-multiply border-2 border-orange-600 text-orange-600 hover:text-white rounded-lg py-2">
            Read More
          </button>
        </Link>
        <div className="w-full flex justify-evenly text-blue-600 text-xs p-2">
          {featuredTags &&
            tags.map((tag) => {
              return <p>{tag}</p>;
            })}
        </div>
      </div>
    </div>
  );
};

export const metadata = {
  title: "Jacques Pariseau | Blog",
  description: "Developer blog for Jacques Pariseau, front-end web developer",
  keywords:
    "blog, article, how to, diy, help, web development, front end, front-end, engineering, UI, UX, programming, coding, developer, software engineer, react, nextjs, mongodb",
};

const BlogIndex = () => {
  const blogs = getMostRecentPublishedBlogs(5);
  const featuredBlogs = getFeaturedBlogs();

  const randomFeatureIndex = Math.floor(Math.random() * featuredBlogs.length);

  return (
    <Layout dark={true} active={"blog"}>
      <div className="w-full h-full flex flex-col gap-5">
        <div className="w-full justify-center flex h-1/2">
          <div className="w-full">
            <h1>Blog</h1>
          </div>
          <div id="featured-blog">
            <BlogCard
              isFeatured={true}
              {...featuredBlogs[randomFeatureIndex]}
            />
          </div>
        </div>
        <div className="flex w-full gap-5 h-1/2">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} {...blog} />
          ))}
          <div className={"h-full  flex flex-col items-center justify-center"}>
            <div
              id="all-blogs"
              className="flex flex-col items-center justify-center"
            >
              <Link
                href={"/blog/all"}
                className="flex flex-col items-center justify-center transition-all hover:text-blue-600"
              >
                <p className="text-xl font-bold">All Blogs</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-10 h-10"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogIndex;
