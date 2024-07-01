import React from "react";
import { Col } from "react-bootstrap";

const BiggerCard = (props) => {
  return (
    <Col sm={7} xs={12}>
      <div className="topcontainedheader">
        <h3>{props.headername}</h3>
        <button className="apartmentbtn">{props.buttonname}</button>
      </div>
      <img src={props.imgurl} alt="" className="firstimageapartment" />
      <ul className="ulbig">
        <li className="contentapartment">{props.contained}</li>
      </ul>
    </Col>
  );
};

export default BiggerCard;
