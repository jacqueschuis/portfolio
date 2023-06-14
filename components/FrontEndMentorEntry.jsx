import Link from "next/link";
import { useState } from "react";
import {useSpring, animated} from '@react-spring/web';

const FrontEndMentorEntry = ({name, screenshot,repo,liveSite,challenge,description,summary, tools}) => {
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
                    <h3 onClick={visible ? handleHide : handleShow} className="w-full transition-all cursor-pointer text-2xl font-bold mb-2 hover:text-blue-light">{name}</h3>
                </div>
                <Link className="self-center" href={liveSite}>
                    <img src={screenshot} className="rounded-3xl mb-5" />
                </Link>

                <div className="flex justify-between text-blue-light my-5">
                    <p className="font-bold text-blue-dark">Tools:</p>
                    <div className="flex flex-wrap justify-end w-full gap-5 box-border pl-8">
                        {tools.map((entry) => (
                        <p>{entry}</p>
                        ))}
                    </div>
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
 
export default FrontEndMentorEntry;