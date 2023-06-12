import { useState } from "react"
import { Transition } from "@headlessui/react";

const WorkEntry = ({place, location, title, date, description}) => {
    const [visible, setVisible] = useState(false);
    
    return (
        <div className="rounded-3xl shadow-lg box-border p-10 mb-5 break-inside-avoid-column " >
            <div className="flex h-full justify-between items-center relative">
                <h3 onClick={() => setVisible(!visible)} className="w-full cursor-pointer text-2xl font-bold transition-all hover:text-blue-light">{title}</h3>
            </div>
            <p className="font-normal text-base italic">{date}</p>
            <div className="flex-lg:flex-row flex-col justify-between text-blue-light my-5">
                <p>{place}</p>
                <p>{location}</p>
            </div>
            <div className="w-full bg-orange-dark box-border rounded-3xl text-white transition-all hover:bg-orange p-2 text-center cursor-pointer" onClick={() => setVisible(!visible)}>
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
        </div>
    )
}
 
export default WorkEntry;