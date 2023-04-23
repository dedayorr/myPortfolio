import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

function Contact() {
  return (
    <div>
      <p className=" text-5xl font-extrabold mt-[15%] ml-2 text-[#CFB997] md:mt-[5%]">
        Contact
      </p>
      <div className="grid">
        <div>
          <Player
            autoplay
            loop
            src="https://assets9.lottiefiles.com/packages/lf20_atjsyyed.json"
            style={{ height: "200px", width: "200px" }}
          ></Player>

          <a
            className="flex justify-center font-bold text-3xl hover:text-[#fad6a579]"
            href="https://www.linkedin.com/in/elijah-adeyeye-software-developer/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <Player
            autoplay
            loop
            src="https://assets5.lottiefiles.com/private_files/lf30_qnpfavmd.json"
            style={{ height: "200px", width: "200px" }}
          ></Player>

          <p className="flex justify-center font-bold text-2xl">Whatsapp : 09127563048</p>
        </div>
        <div>
          <Player
            autoplay
            loop
            src="https://assets9.lottiefiles.com/packages/lf20_nkf5e15x.json"
            style={{ height: "200px", width: "200px" }}
          ></Player>

          <a
            className="flex justify-center font-bold text-3xl hover:text-[#fad6a579]"
            href="https://twitter.com/dedayorr"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </div>
        <div>
          <Player
            autoplay
            loop
            src="https://assets7.lottiefiles.com/packages/lf20_cwqf5i6h.json"
            style={{ height: "200px", width: "200px" }}
          ></Player>

          <a
            className="flex justify-center font-bold text-3xl hover:text-[#fad6a579]"
            href="https://github.com/dedayorr"
            target="_blank"
            rel="noreferrer"
          >
          GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
