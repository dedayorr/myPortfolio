import React from "react";
import Marquee from "react-fast-marquee";
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";
import { SiInstagram } from "react-icons/si";

export const Home = () => {
  return (
    <div className="h-[100vh]">
      <Marquee
        // scrollamount={50}
        className="h-[] flex justify-between font-extrabold text-6xl text-center text-[#CFB997] mt-[10%] md:text-8xl lg:text-9xl lg:mt-[4%]"
      >
        <p>
          FRONT-END <br /> DEVELOPER
        </p>
        {/* <p>
          {" "}
          FRONT-END <br /> DEVELOPER
        </p> */}
      </Marquee>
      <div className=" text-center w-[90%] mx-auto mt-[15%] lg:mt-[4%]">
        <p className="font-extrabold text-2xl md:text-6xl lg:text-5xl ">
          HI, I'm <span className="text-[#CFB997]">ELIJAH ADEDAYO ADEYEYE</span>
        </p>
        <p className="md:text-4xl lg:w-[50%] lg:text-3xl mx-auto">
          A developer based in Lagos, Nigeria. I'm focused on creating
          interactive digital experiences on the web.
        </p>
      </div>
      <div className="flex justify-center space-x-8 text-3xl mt-[15%] text-[#CFB997] md:text-7xl md:space-x-16 lg:mt-[10%]">
        <a href="https://github.com/dedayorr">
          <GoMarkGithub />
        </a>
        <a href="https://www.linkedin.com/in/elijah-adeyeye-software-developer/">
          <GrLinkedin />
        </a>
        <a href="https://www.instagram.com/dedayorrr/">
          <SiInstagram />
        </a>
      </div>

      <div className="flex text-center font-bold mt-[5%] md:hidden">
        <p>Call me : 09127563048</p>
        <p>Email : dedayo16@gmail.com</p>
      </div>
    </div>
  );
};
