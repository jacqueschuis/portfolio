"use client";

import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Nav from "@/app/components/Nav";
import Education from "@/app/components/Education";
import Work from "@/app/components/Work";
import ScrollToTop from "@/app/components/ScrollToTop";
import Contact from "@/app/components/Contact";
import { useWindowScroll } from "react-use";
import Portfolio from "@/app/components/Portfolio";

const Home = () => {
  const { x, y } = useWindowScroll();

  return (
    <main className="min-h-screen w-full">
      <div
        id="top-section"
        className="md:px-16 px-5 flex flex-col bg-white relative shadow-xl"
      >
        <Nav />
        <Hero />
        <About />
        <Portfolio />
        <Education />
        <Work />
      </div>
      <div id="bottom-section" className="relative">
        <Contact />
      </div>
      <ScrollToTop y={y} />
    </main>
  );
};

export default Home;
