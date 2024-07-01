import React from "react";
import { Col, Row } from "react-bootstrap";
import "./StunningInteriors.css";
import Marquee from "react-fast-marquee";
export default function StunningInteriors() {
  return (
    <div>
      <Row
        style={{
          textAlign: "center",
          alignItems: "center",
          marginTop: "0.7rem",
        }}
      >
        <Col className="happy-client">HAPPY CLIENTS</Col>
      </Row>
      <Row style={{ marginTop: "2rem" }}>
        <Marquee>
          <div className="molex-div">
            <img
              src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719487540/afymhfclbfzd6gokydey.png"
              className="molex"
            />
          </div>
          <div className="molex-div">
            <img
              src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719487831/biqcsa64ctqfqvyq2wkr.png"
              className="molex23"
            />
          </div>
          <div className="molex-div">
            <img
              src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719489961/nhjllpnkuazmvipkok4s.png"
              className="molex23"
            />
          </div>
          <div className="molex-div">
            <img
              src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719490327/hbz5utpxpazhdviufvbi.png"
              className="molex234"
            />
          </div>
          <div className="molex-div">
            <img
              src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719490443/h8qhbucnubifhaxj6lst.png"
              className="molex234"
            />
          </div>
          <div className="molex-div2">
            <img
              src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719490535/tfgfpxe4ofjwg2zvenux.png"
              className="molex234"
            />
          </div>
        </Marquee>
      </Row>
      <Row
        style={{
          marginTop: "1rem",
          padding: "3.6rem",
        }}
      >
        <Col className="milestone-1234">
          At Mailstone, we take pride in serving a diverse range of clients,
          from homeowners to businesses, each with unique needs and visions. Our
          commitment to excellence and personalized service has earned us the
          trust and loyalty of our clients, ensuring every project is a success.
          Whether you're seeking to transform a single room or an entire
          building, we bring your dreams to life with precision and passion.
          Join our family of satisfied clients and experience the Mailstone
          difference.
        </Col>
      </Row>
    </div>
  );
}
