import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { About } from "./Screens/About";
import Contact from "./Screens/Contact";
import { Project } from "./Screens/Project";

export const Router = () => {
  return (
    <div>
        <Navigation/>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="project" element={<Project />} />
      </Routes>
    </div>
  );
};
