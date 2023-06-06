const Education = () => {

    const education = [
        {institution: "University of Massachusetts Amherst", degree: "Master of Arts", subject: "History of Art and Architecture", years: "2020 – 2022", location: "Amherst, Massachusetts"},
        {institution: "Furman University", degree: "Bachelor of Arts", subject: "Graphic Design, Art History", years: "2014 – 2018", location: "Greenville, South Carolina"}
    ]

    const EducationItem = ({institution, degree, subject, location, years}) => {
        return (
            <div className="rounded-3xl shadow-lg box-border p-10 mb-5">
                <h3 className="degree-name text-2xl font-bold">{degree} in {subject}</h3>
                <div className="flex lg:flex-row flex-col justify-between text-blue-light">
                    <p>{institution}</p>
                    <p>{location}</p>
                    <p>{years}</p>
                </div>
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