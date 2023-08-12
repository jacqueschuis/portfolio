"use client";

import Link from "next/link";
import NameTrail from "./components/NameTrail";
import { useSpring, animated } from "@react-spring/web";
import Trail from "./components/Trail";
import TypewriterComponent from "typewriter-effect";
import Footer from "./components/Footer";

const Home = () => {
  const first = "Jacques";
  const last = "Pariseau";
  const firstArray = [...first];
  const lastArray = [...last];

  const [rise, riseApi] = useSpring(() => ({
    from: {
      opacity: 0,
      y: 20,
    },
    to: {
      opacity: 1,
      y: 0,
      overflow: "hidden",
    },
    delay: 1500,
  }));

  return (
    <main className="h-screen overflow-hidden md:p-10 p-4 w-full flex items-center home text-white relative">
      <div className="w-full h-full border-2 border-white rounded-3xl shadow-2xl flex flex-col items-center justify-center relative">
        <div className="flex w-full md:px-10 px-5 text-sm md:text-lg justify-between items-baseline absolute md:top-6 top-4 text-white">
          <Link href="/" className="font-bold md:text-2xl text-lg logo">
            JP
          </Link>
          <div className="flex md:gap-16 gap-4">
            <Trail>
              <Link
                href="/projects"
                className="hover-underline-animation nav-link"
              >
                Projects
              </Link>
              <Link href="/blog" className="hover-underline-animation nav-link">
                Blog
              </Link>
              <Link href="/cv" className="hover-underline-animation nav-link">
                CV
              </Link>
              <Link
                href="/contact"
                className="hover-underline-animation nav-link"
              >
                Contact
              </Link>
            </Trail>
          </div>
        </div>
        <section className="flex flex-col items-center text-center w-full mb-32 h-fit py-36 text-white">
          <div className="w-fit">
            <h1 className="font-bold text-hero-lg flex flex-col md:my-12 my-6">
              <span className="block">
                <NameTrail>
                  {firstArray.map((el, index) => {
                    return <span key={`${el}${index}First`}>{el}</span>;
                  })}
                </NameTrail>
              </span>
              <span className="block">
                <NameTrail>
                  {lastArray.map((el, index) => {
                    return <span key={`${el}${index}Last`}>{el}</span>;
                  })}
                </NameTrail>
              </span>
            </h1>
          </div>
          <animated.div style={rise} className="flex flex-col items-center">
            <div className="font-thin text-hero-sm">
              <TypewriterComponent
                options={{
                  strings: ["web", "front-end", "UI/UX"],
                  autoStart: true,
                  loop: true,
                }}
              />
              developer
            </div>
          </animated.div>
        </section>
      </div>
      <Footer home={true} absolute={true} />
    </main>
  );
};

export default Home;
