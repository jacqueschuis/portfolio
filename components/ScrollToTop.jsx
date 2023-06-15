import { animated, useSpring } from '@react-spring/web';

let Scroll = require('react-scroll');
let scroll = Scroll.animateScroll;


const ScrollToTop = ({y}) => {
    const springs = useSpring({
        from: {opacity: 0},
        opacity: 1,
    })

    return ( 
        <animated.div style={y > 300 ? {...springs} : {opacity: 0}}
        id="scroll-to-top" className="fixed flex items-center justify-center w-[40px] h-[40px] md:w-[50px] md:h-[50px] bottom-0 m-5 text-orange-dark transition-all hover:text-orange-light cursor-pointer right-0 bg-white rounded-full shadow-lg" onClick={() => {scroll.scrollToTop()}} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-6 md:w-7">
                <path fill-rule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </animated.div>
     );
}
 
export default ScrollToTop;