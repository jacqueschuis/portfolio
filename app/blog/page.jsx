import Layout from "../components/Layout";
import {
  getMostRecentFeaturedBlogs,
  getMostRecentPublishedBlogs,
} from "../utils/blog";
import Link from "next/link";
import dayjs from "dayjs";
import HorizontalTrail from "../components/HorizontalTrail";

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
        <div className="w-full text-xs text-blue-600">
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
  featureImage,
  featuredTags,
}) => {
  let tags;
  if (featuredTags) {
    tags = featuredTags.split(",");
  }
  return (
    <div className="w-full h-full bg-gradient-to-b from-white rounded-3xl shadow-xl 2xl:p-12 lg:p-8 p-4 flex flex-col justify-center relative">
      <div id="top" className="basis-1/2 flex flex-col">
        <div className="w-full flex justify-between md:text-xl text-xs text-blue-600 mb-5">
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
          className="h-full object-cover rounded-t-3xl"
        />
      </div>
      <div id="bottom" className="basis-1/2 mt-5 flex flex-col">
        <h2 className="font-bold xl:text-6xl lg:text-4xl md:text-2xl text-base text-blue-800">
          {title}
        </h2>
        <p className="2xl:text-2xl lg:text-lg my-4">{description}</p>
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
        <img
          src={featureImage}
          alt=""
          className="h-28 w-28 aspect-square rounded-lg object-cover"
        />
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
          <h3 className="font-bold text-3xl hover:text-blue-600 transition-all text-blue-800">
            {title}
          </h3>
        </Link>
      </div>
    </div>
  );
};

const BlogIndex = () => {
  const blogs = getMostRecentPublishedBlogs(6);
  const featuredBlogs = getMostRecentFeaturedBlogs(2);

  const randomFeatureIndex = Math.floor(Math.random() * featuredBlogs.length);
  const randomRecentIndex = Math.floor(Math.random() * blogs.length);

  const featuredBlog = featuredBlogs[randomFeatureIndex];
  const randomRecentBlog = blogs[randomRecentIndex];

  return (
    <Layout dark={true} active={"blog"}>
      <div className="w-full h-full flex md:flex-row flex-col gap-5">
        <div className="w-full h-full flex flex-col gap-10">
          <div
            id="blog-info"
            className="bg-blue-700 basis-1/4 w-full h-full"
          ></div>
          <div
            id="featured-post"
            className="md:basis-3/4 h-fullw-full flex flex-col md:flex-row xl:gap-10 gap-3 justify-evenly"
          >
            {featuredBlogs.map((blog) => {
              return <FeaturedBlogCard {...blog} />;
            })}
          </div>
        </div>
        <div className="w-full lg:max-w-[400px] sm:min-w-[400px] h-full flex flex-col items-center justify-between bg-gradient-to-b from-white rounded-3xl shadow-xl p-4">
          <h3 className="font-bold text-blue-600 md:text-3xl text-xl text-center mb-2">
            Recently Posted
          </h3>
          <div className="w-full h-full flex flex-col justify-around">
            <HorizontalTrail>
              {blogs.map((blog) => {
                return <BlogEntry {...blog} />;
              })}
            </HorizontalTrail>
          </div>
        </div>
      </div>
    </Layout>
  );

  // return (
  //   <Layout dark={true} active={"blog"}>
  //     <div className="w-full h-full flex flex-col pb-96 items-start justify-start gap-10">
  //       <div className="w-full lg:h-full md:justify-center items-center lg:flex-row flex-col flex gap-5">
  //         <div className="w-full h-full flex flex-col md:justify-center gap-8 text-base md:text-xl">
  //           <h1 className="lg:text-6xl md:text-3xl text-3xl font-bold lg:mb-10 mb-2 text-center">
  //             Blog
  //           </h1>
  //           <p>
  //             I'm a self-taught developer who is always growing my skill set. I
  //             want to document my growth as a front-end engineer for my own
  //             sake, but hopefully other developers can learn along with me.
  //           </p>
  //           <p className="w-full">
  //             Check out my{" "}
  //             <Link
  //               className="font-bold transition-all text-blue-700 hover:text-blue-600"
  //               href={"/blog/" + featuredBlog.slug}
  //             >
  //               featured article
  //             </Link>
  //             , one of my{" "}
  //             <Link
  //               className="font-bold transition-all text-blue-700 hover:text-blue-600"
  //               href={"/blog/" + randomRecentBlog.slug}
  //             >
  //               most recent posts
  //             </Link>
  //             , or see all articles{" "}
  //             <Link
  //               className="font-bold transition-all text-blue-700 hover:text-blue-600"
  //               href="/blog/all"
  //             >
  //               here.
  //             </Link>
  //           </p>
  //         </div>
  //         <div
  //           className="w-full h-full flex flex-col justify-center lg:items-start items-center"
  //           id="featured-blog"
  //         >
  //           <FeaturedBlogCard {...featuredBlog} />
  //         </div>
  //       </div>
  //       <div className="w-full flex-auto min-h-screen flex flex-col xl:items-start items-center">
  //         <h2 className="font-bold text-blue-600 md:text-3xl text-2xl mb-3 lg:mb-8">
  //           Most Recent Blogs
  //         </h2>
  //         <div className="flex flex-wrap min-h-screen flex-1 justify-center items-center w-full gap-5">
  //           {blogs.map((blog) => (
  //             <BlogCard key={blog.slug} {...blog} />
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </Layout>
  // );
};

export default BlogIndex;
