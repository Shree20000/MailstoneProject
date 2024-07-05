import React from "react";
import { Col, Row } from "react-bootstrap";
import CardComp from "../../GlobalComponent/CardComp/CardComp";

export default function AboutUsCard() {
  return (
    <>
      <div style={{ backgroundColor: "#0C3F78" }} className="card-page-fluid">
        <Row className="card-row">
          <Col lg={4} md={6} sm={12} className="mb-4">
            <CardComp projectno="200+" happy="Happy Customers" />
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-4">
            <CardComp
              projectno="200+"
              happy="
     Happy Customers"
            />
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-4">
            <CardComp projectno="200+" happy="Happy Customers" />
          </Col>
        </Row>
      </div>
    </>
  );
}
