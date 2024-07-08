import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./CommercialCard.css";
import { MdArrowOutward } from "react-icons/md";
import ServiceModal from "../ServiceModal/ServiceModal";

export default function CommercialCard({ coworking, button, lipara, image }) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Container>
        <Row>
          <Col md={11} xs={11}>
            <Row>
              <Col md={10} xs={10} className="co-working">
                {coworking}
              </Col>
              <Col md={2} xs={2} className="marginleft">
                <Button className="commercial-button">{button}</Button>
              </Col>
            </Row>
            <div>
              <div>
                <Row className="row-row123">
                  <Image src={image} className="image-height1234" />
                </Row>
              </div>
              <div>
                <span id="span-arrow">
                  <Button className="outward23" onClick={() => setModal(true)}>
                    <MdArrowOutward id="outword-icon12" />
                  </Button>
                </span>
              </div>

              <ul>
                <li className="ul-tag">{lipara}</li>
              </ul>
            </div>
          </Col>
          <Col md={1} xs={1}>
            <div className="vertical-line"></div>
          </Col>
        </Row>
        {modal && <ServiceModal show={modal} onHide={() => setModal(false)} />}
      </Container>
    </>
  );
}
