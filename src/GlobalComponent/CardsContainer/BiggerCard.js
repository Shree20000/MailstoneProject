import React from "react";
import { Col } from "react-bootstrap";
import "./BiggerCard.css";

const BiggerCard = (props) => {
  return (
    <Col sm={7} xs={12}>
      <div className="biggercardbuttonbtncontainer">
        <h3>{props.headername}</h3>
        <div className="biggercardbutton">
          <button className="biggercardbutton">{props.buttonname}</button>
        </div>
      </div>
      <img src={props.imgurl} alt="" className="firstimageapartment" />
      <ul className="ulbig">
        <li className="contentapartment">{props.contained}</li>
      </ul>
    </Col>
  );
};

export default BiggerCard;
