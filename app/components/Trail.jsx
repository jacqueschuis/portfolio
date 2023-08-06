"use client";

import React from "react";
import { useTrail, animated } from "@react-spring/web";

const Trail = ({ children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 15, tension: 2000, friction: 200 },
    from: {
      opacity: 0,
      x: -40,
    },
    opacity: 1,
    x: 0,
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
