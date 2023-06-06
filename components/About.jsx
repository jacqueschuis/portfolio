import StackCarousel from "./StackCarousel";

const About = () => {
    return ( 

        <section id="about" className="py-36 h-fit w-full container md:columns-2">
            <h2 className="font-bold text-blue-light text-8xl mb-2 break-after-column md:text-end md:pr-5">About</h2>
            <div className="content text-blue-dark flex flex-col flex-initial">
                <div className="body text-2xl">
                    <p className="mb-5">I'm Jacques Pariseau, a self-taught <b>web developer</b>.</p>
                    <p className="mb-5">I'm an academically-trained <b>art historian</b> and <b>marketing and graphic design professional</b>.</p>
                    <p className="mb-5">I love learning new things—languages, musical instruments, cooking—but recently, I've focused on learning web development.</p>
                </div>
                <StackCarousel />
            </div>
        </section>
     );
}
 
export default About;

