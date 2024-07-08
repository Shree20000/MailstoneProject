import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./Fabrication.css";
import { MdArrowOutward } from "react-icons/md";
import ServiceModal from "../ServiceModal/ServiceModal";
import OptimizedImage from "../../../GlobalComponent/OptimizedImage/OptimizedImage";

export default function Fabrication({ upvc, buttonup, favimg, longtext }) {
  const [modal1, setModal1] = useState();
  return (
    <div>
      <Container>
        <Row>
          <Col md={11} xs={11}>
            <Row>
              <Col md={10} xs={10} className="co-working1">
                {upvc}
              </Col>
              <Col md={2} xs={1} className="marginleft1">
                <Button className="commercial-button">{buttonup}</Button>
              </Col>
            </Row>
            <Row style={{ marginTop: "2rem" }}>
              {/* <Image
                src={favimg}
                className="image-height12345"
                loading="lazy"
              /> */}
              <OptimizedImage
                src={favimg}
                className="image-height12345"
                loading="lazy"
              />
            </Row>
            <span id="span-arrow1">
              <Button className="outward23" onClick={() => setModal1(true)}>
                <MdArrowOutward id="outword-icon123" />
              </Button>
            </span>

            <ul>
              <li className="ul-tag1">{longtext}</li>
            </ul>
          </Col>
          <Col md={1} xs={1}>
            <div className="vertical-line1"></div>
          </Col>
        </Row>
      </Container>
      {modal1 && <ServiceModal show={modal1} onHide={() => setModal1(false)} />}
    </div>
  );
}
