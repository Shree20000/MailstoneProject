import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Service from "../Service/Service";
import Project from "../Project/Project";
import AboutUs from "../AboutUs/AboutUs";
const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/project" element={<Project />} />
      <Route path="/AboutUs" element={<AboutUs />} />
    </Routes>
  );
};

export default RootRouter;
