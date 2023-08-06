import { work } from "@/data/data";
import Section from "./pieces/Section";
import * as Scroll from "react-scroll";
let Element = Scroll.Element;

const WorkEntry = ({ place, location, title, date, description }) => {
  return (
    <div className="rounded-3xl h-fit flex flex-col justify-between shadow-lg box-border p-6 mb-5 break-inside-avoid">
      <div className="flex justify-between items-center">
        <h3 className="w-full text-2xl font-bold">{title}</h3>
      </div>
      <p className="font-normal text-base italic">{date}</p>
      <div className="flex lg:flex-row flex-col justify-between text-blue-light mb-2">
        <p>{place}</p>
        <p>{location}</p>
      </div>
      <div className="w-full bg-orange-dark box-border rounded-xl text-white transition-all p-2">
        <div className="flex justify-between items-center">
          <ul className="list-inside list-disc mt-2">
            {description.map((entry, index) => (
              <li className="mb-1 pl-5" key={`${place}Desc${index}`}>
                {entry}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <Element name="work">
      <Section>
        <h2 className="section-heading font-bold text-5xl md:text-8xl mb-2 md:mb-5">
          Work
        </h2>
        <div className="container lg:columns-2 xl:columns-3 gap-10 self-center text-blue-dark">
          {work.map((item, index) => (
            <WorkEntry key={`work${index}`} {...item} />
          ))}
        </div>
      </Section>
    </Element>
  );
};

export default Work;
