"use client";

import React from "react";
import { useTrail, animated } from "@react-spring/web";

const NameTrail = ({ children }) => {
  const name = React.Children.toArray(children);
  const trail = useTrail(name.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    from: {
      opacity: 0,
      y: -20,
      scale: 0.8,
    },
    opacity: 1,
    y: 0,
    display: "inline-block",
    scale: 1,
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
