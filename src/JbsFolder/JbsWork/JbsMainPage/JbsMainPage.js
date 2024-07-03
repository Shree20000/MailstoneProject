import React from "react";
import "./JbsMainPage.css";
import { Container, Row, Col } from "react-bootstrap";

function JbsMainPage() {
  return (
    <Container>
      <Row>
        <Col md={12} className="jbs-mainpage-heading">
          <u>OUR WORKS</u>
        </Col>
      </Row>
      <Row className="jbs-mainpage-images">
        <Col md={6} className="jbsfirstimagecontainer">
          <img
            src="https://res.cloudinary.com/drny4cbec/image/upload/v1719912327/unoveqw6inqnk42yallr.png"
            alt=""
            className="jbsmainpagefirstimage"
          />
        </Col>
        <Col md={6} className="jbs-mainpage-img2">
          At JBS Interiors, every project is a testament to our dedication to
          quality, innovation, and customer satisfaction. Explore our diverse
          portfolio, showcasing our expertise in creating exceptional spaces
          across various sectors. From residential to commercial projects, each
          one reflects our commitment to excellence and our clients' unique
          visions.
        </Col>
      </Row>
    </Container>
  );
}

export default JbsMainPage;
