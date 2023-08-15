"use client";

import { useRouter } from "next/navigation";

const Author = () => {
  const router = useRouter();

  return (
    <div className="w-full flex items-center justify-center gap-5">
      <img
        src="/blog/jp-logo.png"
        alt=""
        className="peer rounded-full md:h-32 h-24 transition-all hover:rotate-12 cursor-pointer"
        onClick={() => router.push("/")}
      />
    </div>
  );
};

export default Author;
