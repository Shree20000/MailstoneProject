import React from "react";
import Page4Content from "./Page4Content.js";
import { Container, Row, Col } from "react-bootstrap";

function Page4() {
  return (
    <>
      <Container fluid className="mission-main-container">
        <Row>
          <div className="mission-dottedline1"></div>
        </Row>
        <div className="mission-dottedline2"></div>

        <div className="mission-div">
          <Row>
            <Col md="10" lg="7">
              <Page4Content
                number="01"
                title="MISSION"
                description="To Provide Top-Quality Services In Construction And Interior Design, And To Grow With A Determination To Become A Renowned Brand."
              />
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col md="10" lg="7">
              <Page4Content
                number="02"
                title=<span className="vision-col">VISION</span>
                description="To redefine industry standards in quality and innovation, inspiring excellence and trust among our clients and partners."
              />
            </Col>
          </Row>
          <Row>
            <Col md="10" lg="7">
              <Page4Content
                number="03"
                title="PHILOSOPHY"
                description="Embrace a culture of integrity and excellence, ensuring every project reflects our commitment to quality and customer satisfaction."
              />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Page4;
