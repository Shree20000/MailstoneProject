import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Service from "../Service/Service";
import Project from "../Project/Project";
import AboutUs from "../AboutUs/AboutUs";
import MainNavBar from "../GlobalComponent/MainNavBar.js/MainNavBar";
import Footer from "../GlobalComponent/Footer/Footer";
import { useLocation } from "react-router-dom";
import JbsHome from "../JbsFolder/JbsHome/JbsHome";
import JbsNavBar from "../GlobalComponent/JbsNavbar/JbdNavBar";
import JbsFooter from "../GlobalComponent/JbsFooter/JbsFooter";
import JbsMainWork from "../JbsFolder/JbsWork/jbsMainWork";
const RootRouter = () => {
  const location = useLocation();
  // console.log(location.pathname.split("/"));
  return (
    <>
      {location?.pathname.startsWith("/jbs") ? (
        <>
          {/* only for jbs routes */}
          <JbsNavBar />
          <Routes>
            <Route path="/jbs-home" element={<JbsHome />} />
            <Route path="/jbs-work" element={<JbsMainWork />} />
            <Route path="/jbs-project" element={<Project />} />
            <Route path="/jbs-aboutUs" element={<AboutUs />} /> */}
          </Routes>
          <JbsFooter />
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
