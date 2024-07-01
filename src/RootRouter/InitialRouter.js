import React from "react";
import RootRouter from "./RootRouter";
import MainNavBar from "../GlobalComponent/MainNavBar.js/MainNavBar";

const InitialRouter = () => {
  return (
    <div>
      <MainNavBar />
      <RootRouter />
    </div>
  );
};

export default InitialRouter;
