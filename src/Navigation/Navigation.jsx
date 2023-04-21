import React from "react";
import { Link } from "react-router-dom";
import { BsInfoCircleFill} from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import { RiContactsBook2Fill } from "react-icons/ri";

export const Navigation = () => {
  return (
    <div className="sticky top-0 z-50 flex mx-auto justify-between p-3 md:p-4 lg:px-16" style={{boxShadow:" #CFB997 0px 1px 1px 0px, #CFB997 0px 1px 4px 0px"}}>
      <Link className="flex" to="/">
        <img src="./images/D.png" width={50} alt="" />
      </Link>
      <div className="flex p-3 bg-[#7B8FA1] w-[70%] justify-between rounded-xl md:bg-[#7b8fa100] md:w-[60%] md:text-3xl lg:text-xl lg:w-[40%] " >
        <Link
          className="flex flex-col items-center hover:text-[#CFB997]"
          to="/about"
        >
          <p className="lg:text-3xl">
            <BsInfoCircleFill/>
          </p>
          About
        </Link>
        <Link className="flex flex-col items-center hover:text-[#CFB997]" to="/project">
          <p className="lg:text-3xl">
            <AiFillProject />
          </p>
          Projects
        </Link>
        <Link className="flex flex-col items-center hover:text-[#CFB997]" to="/contact">
          <p className="lg:text-3xl">
            <RiContactsBook2Fill />
          </p>
          Contact
        </Link>
      </div>
    </div>
  );
};
