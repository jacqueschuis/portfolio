import Layout from "@/app/components/Layout";
import Link from "next/link";

const NotFound = () => {
  return (
    <Layout dark={true}>
      <div className="w-full h-full flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center justify-center text-blue-dark">
          <h1 className="font-bold text-9xl">404</h1>
          <h2 className="text-4xl">not found</h2>
        </div>
        <Link href="/">
          <button className="border-2 border-blue-dark text-blue-dark px-8 py-2 rounded-lg transition-all hover:bg-blue-dark hover:text-white hover:mix-blend-multiply">
            Home
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
