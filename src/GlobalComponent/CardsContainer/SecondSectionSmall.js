import React from "react";
import { Col } from "react-bootstrap";
import "./SecondSectionSmall.css";

const SecondSectionSmall = (props) => {
  return (
    <Col sm={5} xs={12} className="secondColomn">
      <div className="defectSmallCardButton">
        <div className="topcontainedheader">
          {/* <h3>Apartment Complex</h3> */}
          <h3>{props.headername}</h3>
          <button className="apartmentbtn">{props.buttonname}</button>
        </div>
        <img
          src={props.imgurl}
          alt=""
          className="secondimageapartment"
          loading="lazy"
        />
        <ul>
          <li className="contentapartment">{props.contained}</li>
        </ul>
      </div>
    </Col>
  );
};

export default SecondSectionSmall;
