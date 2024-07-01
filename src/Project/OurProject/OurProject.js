import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./OurProject.css";
export default function OurProject() {
  return (
    <div>
      <Row style={{ padding: "3rem" }}>
        <Col className="our-project">OUR PROJECTS </Col>
      </Row>
      <Container>
        <Row>
          <Col md={5} xs={12}>
            <Image
              src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719484240/lwft4wgoazyl0ptal52e.png"
              className="arrow-image"
            />
          </Col>
          <Col md={7} xs={12} className="long-paragraph">
            At Mailstone, every project is a testament to our dedication to
            quality, innovation, and customer satisfaction. Explore our diverse
            portfolio, which showcases our expertise in creating exceptional
            spaces across various sectors. From residential to commercial
            projects, each one reflects our commitment to excellence and our
            clients' unique visions.
          </Col>
        </Row>
      </Container>
    </div>
  );
}
