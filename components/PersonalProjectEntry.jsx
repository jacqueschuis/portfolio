import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";

const FrontEndMentorEntry = ({name, screenshot,repo,liveSite,description, summary, tools}) => {
    const [visible, setVisible] = useState(false);

    const classes = visible ? "rotate-0 transition-all hover:text-orange-light cursor-pointer" : "rotate-180 transition-all hover:text-orange-light cursor-pointer"

        return (
            <div className="rounded-3xl shadow-lg box-border p-10 mb-5 break-inside-avoid-column">
                <div className="relative flex justify-between items-center">
                    <h3 onClick={() => setVisible(!visible)} className="w-3/4 transition-all cursor-pointer text-2xl flex flex-col font-bold mb-2 hover:text-blue-light">{name}</h3>
                    <div className="absolute flex items-center justify-center w-[40px] h-[40px] md:w-[50px] md:h-[50px]  text-orange-dark transition-all hover:text-orange-light cursor-pointer right-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1em" fill="currentColor" viewBox="0 0 16 16" className={classes} onClick={() => setVisible(!visible)}>
                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                        </svg>
                    </div>    
                </div>
                <Link className="self-center" href={liveSite}>
                    <img src={screenshot} className="rounded-3xl mb-5" />
                </Link>
                

                <p className="text-center transition-all hover:text-blue-light cursor-pointer font-bold" onClick={() => setVisible(!visible)}>{summary}</p>

                <Transition
                    show={visible}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 -translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 -translate-y-1'>
                        <div className="mt-5">
                            <ul className="list-inside list-disc mb-5">
                                <Transition.Child
                                    show={visible}
                                    enter='transition ease-out duration-200'
                                    enterFrom='opacity-0 -translate-y-1'
                                    enterTo='opacity-100 translate-y-0'
                                    leave='transition ease-in duration-150'
                                    leaveFrom='opacity-100 translate-y-0'
                                    leaveTo='opacity-0 -translate-y-1'>
                                    
                                    {description.map((entry) => (
                                        <li className="mb-2" key={entry.index}>{entry}</li>
                                    ))}
                                </Transition.Child>
                            </ul>
                        </div>
                </Transition>

                <div className="flex flex-row justify-between font-bold text-blue-light my-2">
                    <Link href={repo}>
                        <p className="transition-all hover:text-blue-dark">GitHub</p>
                    </Link>
                    <Link href={liveSite}>
                        <p className="transition-all hover:text-blue-dark">Live Site</p>
                    </Link>
                </div>

                <div className="flex flex-initial justify-between text-orange">
                    <p className="font-bold text-orange-dark">Tools:</p>
                    <div className="container box-border pl-5 columns-2 md:columns-3 text-end">
                        {tools.map((entry) => (
                        <p>{entry}</p>
                        ))}
                    </div>
               </div>
               <Transition
                    show={visible}
                    enter='transition ease-out duration-200'
                    enterFrom='scale-0'
                    enterTo='scale-100'
                    leave='transition ease-in duration-150'
                    leaveFrom='scale-100'
                    leaveTo='scale-0'>
                    <div className="w-full h-[50px] text-orange-dark flex items-end justify-center leading-none ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="transition-all hover:text-orange-light cursor-pointer" onClick={() => setVisible(!visible)}>
                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                        </svg>
                    </div>    
                </Transition> 
                
            </div>
        );
}
 
export default FrontEndMentorEntry;