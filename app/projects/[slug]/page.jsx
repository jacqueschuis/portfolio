"use client";

import Layout from "@/app/components/Layout";
import { useParams } from "next/navigation";
import { projects } from "@/data/data";

const ProjectDetails = () => {
  const params = useParams();
  const { slug } = params;
  console.log(projects);
  const project = projects.find((proj) => proj.slug === slug);
  return (
    <Layout dark={true} active={"projects"} breadCrumb={project.name}>
      <h1>{project.name}</h1>
    </Layout>
  );
};

export default ProjectDetails;
