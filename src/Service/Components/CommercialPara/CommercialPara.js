import React from "react";
import "./CommercialPara.css";
import { Container } from "react-bootstrap";
export default function CommercialPara({ name, para }) {
  return (
    <div>
      <Container>
        <ul>
          <li className="commercial">{name}</li>
        </ul>
        <p className="commercial-para">{para}</p>
      </Container>
    </div>
  );
}
