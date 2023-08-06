"use client";

import Link from "next/link";
import Section from "./home/components/pieces/Section";
import NameTrail from "./components/NameTrail";
import { useSpring, animated } from "@react-spring/web";
import Trail from "./components/Trail";
import TypewriterComponent from "typewriter-effect";

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
    <main className="min-h-screen w-full flex items-center bg-gradient-to-r from-blue-light via-orange-light to-orange-dark">
      <Section className="flex flex-col items-center text-center w-full mb-32 h-fit py-36 text-black">
        <h1 className="font-bold text-hero-lg flex flex-col">
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
        <div className="font-thin text-hero-sm">
          <TypewriterComponent
            options={{
              strings: ["web", "front-end", "UI"],
              autoStart: true,
              loop: true,
            }}
          />
          developer
        </div>
        <animated.div style={rise} className="flex flex-col items-center m">
          <div className="inline-flex md:text-3xl text-xl justify-evenly mt-24">
            <Trail>
              <Link href="/home" className="hover-underline-animation nav-link">
                Portfolio
              </Link>
              <Link href="/home" className="hover-underline-animation nav-link">
                Blog
              </Link>
              <Link href="/home" className="hover-underline-animation nav-link">
                CV
              </Link>
            </Trail>
          </div>
        </animated.div>
      </Section>
    </main>
  );
};

export default Home;
