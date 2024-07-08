import React from "react";
import { Col } from "react-bootstrap";
import "./SecondSectionBigCard.css";

const SecondSectionBigCard = (props) => {
  return (
    <Col sm={7} xs={12} className="secondcardcontainer">
      <div className="verticallineBigCard"></div>
      <div>
        <div className="topcontainedheader">
          <h3>{props.headername}</h3>
          <button className="apartmentbtn">{props.buttonname}</button>
        </div>
        <img
          src={props.imgurl}
          alt=""
          className="firstimageapartment"
          loading="lazy"
        />
        <ul className="ulbig">
          <li className="contentapartment">{props.contained}</li>
        </ul>
      </div>
    </Col>
  );
};

export default SecondSectionBigCard;
