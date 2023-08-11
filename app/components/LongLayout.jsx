"use client";
import { useSpring, animated } from "@react-spring/web";
import Nav from "./Nav";
import Footer from "./Footer";

const LongLayout = ({ children, dark, active }) => {
  const [slide, riseApi] = useSpring(() => ({
    from: {
      opacity: 0,
      x: -20,
    },
    to: {
      opacity: 1,
      x: 0,
    },
  }));

  return (
    <main className="md:p-10 p-4 w-full flex items-center home relative">
      <div className="w-full h-min content--background md:px-10 px-5 md:pb-10 pb-5 rounded-3xl shadow-2xl flex flex-col items-center relative text-blue-800">
        <Nav dark={dark} active={active} />
        <animated.div
          style={slide}
          className="w-full h-fit md:px-10 px-2 flex justify-center"
        >
          {children}
        </animated.div>
      </div>
      <Footer />
    </main>
  );
};

export default LongLayout;
