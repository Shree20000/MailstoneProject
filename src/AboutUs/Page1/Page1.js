import React from "react";
import "./Page1.css";
import Button from "react-bootstrap/Button";
import { FaArrowDown } from "react-icons/fa6";
import { Container, Row, Col } from "react-bootstrap";

function Page1() {
  return (
    <>
      <Container fluid className="aboutus-page1-main-container">
        <Row className="aboutus-page1-main-heading">
          <Col md="12">WELCOME TO</Col>
          <Col md="12">MAILSTONE</Col>
          <Col md="12">
            {" "}
            <Button variant="light" className="aboutus-page1-button">
              <FaArrowDown />
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Page1;
