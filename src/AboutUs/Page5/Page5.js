import React from "react";
import "./Page5.css";
import Cardd from "./Cardd.js";
import { Container, Row, Col } from "react-bootstrap";

function Page5() {
  return (
    <>
      <Container fluid className="page5-container">
        <div className="page5-dottedline1">
          <div>
            <Row className="meet-heading">
              <Col lg={5} md={7} xs={12} className="meet">
                <h1 className="page-first-heading"> MEET THE</h1>
              </Col>
              <Col lg={7} md={5} xs={12}></Col>
            </Row>
            <Row className="meet-heading">
              <Col lg={3} md={3} xs={12}></Col>
              <Col lg={9} md={9} xs={12} className="amzing-team">
                <h1 className="page-first-heading"> AMAZING TEAM </h1>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Cardd
                  Img="https://res.cloudinary.com/drny4cbec/image/upload/v1719407257/vnefmwxciinzvqgraduk.png"
                  tittle="NITESH AGARWAL"
                  button="Founder & CEO"
                />
              </Col>
              <Col md={4} className="card-gap">
                <Cardd
                  Img="https://res.cloudinary.com/drny4cbec/image/upload/v1719407255/buqrxybbduw0kiuvqxhf.png"
                  tittle="NITESH AGARWAL"
                  button="Sales Manager"
                />
              </Col>
            </Row>
            <Row className="rowofimagecontainer">
              <div id="ImageSecondContainer">
                <Row className="">
                  <Col Col md={4}>
                    <Cardd
                      Img="https://res.cloudinary.com/drny4cbec/image/upload/v1719407254/of6dv3jtuipy1qpnlzdj.png"
                      tittle="NITESH AGARWAL"
                      button="Business Consultant"
                    />
                  </Col>
                  <Col Col md={4} className="card-gap">
                    <Cardd
                      Img="https://res.cloudinary.com/drny4cbec/image/upload/v1719407259/k1ghhm5ruuivttpqgpsp.png"
                      tittle="NITESH AGARWAL"
                      button="BDE"
                    />
                  </Col>
                </Row>
              </div>
            </Row>
            {/* <Row className="meet-first-row">
              <Col md={4}>
                <Cardd
                  Img="https://res.cloudinary.com/drny4cbec/image/upload/v1719407257/vnefmwxciinzvqgraduk.png"
                  tittle="NITESH AGARWAL"
                  button="Founder & CEO"
                />
              </Col>
              <Col md={4} className="card-gap">
                <Cardd
                  Img="https://res.cloudinary.com/drny4cbec/image/upload/v1719407255/buqrxybbduw0kiuvqxhf.png"
                  tittle="NITESH AGARWAL"
                  button="Sales Manager"
                />
              </Col>
            </Row>
            <Row className="meet-last-row">
              <div id="ImageSecondContainer">
                <Row>
                  <Col Col md={4}>
                    <Cardd
                      Img="https://res.cloudinary.com/drny4cbec/image/upload/v1719407254/of6dv3jtuipy1qpnlzdj.png"
                      tittle="NITESH AGARWAL"
                      button="Business Consultant"
                    />
                  </Col>
                  <Col Col md={4} className="card-gap">
                    <Cardd
                      Img="https://res.cloudinary.com/drny4cbec/image/upload/v1719407259/k1ghhm5ruuivttpqgpsp.png"
                      tittle="NITESH AGARWAL"
                      button="BDE"
                    />
                  </Col>
                </Row>
              </div>
            </Row> */}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Page5;
