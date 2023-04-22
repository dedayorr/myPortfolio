import React from "react";

export const Project = () => {
  return (
    <div>
      <p className="text-5xl font-extrabold mt-[15%] ml-2 text-[#CFB997]">
        PROJECTS
      </p>
      <div>
        <p className="text-center mt-[5%]">
          My projects makes use of vast variety of latest technology tools.
        </p>
        <div
          className="p-3 mt-[3%] w-[90%] mx-auto"
          style={{
            boxShadow: " #CFB997 0px 1px 1px 0px, #CFB997 0px 1px 4px 0px",
          }}
        >
          <a
            className="text-2xl font-extrabold text-[#CFB997] hover:underline"
            href="https://d-gadgets-store.netlify.app/" target="_blank" rel="noreferrer"
          >
            E-commerce Site For Gadgets
          </a>
          <img src="./images/gadget.jpeg" alt="" />
          <p>A gadget store where you can add items to carts and make purchase. <br/> Built with Html, Css, Javascript, Tailwind.</p>
        </div>
        <div
          className="p-3 mt-[3%] w-[90%] mx-auto"
          style={{
            boxShadow: " #CFB997 0px 1px 1px 0px, #CFB997 0px 1px 4px 0px",
          }}
        >
          <a
            className="text-2xl font-extrabold text-[#CFB997] hover:underline"
            href="https://purple-web.netlify.app/" target="_blank" rel="noreferrer"
          >
            PURPLE
          </a>
          <img src="./images/businessweb.png" alt="" />
          <p>A simple business website. <br/> Built with Html, Css and Javascript</p>
        </div>
        <div
          className="p-3 mt-[3%] w-[90%] mx-auto"
          style={{
            boxShadow: " #CFB997 0px 1px 1px 0px, #CFB997 0px 1px 4px 0px",
          }}
        >
          <a
            className="text-2xl font-extrabold text-[#CFB997] hover:underline"
            href="https://prismatic-entremet-275fdf.netlify.app/" target="_blank" rel="noreferrer"
          >
            Book List App
          </a>
          <img src="./images/blogapp.jpeg" alt="" />
          <p>You can add books and delete books of your choice. <br/> Built with Html, Css and Javascript</p>
        </div>
        <div
          className="p-3 mt-[3%] w-[90%] mx-auto"
          style={{
            boxShadow: " #CFB997 0px 1px 1px 0px, #CFB997 0px 1px 4px 0px",
          }}
        >
          <a
            className="text-2xl font-extrabold text-[#CFB997] hover:underline"
            href="https://prismatic-entremet-275fdf.netlify.app/" target="_blank" rel="noreferrer"
          >
            BLOGIFY BLOG APP
          </a>
          <img src="./images/blogapp.jpeg" alt="" />
          <p>Built with Html, Css, React.js, Tailwind.</p>
        </div>

      </div>
    </div>
  );
};
