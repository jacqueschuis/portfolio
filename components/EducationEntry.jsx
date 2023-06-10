import { Transition } from "@headlessui/react";
import { useState } from "react";

const EducationEntry = ({institution, degree, subject, location, years, specialization, description}) => {
    const [visible, setVisible] = useState(false);

        return (
            <div  className="rounded-3xl shadow-lg box-border p-10 mb-5 break-inside-avoid-column ">
                <div className="flex justify-between items-center relative">
                    <h3 onClick={() => setVisible(!visible)} className="w-full cursor-pointer transition-all text-2xl font-bold hover:text-blue-light">{degree} in {subject}</h3>

                </div>
                <p className="font-normal text-base italic">{years}</p>
                <div className="flex lg:flex-row flex-col justify-between text-blue-light my-5">
                    <p>{institution}</p>
                    <p>{location}</p>
                </div>
                <div className="my-5">
                    <p className="mb-5"><span className="font-bold">Specializations:</span> {specialization}</p>
                </div>
                <div className="w-full bg-orange-dark box-border rounded-3xl text-white transition-all hover:bg-orange p-2 text-center cursor-pointer" onClick={() => setVisible(!visible)}>
                <p className="font-bold">
                    {!visible && `Details`}{visible && `Hide`}
                </p>
                <Transition
                    show={visible}
                    enter='transition ease-out duration-250'
                    enterFrom='opacity-0 -translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-250'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 -translate-y-1'>
                        <div className="mt-5 box-border px-3">
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
                </div>
            </div>
        );
}
 
export default EducationEntry;