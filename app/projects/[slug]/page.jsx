"use client";

import Layout from "@/app/components/Layout";
import { useParams, useRouter } from "next/navigation";
import { projects } from "@/data/data";
import Trail from "@/app/components/Trail";

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
    <Layout dark={true} active={"projects"} breadCrumb={project.name}>
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:p-10">
        <div className="flex flex-col w-full h-full md:justify-between mt-5 md:mt-0 gap-3 md:gap-0">
          <h1 className="font-bold 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-3xl text-center md:text-end">
            {project.name}
          </h1>
          <img
            src={project.screenshot}
            alt={project.summary}
            className="rounded-xl shadow-xl"
          />
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
        <div className="flex flex-col w-full items-center md:justify-center md:p-10">
          <ul className="list-disc list-inside font-bold 2xl:text-3xl xl:text-2xl lg:text-xl text-center md:text-right">
            {project.description.map((entry) => {
              return <li>{entry}</li>;
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetails;
