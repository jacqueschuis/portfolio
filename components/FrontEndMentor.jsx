import { frontEndMentor } from "@/data/data";
import FrontEndMentorEntry from "./FrontEndMentorEntry";

const FrontEndMentor = () => {
    return ( 
        <section className="w-full h-fit flex flex-col break-inside-avoid-column">
            <div className="container flex flex-col self-center">
            <h3 className="subheading font-bold text-3xl md:text-5xl mb-2 md:mb-5">Frontend Mentor</h3>
            <div className="container gap-10 justify-self-center self-center text-blue-dark">
                {frontEndMentor.map((item) => (
                    <FrontEndMentorEntry {...item} />
                ))}
            </div>
    
            </div>
        </section>
    

     );
}
 
export default FrontEndMentor;