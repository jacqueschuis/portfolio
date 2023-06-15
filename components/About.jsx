import StackCarousel from "./StackCarousel";
let Scroll = require('react-scroll');
let Element = Scroll.Element;
let scroller = Scroll.scroller;


const About = () => {
    return ( 
        <Element name="about" id="about">
            <section  className="py-12 mb-20 w-full flex flex-col">
                <h2 className="section-heading font-bold text-5xl md:text-8xl mb-2 break-after-column">About</h2>
                <div className="content text-blue-dark flex flex-col container self-center rounded-3xl shadow-lg box-border p-10">
                    <ul className="body text-2xl list-inside">
                        <li className="mb-5">I'm Jacques Pariseau, a self-taught <b className="cursor-pointer text-blue-light transition-all hover:text-blue-dark" onClick={() => {scroller.scrollTo('portfolio', {smooth: true})}}>web developer</b> based in New England.</li>
                        <li className="mb-5">I've worked <b className="cursor-pointer text-blue-light transition-all hover:text-blue-dark" onClick={() => {scroller.scrollTo('portfolio', {smooth: true})}}>full-stack</b>, but my goal is to design and create beautiful UIs as a <b className="cursor-pointer text-blue-light transition-all hover:text-blue-dark" onClick={() => {scroller.scrollTo('portfolio', {smooth: true})}}>front-end developer</b></li>
                        <li className="mb-5">I'm a <b className="cursor-pointer text-blue-light transition-all hover:text-blue-dark" onClick={() => {scroller.scrollTo('work', {smooth: true})}}>marketing professional</b>, <b className="cursor-pointer text-blue-light transition-all hover:text-blue-dark" onClick={() => {scroller.scrollTo('work', {smooth: true})}}>graphic designer</b>, and academically-trained <b className="cursor-pointer text-blue-light transition-all hover:text-blue-dark" onClick={() => {scroller.scrollTo('education', {smooth: true})}}>art historian</b>.</li>
                        <li className="mb-5">I love learning new things—languages, musical instruments, cooking—but recently, I've been learning:</li>
                    </ul>
                    <div className="md:w-1/2 w-full self-center">
                        <StackCarousel />
                    </div>
                </div>
            </section>
        </Element>
     );
}
 
export default About;

