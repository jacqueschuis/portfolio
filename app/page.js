import Link from "next/link";
import Section from "./home/components/pieces/Section";
import NameTrail from "./components/NameTrail";
import Trail from "./components/Trail";

const Home = () => {
  const first = "Jacques";
  const last = "Pariseau";
  const title = "web developer";
  const firstArray = [...first];
  const lastArray = [...last];
  const titleArray = [...title];

  return (
    <main className="min-h-screen w-full flex items-center bg-gradient-to-r from-blue-light via-orange-light to-orange-dark">
      <Section className="flex flex-col items-center text-center w-full mb-32 h-fit py-36 text-white">
        <h1 className="font-bold text-hero-lg flex flex-col">
          <span className="block">
            <NameTrail>
              {firstArray.map((el) => {
                return <>{el}</>;
              })}
            </NameTrail>
          </span>
          <span className="block">
            <NameTrail>
              {lastArray.map((el) => {
                return <>{el}</>;
              })}
            </NameTrail>
          </span>
        </h1>
        <Trail>
          <h2 className="font-thin text-hero-sm">
            {titleArray.map((el) => {
              return <>{el}</>;
            })}
          </h2>
          <div className="flex justify-between mt-10">
            <Link href="/home">
              <button className="bg-none border-8 border-white text-white px-8 py-5 rounded-xl text-3xl font-bold transition-all hover:bg-white hover:text-black mix-blend-screen">
                Home
              </button>
            </Link>
          </div>
        </Trail>
      </Section>
    </main>
  );
};

export default Home;
