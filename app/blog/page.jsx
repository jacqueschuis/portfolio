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
        isFeatured ? "w-full" : "xl:w-1/5"
      } h-full min-w-[200px] max-w-[400px] max-h-[350px] rounded-xl bg-white shadow-xl p-5 flex flex-col justify-between transition-all md:hover:rotate-1 md:hover:-translate-y-2 gap-5`}
    >
      <div className="flex flex-col">
        <div className="w-full flex justify-end text-xs text-blue-600">
          <p>
            {lastEdited ? (
              <>{dayjs(lastEdited).format("DD MMM YY")}</>
            ) : (
              <>{dayjs(publishedAt).format("DD MMM YY")}</>
            )}
          </p>
        </div>
        <h2 className="font-bold xl:text-2xl lg:text-xl md:text-lg text-base text-blue-800">
          {title}
        </h2>
        <h3 className="italic text-blue-600 md:text-sm">
          {subtitle ? subtitle : ""}
        </h3>
      </div>
      <p className="md:text-base text-sm ">{description}</p>

      <div className="w-full flex flex-col">
        <Link href={"/blog/" + slug}>
          <button className="w-full transition-all lg:text-base md:text-sm text-xs bg-transparent hover:bg-orange-600 mix-blend-multiply border-2 border-orange-600 text-orange-600 hover:text-white rounded-lg py-2">
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

  const featuredBlog = featuredBlogs[randomFeatureIndex];

  return (
    <Layout dark={true} active={"blog"}>
      <div className="w-full h-full flex flex-col items-start gap-10 ">
        <div className="w-full xl:justify-center items-center xl:flex-row flex-col flex h-full gap-5">
          <div className="w-full h-full">
            <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold lg:mb-10 mb-2 text-center">
              Blog
            </h1>
            <p>
              I'm a self-taught developer who is always growing my skill set. I
              want to document my growth as an engineer for my own sake, but
              hopefully other developers can learn along with me.
            </p>
            <p>
              Check out my featured blog, one of my most recent, or see all of
              my blogs <a href="/blogs/all">here</a>
            </p>
            {/* <Link href={"/blog/all"}>
              <button className="w-full transition-all lg:text-base md:text-sm text-xs bg-transparent hover:bg-orange-600 mix-blend-multiply border-2 border-orange-600 text-orange-600 hover:text-white rounded-lg py-2">
                Read More
              </button>
            </Link> */}
          </div>
          <div
            className="w-full flex flex-col xl:items-start items-center"
            id="featured-blog"
          >
            <h2 className="font-bold text-blue-600 md:text-3xl text-2xl">
              Featured Blog
            </h2>
            <BlogCard isFeatured={true} {...featuredBlog} />
          </div>
        </div>
        <div className="w-full h-max xl:pb-0 pb-9 flex flex-col xl:items-start items-center">
          <h2 className="font-bold text-blue-600 md:text-3xl text-2xl">
            Most Recent Blogs
          </h2>
          <div className="flex xl:flex-row flex-col xl:justify-center items-center w-full gap-5 h-full">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} {...blog} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogIndex;
