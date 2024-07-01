import React from "react";
import { Col, Row } from "react-bootstrap";
import "./ServiceCard.css";

const ServiceCard = (props) => {
  return (
    <Row>
      <Col sm={4} xs={12} className="cardContainer">
        <div className="cardBox">
          <img src={props.icon} alt="" className="cardimg" />
        </div>
        <div>
          <p className="topcardtext">{props.name}</p>
          <p className="cardtext">{props.description}</p>
        </div>
      </Col>
    </Row>
  );
};

export default ServiceCard;
