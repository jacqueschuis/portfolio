import Layout from "../components/Layout";
import { getMostRecentBlogs } from "../utils/blog";
import Link from "next/link";

const BlogIndex = () => {
  const blogs = getMostRecentBlogs(5);

  return (
    <Layout dark={true} active={"blog"}>
      <h1>blogs</h1>
      <div className="py-2">
        {blogs.map((blog) => (
          <Link href={"/blog/" + blog.slug} passHref key={blog.slug}>
            <div className="py-2 flex justify-between align-middle gap-2">
              <div>
                <h3 className="text-lg font-bold">{blog.title}</h3>
                <p className="text-gray-400">{blog.description}</p>
              </div>
              <div className="my-auto text-gray-400">
                <p>{blog.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default BlogIndex;
