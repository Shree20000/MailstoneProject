import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./CardComp.css";
export default function CardComp({ projectno, happy }) {
  return (
    <>
      <Card className="card-width">
        <Row>
          <Col id="col2000">{projectno}</Col>
        </Row>
        <Row>
          <Col id="col2001"> {happy}</Col>
        </Row>
        <Row>
          <Col
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "1.3rem",
            }}
          >
            <Button className="learn-moreee123">Learn more</Button>
          </Col>
        </Row>
      </Card>
    </>
  );
}
