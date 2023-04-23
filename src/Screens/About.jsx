import React from "react";
// import { SiHtml5 } from "react-icons/si";
// import { SiCss3 } from "react-icons/si";
// import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
// import { GrReactjs } from "react-icons/gr";
// import { FaGitAlt } from "react-icons/fa";
// import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
// import { SiMongodb } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";
import { SiInstagram } from "react-icons/si";
import { Player } from "@lottiefiles/react-lottie-player";

export const About = () => {
  return (
    <div className="h-">
      <div className=" text-5xl font-extrabold mt-[15%] ml-2 text-[#CFB997] md:mt-[5%]">
        <p className="md:hidden">
          ABOUT <br /> ME
        </p>
        <p className=" hidden md:block ml-[10%]">ABOUT ME</p>
      </div>
      <div className="md:flex lg:mx-auto lg:justify-center">
        <img
          className="md:hidden"
          src="./images/mypicture.png"
          width={500}
          alt=""
        />
        <img
          className="hidden md:block lg:hidden"
          src="./images/mypicture.png"
          width={500}
          alt=""
        />
        <img
          className="hidden lg:block"
          src="./images/mypicture.png"
          width={600}
          alt=""
        />
        <div className="md:mt-[10%] lg:w-[50%] lg:mt-[10%]">
          <p className="mx-[2%] text-lg opacity-50 text-center lg:text-3xl">
            My name is Elijah Adedayo Adeyeye. A Front-End Developer with a
            proven ability to deliver on any given task and to collaborate
            effectively with other developers. I have experience in building
            scalable, responsive, user friendly and accessible websites with
            Html, Css, Javascript as well as some of their libraries and
            frameworks.
          </p>
          <hr className="text-[#CFB997] w-[30%] mx-auto my-[5%]" />
          <div className="font-bold ml-[2%] opacity-50 text-center lg:text-2xl">
            <p>1. Web Development</p>
            <p>2. Web Support and Maintenance</p>
            <p>3. Search engine optimization</p>
          </div>
        </div>
      </div>

      <p className="text-[#CFB997] font-bold text-3xl ml-2 mt-[10%] lg:ml-[10%] lg:text-5xl lg:mt-[7%]">
        Skills
      </p>
      <div className="grid grid-cols-3 gap-[5%] mx-[5] justify-center items-center mt-[5%] lg:mt-[3%]">
        <div className="flex flex-col justify-center items-center text-center">
          <div className=" font-bold ml-2 mt-[5%] md:text-6xl lg:text-8xl">
            <Player
              autoplay
              loop
              src="https://assets3.lottiefiles.com/packages/lf20_jhrmp6ne.json"
              style={{ height: "100px", width: "100px" }}
            ></Player>
          </div>
          <p>HTML5</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className=" font-bold text-4xl ml-2 mt-[5%] md:text-6xl lg:text-8xl">
          <Player
              autoplay
              loop
              src="https://assets2.lottiefiles.com/private_files/lf30_d6czzyqr.json"
              style={{ height: "100px", width: "100px" }}
            ></Player>
          </div>
          <p>CSS</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className=" font-bold text-4xl ml-2 mt-[5%] md:text-6xl lg:text-8xl">
          <Player
              autoplay
              loop
              src="https://assets7.lottiefiles.com/packages/lf20_rgrylcip.json"
              style={{ height: "100px", width: "100px" }}
            ></Player>
          </div>
          <p>JAVASCRIPT</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className=" font-bold text-4xl ml-2 mt-[5%] md:text-6xl lg:text-8xl">
          <Player
              autoplay
              loop
              src="https://assets2.lottiefiles.com/datafiles/fab7172a9302d416bcdb8ac7e1c71123/data.json"
              style={{ height: "100px", width: "100px" }}
            ></Player>
          </div>
          <p>REACT.js</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-1">
          <div className=" font-bold text-6xl ml-2 mt-[5%] md:text-6xl lg:text-8xl text-blue-400 p-5">
         <SiTailwindcss/>
          </div>
          <p>TAILWIND</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className=" font-bold text-4xl ml-2 mt-[5%] md:text-6xl lg:text-8xl">
          <Player
              autoplay
              loop
              src="https://assets5.lottiefiles.com/private_files/lf30_03cuemhb.json"
              style={{ height: "100px", width: "100px" }}
            ></Player>
          </div>
          <p>GIT</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-8">
          <div className=" font-bold text-6xl ml-2 mt-[5%] text-red-400 md:text-6xl lg:text-6xl">
          <SiNpm />
          </div>
          <p>NPM</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="text-blue-300 font-bold text-4xl ml-2 mt-[5%] md:text-6xl lg:text-8xl">
          <SiNetlify/>
          </div>
          <p>NETLIFY</p>
        </div>
      </div>
<br/>
      <div className="">
        <p className="font-bold text-xl ml-2 mt-[10%] lg:ml-[10%] lg:text-4xl">
          Learning :{" "}
        </p>
        <div className="grid grid-cols-3">
          <div className="flex flex-col justify-center items-center text-center">
            <div className=" font-bold text-4xl ml-2 mt-[5%] md:text-6xl lg:text-8xl">
            <Player
              autoplay
              loop
              src="https://assets4.lottiefiles.com/packages/lf20_dmbcqvqn.json"
              style={{ height: "100px", width: "100px" }}
            ></Player>
            </div>
            <p>NODE.js</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-7">
            <div className=" font-bold text-6xl ml-2 mt-[5%] md:text-6xl lg:text-8xl">
            <SiExpress/>
            </div>
            <p>EXPRESS.js</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div className=" font-bold text-4xl ml-2 mt-[5%] md:text-6xl lg:text-8xl">
            <Player
              autoplay
              loop
              src="https://assets4.lottiefiles.com/private_files/lf30_9xcevvfo.json"
              style={{ height: "100px", width: "100px" }}
            ></Player>
            </div>
            <p>MongoDB</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-8 text-3xl mt-[15%] text-[#CFB997] md:text-5xl md:space-x-16 lg:mt-[10%] ">
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

      <div className="flex text-center font-bold mt-[5%] md:justify-center gap-[5%] lg:text-2xl">
        <p>Call me : 09127563048</p>
        <p>Email : dedayo16@gmail.com</p>
      </div>
    </div>
  );
};
