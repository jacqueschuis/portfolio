import StackCarousel from "./StackCarousel";

const About = () => {
    return ( 

        <section id="about" className="md:py-36 py-12 h-fit w-full container md:columns-2">
            <h2 className="section-heading font-bold text-5xl md:text-8xl mb-2 break-after-column md:text-end md:pr-5">About</h2>
            <div className="content text-blue-dark flex flex-col flex-initial">
                <div className="body text-2xl">
                    <p className="mb-5">I'm Jacques Pariseau, a self-taught <b className="text-blue-light">web developer</b>.</p>
                    <p className="mb-5">I'm an academically-trained <b className="text-blue-light">art historian</b>, <b className="text-blue-light">marketing professional</b>, and <b className="text-blue-light">graphic designer</b>.</p>
                    <p className="mb-5">I love learning new things—languages, musical instruments, cooking—but recently, I've been using the following:</p>
                </div>
                <StackCarousel />
            </div>
        </section>
     );
}
 
export default About;

