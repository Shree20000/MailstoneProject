import React from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import HomeLanding from "./HomeLandingPage/HomeLanding";
import ContactInfo from "./ContactInformation/ContactInfo";
import UpperFooter from "./UpperFoooter/UpperFooter";

const Home = () => {
  return (
    <Container>
      <HomeLanding />
      <ContactInfo />
      <UpperFooter />
    </Container>
  );
};

export default Home;
