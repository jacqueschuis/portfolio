"use client";

import { useState } from "react";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Layout from "../components/Layout";

const Stack = ({ name, icon }) => {
  return (
    <div className="tech flex flex-col items-center justify-center carousel-item mr-4 relative gap-2 px-3 py-2">
      <i className={`${icon} text-5xl`}></i>
      <p className="hidden text-light absolute bottom-0 text-sm text-center text-blue-light">
        {name}
      </p>
    </div>
  );
};

const StackCarousel = () => {
  const techStack = [
    { name: "react", icon: "devicon-react-original" },
    { name: "next js", icon: "devicon-nextjs-original" },
    { name: "node js", icon: "devicon-nodejs-plain" },
    { name: "tailwind", icon: "devicon-tailwindcss-plain" },
    { name: "bootstrap", icon: "devicon-bootstrap-plain" },
    { name: "javascript", icon: "devicon-javascript-plain" },
    { name: "git", icon: "devicon-git-plain" },
    { name: "github", icon: "devicon-github-original" },
    { name: "mongodb", icon: "devicon-mongodb-plain" },
    { name: "npm", icon: "devicon-npm-original-wordmark" },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    [Autoplay({ delay: 2000 }, (emblaRoot) => emblaRoot.parentElement)]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="stack mt-5 w-1/2 relative ps-10 pe-10">
      <div className="stack-carousel w-full overflow-hidden" ref={emblaRef}>
        <div className="stack-carousel-container flex select-none -ml-2.5">
          {techStack.map((skill) => (
            <Stack key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
      <button
        className="stack-carousel__prev cursor-pointer absolute left-0 w-fit h-fit z-2 top-1/2 -translate-y-2/4"
        aria-label="previous"
        onClick={scrollPrev}
      >
        <svg className="w-8 h-8" viewBox="137.718 -1.001 366.563 644">
          <path
            fill="#264653"
            d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"
          />
        </svg>
      </button>
      <button
        className="stack-carousel__next cursor-pointer absolute right-0 w-fit h-fit z-2 top-1/2 -translate-y-2/4"
        aria-label="next"
        onClick={scrollNext}
      >
        <svg
          className="w-8 h-8 rotate-180"
          viewBox="137.718 -1.001 366.563 644"
        >
          <path
            fill="#264653"
            d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"
          />
        </svg>
      </button>
    </div>
  );
};

const ProfileComponent = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <p>
          I'm Jacques Pariseau, a self taught{" "}
          <span className="font-bold">web-developer</span> based in New England.
        </p>
        <p>
          I've worked <span className="font-bold">full-stack</span>, but my goal
          is to design and create beautiful UIs as a{" "}
          <span className="font-bold">front-end developer.</span>
        </p>
        <p>
          I'm a{" "}
          <span className="font-bold">
            marketing professional, graphic designer,
          </span>{" "}
          and academically-trained{" "}
          <span className="font-bold">art historian</span>.
        </p>
        <p>
          I love learning new things—languages, musical instruments, cooking—but
          recently, I've been learning:
        </p>
        <StackCarousel />
      </div>
    </>
  );
};

const CVPage = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <Layout dark={true} active={"cv"}>
      <div className="w-full h-full flex">
        <div className="w-1/6 h-full flex flex-col justify-around">
          <button>Profile</button>
          <button>Education</button>
          <button>Work</button>
        </div>
        <div className="w-5/6 h-full flex flex-col justify-center text-blue-dark">
          <ProfileComponent />
        </div>
      </div>
    </Layout>
  );
};

export default CVPage;
