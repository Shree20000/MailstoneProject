import React from "react";
import "./UpperFooter.css";
import { Container, Row, Col } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const UpperFooter = () => {
  return (
    <Container fluid className="upperfooterContainer">
      <Row>
        <Col sm={12} xs={12} className="upperfooterImage">
          <img
            src="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719474389/mailStone/mq7gotjks6d01yqsksc9.png"
            alt=""
            className="footerimage"
          />
        </Col>
        <Col sm={12} xs={12} className="footersecondcol">
          <div className="footerfirsttext">
            <h1 className="firstfootertext">MEET OUR</h1>
          </div>
          <div className="footersecontextt">
            <h1 className="secondfootertext">HAPPY CLIENTS</h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UpperFooter;
