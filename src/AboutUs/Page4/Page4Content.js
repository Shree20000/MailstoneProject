import React from "react";
import "./Page4.css";
import { Container, Row, Col } from "react-bootstrap";

function Page4Content(props) {
  return (
    <Container>
      <Row className="mission-container">
        <Row>
          <Col lg="1" md="2" xs="2">
            <span className="mission-number">{props.number}</span>{" "}
          </Col>
          <Col lg="11" md="10" xs="10">
            {" "}
            <h1 className="mission-title">{props.title}</h1>{" "}
          </Col>
        </Row>
        <Row className="mission-content">
          <Col lg="2" md="3" xs="12">
            <span className="mission-hr"></span>{" "}
          </Col>
          <Col className="mission-description" lg="10" md="9" xs="12">
            {props.description}
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Page4Content;
