import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "./ProjectInfo.css";

const ProjectInfo = () => {
  return (
    <Container>
      <Row className="projectinfoContactForm gx-4">
        <Col sm={6} xs={12} className="pe-sm-3">
          <h1 className="infomationfirsttext">Get in touch for </h1>
          <h1 className="infomationsecondtext">Stunning interiors.</h1>
          <div className="colorcontainer">
            <div className="contactinfoform">
              <h1 className="contactinfoformheader">Contact Information</h1>
              <p className="contactinfoformparagraph">
                Say something to start a live chat!
              </p>
              <form action="">
                <div>
                  <p className="contactinfoheaders">Full Name</p>
                  <input type="text" className="contactinfoinput" />
                </div>
                <div>
                  <p className="contactinfoheaders">Email</p>
                  <input type="text" className="contactinfoinput" />
                </div>
                <div>
                  <p className="contactinfoheaders">Phone Number</p>
                  <input type="text" className="contactinfoinput" />
                </div>
                <div>
                  <p className="contactinfoheaders">Write your Message</p>
                  <input type="text" className="contactinfoinput" />
                </div>
                <div className="contactinfobuttoncontainer">
                  <button className="contactinfobutton">Send Message</button>
                </div>
              </form>
            </div>
            <div className="circlecontainer">
              <div className="circleicons">
                <div className="socialicon">
                  <FaTwitter />
                </div>
                <div className="socialicon">
                  <FaInstagram />
                </div>
                <div className="socialicon">
                  <FaFacebook />
                </div>
              </div>
              <img
                src="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719403186/mailStone/bli8jq43bu93qwwfw9ty.png"
                alt=""
                className="circles"
              />
            </div>
          </div>
        </Col>
        <Col sm={6} xs={12} className="ps-sm-3 circlesideimage"></Col>
      </Row>
    </Container>
  );
};

export default ProjectInfo;
