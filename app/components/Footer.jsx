import Link from "next/link";

const Footer = () => {
    return ( 
        <footer className="absolute bottom-0 text-center text-sm text-white box-border py-5 flex w-full justify-center">
            <p>&copy; Copyright 2023, <Link className="font-bold transition-all hover:text-black underline" href="https://github.com/jacqueschuis">Jacques Pariseau</Link></p>
        </footer>
     );
}
 
export default Footer;