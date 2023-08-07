"use client";

import Nav from "./Nav";
import { useSpring, animated } from "@react-spring/web";

const Layout = ({ children, dark, active }) => {
  const [slide, riseApi] = useSpring(() => ({
    from: {
      x: -20,
    },
    to: {
      x: 0,
      overflow: "hidden",
    },
  }));

  return (
    <main className="h-screen md:p-10 p-4 w-full flex items-center home">
      <animated.div
        style={slide}
        className="w-full h-full bg-white rounded-3xl shadow-2xl flex flex-col items-center relative overflow-y-auto"
      >
        <Nav dark={dark} active={active} />
        {children}
      </animated.div>
    </main>
  );
};

export default Layout;
