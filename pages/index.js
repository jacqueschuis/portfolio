import Hero from "@/components/Hero";
import About from "@/components/About";
import Nav from "@/components/Nav";
import Head from "next/head";
import Education from "@/components/Education";
import Work from "@/components/Work";
import ScrollToTop from "@/components/ScrollToTop";
import Contact from "@/components/Contact";
import { useWindowScroll } from "react-use";
import Portfolio from "@/components/Portfolio";

const Home = () => {
  const { x, y } = useWindowScroll();

  return (
    <>
      <Head>
        <title>Jacques Pariseau</title>
      </Head>
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
    </>
  );
};

export default Home;
