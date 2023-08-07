"use client";

import Layout from "@/app/components/Layout";
import { useParams } from "next/navigation";
import { projects } from "@/data/data";

export function generateStaticParams() {
  return projects.map((proj) => ({
    slug: proj.slug,
  }));
}

const ProjectDetails = () => {
  const params = useParams();
  const { slug } = params;
  const project = projects.find((proj) => proj.slug === slug);
  return (
    <Layout dark={true} active={"projects"} breadCrumb={project.name}>
      <div className="w-full h-full grid grid-cols-2 gap-8 p-10">
        <div className="flex flex-col w-full justify-stretch">
          <h1 className="font-bold text-8xl">{project.name}</h1>
          <img
            src={project.screenshot}
            alt={project.summary}
            className="rounded-xl shadow-xl"
          />
        </div>
        <div className="flex flex-col w-full p-10 bg-orange-dark rounded-xl shadow-xl">
          <h2 className="text-5xl font-bold text-white">Description</h2>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetails;
