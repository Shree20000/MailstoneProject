import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import "./JbsCard.css";

export default function JbsCard() {
  return (
    <div>
      <Container style={{ marginTop: "2rem" }}>
        <Row>
          <div className="card-cotainer-background">
            <div className="card-container-first-image">
              <h1 className="card-container-first-image-contaent">
                Why Choose JBS Interior?
              </h1>
              <div className="card-container-first-image-uls">
                <ul>
                  <li className="mt-2 card-container-first-image-lis">
                    Over 300 projects completed, serving 200+ satisfied clients,
                    bringing extensive experience to each project.
                  </li>
                  <li className="mt-2 card-container-first-image-lis">
                    We prioritize top-tier materials and trusted partnerships
                    for consistently superior project outcomes.
                  </li>
                  <li className="mt-2 card-container-first-image-lis">
                    Transparent communication, attentive listening, and
                    dedication to delivering promises ensure your satisfaction.
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-container-second-image"></div>
          </div>
        </Row>
        <Row>
          <div className="card-cotainer-background">
            <div className="card-container-third-image"></div>
            <div className="card-container-fourth-image">
              <h1 className="card-container-first-image-contaent">
                Why Choose JBS Interior?
              </h1>
              <div className="card-container-first-image-uls">
                <ul>
                  <li className="mt-2 card-container-first-image-lis">
                    Over 300 projects completed, serving 200+ satisfied clients,
                    bringing extensive experience to each project.
                  </li>
                  <li className="mt-2 card-container-first-image-lis">
                    We prioritize top-tier materials and trusted partnerships
                    for consistently superior project outcomes.
                  </li>
                  <li className="mt-2 card-container-first-image-lis">
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
