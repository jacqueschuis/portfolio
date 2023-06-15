import { work } from "@/data/data";
import WorkEntry from "./WorkEntry";
let Scroll = require('react-scroll');
let Element = Scroll.Element;

const Work = () => {
    return ( 
        <Element name="work">
            <section className="py-12 mb-20  w-full flex flex-col" id="work">
                <h2 className="section-heading font-bold text-5xl md:text-8xl mb-2 md:mb-5">Work</h2>
                <div className="container md:columns-2 gap-10 self-center text-blue-dark">
                    {work.map((item) => (
                        <WorkEntry {...item} />
                    ))}
                </div>
            </section>
        </Element>
     );
}
 
export default Work;