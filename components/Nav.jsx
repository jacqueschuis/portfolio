import { useState } from "react";
import NavLinks from "./NavLinks";
import { Transition } from "@headlessui/react";
import Link from "next/link";


const Nav = () => {
    const [visible, setVisible] = useState(false);   

    return ( 
                <nav className="my-6 md:my-12 bg-gradient-to-r from-blue-light via-orange-light to-orange-dark p-4 rounded-3xl flex flex-col justify-between items-center shadow-lg">
                    <div className="flex items-center justify-between w-full">
                        <Link href="/">
                            <p className="font-bold text-3xl pl-8 text-white logo">JP</p>
                        </Link>
                        <div className="flex flex-col items-center justify-center">
                            <div className="pr-10 hidden md:flex gap-9 text-white font-thin">
                                <NavLinks />
                            </div>
                            <div className="hamburger text-end text-white inline-block md:hidden pr-5" onClick={() => setVisible(!visible)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-10">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <Transition
                            show={visible}
                            enter='transition ease-out duration-200'
                            enterFrom='opacity-0 -translate-y-1'
                            enterTo='opacity-100 translate-y-0'
                            leave='transition ease-in duration-150'
                            leaveFrom='opacity-100 translate-y-0'
                            leaveTo='opacity-0 -translate-y-1'>
                                <div className="w-3/4 h-fit rounded-xl flex md:hidden flex-col items-center gap-1 text-white font-thin">
                                    <NavLinks />
                                </div>
                            </Transition>
                </nav>
     );
}
 
export default Nav;

