import { useState } from "react";
import {useSpring, animated} from '@react-spring/web';

const EducationEntry = ({institution, degree, subject, location, years, specialization, description}) => {
    const [visible, setVisible] = useState(false);

    const [detailsSpring, api] = useSpring(() => ({
        from: { maxHeight: '0px', opacity: 0, overflow: 'hidden'},
    }))

    const handleShow = () => {
        api.start({
            from: {maxHeight: '0px', opacity: 0},
            to: {maxHeight: '1000px', opacity: 1}
        });
        setVisible(!visible);
    };

    const handleHide = () => {
        api.start ({
            from: {maxHeight: '1000px', opacity: 1},
            to: {maxHeight: '0px', opacity: 0,}
        });
        setVisible(!visible);
    }

        return (
            <div className="rounded-3xl flex flex-col justify-between shadow-lg box-border p-6 mb-5 break-inside-avoid-column">
                <div className="flex justify-between items-center relative">
                    <h3 onClick={visible ? handleHide : handleShow} className="w-full cursor-pointer transition-all text-2xl font-bold hover:text-blue-light">{degree} in {subject}</h3>
                </div>
                <p className="font-normal text-base italic">{years}</p>
                <div className="flex lg:flex-row flex-col justify-between text-blue-light my-5">
                    <p>{institution}</p>
                    <p>{location}</p>
                </div>
                <div className="my-5">
                    <p className="mb-5"><span className="font-bold">Specializations:</span> {specialization}</p>
                </div>

                <div className="w-full bg-orange-dark box-border rounded-xl text-white transition-all hover:bg-orange my-5 p-2 cursor-pointer" onClick={visible ? handleHide : handleShow}>
                    <p className="font-bold text-center">
                        {visible ? `Hide` : `Details`}
                    </p>
                    <animated.div style={{...detailsSpring}}>
                        <ul className="list-inside list-disc mt-2">
                            {description.map((entry) => (
                                <li className="mb-1 pl-3" key={entry.index}>{entry}</li>
                            ))}
                        </ul>
                    </animated.div>
                </div>
            </div>
        );
}
 
export default EducationEntry;