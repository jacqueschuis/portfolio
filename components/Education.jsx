import { education } from "@/data/data";
import EducationEntry from "./EducationEntry";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
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
                        <EducationEntry key={`${uuidv4()}`} {...item} />
                    ))}
                </div>
            </section>
        </Element>
     );
}
 
export default Education;