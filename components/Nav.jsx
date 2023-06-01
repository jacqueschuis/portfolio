import Link from "next/link";

const Nav = () => {
    return ( 
        <nav className="my-6 md:my-12 bg-gradient-to-r from-blue-light via-orange-light to-orange-dark p-3 rounded-full flex justify-between items-center">
            <p className="font-bold text-3xl pl-10 text-white">JP</p>
            <div className="pr-10 hidden md:flex gap-9 text-white">
                <Link href='#about' className="nav-link">About</Link>
                <Link href='#portfolio' className="nav-link">Portfolio</Link>
                <Link href='#education' className="nav-link">Education</Link>
                <Link href='#work' className="nav-link">Work</Link>
            </div>
        </nav>
     );
}
 
export default Nav;