import Link from "next/link";

const Nav = () => {
    return ( 
        <nav className="my-6 md:my-12 bg-gradient-to-r from-blue-light via-orange-light to-orange-dark p-4 rounded-full flex justify-between items-center shadow-lg">
            <p className="font-bold text-3xl pl-8 text-white logo">JP</p>
            <div className="pr-10 hidden md:flex gap-9 text-white font-thin">
                <Link href='#about' className="nav-link hover-underline-animation">About</Link>
                <Link href='#portfolio' className="nav-link hover-underline-animation">Portfolio</Link>
                <Link href='#education' className="nav-link hover-underline-animation">Education</Link>
                <Link href='#work' className="nav-link hover-underline-animation">Work</Link>
            </div>
        </nav>
     );
}
 
export default Nav;