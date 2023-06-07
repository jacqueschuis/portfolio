
import { education } from "@/data/data";
import EducationEntry from "./EducationEntry";

const Education = () => {

    return ( 

        <section id="education" className="py-12 min-h-screen w-full flex flex-col">
            <h2 className="section-heading font-bold text-5xl md:text-8xl mb-2 md:mb-5">Education</h2>
            <div className="container md:columns-2 gap-10 self-center text-blue-dark">
                {education.map((item) => (
                    <EducationEntry {...item} />
                ))}
            </div>
        </section>
     );
}
 
export default Education;