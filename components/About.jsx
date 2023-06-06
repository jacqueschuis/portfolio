import StackCarousel from "./StackCarousel";

const About = () => {
    return ( 

        <section id="about" className="py-12 min-h-screen w-full flex flex-col">
            <h2 className="section-heading font-bold text-5xl md:text-8xl mb-2 break-after-column">About</h2>
            <div className="content text-blue-dark flex flex-col flex-initial md:w-3/4 w-full self-center rounded-3xl shadow-lg box-border p-10">
                <div className="body text-2xl">
                    <p className="mb-5">I'm Jacques Pariseau, a self-taught <b className="text-blue-light">web developer</b>.</p>
                    <p className="mb-5">I'm an academically-trained <b className="text-blue-light">art historian</b>, <b className="text-blue-light">marketing professional</b>, and <b className="text-blue-light">graphic designer</b>.</p>
                    <p className="mb-5">I love learning new things—languages, musical instruments, cooking—but recently, I've been using the following:</p>
                </div>
                <div className="md:w-1/2 w-full self-center">
                    <StackCarousel />
                </div>
            </div>
        </section>
     );
}
 
export default About;

