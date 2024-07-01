import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Service from "../Service/Service";
import Project from "../Project/Project";
const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  );
};

export default RootRouter;
