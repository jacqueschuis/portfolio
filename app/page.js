"use client";

import Link from "next/link";
import Section from "./home/components/pieces/Section";
import NameTrail from "./components/NameTrail";
import { useSpring, animated } from "@react-spring/web";
import Trail from "./components/Trail";
import TypewriterComponent from "typewriter-effect";
import Nav from "./components/Nav";

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
    <main className="h-screen md:p-10 p-4 w-full flex items-center home text-white">
      <div className="w-full h-full border-2 border-white rounded-3xl shadow-2xl flex flex-col items-center justify-center relative">
        <div className="flex w-full md:px-10 px-5 md:text-lg text-xl justify-between items-baseline absolute md:top-6 top-4 text-white">
          <Link href="/" className="font-bold text-2xl logo">
            JP
          </Link>
          <div className="flex md:gap-16 gap-8">
            <Trail>
              <Link
                href="/projects"
                className="hover-underline-animation nav-link"
              >
                Projects
              </Link>
              <Link href="/home" className="hover-underline-animation nav-link">
                Blog
              </Link>
              <Link href="/home" className="hover-underline-animation nav-link">
                CV
              </Link>
            </Trail>
          </div>
        </div>
        <Section className="flex flex-col items-center text-center w-full mb-32 h-fit py-36 text-white">
          <div className="w-fit">
            <h1 className="font-bold text-hero-lg flex flex-col md:my-12 my-6">
              <span className="block">
                <NameTrail>
                  {firstArray.map((el) => {
                    return <>{el}</>;
                  })}
                </NameTrail>
              </span>
              <span className="block">
                <NameTrail>
                  {lastArray.map((el) => {
                    return <>{el}</>;
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
        </Section>
      </div>
    </main>
  );
};

export default Home;
