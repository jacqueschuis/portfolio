import { useTrail, useTransition, animated } from "@react-spring/web";
import {v4 as uuidv4} from 'uuid'

const Hero = () => {
    const firstName = 'Jacques';
    const lastName = 'Pariseau';
    

    return (
        <section className="hero flex flex-col items-center w-full mb-32 h-fit py-36">
            <h1 className="font-bold text-hero-lg flex flex-col">
                <span className="name">
                    {firstName.split("").map(el => {
                        return (
                            <span key={`${uuidv4()}`} className="hero-letter animate">{el}</span>
                        )
                    })}
                </span>
                <span className="name">
                    {lastName.split("").map(el => {
                        return (
                            <span key={`${uuidv4()}`} className="hero-letter animate">{el}</span>
                        )
                    })}
                </span>
            </h1>
            <h2 className="font-thin text-hero-sm">web developer</h2>
        </section> 
     );
}
 
export default Hero;