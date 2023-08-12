"use client";

import Footer from "./Footer";
import Nav from "./Nav";
import { useSpring, animated } from "@react-spring/web";

const Layout = ({ children, dark, active }) => {
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
    <main className="h-screen overflow-y-hidden overflow-x-hidden md:p-10 p-4 w-full flex items-center home relative">
      <div className="w-full h-full content--background md:px-10 px-5 md:pb-10 pb-5 rounded-3xl shadow-2xl flex flex-col items-center relative overflow-y-auto text-blue-800">
        <Nav dark={dark} active={active} />
        <animated.div
          style={slide}
          className="w-full h-full min-h-fit md:px-10 px-4 flex justify-center items-start"
        >
          {children}
        </animated.div>
      </div>
      <Footer absolute={true} />
    </main>
  );
};

export default Layout;
