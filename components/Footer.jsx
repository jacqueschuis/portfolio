import Link from "next/link";

const Footer = () => {
    return ( 
        <footer className="text-center text-sm text-blue-dark box-border py-5">
            <p>&copy; Copyright 2023, <Link className="font-bold transition-all hover:text-blue-light" href="https://github.com/jacqueschuis">Jacques Pariseau</Link></p>
        </footer>
     );
}
 
export default Footer;