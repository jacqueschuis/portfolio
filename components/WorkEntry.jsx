const WorkEntry = ({place, location, title, date, description}) => {
    return (
        <div className="rounded-3xl h-fit flex flex-col justify-between shadow-lg box-border p-6 mb-5 break-inside-avoid" >
            <div className="flex justify-between items-center">
                <h3 className="w-full text-2xl font-bold">{title}</h3>
            </div>
            <p className="font-normal text-base italic">{date}</p>
            <div className="flex lg:flex-row flex-col justify-between text-blue-light mb-2">
                <p>{place}</p>
                <p>{location}</p>
            </div>
            <div className="w-full bg-orange-dark box-border rounded-xl text-white transition-all p-2">
                <div className="flex justify-between items-center">
                    <ul className="list-inside list-disc mt-2">
                        {description.map((entry) => (
                            <li className="mb-1 pl-5" key={entry.index}>{entry}</li>
                        ))}
                    </ul>
                </div>
               
            </div>
        </div>
    )
}
 
export default WorkEntry;