import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import "./JbsCard.css";
import LazyBackground from "../../../../GlobalComponent/OptimizedImage/LazyBackground";

export default function JbsCard() {
  return (
    <div>
      <Container style={{ marginTop: "4rem" }}>
        <Row>
          <div className="card-cotainer-background">
            <div className="card-container-first-image">
              <h1 className="card-container-first-image-contaent">
                Why Choose JBS Interior?
              </h1>
              <div className="card-container-first-image-uls">
                <ul>
                  <li className=" card-container-first-image-lis">
                    Over 300 projects completed, serving 200+ satisfied clients,
                    bringing extensive experience to each project.
                  </li>
                  <li className="card-container-first-image-lis">
                    We prioritize top-tier materials and trusted partnerships
                    for consistently superior project outcomes.
                  </li>
                  <li className=" card-container-first-image-lis">
                    Transparent communication, attentive listening, and
                    dedication to delivering promises ensure your satisfaction.
                  </li>
                </ul>
              </div>
            </div>
            <LazyBackground
              src="https://res.cloudinary.com/dbklt3v4d/image/upload/v1720158668/mailStone/Frame_1321316272_scrmfc.png"
              className="card-container-second-image"
            />
          </div>
        </Row>
        <Row>
          <div className="card-cotainer-background">
            <LazyBackground
              src="https://res.cloudinary.com/dbklt3v4d/image/upload/v1720162289/mailStone/Frame_1321316313_pumxjp.png"
              className="card-container-third-image"
            />
            <div className="card-container-fourth-image">
              <h1 className="card-container-first-image-contaent">
                Why Choose JBS Interior?
              </h1>
              <div className="card-container-first-image-uls">
                <ul>
                  <li className=" card-container-first-image-lis">
                    Over 300 projects completed, serving 200+ satisfied clients,
                    bringing extensive experience to each project.
                  </li>
                  <li className=" card-container-first-image-lis">
                    We prioritize top-tier materials and trusted partnerships
                    for consistently superior project outcomes.
                  </li>
                  <li className=" card-container-first-image-lis">
                    Transparent communication, attentive listening, and
                    dedication to delivering promises ensure your satisfaction.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
