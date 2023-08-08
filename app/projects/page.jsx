"use client";

import Link from "next/link";
import Layout from "../components/Layout";
import { projects } from "@/data/data";
import HorizontalTrail from "../components/HorizontalTrail";
import { useState } from "react";

const ProjectIndex = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [liveSiteUrl, setLiveSiteUrl] = useState("");
  const [repoUrl, setRepoUrl] = useState("");
  const [showUrl, setShowUrl] = useState("");
  const [description, setDescription] = useState("");
  const [tools, setTools] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <Layout dark={true} active={"projects"}>
      <div className="w-full h-full flex items-center justify-center text-blue-dark">
        <div className="md:w-1/2 hidden md:flex flex-col items-center justify-center gap-8">
          {imgUrl && liveSiteUrl && description && (
            <HorizontalTrail>
              <div className="flex w-full gap-8 justify-between text-orange-dark">
                {tools.map((tool, index) => {
                  return <span key={`${tool}${index}`}>{tool}</span>;
                })}
              </div>
              <a
                href={liveSiteUrl}
                className="cursor-pointer w-full flex justify-center"
                target="_blank"
              >
                <img
                  src={imgUrl}
                  alt=""
                  className="object-cover rounded-xl shadow-xl transition-all w-auto xl:h-96 md:h-64"
                />
              </a>
              <p>{description}</p>
              <div className="w-full flex gap-8 justify-evenly font-bold">
                <a
                  href={liveSiteUrl}
                  target="_blank"
                  className="hover:text-blue-light transition-all inline-block hover:-translate-y-[.1rem]"
                >
                  Live Site
                </a>
                <a
                  href={repoUrl}
                  target="_blank"
                  className="hover:text-blue-light transition-all inline-block hover:-translate-y-[.1rem]"
                >
                  Repo
                </a>
                <Link
                  href={showUrl}
                  className="hover:text-blue-light transition-all inline-block hover:-translate-y-[.1rem]"
                >
                  More Information
                </Link>
              </div>
            </HorizontalTrail>
          )}
        </div>

        <ul className="md:w-1/2 w-full font-bold 2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl text-center md:text-right">
          <HorizontalTrail>
            {projects.map((project, index) => {
              return (
                <Link
                  className={`md:hover:-translate-x-5 hover:translate-x-2 hover:text-blue-light inline-block transition-all ${
                    activeIndex === index
                      ? "text-blue-light md:-translate-x-5"
                      : "md:hover:-translate-x-5 hover:translate-x-2 hover:text-blue-light"
                  }`}
                  href={`/projects/${project.slug}`}
                  onMouseOver={() => {
                    setImgUrl(project.screenshot);
                    setLiveSiteUrl(project.liveSite);
                    setDescription(project.summary);
                    setActiveIndex(index);
                    setRepoUrl(project.repo);
                    setTools(project.tools);
                    setShowUrl(`/projects/${project.slug}`);
                  }}
                  key={project.slug}
                >
                  <li>
                    <span className="font-normal text-sm md:text-lg">
                      {`${index + 1}. `}
                    </span>
                    {project.name}
                  </li>
                </Link>
              );
            })}
          </HorizontalTrail>
        </ul>
      </div>
    </Layout>
  );
};

export default ProjectIndex;
