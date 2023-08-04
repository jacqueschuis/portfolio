let Scroll = require("react-scroll");
let Element = Scroll.Element;
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { personalProjects, frontEndMentor } from "@/data/data";
import Section from "./pieces/Section";

const PersonalProjectEntry = ({
  name,
  screenshot,
  repo,
  liveSite,
  description,
  tools,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [expand, expandApi] = useSpring(() => ({
    maxHeight: isExpanded ? "1000px" : "0px",
    opacity: isExpanded ? 1 : 0,
    overflow: "hidden",
  }));

  const [rotate, rotateApi] = useSpring(() => ({
    rotate: isExpanded ? "180deg" : "0deg",
  }));

  const handleClick = () => {
    rotateApi.start({
      rotate: isExpanded ? "0deg" : "180deg",
    });
    expandApi.start({
      maxHeight: isExpanded ? "0px" : "1000px",
      opacity: isExpanded ? 0 : 1,
    });
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="rounded-3xl flex flex-col justify-between shadow-lg box-border p-6 mb-5 break-inside-avoid-column">
      <div className="flex justify-between items-center">
        <a href={liveSite} target="_blank">
          <h3 className="text-blue-dark w-full transition-all cursor-pointer text-2xl flex flex-col font-bold mb-2 hover:text-blue-light">
            {name}
          </h3>
        </a>
        <a href={repo} target="_blank">
          <p className="transition-all text-blue-light hover:text-blue-dark">
            GitHub
          </p>
        </a>
      </div>
      <a className="self-center" href={liveSite} target="_blank">
        <img src={screenshot} className="rounded-3xl mb-2" />
      </a>

      <div className="flex justify-between text-blue-light mb-2 text-sm">
        <p className="font-bold text-blue-dark">Tools:</p>
        <div className="flex flex-wrap justify-end w-full gap-5 box-border pl-3">
          {tools.map((entry) => (
            <p key={`${name}${entry}`}>{entry}</p>
          ))}
        </div>
      </div>

      <div
        className="w-full bg-orange-dark box-border rounded-xl text-white transition-all hover:bg-orange p-2 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex justify-between items-center">
          <p className="font-bold ml-4">{isExpanded ? `Hide` : `Details`}</p>
          <animated.svg
            style={rotate}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="box-border mr-3 w-5 flex items-center justify-center"
            viewBox="0 0 16 16"
          >
            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
          </animated.svg>
        </div>

        <animated.div style={expand}>
          <ul className="list-inside list-disc mt-2" key="personalProject">
            {description.map((entry, index) => (
              <li className="mb-1 pl-5" key={`${name}Desc${index}`}>
                {entry}
              </li>
            ))}
          </ul>
        </animated.div>
      </div>
    </div>
  );
};

const FrontEndMentorEntry = ({
  name,
  screenshot,
  repo,
  liveSite,
  description,
  tools,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [expand, expandApi] = useSpring(() => ({
    maxHeight: isExpanded ? "1000px" : "0px",
    opacity: isExpanded ? 1 : 0,
    overflow: "hidden",
  }));

  const [rotate, rotateApi] = useSpring(() => ({
    rotate: isExpanded ? "180deg" : "0deg",
  }));

  const handleClick = () => {
    rotateApi.start({
      rotate: isExpanded ? "0deg" : "180deg",
    });
    expandApi.start({
      maxHeight: isExpanded ? "0px" : "1000px",
      opacity: isExpanded ? 0 : 1,
    });
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="rounded-3xl flex flex-col justify-between shadow-lg box-border p-6 mb-5 break-inside-avoid-column">
      <div className="flex justify-between items-center">
        <a href={liveSite} target="_blank">
          <h3 className="text-blue-dark w-full transition-all cursor-pointer text-2xl font-bold mb-2 hover:text-blue-light">
            {name}
          </h3>
        </a>
        <a href={repo} target="_blank">
          <p className="transition-all text-blue-light hover:text-blue-dark">
            GitHub
          </p>
        </a>
      </div>

      <a className="self-center" href={liveSite} target="_blank">
        <img src={screenshot} className="rounded-3xl mb-2" />
      </a>

      <div className="flex justify-between text-blue-light mb-2 text-sm">
        <p className="font-bold text-blue-dark">Tools:</p>
        <div className="flex flex-wrap justify-end w-full gap-5 box-border pl-3">
          {tools.map((entry) => (
            <p key={`${name}${entry}`}>{entry}</p>
          ))}
        </div>
      </div>

      <div
        className="w-full bg-orange-dark box-border rounded-xl text-white transition-all hover:bg-orange p-2 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex justify-between items-center">
          <p className="font-bold ml-4">{isExpanded ? `Hide` : `Details`}</p>
          <animated.svg
            style={rotate}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="box-border mr-3 w-5 flex items-center justify-center"
            viewBox="0 0 16 16"
          >
            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
          </animated.svg>
        </div>

        <animated.div style={expand}>
          <ul className="list-inside list-disc mt-2" key="frontEndMentor">
            {description.map((entry, index) => (
              <li className="mb-1 pl-5" key={`${name}Desc${index}`}>
                {entry}
              </li>
            ))}
          </ul>
        </animated.div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <Element name="portfolio">
      <Section>
        <h2 className="section-heading font-bold text-5xl md:text-8xl mb-2 md:mb-5">
          Portfolio
        </h2>
        <div className="container lg:columns-2 xl:columns-3 gap-10 self-center">
          <div className="md:text-center subheading">
            <h3 className="font-bold text-3xl md:text-5xl mb-2">
              Personal Projects
            </h3>
            <p className="italic text-xs">
              Projects conceived of and built from scratch by me
            </p>
          </div>
          <ul className="mb-5">
            {personalProjects.map((entry, index) => (
              <li key={`persProj${index}`}>
                <PersonalProjectEntry {...entry} />
              </li>
            ))}
          </ul>

          <hr className="w-2/3 h-1 mx-auto my-8 bg-grey border-0 rounded md:my-10" />

          <div className="md:text-center subheading break-inside-avoid lg:break-before-column xl:break-before-auto">
            <h3 className="font-bold text-3xl md:text-5xl mb-2">
              Frontend Mentor
            </h3>
            <p className="italic text-xs">
              Front-end challenges built from scratch by me, adhering to
              Frontend Mentor's design and functionality brief
            </p>
          </div>
          <ul className="mb-5">
            {frontEndMentor.map((entry, index) => (
              <li key={`frontEndMentor${index}`}>
                <FrontEndMentorEntry {...entry} />
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </Element>
  );
};

export default Portfolio;
