import React from "react";
import { Button, Col, Image, Modal, Row } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import "./ServiceModal.css";

export default function ServiceModal(props) {
  return (
    <>
      <Modal {...props}>
        <Row className="modal-row">
          <Col>
            <Row>
              <Col className="modalclosecross">
                <RxCross2
                  onClick={props.onHide}
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "0.7rem" }}>
              <Col className="modalclose23">PROJECT-1</Col>
              <Col className="modalclose">
                <Button className="modal-button">Commercials</Button>
              </Col>
            </Row>
            <ul>
              <li className="threelist">
                For three generations and nearly a century, Mailstone has been
                delivering elegant, timeless spaces and made-to-measure,
                handcrafted, fine furniture that excite the eye and nurture the
                soul.
              </li>
            </ul>
            <Row>
              <Col>
                <Image
                  src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719814110/sddjemhjzjjaoth1che1.png"
                  className="modalImage"
                />
              </Col>
              <Col>
                <Image
                  src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719814110/sddjemhjzjjaoth1che1.png"
                  className="modalImage"
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "0.7rem" }}>
              <Col>
                <Image
                  src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719814110/sddjemhjzjjaoth1che1.png"
                  className="modalImage"
                />
              </Col>
              <Col>
                <Image
                  src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719814110/sddjemhjzjjaoth1che1.png"
                  className="modalImage"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal>
    </>
  );
}
