import Layout from "../components/Layout";
import { getFeaturedBlogs, getMostRecentPublishedBlogs } from "../utils/blog";
import Link from "next/link";
import dayjs from "dayjs";

export const metadata = {
  title: "Jacques Pariseau | Blog",
  description: "Developer blog for Jacques Pariseau, front-end web developer",
  keywords:
    "blog, article, how to, diy, help, web development, front end, front-end, engineering, UI, UX, programming, coding, developer, software engineer, react, nextjs, mongodb",
};

const BlogCard = ({
  title,
  description,
  lastEdited,
  publishedAt,
  slug,
  subtitle,
  featuredTags,
}) => {
  let tags;
  if (featuredTags) {
    tags = featuredTags.split(",");
  }

  return (
    <div className=" h-full w-full pb-6 min-w-[225px] md:max-w-[400px] max-h-[350px] rounded-xl bg-white shadow-xl p-5 flex flex-col justify-between transition-all md:hover:rotate-1 md:hover:-translate-y-2 gap-5">
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

const FeaturedBlogCard = ({
  title,
  description,
  lastEdited,
  publishedAt,
  slug,
  subtitle,
  featuredTags,
}) => {
  let tags;
  if (featuredTags) {
    tags = featuredTags.split(",");
  }
  return (
    <div className="w-full h-full 2xl:gap-12 xl:gap-8 lg:gap-4 rounded-xl min-h-[350px] md:max-w-[400px] min-w-[200px] lg:max-w-none bg-white lg:bg-transparent shadow-xl lg:shadow-none p-5 flex flex-col justify-between lg:justify-center">
      <div className="flex flex-col">
        <div className="w-full flex justify-between md:text-xl text-xs text-blue-600">
          <p className="font-bold text-orange-600">Featured Article</p>
          <p>
            {lastEdited ? (
              <>{dayjs(lastEdited).format("DD MMM YY")}</>
            ) : (
              <>{dayjs(publishedAt).format("DD MMM YY")}</>
            )}
          </p>
        </div>
        <h2 className="font-bold xl:text-6xl lg:text-4xl md:text-2xl text-base text-blue-800">
          {title}
        </h2>
        <h3 className="italic text-blue-600 md:text-xl xl:text-2xl">
          {subtitle ? subtitle : ""}
        </h3>
      </div>
      <p className="2xl:text-4xl lg:text-2xl">{description}</p>

      <div className="w-full flex flex-col items-center">
        <Link href={"/blog/" + slug} className="lg:w-1/2 w-full">
          <button className="w-full transition-all lg:text-base md:text-sm text-xs bg-transparent hover:bg-orange-600 mix-blend-multiply border-2 border-orange-600 text-orange-600 hover:text-white rounded-lg py-2">
            Read Article
          </button>
        </Link>
        <div className="w-full flex justify-evenly text-blue-600 md:text-lg text-xs p-2">
          {featuredTags &&
            tags.map((tag) => {
              return <p>{tag}</p>;
            })}
        </div>
      </div>
    </div>
  );
};

const BlogIndex = () => {
  const blogs = getMostRecentPublishedBlogs(5);
  const featuredBlogs = getFeaturedBlogs();

  const randomFeatureIndex = Math.floor(Math.random() * featuredBlogs.length);
  const randomRecentIndex = Math.floor(Math.random() * blogs.length);

  const featuredBlog = featuredBlogs[randomFeatureIndex];
  const randomRecentBlog = blogs[randomRecentIndex];

  return (
    <Layout dark={true} active={"blog"}>
      <div className="w-full h-full flex flex-col items-start justify-start gap-10">
        <div className="w-full lg:h-full md:justify-center items-center lg:flex-row flex-col flex gap-5">
          <div className="w-full h-full flex flex-col md:justify-center gap-8 text-base md:text-xl">
            <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold lg:mb-10 mb-2 text-center">
              Blog
            </h1>
            <p>
              I'm a self-taught developer who is always growing my skill set. I
              want to document my growth as a front-end engineer for my own
              sake, but hopefully other developers can learn along with me.
            </p>
            <p className="w-full">
              Check out my{" "}
              <Link
                className="font-bold transition-all text-blue-700 hover:text-blue-600"
                href={"/blog/" + featuredBlog.slug}
              >
                featured article
              </Link>
              , one of my{" "}
              <Link
                className="font-bold transition-all text-blue-700 hover:text-blue-600"
                href={"/blog/" + randomRecentBlog.slug}
              >
                most recent posts
              </Link>
              , or see all articles{" "}
              <Link
                className="font-bold transition-all text-blue-700 hover:text-blue-600"
                href="/blog/all"
              >
                here.
              </Link>
            </p>
          </div>
          <div
            className="w-full h-full flex flex-col justify-center lg:items-start items-center"
            id="featured-blog"
          >
            <FeaturedBlogCard {...featuredBlog} />
          </div>
        </div>
        <div className="w-full flex-auto flex flex-col xl:items-start items-center">
          <h2 className="font-bold text-blue-600 md:text-3xl text-2xl mb-3 lg:mb-8">
            Most Recent Blogs
          </h2>
          <div className="flex lg:flex-wrap lg:flex-row flex-col flex-1 justify-center items-center w-full gap-5">
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
