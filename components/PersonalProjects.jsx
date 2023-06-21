import { personalProjects } from "@/data/data";
import PersonalProjectEntry from "./PersonalProjectEntry";

const PersonalProjects = () => {
    return ( 
        <section className="w-full h-fit flex flex-col break-inside-avoid-column">
            <div className="container flex flex-col self-center">
                <h3 className="subheading font-bold pb-1 text-3xl md:text-5xl mb-2 md:mb-5">Personal Projects</h3>
                <div className="container h-full gap-10 self-center text-blue-dark">
                    {personalProjects.map((item) => (
                        <PersonalProjectEntry {...item} />
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default PersonalProjects;