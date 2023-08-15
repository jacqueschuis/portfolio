import Layout from "../components/Layout";
import {
  getMostRecentPublishedBlogs,
  getRandomFeaturedBlogs,
  getRandomPublishedArticle,
} from "../utils/blog";
import Link from "next/link";
import dayjs from "dayjs";
import HorizontalTrail from "../components/HorizontalTrail";
import Trail from "../components/Trail";

export const metadata = {
  title: "Jacques Pariseau | Blog",
  description: "Developer blog for Jacques Pariseau, front-end web developer",
  keywords:
    "blog, article, how to, diy, help, web development, front end, front-end, engineering, UI, UX, programming, coding, developer, software engineer, react, nextjs, mongodb",
};

const FeaturedBlogCard = ({
  title,
  description,
  lastEdited,
  publishedAt,
  slug,
  featureImage,
  featuredTags,
}) => {
  let tags;
  if (featuredTags) {
    tags = featuredTags.split(",");
  }
  return (
    <div className="w-full lg:h-full bg-gradient-to-b m-2 from-white rounded-3xl shadow-xl 2xl:p-12 lg:p-8 p-4 flex flex-col justify-center relative">
      <div id="top" className="basis-1/2 flex flex-col">
        <div className="w-full flex justify-between 2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs text-blue-600 mb-5">
          <p className="font-bold text-orange-600">Featured Article</p>
          <p>
            {lastEdited ? (
              <>{dayjs(lastEdited).format("DD MMM YY")}</>
            ) : (
              <>{dayjs(publishedAt).format("DD MMM YY")}</>
            )}
          </p>
        </div>
        <img
          src={featureImage}
          alt=""
          className="w-full object-cover object-center rounded-t-3xl max-h-[250px]"
        />
      </div>
      <div id="bottom" className="h-full mt-5 flex flex-col">
        <Link href={"/blog/" + slug}>
          <h2 className="font-bold 2xl:text-6xl lg:text-4xl md:text-2xl text-base text-blue-700 hover:text-orange-600 transition-all">
            {title}
          </h2>
        </Link>
        <p className="2xl:text-xl md:text-lg my-4">{description}</p>
      </div>
    </div>
  );
};

const BlogEntry = ({
  title,
  lastEdited,
  publishedAt,
  slug,
  featuredTags,
  featureImage,
}) => {
  let tags;
  if (featuredTags) {
    tags = featuredTags.split(",");
  }

  return (
    <div className="w-full min-h-fit flex justify-center ">
      <div className="justify-center lg:basis-1/2 items-center hidden lg:flex h-full w-full">
        <Link href={"/blog/" + slug}>
          <img
            src={featureImage}
            alt=""
            className="h-28 w-28 aspect-square rounded-lg object-cover"
          />
        </Link>
      </div>
      <div className="flex w-full justify-center lg:basis-1/2 flex-initial flex-col">
        <p className="text-blue-600 text-xs">
          {lastEdited ? (
            <>{dayjs(lastEdited).format("DD MMM YY")}</>
          ) : (
            <>{dayjs(publishedAt).format("DD MMM YY")}</>
          )}
        </p>
        <Link href={"/blog/" + slug}>
          <h3 className="font-bold 2xl:text-2xl md:text-xl hover:text-orange-600 transition-all text-blue-800">
            {title}
          </h3>
        </Link>
      </div>
    </div>
  );
};

const BlogIndex = () => {
  const recentBlogs = getMostRecentPublishedBlogs(5);
  const featuredBlogs = getRandomFeaturedBlogs(2);
  const randomBlog = getRandomPublishedArticle();

  return (
    <Layout dark={true} active={"blog"}>
      <div className="w-full lg:h-full flex lg:flex-row flex-col xl:gap-5 gap-3 lg:pb-0 pb-2">
        <div className="w-full lg:h-full flex flex-col justify-between items-center xl:gap-5 gap-3">
          <h1 className="hidden">Blog</h1>
          <div
            id="blog-info"
            className="w-full h-fit flex justify-around md:text-base text-xs font-bold"
          >
            <Link className="" href={"/blog/all"}>
              <button className="w-fit transition-all bg-transparent hover:bg-blue-600 mix-blend-multiply border-2 border-blue-600 text-blue-600 hover:text-white rounded-lg p-2">
                All Articles
              </button>
            </Link>
            <Link href={"/blog/" + randomBlog.slug}>
              <button className="w-fit transition-all bg-transparent hover:bg-blue-600 mix-blend-multiply border-2 border-blue-600 text-blue-600 hover:text-white rounded-lg p-2">
                Random Article
              </button>
            </Link>
          </div>
          <div
            id="featured-post"
            className="lg:h-full w-full flex flex-col lg:flex-row xl:gap-5 justify-center items-center lg:order-first lg:justify-evenly"
          >
            <Trail>
              {featuredBlogs.map((blog) => {
                return <FeaturedBlogCard key={"feat" + blog.slug} {...blog} />;
              })}
            </Trail>
          </div>
        </div>
        <div className="w-full lg:max-w-[400px] md:flex-shrink flex-shrink-0 flex flex-col items-center lg:justify-between bg-gradient-to-b from-white rounded-3xl shadow-xl p-4">
          <h3 className="font-bold text-blue-600 md:text-3xl text-xl text-center mb-2">
            Recently Posted
          </h3>
          <div className="w-full lg:h-full gap-3 lg:gap-0 flex flex-col lg:justify-around">
            <HorizontalTrail>
              {recentBlogs.map((blog) => {
                return <BlogEntry {...blog} />;
              })}
            </HorizontalTrail>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogIndex;
