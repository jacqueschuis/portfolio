import FrontEndMentor from "./FrontEndMentor";
import PersonalProjects from "./PersonalProjects";

const Portfolio = () => {
    return (
        <section className="py-12 min-h-screen w-full" id="portfolio">
            <h2 className="section-heading font-bold text-5xl md:text-8xl mb-2 md:mb-5">Portfolio</h2>

            <PersonalProjects />
            <FrontEndMentor />
        </section>
     );
}
 
export default Portfolio;