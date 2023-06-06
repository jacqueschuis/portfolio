import { Transition } from "@headlessui/react";
import { useState } from "react";

const Education = () => {

    const education = [
        {
            institution: "University of Massachusetts Amherst", 
            degree: "Master of Arts", 
            subject: "History of Art and Architecture", 
            years: "2020 – 2022", 
            location: "Amherst, Massachusetts",
            specialization: "Ancient Roman Art, Nineteenth Century Art",
            description: [
                "Selected as one of only three students to receive a full scholarship to the Master of Arts program",
                "Recipient of the department's Professional Development Grant in 2021",
                "Spearheaded all phases in the planning, organization, and execution of the annual Mark Roskill Symposium (MRS) in collaboration with three fellow students",
                    "Conceptualized topic for the MRS and secured the keynote speaker from Nova Scotia College of Art and Design and panelists from Amherst College, Smith College, and University of Massachusetts Amherst",
                    "Maximized MRS awareness by designing and launching targeted marketing campaigns; created digital and print promotional advertisements, brochures, posters, and flyers",
                    "Exceeded fundraising goal for the MRS, generating $4,600 from two grants, six academic departments, and three university organizations"
            ],
        },
        {
            institution: "Furman University",
            degree: "Bachelor of Arts",
            subject: "Studio Art, Art History",
            years: "2014 – 2018",
            location: "Greenville, South Carolina",
            specialization: "Graphic Design, Painting, Photography",
            description: [
                "Served as the Keynote Speaker at Furman Engaged, delivering a presentation on moral relativism to an audience of approximately 50 attendees",
                "Traveled with 15 other students to China for a fully-funded cultural-exchange trip in 2014"
            ]
        }
    ]

    const EducationItem = ({institution, degree, subject, location, years, specialization, description, extracurriculars}) => {
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
    };


    return ( 

        <section id="education" className="py-12 h-screen w-full flex flex-col">
            <h2 className="section-heading font-bold text-5xl md:text-8xl mb-2 md:mb-5">Education</h2>
            <div className="container md:columns-2 gap-10 self-center text-blue-dark">
                {education.map((item) => (
                    <EducationItem {...item} />
                ))}
            </div>
        </section>
     );
}
 
export default Education;