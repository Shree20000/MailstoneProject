import React from "react";
import RootRouter from "./RootRouter";
import MainNavBar from "../GlobalComponent/MainNavBar.js/MainNavBar";
import Footer from "../GlobalComponent/Footer/Footer";

const InitialRouter = () => {
  return (
    <>
      <MainNavBar />
      <RootRouter />
      <Footer />
    </>
  );
};

export default InitialRouter;
