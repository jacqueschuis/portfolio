import { useState } from "react"
import { Transition } from "@headlessui/react";

const WorkEntry = ({place, location, title, date, description}) => {
    const [visible, setVisible] = useState(false);
    
    return (
        <div className="rounded-3xl shadow-lg box-border p-10 mb-5 break-inside-avoid-column " >
            <h3 onClick={() => setVisible(!visible)} className="cursor-pointer text-2xl font-bold transition-all hover:text-blue-light">{title}</h3>
            <p className="font-normal text-base italic">{date}</p>
            <div className="flex-lg:flex-row flex-col justify-between text-blue-light my-2">
                <p>{place}</p>
                <p>{location}</p>
            </div>
            <Transition
                show={visible}
                enter='transition ease-out duration-200'
                enterFrom='opacity-0 -translate-y-1'
                enterTo='opacity-100 translate-y-0'
                leave='transition ease-in duration-150'
                leaveFrom='opacity-100 translate-y-0'
                leaveTo='opacity-0 -translate-y-1'>
            <ul className="list-inside list-disc">
                {description.map((entry) => (
                    <li className="mb-2">{entry}</li>
                ))}
            </ul>
            </Transition>
        </div>
    )
}
 
export default WorkEntry;