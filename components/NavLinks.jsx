import Link from "next/link";

const NavLinks = () => {
    return ( 
        <>
            <Link href='#about' className="nav-link hover-underline-animation">About</Link>
            <Link href='#portfolio' className="nav-link hover-underline-animation">Portfolio</Link>
            <Link href='#education' className="nav-link hover-underline-animation">Education</Link>
            <Link href='#work' className="nav-link hover-underline-animation">Work</Link>
        </>
     );
}
 
export default NavLinks;