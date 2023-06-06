import { useState } from "react"
import { Transition } from "@headlessui/react";

const Work = () => {

    const work = [
        {
            place: "Bertera Auto Group",
            location: "West Springfield, Massachusetts",
            title: "Digital Marketing Specialist",
            date: "2023 – Present",
            description: [
                "Designed and created 100+ high-quality banners and advertisements each month for 8 dealerships' websites and social media accounts",
                "Managed relationships with over 20 vendors as the primary point of contact, ensuring smooth communication and timely delivery of services",
                "Utilized Google Ads, GA4, Facebook Ad Manager, Raven Tools, and Spyfu to monitor performance and analytics of internal ad campaigns and vendors, ensuring positive ROI",
                "Successfully created and delivered monthly email blasts to a client base of over 2,000 using Kaizen, resulting in increased web traffic and lead generation",
                "Produced creative assets for multiple advertising channels, including PMax, retargeting, display, OTT, and Facebook campaigns, resulting in increased brand awareness and customer acquisition",
                "Effectively managed and maintained websites across Dealer.com, DealerOn, and Sincro for all 8 dealerships, resulting in improved online presence and user experience"
            ]
        },
        {
            place: "Fleet Feet",
            location: "Longmeadow, Massachusetts",
            title: "Marketing and Community Outreach Coordinator",
            date: "2022 – 2023",
            description: [
                "Created captivating social media content and grew audience engagement through targeted campaigns",
                "Maintained and optimized website, delivering smooth user experience and driving growth to both the retail sales floor and external programs",
                "Orchestrated impactful events with medical professionals, running groups, and charities, inspiring dozens of attendees and generating valuable community partnerships",
                "Elevated sales floor with strategic inventory management and implementation of visual merchandising displays"
            ]
        }, 
        {
            place: "University of Massachusetts Amherst",
            location: "Amherst, Massachusetts",
            title: "Graduate Teaching Assistant",
            date: "2020 – 2022",
            description: [
                "Developed and delivered asynchronous course content for an online class of 30 University Without Walls students",
                "Innovated strategies to integrate technology tools for a newly offered course on the UWW platform",
                "Successfully translated course content and learning goals from a classroom environment to effectively function within an online learning environment by researching and implementing new pedagogical tools",
                "Drove engagement across social media platforms and optimized consistency and quality of content to align with department brand",
                "Maintained departmental website, developing content, creating signup sheets, and designing advertisements",
                "Led the production of the department graduation video, coordinating with professors to gather content and using Final Cut Pro to edit footage"
            ]
        }
    ]

    const WorkEntry = ({place, location, title, date, description}) => {
        const [visible, setVisible] = useState(false);

        return (
            <div className="rounded-3xl shadow-lg box-border p-10 mb-5 break-inside-avoid-column cursor-pointer" onClick={() => setVisible(!visible)}>
                <h3 className="text-2xl font-bold text-center md:text-start">{title}, <span className="font-normal text-base italic">{date}</span></h3>
                <div className="flex-lg:flex-row flex-col justify-between text-blue-light text-center md:text-start my-2">
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
                <ul className="list-inside list-disc transition">
                    {description.map((entry) => (
                        <li className="mb-2">{entry}</li>
                    ))}
                </ul>
                </Transition>
            </div>
        )
    }

    return ( 
        <section className="py-12 min-h-screen w-full flex flex-col " id="work">
            <h2 className="section-heading font-bold  text-5xl md:text-8xl mb-2 md:mb-5">Work</h2>
            <div className="container md:columns-2 gap-10 self-center text-blue-dark">
                {work.map((item) => (
                    <WorkEntry {...item} />
                ))}
            </div>
        </section>
     );
}
 
export default Work;