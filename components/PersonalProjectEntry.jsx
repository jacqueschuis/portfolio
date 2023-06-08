import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";

const FrontEndMentorEntry = ({name, screenshot,repo,liveSite,description, tools}) => {
    const [visible, setVisible] = useState(false);

        return (
            <div className="rounded-3xl shadow-lg box-border p-10 mb-5 break-inside-avoid-column">
                <h3 onClick={() => setVisible(!visible)} className="transition-all cursor-pointer text-2xl flex flex-col font-bold mb-2 hover:text-blue-light">{name}</h3>
                <Link className="self-center" href={liveSite}>
                    <img src={screenshot} className="rounded-3xl mb-5" />
                </Link>
                <div className="flex flex-row justify-between font-bold text-blue-light my-2">
                    <Link href={repo}>
                        <p className="transition-all hover:text-blue-dark">GitHub</p>
                    </Link>
                    <Link href={liveSite}>
                        <p className="transition-all hover:text-blue-dark">Live Site</p>
                    </Link>
                </div>

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
                                        <li className="mb-2">{entry}</li>
                                    ))}
                                </Transition.Child>
                            </ul>
                        </div>
                </Transition>


                <div className="flex flex-initial justify-between text-orange">
                    <p className="font-bold text-orange-dark">Tools:</p>
                    <div className="container box-border pl-5 columns-2 md:columns-3 text-end">
                        {tools.map((entry) => (
                        <p>{entry}</p>
                        ))}
                    </div>
               </div>
                
            </div>
        );
}
 
export default FrontEndMentorEntry;