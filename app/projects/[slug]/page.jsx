import Layout from "@/app/components/Layout";
import { projects } from "@/data/data";
import Trail from "@/app/components/Trail";
import HorizontalTrail from "@/app/components/HorizontalTrail";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const paths = projects.map((proj) => ({
    slug: proj.slug,
  }));

  return paths;
}

export async function generateMetadata({ params }) {
  const project = projects.find((proj) => proj.slug === params.slug);

  if (project) {
    return {
      title: "Jacques Pariseau | " + project.name,
      description: project.summary,
    };
  }
}

const ProjectDetails = ({ params }) => {
  const project = projects.find((proj) => proj.slug === params.slug);

  if (!project) {
    notFound();
  }
  return (
    <Layout dark={true} active={"projects"}>
      <div className="w-full md:h-full h-fit xl:grid xl:grid-cols-2 flex flex-col gap-8 ">
        <div className="flex flex-col w-full h-fit xl:h-full justify-center mt-5 md:mt-0 gap-3 md:gap-6">
          <HorizontalTrail>
            <h1 className="font-bold 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-center">
              {project.name}
            </h1>

            <a
              href={project.liveSite}
              className="cursor-pointer flex justify-center"
              target="_blank"
            >
              <img
                src={project.screenshot}
                alt={project.summary}
                className="rounded-xl xl:max-h-96 max-h-44 w-auto object-cover shadow-xl"
              />
            </a>
          </HorizontalTrail>
          <div className="w-full flex gap-8 justify-evenly font-bold">
            <Trail delay={250}>
              <a
                href={project.liveSite}
                target="_blank"
                className="hover:text-blue-600 transition-all inline-block hover:-translate-y-[.1rem]"
              >
                Live Site
              </a>
              <a
                href={project.repo}
                target="_blank"
                className="hover:text-blue-600 transition-all inline-block hover:-translate-y-[.1rem]"
              >
                GitHub
              </a>
            </Trail>
          </div>
        </div>
        <div className="flex flex-col w-full items-center justify-center md:p-10 px-5">
          <ul className="list-disc list-outside font-bold 2xl:text-3xl xl:text-2xl w-full">
            <HorizontalTrail>
              {project.description.map((entry, index) => {
                return (
                  <li key={`${project.slug}Description${index}`}>{entry}</li>
                );
              })}
            </HorizontalTrail>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetails;
