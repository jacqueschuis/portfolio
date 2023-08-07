import Link from "next/link";
import Layout from "../components/Layout";
import SectionHeading from "../home/components/pieces/SectionHeading";
import { projects } from "@/data/data";

const ProjectIndex = () => {
  return (
    <Layout dark={true} active={"projects"}>
      <ul>
        {projects.map((project, index) => {
          return <Link href={`/projects/${project.slug}`}>{project.name}</Link>;
        })}
      </ul>
    </Layout>
  );
};

export default ProjectIndex;
