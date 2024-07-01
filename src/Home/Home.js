import React from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import HomeLanding from "./HomeLandingPage/HomeLanding";
import ContactInfo from "./ContactInformation/ContactInfo";
import UpperFooter from "./UpperFoooter/UpperFooter";
import StunningInteriors from "../Project/StunningInteriors/StunningInteriors";

const Home = () => {
  return (
    <>
      <Container>
        <HomeLanding />
      </Container>
      <Container>
        <ContactInfo />
      </Container>
      <Container fluid>
        <UpperFooter />
      </Container>
      <Container>
        <StunningInteriors />
      </Container>
    </>
  );
};

export default Home;
