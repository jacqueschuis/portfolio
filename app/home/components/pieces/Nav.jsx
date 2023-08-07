"use client";

import { useState } from "react";
import Link from "next/link";
import { useSpring, animated } from "@react-spring/web";

let Scroll = require("react-scroll");
let scroller = Scroll.scroller;

const NavLinks = () => {
  return (
    <>
      <a
        className="nav-link hover-underline-animation"
        onClick={() => {
          scroller.scrollTo("about", { smooth: true });
        }}
      >
        About
      </a>
      <a
        className="nav-link hover-underline-animation"
        onClick={() => {
          scroller.scrollTo("portfolio", { smooth: true });
        }}
      >
        Portfolio
      </a>
      <a
        className="nav-link hover-underline-animation"
        onClick={() => {
          scroller.scrollTo("education", { smooth: true });
        }}
      >
        Education
      </a>
      <a
        className="nav-link hover-underline-animation"
        onClick={() => {
          scroller.scrollTo("work", { smooth: true });
        }}
      >
        Work
      </a>
      <a
        className="nav-link hover-underline-animation"
        onClick={() => {
          scroller.scrollTo("contact", { smooth: true });
        }}
      >
        Contact
      </a>
    </>
  );
};

const Nav = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [expand, expandApi] = useSpring(() => ({
    maxHeight: isExpanded ? "1000px" : "0px",
    opacity: isExpanded ? 1 : 0,
    overflow: "hidden",
  }));

  const handleClick = () => {
    expandApi.start({
      maxHeight: isExpanded ? "0px" : "1000px",
      opacity: isExpanded ? 0 : 1,
    });
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="mb-6 w-full text-lg md:mb-12 bg-gradient-to-r from-blue-light via-orange-light to-orange-dark p-4 rounded-3xl flex flex-col justify-between items-center shadow-xl">
      <div className="flex items-center justify-between w-full">
        <Link href="/">
          <p className="font-bold text-3xl pl-8 text-white logo">JP</p>
        </Link>
        <div className="flex flex-col items-center justify-center">
          <div className="pr-10 hidden md:flex gap-9 text-white font-thin">
            <NavLinks />
          </div>
          <div
            className="hamburger text-end text-white inline-block md:hidden pr-5"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-10"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </div>
      </div>
      <animated.div
        className="w-full h-fit rounded-xl flex md:hidden flex-col items-center gap-1 px-5 text-white font-thin"
        style={expand}
      >
        <NavLinks />
      </animated.div>
    </nav>
  );
};

export default Nav;
