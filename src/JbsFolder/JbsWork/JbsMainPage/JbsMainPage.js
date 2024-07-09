import React from "react";
import "./JbsMainPage.css";
import { Container, Row, Col } from "react-bootstrap";
import LazyBackground from "../../../GlobalComponent/OptimizedImage/LazyBackground";

function JbsMainPage() {
  return (
    <Container className="jbs-work-container">
      <Row>
        <Col md={12} className="jbs-mainpage-heading-col">
          <span className="jbs-mainpage-heading">OUR WORKS</span>
        </Col>
      </Row>
      <Row className="jbs-mainpage-images">
        <LazyBackground
          src="https://res.cloudinary.com/drny4cbec/image/upload/v1719912327/unoveqw6inqnk42yallr.png"
          className="jbs-mainpage-img1"
        />
        <Col md={5} className="jbs-mainpage-img2">
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
