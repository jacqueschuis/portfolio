"use client";

import Layout from "@/app/components/Layout";
import { useParams, useRouter } from "next/navigation";
import { projects } from "@/data/data";
import Trail from "@/app/components/Trail";
import HorizontalTrail from "@/app/components/HorizontalTrail";

export function generateStaticParams() {
  return projects.map((proj) => ({
    slug: proj.slug,
  }));
}

const ProjectDetails = () => {
  const router = useRouter();
  const params = useParams();
  const { slug } = params;
  const project = projects.find((proj) => proj.slug === slug);
  if (!project) return router.push("/404");
  return (
    <Layout dark={true} active={"projects"}>
      <div className="w-full md:h-full grid grid-cols-1 lg:grid-cols-2 md:gap-8 md:p-10 text-blue-dark">
        <div className="flex flex-col w-full md:h-full h-fit md:justify-center mt-5 md:mt-0 gap-3 md:gap-10 mb-5">
          <HorizontalTrail>
            <h1 className="font-bold 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-center">
              {project.name}
            </h1>
            <div className="flex justify-evenly md:text-2xl">
              {project.tools.map((tool) => {
                return <span>{tool}</span>;
              })}
            </div>
            <a
              href={project.liveSite}
              className="cursor-pointer w-full h-fit"
              target="_blank"
            >
              <img
                src={project.screenshot}
                alt={project.summary}
                className="rounded-xl shadow-xl"
              />
            </a>
          </HorizontalTrail>
          <div className="flex justify-evenly md:text-2xl">
            <Trail>
              <a
                href={project.liveSite}
                target="_blank"
                className="hover:text-blue-light transition-all inline-block hover:-translate-y-[.1rem]"
              >
                Live Site
              </a>
              <a
                href={project.repo}
                target="_blank"
                className="hover:text-blue-light transition-all inline-block hover:-translate-y-[.1rem]"
              >
                GitHub
              </a>
            </Trail>
          </div>
        </div>
        <div className="flex flex-col w-full md:items-center md:justify-center md:p-10">
          <ul className="list-disc list-outside font-bold 2xl:text-3xl xl:text-2xl lg:text-xl ">
            <HorizontalTrail>
              {project.description.map((entry) => {
                return <li>{entry}</li>;
              })}
            </HorizontalTrail>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetails;
