import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { RiContactsBook2Fill } from "react-icons/ri";

export const Navigation = () => {
  return (
    <div className=" flex mx-auto justify-between p-3">
      <Link className="flex" to="/">
        <img src="./images/dee.png" width={50} alt="" />
      </Link>
      <div className="flex p-3 bg-[#7B8FA1] w-[70%] justify-between rounded-xl">
        <Link className="flex flex-col items-center" to="/about">
          <FaHome />
          About
        </Link>
        <Link className="flex flex-col items-center" to="/project">
          <AiFillProject />
          Projects
        </Link>
        <Link className="flex flex-col items-center" to="/contact">
          <RiContactsBook2Fill />
          Contact
        </Link>
      </div>
    </div>
  );
};
