import Layout from "../components/Layout";
import {
  getMostRecentPublishedBlogs,
  getRandomFeaturedBlogs,
  getRandomPublishedArticle,
} from "../utils/blog";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import HorizontalTrail from "../components/HorizontalTrail";
import Trail from "../components/Trail";

const blurDataURLPath = "/utils/blur.png";

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
    <div className="w-full h-fit lg:h-full bg-gradient-to-b m-2 from-white rounded-3xl shadow-xl 2xl:p-12 lg:p-8 p-4 flex flex-col justify-center relative">
      <div id="top" className="h-full flex flex-col">
        <div className="w-full flex justify-between 2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs text-blue-600 mb-2 2xl:mb-5">
          <p className="font-bold text-orange-600">Featured Article</p>
          <p>
            {lastEdited ? (
              <>{dayjs(lastEdited).format("DD MMM YY")}</>
            ) : (
              <>{dayjs(publishedAt).format("DD MMM YY")}</>
            )}
          </p>
        </div>
        <div className="overflow-hidden rounded-t-3xl w-full lg:h-full relative md:min-h-[250px] min-h-[100px]">
          <Link href={"/blog/" + slug}>
            <Image
              fill
              src={featureImage}
              alt={title + " image"}
              placeholder="blur"
              blurDataURL={blurDataURLPath}
              className="object-cover object-center"
            />
          </Link>
        </div>
      </div>
      <div id="bottom" className="h-full 2xl:mt-5 mt-3 flex flex-col">
        <Link href={"/blog/" + slug}>
          <h2 className="font-bold 2xl:text-6xl lg:text-4xl md:text-2xl text-base text-blue-700 hover:text-orange-600 transition-all">
            {title}
          </h2>
        </Link>
        <p className="2xl:text-xl md:text-lg 2xl:my-5 my-2">{description}</p>
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
    <div className="w-full min-h-fit flex justify-center my-2 ">
      <div className="justify-center lg:basis-1/2 items-center hidden lg:flex h-full w-full">
        <Link
          href={"/blog/" + slug}
          className="h-28 w-28 aspect-square rounded-lg shadow-lg overflow-hidden relative"
        >
          <Image
            fill
            src={featureImage}
            alt={title + " image"}
            placeholder="blur"
            blurDataURL={blurDataURLPath}
            className="object-cover"
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
  const recentBlogs = getMostRecentPublishedBlogs(4);
  const featuredBlogs = getRandomFeaturedBlogs(2);
  const randomBlog = getRandomPublishedArticle();

  if (recentBlogs && featuredBlogs && randomBlog) {
    return (
      <Layout dark={true} active={"blog"}>
        <div className="w-full lg:h-full flex lg:flex-row flex-col xl:gap-5 gap-3 lg:pb-0 pb-2">
          <h1 className="hidden">Blog</h1>
          <div
            id="featured-post"
            className="lg:h-full w-full flex flex-col 2xl:flex-row 2xl:gap-5 gap-3 justify-center items-center lg:justify-evenly"
          >
            <Trail>
              {featuredBlogs.map((blog) => {
                return <FeaturedBlogCard key={"feat" + blog.slug} {...blog} />;
              })}
            </Trail>
          </div>
          <div className="w-full lg:max-w-[400px] md:flex-shrink flex-shrink-0 flex flex-col items-center lg:justify-between bg-gradient-to-b from-white rounded-3xl shadow-xl p-4">
            <h3 className="font-bold text-blue-600 md:text-3xl text-xl text-center mb-2 lg:mb-6">
              Recently Posted
            </h3>
            <div className="w-full lg:h-full gap-3 flex flex-col ">
              <HorizontalTrail>
                {recentBlogs.map((blog) => {
                  return <BlogEntry key={"blog" + blog.slug} {...blog} />;
                })}
              </HorizontalTrail>
            </div>
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
          </div>
        </div>
      </Layout>
    );
  }
  return (
    <Layout dark={true} active={"blog"}>
      <div className="w-full h-full flex items-center justify-center">
        <h1>Coming soon</h1>
      </div>
    </Layout>
  );
};

export default BlogIndex;
