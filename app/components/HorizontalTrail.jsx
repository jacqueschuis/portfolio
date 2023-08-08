"use client";

import React from "react";
import { useTrail, animated } from "@react-spring/web";

const HorizontalTrail = ({ children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 15, tension: 2000, friction: 200 },
    from: { x: -60, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });

  return (
    <>
      {trail.map(({ ...style }, index) => (
        <animated.div key={`Horizontal${index}`} style={style}>
          {items[index]}
        </animated.div>
      ))}
    </>
  );
};

export default HorizontalTrail;
