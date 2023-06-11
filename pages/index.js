import React, { useEffect, useContext, useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Head from "next/head";
import Education from "@/components/Education";
import Work from "@/components/Work";
import ScrollToTop from "@/components/ScrollToTop";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <>
      <Head>
        <title>Jacques Pariseau</title>
      </Head>
      <div
        id="top-section"
        className="md:px-16 px-5 flex flex-col bg-white relative shadow-2xl"
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
      <ScrollToTop />
    </>
  );
};

export default Home;
