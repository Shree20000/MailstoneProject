import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Service from "../Service/Service";
import Project from "../Project/Project";
import AboutUs from "../AboutUs/AboutUs";
import MainNavBar from "../GlobalComponent/MainNavBar.js/MainNavBar";
import Footer from "../GlobalComponent/Footer/Footer";
import { useLocation } from "react-router-dom";
const RootRouter = () => {
  const location = useLocation();
  // console.log(location.pathname.split("/"));
  return (
    <>
      {location?.pathname.startsWith("/jbs") ? (
        <>
          {/* only for jbs routes */}
          <MainNavBar />
          <Routes>
            <Route path="/jbs" element={<Home />} />
            <Route path="/jbs-service" element={<Service />} />
            <Route path="/jbs-project" element={<Project />} />
            <Route path="/jbs-aboutUs" element={<AboutUs />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <>
          {/* only mailstone routes  */}
          <MainNavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/project" element={<Project />} />
            <Route path="/aboutUs" element={<AboutUs />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default RootRouter;
