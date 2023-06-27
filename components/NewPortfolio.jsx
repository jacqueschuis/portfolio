let Scroll = require('react-scroll');
let Element = Scroll.Element;
import { personalProjects, frontEndMentor } from "@/data/data";
import PersonalProjectEntry from "./PersonalProjectEntry";
import FrontEndMentorEntry from "./FrontEndMentorEntry";

const Portfolio = () => {
    return ( 
        <Element name="portfolio">
        <section className="py-12 mb-20 w-full flex flex-col" id="portfolio">
            <h2 className="section-heading font-bold text-5xl md:text-8xl mb-2 md:mb-5">Portfolio</h2>
            <div className="container lg:columns-2 xl:columns-3 gap-10 self-center">
                <div className="md:text-center subheading">
                    <h3 className='font-bold text-3xl md:text-5xl mb-2'>Personal Projects</h3>
                    <p className="italic text-xs">Projects conceived of and built from scratch by me</p>
                </div>
                    <ul className="mb-5">
                       { personalProjects.map((entry, index) => (
                            <li key={`persProj${index}`}>
                                <PersonalProjectEntry {...entry} />
                            </li>
                        ))}
                    </ul>

                    <hr className="w-2/3 h-1 mx-auto my-8 bg-grey border-0 rounded md:my-10"/>

                    <div className="md:text-center subheading break-inside-avoid lg:break-before-column xl:break-before-auto">
                        <h3 className='font-bold text-3xl md:text-5xl mb-2'>Frontend Mentor</h3>
                        <p className="italic text-xs">Front-end challenges built from scratch by me, adhering to Frontend Mentor's design and functionality brief</p>
                    </div>
                    <ul className="mb-5">
                       { frontEndMentor.map((entry, index) => (
                            <li key={`frontEndMentor${index}`}>
                                <FrontEndMentorEntry {...entry} />
                            </li>
                        ))}
                    </ul>
            
            </div>
        </section>
    </Element>
     );
}
 
export default Portfolio;