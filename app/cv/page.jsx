"use client";

import { useState } from "react";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Layout from "../components/Layout";
import Link from "next/link";
import HorizontalTrail from "../components/HorizontalTrail";
import { education, work } from "@/data/data";

const Stack = ({ name, icon }) => {
  return (
    <div className="tech group flex flex-col items-center justify-center carousel-item mr-4 relative gap-2 px-3 py-2">
      <i className={`${icon} text-5xl`}></i>
      <p className="text-light hidden group-hover:inline absolute bottom-0 text-sm text-center">
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
    <div className="stack mt-5 w-full xl:w-1/2 relative ps-10 pe-10">
      <div className="stack-carousel w-full overflow-hidden" ref={emblaRef}>
        <div className="stack-carousel-container flex select-none -ml-2.5">
          {techStack.map((skill) => (
            <Stack key={skill.name} {...skill} />
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

const ProfileComponent = ({ setActiveIndex }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <HorizontalTrail>
        <p>
          I'm Jacques Pariseau, a self taught{" "}
          <Link
            href={"/projects"}
            className="cursor-pointer font-bold text-blue-dark transition-all hover:text-blue-light"
          >
            web-developer
          </Link>{" "}
          based in New England.
        </p>
        <p>
          I've worked full-stack, but my goal is to design and create beautiful
          UIs as a{" "}
          <Link
            href={"/projects"}
            className="cursor-pointer font-bold text-blue-dark transition-all hover:text-blue-light"
          >
            front-end developer.
          </Link>
        </p>
        <p>
          I'm a{" "}
          <span
            className="cursor-pointer font-bold text-blue-dark transition-all hover:text-blue-light"
            onClick={() => setActiveIndex(3)}
          >
            marketing professional
          </span>
          ,
          <span
            className="cursor-pointer font-bold text-blue-dark transition-all hover:text-blue-light"
            onClick={() => setActiveIndex(3)}
          >
            {" "}
            graphic designer
          </span>
          , and academically-trained{" "}
          <span
            className="cursor-pointer font-bold text-blue-dark transition-all hover:text-blue-light"
            onClick={() => setActiveIndex(2)}
          >
            art historian
          </span>
          .
        </p>
        <p>
          I love learning new things—languages, musical instruments, cooking—but
          recently, I've been learning:
        </p>
      </HorizontalTrail>
      <StackCarousel />
    </div>
  );
};

const EducationEntry = ({ institution, degree, subject, years, location }) => {
  return (
    <div className="w-full text-center">
      <p>{years}</p>
      <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold">
        {degree}
      </p>
      <p className="">in {subject}</p>
      <p>
        {institution}, {location}
      </p>
    </div>
  );
};

const EducationComponent = () => {
  return (
    <div className="w-full h-full md:grid md:grid-cols-2 gap-5 flex flex-col">
      <HorizontalTrail>
        {education.map((item, index) => {
          return (
            <EducationEntry key={`ed${item.institution}${index}`} {...item} />
          );
        })}
      </HorizontalTrail>
    </div>
  );
};

const WorkComponent = () => {};

const CVPage = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <Layout dark={true} active={"cv"}>
      <div className="w-full h-full flex flex-col gap-8 xl:grid xl:grid-cols-6 text-blue-dark">
        <div className="xl:h-full flex xl:flex-col xl:items-end justify-around mt-3 xl:mt-0">
          <button
            className={`xl:text-3xl lg:text-2xl md:text-1xl font-bold transition-all ${
              activeIndex === 1
                ? "xl:-translate-x-3 text-blue-light"
                : "xl:hover:-translate-x-3 hover:text-blue-light"
            }`}
            onClick={() => setActiveIndex(1)}
          >
            Profile
          </button>
          <button
            className={`xl:text-3xl lg:text-2xl md:text-1xl font-bold transition-all ${
              activeIndex === 2
                ? "xl:-translate-x-3 text-blue-light"
                : "xl:hover:-translate-x-3 hover:text-blue-light"
            }`}
            onClick={() => setActiveIndex(2)}
          >
            Education
          </button>
          <button
            className={`xl:text-3xl lg:text-2xl md:text-1xl font-bold transition-all ${
              activeIndex === 3
                ? "xl:-translate-x-3 text-blue-light"
                : "xl:hover:-translate-x-3 hover:text-blue-light"
            }`}
            onClick={() => setActiveIndex(3)}
          >
            Work
          </button>
        </div>
        <div className="xl:col-span-5 h-full flex flex-col lg:justify-center text-blue-dark">
          {activeIndex === 1 && (
            <HorizontalTrail>
              <ProfileComponent setActiveIndex={setActiveIndex} />
            </HorizontalTrail>
          )}
          {activeIndex === 2 && (
            <HorizontalTrail>
              <EducationComponent />
            </HorizontalTrail>
          )}
          {activeIndex === 3 && (
            <HorizontalTrail>
              <WorkComponent />
            </HorizontalTrail>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CVPage;
