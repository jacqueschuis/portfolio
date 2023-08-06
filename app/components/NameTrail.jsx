"use client";

import React from "react";
import { useTrail, animated } from "@react-spring/web";

const NameTrail = ({ children }) => {
  const name = React.Children.toArray(children);
  const trail = useTrail(name.length, {
    config: { mass: 15, tension: 2000, friction: 200 },
    from: {
      opacity: 0,
      x: -80,
      y: -20,
      rotate: "20deg",
    },
    opacity: 1,
    x: 0,
    y: 0,
    display: "inline-block",
    rotate: "0deg",
  });

  return (
    <>
      {trail.map(({ ...style }, index) => (
        <animated.span key={index} style={style}>
          {name[index]}
        </animated.span>
      ))}
    </>
  );
};

export default NameTrail;
