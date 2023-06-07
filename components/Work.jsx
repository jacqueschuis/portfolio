import { work } from "@/data/data";
import WorkEntry from "./WorkEntry";

const Work = () => {
    return ( 
        <section className="py-12 min-h-screen w-full flex flex-col" id="work">
            <h2 className="section-heading font-bold text-5xl md:text-8xl mb-2 md:mb-5">Work</h2>
            <div className="container lg:columns-2 2xl:columns-3 gap-10 self-center text-blue-dark">
                {work.map((item) => (
                    <WorkEntry {...item} />
                ))}
            </div>
        </section>
     );
}
 
export default Work;