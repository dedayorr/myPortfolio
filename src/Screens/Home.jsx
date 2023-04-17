import React from "react";
import Marquee from "react-fast-marquee";

export const Home = () => {
  return (
    <Marquee
      scrollamount="20"
      className="font-extrabold text-6xl text-center text-[#141414] mt-[10%] "
    >
      FRONT-END <br /> DEVELOPER
    </Marquee>
    
  );
};
