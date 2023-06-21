import FrontEndMentor from "./FrontEndMentor";
import PersonalProjects from "./PersonalProjects";
let Scroll = require('react-scroll');
let Element = Scroll.Element;

const Portfolio = () => {
    return (
        <Element name="s">
            <section className="py-12 mb-20 w-full flex flex-col" id="portfolio">
                <h2 className="section-heading font-bold text-5xl md:text-8xl mb-2 md:mb-5">deprecated</h2>
                <div className="container md:columns-2 gap-10 self-center">
                    <PersonalProjects />
                    <FrontEndMentor />
                </div>
            </section>
        </Element>
     );
}
 
export default Portfolio;