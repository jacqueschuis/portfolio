let Scroll = require('react-scroll');
let scroll = Scroll.animateScroll;

const ScrollToTop = () => {
    return ( 
        <div className="fixed w-full h-[80px] bottom-0 mb-5 text-orange-dark flex items-center justify-center md:justify-end" >
            <svg xmlns="http://www.w3.org/2000/svg"  width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" >
                <path fill-rule="evenodd" className="transition-all hover:text-orange-light cursor-pointer" onClick={() => {scroll.scrollToTop()}} d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </div>
     );
}
 
export default ScrollToTop;