import { work } from "@/data/data";
import WorkEntry from "./WorkEntry";
let Scroll = require('react-scroll');
let Element = Scroll.Element;

const Work = () => {
    return ( 
        <Element name="work">
            <section className="py-12 mb-20  w-full flex flex-col" id="work">
                <h2 className="section-heading font-bold text-5xl md:text-8xl mb-2 md:mb-5">Work</h2>
                <div className="container lg:columns-2 xl:columns-3 gap-10 self-center text-blue-dark">
                             {work.map((item,index) => (
                                <WorkEntry key={`work${index}`} {...item} />
                            ))}
                </div>
            </section>
        </Element>
     );
}
 
export default Work;