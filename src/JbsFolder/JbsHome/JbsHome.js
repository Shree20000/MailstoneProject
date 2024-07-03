import React from "react";
import { Container } from "react-bootstrap";
import JbsTopHomePage from "./JbsTopHomePage/JbsTopHomePage";
import FeaturedProjectjbs from "./Components/FeaturedProjectjbs/FeaturedProjectjbs";
import JbsCard from "./Components/JbsCard/JbsCard";
import JbsForm from "./Components/JbsForm/JbsForm";

const JbsHome = () => {
  return (
    <>
      <JbsTopHomePage />
      <FeaturedProjectjbs />
      <JbsCard />
      <JbsForm />
    </>
  );
};

export default JbsHome;
