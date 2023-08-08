"use client";

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
      overflow: "hidden",
    },
  }));

  return (
    <main className="h-screen md:p-10 p-4 w-full flex items-center home">
      <div className="w-full h-full content--background md:px-10 px-5 md:pb-10 pb-5 rounded-3xl shadow-2xl flex flex-col items-center relative overflow-y-auto">
        <Nav dark={dark} active={active} />
        <animated.div style={slide} className="w-full h-full md:px-10">
          {children}
        </animated.div>
      </div>
    </main>
  );
};

export default Layout;