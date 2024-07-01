import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./OurService.css";
import { MdArrowOutward } from "react-icons/md";

export default function OurService() {
  return (
    <>
      <div style={{ backgroundColor: "#F3F2F2" }} className="div-class-bg">
        <Row>
          <Col md={5} xs={12} className="our-service">
            {" "}
            OUR SERVICES
          </Col>
          <Col md={4} xs={12} className="design">
            The design and construction of a building significantly impact its
            aesthetics, functionality, and overall atmosphere.
          </Col>
          <Col md={2} xs={12}>
            <Button className="outward">
              <MdArrowOutward id="outword-icon" />
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}
