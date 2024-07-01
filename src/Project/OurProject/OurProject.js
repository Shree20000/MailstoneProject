import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./OurProject.css";
import ProjectInfo from "../ProjectContactInfo/ProjectInfo";

export default function OurProject() {
  return (
    <>
      <div className="outer-container">
        <div className="dashed-border-container">
          <div className="dashed-line top"></div>
          <div className="dashed-line bottom"></div>
          <div className="dashed-line left"></div>
          <div className="dashed-line right"></div>
          <div className="content">
            <Row className="content-row">
              <Col className="our-project">OUR PROJECTS</Col>
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
                  At Mailstone, every project is a testament to our dedication
                  to quality, innovation, and customer satisfaction. Explore our
                  diverse portfolio, which showcases our expertise in creating
                  exceptional spaces across various sectors. From residential to
                  commercial projects, each one reflects our commitment to
                  excellence and our clients' unique visions.
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <Container>
        <div>
          <Row>
            <ProjectInfo />
          </Row>
        </div>
      </Container>
    </>
  );
}
