import React, {useEffect,useContext,useState} from "react";
import Hero from '@/components/Hero';
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const Home = () => {
    return ( 
        <>
        <div className="bg-white">
            <Nav />
            <Hero />
            <About />
            <Portfolio />
            <Footer />
        </div> 
        </>
     );
}
 
export default Home;