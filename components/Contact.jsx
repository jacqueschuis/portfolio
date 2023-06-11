import Footer from './Footer';

let Scroll = require('react-scroll');
let Element = Scroll.Element;

const Contact = () => {
    return ( 
        <Element name="contact">
            <section id="contact" className="py-12 w-full relative text-white">
                <div className="md:px-16 px-5 mb-20 flex flex-col">
                    <h2 className="font-bold text-5xl md:text-8xl mb-6 md:mb-10">Contact</h2>
                    <div className="self-center flex sm:flex-row gap-5 justify-center flex-col">
                        <p className='w-full sm:w-1/3 md:w-1/2 lg:w-2/5 text-2xl leading-relaxed  text-center md:text-end'>I am open to all work opportunities; feel free to contact me with the following form, and I will get back to you!</p>
                        <form action="" className="md:w-1/2 xl:w-1/4 flex flex-col justify-center gap-3" >
                            <input placeholder='Name' type="text" className='transition-all form-input bg-transparent border border-white rounded-lg py-2 pl-4 focus:border-white !ring-0 focus:shadow-sm focus:shadow-white placeholder:text-white' />
                            <input placeholder='Email' type="email" className='transition-all form-input bg-transparent border border-white rounded-lg py-2 pl-4 focus:border-white !ring-0 focus:shadow-sm focus:shadow-white placeholder:text-white' />
                            <textarea placeholder='Message' rows={4} className='transition-all form-textarea bg-transparent border border-white rounded-lg py-2 pl-4 focus:border-white !ring-0 focus:shadow-sm focus:shadow-white placeholder:text-white' />
                            <button className="transition-all box-border p-3 bg-transparent text-white rounded-lg border border-white self-end hover:bg-white hover:text-blue-dark">Submit</button>
                        </form>
                    </div>
                </div>
                <Footer />
            </section>
        </Element>
     );
}
 
export default Contact;