import { education } from "@/data/data";
import EducationEntry from "./EducationEntry";
import { useState } from "react";
let Scroll = require('react-scroll');
let Element = Scroll.Element;

const Education = () => {
    const[isFocus, setIsFocus] = useState(false);

    return ( 
        <Element name="education">
            <section id="education" className="py-12 mb-20 w-full flex flex-col">
                <h2 className="section-heading font-bold text-5xl md:text-8xl mb-2 md:mb-5">Education</h2>
                <div className="container md:columns-2 gap-10 self-center text-blue-dark">
                    {education.map((item) => (
                        <EducationEntry {...item} />
                    ))}
                </div>
            </section>
        </Element>
     );
}
 
export default Education;