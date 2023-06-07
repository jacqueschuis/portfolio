import { Transition } from "@headlessui/react";
import { useState } from "react";

const PersonalProjectEntry = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div onClick={() => setVisible(!visible)} className="rounded-3xl shadow-lg box-border p-10 mb-5 break-inside-avoid-column cursor-pointer">
            <h3 className="degree-name text-2xl font-bold">{degree} in {subject}</h3>
            <p className="font-normal text-base italic">{years}</p>
            <div className="flex lg:flex-row flex-col justify-between text-blue-light my-2">
                <p>{institution}</p>
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
                    <div className="mt-5">
                        <p className="mb-5"><span className="font-bold">Specializations:</span> {specialization}</p>
                        <ul className="list-inside list-disc mb-5">
                            {description.map((entry) => (
                                <li className="mb-2">{entry}</li>
                            ))}
                        </ul>
                    </div>
            </Transition>
        </div>
    );
}
 
export default PersonalProjectEntry;