import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import "./JbsForm.css";
import OptimizedImage from "../../../../GlobalComponent/OptimizedImage/OptimizedImage";

export default function JbsForm() {
  return (
    <Container
      style={{ marginTop: "2rem", position: "relative", marginBottom: "0" }}
    >
      <OptimizedImage
        src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719906012/a3mjbxzszkqbbnrnbanm.png"
        className="background-image"
        loading="lazy"
      />
      <Card className="centered-card">
        <Form>
          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="meetyou">Nice to meet you</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="What is your Name ?"
                  className="jbs-placeholder"
                />
              </Form.Group>
              <div className="underline-12"></div>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail2">
                <Form.Label className="meetyou">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Write your email address"
                  className="jbs-placeholder"
                />
              </Form.Group>
              <div className="underline-12"></div>
            </Col>
          </Row>
          <Row style={{ marginTop: "1.3rem" }}>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="meetyou">
                  Mobile <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Write your mobile number"
                  className="jbs-placeholder"
                />
              </Form.Group>
              <div className="underline-12"></div>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail2">
                <Form.Label className="meetyou">Subject</Form.Label>
                <Form.Select
                  className="jbs-placeholder"
                  aria-label="Default select example"
                >
                  <option value="" className="jbs-placeholder23">
                    How can we help you?
                  </option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </Form.Select>
              </Form.Group>
              <div className="underline-12"></div>
            </Col>
          </Row>
          <Row style={{ marginTop: "1.3rem" }}>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label className="meetyou">Message</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tell us about your project ?"
                  className="jbs-placeholder"
                />
              </Form.Group>
              <div className="underline-12"></div>
            </Col>
          </Row>
          <Form.Group
            className="mb-3"
            id="formGridCheckbox"
            style={{ marginTop: "1.3rem" }}
          >
            <Form.Check
              type="checkbox"
              label="I am bound by the terms of the Service I accept Privacy Policy"
              className="bound-checkbox"
            />
          </Form.Group>
          <Row
            style={{
              paddingLeft: "1rem",
              paddingRight: "1rem",
              marginTop: "1rem",
            }}
          >
            <Button className="message-button">Send Message</Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}
