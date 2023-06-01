import StackCarousel from "./StackCarousel";

const About = () => {
    return ( 

        <section id="about" className="py-10 h-screen w-full flex">
            <div className="header flex-initial flex flex-col items-start justify-start h-full">
                <h2 className="font-bold text-blue-light md:-rotate-90 md:m-0 mb-5 text-end">About</h2>
            </div>
            <div className="content text-blue-dark flex flex-col flex-initial">
                <div className="body block text-2xl px-5 w-fit">
                    <p >I'm Jacques Pariseau, a self-taught <b>web developer</b>.</p>
                    <p >I'm an academically-trained <b>art historian</b> and <b>marketing and graphic design professional</b>.</p>
                    <p >I love learning new things—languages, musical instruments, cooking—but recently, I've focused on learning web development.</p>
                </div>
                <StackCarousel />
            </div>
        </section>
     );
}
 
export default About;
