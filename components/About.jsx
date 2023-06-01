import StackCarousel from "./StackCarousel";

const About = () => {
    return ( 

        <section id="about" className="py-10 h-screen w-screen">
            <div className="about-wrapper md:flex max-w-fit ">
                    <div className="header h-full">
                        <h2 className="font-bold text-6xl text-blue-light md:-rotate-90 md:m-0 mb-5">About</h2>
                    </div>
                    <div className="content text-blue-dark flex flex-col">
                        <div className="body block text-2xl px-5">
                            <p className="break-words w-full">I'm Jacques Pariseau, a self-taught <b>web developer</b>.</p>
                            <p className="break-words w-full">I'm an academically-trained <b>art historian</b> and <b>marketing and graphic design professional</b>.</p>
                            <p className="break-words w-full">I love learning new things—languages, musical instruments, cooking—but recently, I've focused on learning web development.</p>
                        </div>
                        <StackCarousel />
                    </div>
            </div>
        </section>
     );
}
 
export default About;
