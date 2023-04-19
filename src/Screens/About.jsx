import React from "react";
import {SiHtml5} from "react-icons/si"
import {SiCss3} from "react-icons/si"
import {SiJavascript} from "react-icons/si"
import {SiTailwindcss} from "react-icons/si"
import {GrReactjs} from "react-icons/gr"
import {FaGitAlt} from "react-icons/fa"
import {FaNodeJs} from "react-icons/fa"
import {SiExpress} from "react-icons/si"
import {SiMongodb} from "react-icons/si"
import {SiNpm} from "react-icons/si"
import {SiNetlify} from "react-icons/si"

export const About = () => {
  return (
    <div className="h-">
      <div className=" text-5xl font-extrabold mt-[15%] ml-2 text-[#CFB997]">
        <p>
          ABOUT <br /> ME
        </p>

        <img src="./images/mypicture.png" width={500} alt="" />
      </div>
      <p className="mx-[2%] text-lg opacity-50 text-center">
        My name is Elijah Adedayo Adeyeye. A Front-End Developer with a proven
        ability to deliver on any given task and to collaborate effectively with
        other developers. I have experience in building scalable, responsive,
        user friendly and accessible websites with Html, Css, Javascript as well
        as some of their libraries and frameworks
      </p>

      <p className="text-[#CFB997] font-bold text-3xl ml-2 mt-[10%]">Skills</p>
      <div className="grid grid-cols-3 mx-[5] justify-center items-center mt-[5%]">
        <div className="flex flex-col justify-center items-center text-center">
          <div className=" font-bold text-4xl ml-2 mt-[5%]"><SiHtml5 /></div>
          <p>HTML5</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className=" font-bold text-4xl ml-2 mt-[5%]"><SiCss3 /></div>
          <p>CSS</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className=" font-bold text-4xl ml-2 mt-[5%]"><SiJavascript /></div>
          <p>JAVASCRIPT</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className=" font-bold text-4xl ml-2 mt-[5%]"><GrReactjs/></div>
          <p>REACT.js</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className=" font-bold text-4xl ml-2 mt-[5%]"><SiTailwindcss /></div>
          <p>TAILWIND</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center" >
          <div className=" font-bold text-4xl ml-2 mt-[5%]"><FaGitAlt/></div>
          <p>GIT</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center" >
          <div className=" font-bold text-4xl ml-2 mt-[5%]"><SiNpm/></div>
          <p>NPM</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center" >
          <div className=" font-bold text-4xl ml-2 mt-[5%]"><SiNetlify/></div>
          <p>NETLIFY</p>
        </div>
      </div>

      <div className="">
        <p className="font-bold text-xl ml-2 mt-[10%]">Learning : </p>
        <div className="grid grid-cols-3">
        <div className="flex flex-col justify-center items-center text-center" >
          <div className=" font-bold text-4xl ml-2 mt-[5%]"><FaNodeJs/></div>
          <p>NODE.js</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center" >
          <div className=" font-bold text-4xl ml-2 mt-[5%]"><SiExpress/></div>
          <p>EXPRESS.js</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center" >
          <div className=" font-bold text-4xl ml-2 mt-[5%]"><SiMongodb/></div>
          <p>MongoDB</p>
        </div>
        </div>
      </div>
    </div>
  );
};
