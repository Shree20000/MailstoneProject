import React from "react";
import "./JbsFooter.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function JbsFooter() {
  return (
    <>
      <Container>
        <Row className="jbs-footer-content">
          <Col className="jbs-footer-left-col" sm={12} md={6} lg={6}>
            <Image
              className="jbs-footer-img"
              src="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719895480/mailStone/a7oxryzcbb8evyaunkik.png"
            />
            Transform Your Home – Enhance Workflow Efficiency with JBS Interior!
          </Col>
          <Col sm={12} md={6} lg={6} className="jbs-footer-right-col">
            <div className="jbs-footer-div">Get In Touch</div>
            <div className="jbs-footer-div">
              Address:
              <span className="jbs-footer-span">
                Kh. No. 412.0.3, Nagarathamma Layout, Near SBI, Belathu
              </span>
            </div>
            <div className="jbs-footer-div">
              Phone: <span className="jbs-footer-span">+91-8050141583</span>
            </div>
            <div className="jbs-footer-div">
              Email:{" "}
              <span className="jbs-footer-span">support@codekart.com</span>
            </div>
          </Col>
        </Row>
        <Row className="jbs-footer-icon-main">
          <Col>
            <span className="jbs-footer-icon">
              <RiFacebookCircleFill />
            </span>
            <span className="jbs-footer-icon">
              <FaLinkedin />
            </span>
            <span className="jbs-footer-icon">
              <FaYoutube />
            </span>
            <span className="jbs-footer-icon">
              <FaInstagram />
            </span>
          </Col>
        </Row>
        <Row>
          <Col className="jbs-footer-hr" md={12}></Col>
          <Col md={12} className="jbs-footer-last-content">
            @2024 Mailstone Pvt.Ltd. Designed By Codekart Solutions Pvt.Ltd.
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default JbsFooter;
