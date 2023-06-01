import React, {useEffect,useContext,useState} from "react";
import Hero from '@/components/Hero';
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Head from "next/head";
import Education from "@/components/Education";
import Work from "@/components/Work";

const Home = () => {
    return ( 
        <>
        <Head>
            <title>Jacques Pariseau</title>
        </Head>
            <Nav />
            <Hero />
            <About id='about' />
            <Portfolio />
            <Education />
            <Work />
            <Footer /> 
        </>
     );
}
 
export default Home;