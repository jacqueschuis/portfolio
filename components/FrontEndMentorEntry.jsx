import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FrontEndMentorEntry = ({name, screenshot,repo,liveSite,challenge,description,tools}) => {
    const [visible, setVisible] = useState(false);

        return (
            <div className="rounded-3xl shadow-lg box-border p-10 mb-5 break-inside-avoid-column">
                <h3 onClick={() => setVisible(!visible)} className="transition-all cursor-pointer text-2xl font-bold mb-2 hover:text-blue-light">{name}</h3>
                <Link href={liveSite}>
                    <Image src={screenshot} className="rounded-3xl" />
                </Link>
                <div className="flex flex-row justify-between font-bold text-blue-light my-2">
                    <Link href={repo}>
                        <p className="transition-all hover:text-blue-dark">GitHub</p>
                    </Link>
                    <Link href={challenge}>
                        <p className="transition-all hover:text-blue-dark">Challenge</p>
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
                                {description.map((entry) => (
                                    <li className="mb-2">{entry}</li>
                                ))}
                            </ul>
                        </div>
                </Transition>


                <div className="flex justify-between text-orange">
                    <p className="font-bold text-orange-dark">Tools:</p>
                    {tools.map((entry) => (
                    <p>{entry}</p>
                ))}</div>
                
            </div>
        );
}
 
export default FrontEndMentorEntry;