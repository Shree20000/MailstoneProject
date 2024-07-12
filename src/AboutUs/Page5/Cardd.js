import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import "./Cardd.css";

export default function Cardd(props) {
  // const [buttonHeight, setButtonHeight] = useState("auto");

  // const updateButtonHeight = () => {
  //   if (window.innerWidth >= 767 && window.innerWidth <= 1200) {
  //     setButtonHeight("46.6px");
  //   } else {
  //     setButtonHeight("auto");
  //   }
  // };

  // useEffect(() => {
  //   updateButtonHeight();
  //   window.addEventListener("resize", updateButtonHeight);

  //   return () => {
  //     window.removeEventListener("resize", updateButtonHeight);
  //   };
  // }, []);

  return (
    <>
      <Card style={{ width: "100%", border: "none", marginTop: "30px" }}>
        <Card.Img variant="top" src={props.Img} className="meet-image" />

        <Card.Body>
          <Row className="meet-buttons">
            <Col md={6} xs={2} className="left-button">
              <Button variant="light" className="meet-left-buttons">
                <RiTwitterXFill />
              </Button>
              <Button variant="light" className="meet-left-buttons">
                <FaLinkedin />
              </Button>
            </Col>
            <Col className="right-button" md={6} xs={10}>
              <button className="meet-right-buttons">{props.button}</button>
            </Col>
          </Row>
          <Card.Title className="tittle nameinthecardcontainer">
            {props.tittle}
          </Card.Title>
          <div className="card-rule"></div>
        </Card.Body>
      </Card>
    </>
  );
}
