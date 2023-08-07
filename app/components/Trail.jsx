"use client";

import React from "react";
import { useTrail, animated } from "@react-spring/web";

const Trail = ({ children, from, to, delay }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 15, tension: 2000, friction: 200 },
    from: { y: -20, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 1000,
  });

  return (
    <>
      {trail.map(({ ...style }, index) => (
        <animated.div
          key={index}
          style={style}
          className="w-full flex justify-center items-center h-full"
        >
          {items[index]}
        </animated.div>
      ))}
    </>
  );
};

export default Trail;
