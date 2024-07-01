import React from "react";
import "./Footer.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#0C3F78" }} className="card-page-fluid234">
      <Row>
        <Col md={5} xs={5}>
          <Row>
            <Col className="logo2class3">
              <Image
                src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719407224/sg5tdi8uycp97izaed1g.png"
                className="logo2"
              />
            </Col>
            <Row className="logo2row">
              <Col className="logo2class">
                <IoLogoFacebook />
              </Col>
            </Row>
            <Row className="logo2row2">
              <Col className="logo2class">
                <FaLinkedin />
              </Col>
            </Row>
            <Row className="logo2row2">
              <Col className="logo2class">
                <IoLogoYoutube />
              </Col>
            </Row>
            <Row className="logo2row2">
              <Col>
                <BsInstagram className="logo2class" />
              </Col>
            </Row>
          </Row>
        </Col>
        <Col md={2} xs={6} className="companyclass">
          <Row className="class12345">
            <Col className="logo2class1">Company</Col>
          </Row>
          <Row className="class12345">
            <Col className="logo2class1">Home</Col>
          </Row>
          <Row className="class12345">
            <Col className="logo2class1">Product</Col>
          </Row>
          <Row className="class12345">
            <Col className="logo2class1">Contact us</Col>
          </Row>
          <Row className="class12345">
            <Col className="logo2class1">About us</Col>
          </Row>
        </Col>
        <Col md={5} xs={12} className="companyclass23">
          <Row>
            <Col className="logo2class1">Information</Col>
          </Row>
          <Row>
            <Col className="logo2class1">
              Address: Site #42, Katearamma Layout, Channasandra Kadugodi ,
              Bengaluru- 560067
            </Col>
          </Row>
          <Row>
            <Col className="logo2class1">Phone: (+91) 81234-13533</Col>
          </Row>
          <Row>
            <Col className="logo2class1">Information</Col>
          </Row>
          <Row>
            <Col className="logo2class1">Email: support@codekart.com</Col>
          </Row>
        </Col>
      </Row>
      <hr className="hr-tag-hrr" />
      <Container>
        <Row
          style={{
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Col className="codekartpvt">
            @2024 Mailstone Pvt.Ltd. Designed By Codekart Solutions Pvt.Ltd.
          </Col>
        </Row>
      </Container>
    </div>
  );
}
