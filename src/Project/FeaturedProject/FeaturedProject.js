import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { MdArrowOutward } from "react-icons/md";
import "./FeaturedProject.css";

export default function FeaturedProject() {
  return (
    <>
      <div
        style={{ backgroundColor: "#F3F2F2" }}
        className="div-class-bg123 mt-5"
      >
        <Row>
          <Col md={10} xs={9} className="featured-project">
            FEATURED PROJECTS
          </Col>
          <Col md={2} xs={3}>
            <Button className="outwardoutward">
              <MdArrowOutward id="outword-iconicon" />
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}
