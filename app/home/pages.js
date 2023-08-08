"use client";

import { useWindowScroll } from "react-use";

import Nav from "./components/pieces/Nav";
import Portfolio from "./components/Portfolio";
import Education from "./components/Education";
import Work from "./components/Work";
import Contact from "./components/Contact";
import ScrollToTop from "./components/pieces/ScrollToTop";
import Trail from "../components/Trail";
import Layout from "../components/Layout";

const Home = () => {
  const { x, y } = useWindowScroll();

  return (
    <Layout>
      <div
        id="top-section"
        className="md:px-16 px-5 flex flex-col bg-white relative shadow-xl"
      >
        <Nav />
        <Trail>
          <Portfolio />
          <Education />
          <Work />
        </Trail>
      </div>
      <div id="bottom-section" className="relative">
        <Contact />
      </div>
      <ScrollToTop y={y} />
    </Layout>
  );
};

export default Home;
