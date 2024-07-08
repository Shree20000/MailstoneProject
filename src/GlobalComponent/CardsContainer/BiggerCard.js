import React from "react";
import { Col } from "react-bootstrap";
import "./BiggerCard.css";
import OptimizedImage from "../OptimizedImage/OptimizedImage";

const BiggerCard = (props) => {
  return (
    <Col sm={7} xs={12}>
      <div className="biggercardbuttonbtncontainer">
        <h3>{props.headername}</h3>
        <div className="biggercardbutton">
          <button className="biggercardbutton">{props.buttonname}</button>
        </div>
      </div>
      <OptimizedImage
        src={props.imgurl}
        className="firstimageapartment"
        loading="lazy"
      />
      {/* <img
        src={props.imgurl}
        alt=""
        className="firstimageapartment"
        loading="lazy"
      /> */}
      <ul className="ulbig">
        <li className="contentapartment">{props.contained}</li>
      </ul>
    </Col>
  );
};

export default BiggerCard;
