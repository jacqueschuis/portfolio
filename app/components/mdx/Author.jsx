"use client";

import { useRouter } from "next/navigation";

const Author = () => {
  const router = useRouter();

  return (
    <div className="w-full flex items-center justify-center gap-5">
      <img
        src="/blog/jp-logo.png"
        alt="Jacques pariseau logo"
        className="rounded-full md:h-32 h-24 transition-all hover:scale-105 hover:rotate-12 cursor-pointer"
        onClick={() => router.push("/")}
      />
    </div>
  );
};

export default Author;
