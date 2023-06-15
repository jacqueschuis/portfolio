import { useState } from "react";
import { useTrail, animated } from "@react-spring/web";

const Hero = () => {
    const [state, setState] = useState(true);

    const items = ["jacques", "pariseau"];
    const config = {mass: 5, tension: 2000, friction: 200};

    return (
        <section className="hero flex flex-col items-center w-full mb-32 h-fit py-36">
            <h1 className="font-bold text-hero-lg flex flex-col"><span className="name">Jacques</span><span className="name">Pariseau</span></h1>
            <h2 className="font-thin text-hero-sm">web developer</h2>
        </section> 
     );
}
 
export default Hero;