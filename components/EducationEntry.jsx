import { useState } from "react";
import {useSpring, animated} from '@react-spring/web';

const EducationEntry = ({institution, degree, subject, location, years, specialization, description, specialEvent, specialEventDescription}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const [expand, expandApi] = useSpring(() => ({
        maxHeight: isExpanded ? '1000px' : '0px',
        opacity: isExpanded ? 1 : 0,
        overflow: 'hidden'
    }))

    const [rotate, rotateApi] = useSpring(() => ({
        rotate: isExpanded ? "180deg" : "0deg",
    }))

    const handleClick = () => {
        rotateApi.start({
            rotate: isExpanded ? "0deg" : "180deg",
        })
        expandApi.start({
            maxHeight: isExpanded ? '0px' : '1000px',
            opacity: isExpanded ? 0 : 1,
        });
        setIsExpanded(!isExpanded);
    }

        return (
            <div className="rounded-3xl flex flex-col justify-between shadow-lg box-border p-6 mb-5 break-inside-avoid-column">
                <div className="flex justify-between items-center">
                    <h3 onClick={handleClick} className="w-full cursor-pointer transition-all text-2xl font-bold hover:text-blue-light">{degree} in {subject}</h3>
                </div>
                <p className="font-normal text-base italic">{years}</p>
                <div className="flex lg:flex-row flex-col justify-between text-blue-light mb-2">
                    <p>{institution}</p>
                    <p>{location}</p>
                </div>

                <div className="w-full bg-orange-dark box-border rounded-xl text-white transition-all hover:bg-orange p-2 cursor-pointer" onClick={handleClick}>
                    <div className="flex justify-between items-center">
                        <p className="font-bold ml-4">
                            {isExpanded ? `Hide` : `Details`}
                        </p>
                        <animated.svg style={rotate} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="box-border mr-3 w-5 flex items-center justify-center" viewBox="0 0 16 16">
                            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                        </animated.svg>
                    </div>

                    <animated.div style={expand}>
                        <p className="my-2 pl-5"><span className="font-bold">Specializations:</span> {specialization}</p>
                        <ul className="list-inside list-disc mb-2">
                            {description.map((entry) => (
                                <li className="mb-1 pl-5" key={entry.index}>{entry}</li>
                            ))}
                        </ul>
                        {specialEvent &&
                            <p className="mb-2 pl-5 font-bold">{specialEvent}</p>
                        }
                        {specialEventDescription && 
                            <ul className="list-inside list-disc">
                            {specialEventDescription.map((entry) => (
                                <li className="mb-1 pl-5" key={entry.index}>{entry}</li>
                            ))}
                        </ul>
                        }
                    </animated.div>
                </div>
            </div>
        );
}
 
export default EducationEntry;