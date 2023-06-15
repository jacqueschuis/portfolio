import FrontEndMentor from "./FrontEndMentor";
import PersonalProjects from "./PersonalProjects";
let Scroll = require('react-scroll');
let Element = Scroll.Element;

const Portfolio = () => {
    return (
        <Element name="portfolio">
            <section className="py-12 mb-20  w-full" id="portfolio">
                <h2 className="section-heading font-bold text-5xl md:text-8xl mb-2 md:mb-5">Portfolio</h2>

                <PersonalProjects />
                <FrontEndMentor />
            </section>
        </Element>
     );
}
 
export default Portfolio;