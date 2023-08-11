import Layout from "@/app/components/Layout";
import Link from "next/link";
import HorizontalTrail from "./components/HorizontalTrail";

export const metadata = {
  title: "Jacques Pariseau | 404",
  description: "That page could not be located",
};

const NotFound = () => {
  return (
    <Layout dark={true}>
      <div className="w-full h-full flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center text-center justify-center text-blue-800">
          <HorizontalTrail>
            <h1 className="font-bold text-9xl">404</h1>
            <h2 className="text-4xl">not found</h2>
          </HorizontalTrail>
        </div>
        <Link href="/">
          <button className="border-2 border-blue-800 text-blue-800 px-8 py-2 rounded-lg transition-all hover:bg-blue-800 hover:text-white hover:mix-blend-multiply">
            Home
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
