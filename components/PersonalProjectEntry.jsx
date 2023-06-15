import Link from "next/link";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const FrontEndMentorEntry = ({name, screenshot,repo,liveSite,description, tools}) => {
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
                    <Link href={liveSite}>
                        <h3 className="w-full transition-all cursor-pointer text-2xl flex flex-col font-bold mb-2 hover:text-blue-light">{name}</h3>
                    </Link>
                    <Link href={repo}>
                        <p className="transition-all text-blue-light hover:text-blue-dark">GitHub</p>
                    </Link>
                </div>
                <Link className="self-center" href={liveSite}>
                    <img src={screenshot} className="rounded-3xl mb-2" />
                </Link>

                <div className="flex justify-between text-blue-light mb-2 text-sm">
                    <p className="font-bold text-blue-dark">Tools:</p>
                    <div className="flex flex-wrap justify-end w-full gap-5 box-border pl-3">
                        {tools.map((entry) => (
                        <p>{entry}</p>
                        ))}
                    </div>
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
                        <ul className="list-inside list-disc mt-2">
                            {description.map((entry) => (
                                <li className="mb-1 pl-5" key={entry.index}>{entry}</li>
                            ))}
                        </ul>
                    </animated.div>
                </div>

                
            </div>
        );
}
 
export default FrontEndMentorEntry;