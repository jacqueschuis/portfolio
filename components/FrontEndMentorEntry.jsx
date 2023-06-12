import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";

const FrontEndMentorEntry = ({name, screenshot,repo,liveSite,challenge,description,summary, tools}) => {
    const [visible, setVisible] = useState(false);

        return (
            <div className="rounded-3xl shadow-lg box-border p-10 mb-5 break-inside-avoid-column">
                <div className="flex justify-between items-center relative">
                    <h3 onClick={() => setVisible(!visible)} className="w-full transition-all cursor-pointer text-2xl font-bold mb-2 hover:text-blue-light">{name}</h3>
                </div>
                <Link className="self-center" href={liveSite}>
                    <img src={screenshot} className="rounded-3xl mb-5" />
                </Link>

                <div className="flex justify-between text-orange my-5">
                    <p className="font-bold text-orange-dark">Tools:</p>
                    <div className="flex flex-wrap justify-end w-full gap-5 box-border pl-8">
                        {tools.map((entry) => (
                        <p>{entry}</p>
                        ))}
                    </div>
               </div>

                <p className="text-center transition-all hover:text-blue-light cursor-pointer font-bold" onClick={() => setVisible(!visible)}>{summary}</p>
                
                <div className="w-full bg-orange-dark box-border rounded-3xl text-white transition-all hover:bg-orange my-5 p-2 text-center cursor-pointer" onClick={() => setVisible(!visible)}>
                <p className="font-bold">
                    {!visible && `Details`}{visible && `Hide`}
                </p>
                <Transition
                    show={visible}
                    className="transition-all overflow-hidden"
                    enter="duration-300 ease-in"
                    enterFrom="transform max-h-0"
                    enterTo="transform max-h-[9999px]"
                    leave="duration-200 ease-out"
                    leaveFrom="transform max-h-[9999px]"
                    leaveTo="transform max-h-0">
                        <div className="mt-5 box-border px-3">
                            <ul className="list-inside list-disc mb-5">
                                {description.map((entry) => (
                                    <li className="mb-2" key={entry.index}>{entry}</li>
                                ))}
                            </ul>
                        </div>
                </Transition>
                </div>
                
                

                <div className="flex flex-row items-between font-bold my-2">
                    <h4 className="font-bold text-blue-dark">Links:</h4>
                    <div className="flex flex-wrap box-border pl-5 justify-end w-full gap-5 text-blue-light">
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
                </div>                
            </div>
        );
}
 
export default FrontEndMentorEntry;