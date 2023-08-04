import Section from "./pieces/Section";

const Hero = () => {
  return (
    <Section className="hero flex flex-col items-center w-full mb-32 h-fit py-36">
      <h1 className="font-bold text-hero-lg flex flex-col">
        <span className="block overflow-hidden">Jacques</span>
        <span className="block overflow-hidden">Pariseau</span>
      </h1>
      <h2 className="font-thin text-hero-sm">web developer</h2>
    </Section>
  );
};

export default Hero;
