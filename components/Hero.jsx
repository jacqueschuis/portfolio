import { useTrail, useTransition, animated, useSpring } from "@react-spring/web";

const Hero = () => {
    const firstName = [...'Jacques'];
    const lastName = [...'Pariseau'];

    const [appear, appearApi] = useSpring(() => ({
        from: {opacity: 0},
        opacity: 1
    }))

    // const base = {
    //     config: {mass: 5, tension: 2000, friction: 200},
    //     from: { translate: '-100%', scale: 0 },
    //     to: { translate: '0%', scale: 1 },
    // }

    // const firstNameSprings = useSprings(firstName.length, firstName.map((t,i) => ({...base, delay: 200*i})))

    const firstNameTrails = useTrail(
        firstName.length,
        {
            from: { opacity: 0, y: 2000, rotate: '100deg' },
            opacity: 1,
            rotate: '0deg',
            x: 0,
        }
    )
    

    return (
        <section className="hero flex flex-col items-center w-full mb-32 h-fit py-36">
            <h1 style={...appear} className="font-bold text-hero-lg flex flex-col">
                <span className="name">
                    {/* {firstNameTrails.map(({...animation}, index) => {
                        return (
                            <animated.span style={animation} key={`${uuidv4()}`}>{firstName[index]}</animated.span>
                        )
                    })} */}
                    {firstName.map((el, index) => {
                        return (
                            <span key={`firstName${el}${index}`} className="hero-letter animate">{el}</span>
                        )
                    })}
                </span>
                <span className="name">
                    {lastName.map((el, index) => {
                        return (
                            <span key={`lastName${el}${index}`} className="hero-letter animate">{el}</span>
                        )
                    })}
                </span>
            </h1>
            <h2 className="font-thin text-hero-sm">web developer</h2>
        </section> 
     );
}
 
export default Hero;