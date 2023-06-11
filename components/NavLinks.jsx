let Scroll = require('react-scroll');
let scroller = Scroll.scroller;

const NavLinks = () => {
    return ( 
        <>
            <a className="nav-link hover-underline-animation" onClick={() => {scroller.scrollTo('about', {smooth: true})}}>About</a>
            <a className="nav-link hover-underline-animation" onClick={() => {scroller.scrollTo('portfolio', {smooth: true})}}>Portfolio</a>
            <a className="nav-link hover-underline-animation" onClick={() => {scroller.scrollTo('education', {smooth: true})}}>Education</a>
            <a className="nav-link hover-underline-animation" onClick={() => {scroller.scrollTo('work', {smooth: true})}}>Work</a>
            <a className="nav-link hover-underline-animation" onClick={() => {scroller.scrollTo('contact', {smooth: true})}}>Contact</a>
        </>
     );
}
 
export default NavLinks;