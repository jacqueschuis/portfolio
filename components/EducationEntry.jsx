import { Transition } from "@headlessui/react";
import { useState } from "react";

const EducationEntry = ({institution, degree, subject, location, years, specialization, description}) => {
    const [visible, setVisible] = useState(false);

        return (
            <div  className="rounded-3xl shadow-lg box-border p-10 mb-5 break-inside-avoid-column ">
                <h3 onClick={() => setVisible(!visible)} className="cursor-pointer transition-all text-2xl font-bold hover:text-blue-light">{degree} in {subject}</h3>
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
                            <div className="w-full h-[50px] text-orange-dark flex items-end justify-center leading-none ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="transition-all hover:text-orange-light cursor-pointer" onClick={() => setVisible(!visible)}>
                                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                </svg>
                            </div>
                            
                        </div>
                </Transition>
            </div>
        );
}
 
export default EducationEntry;