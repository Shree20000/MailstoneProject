import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import circleimg from "../../assests/Topbarimg/40px/#5.png";
import { IoSearchSharp } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./TopNavBar.css";

function TopNavBar() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={9}></Col>
          <Col md={3} style={{ display: "flex", justifyContent: "flex-end" }}>
            <div id="topbar-div">
              <div>
                <IoSearchSharp className="serach-icon" />
              </div>

              <div>
                <MdNotificationsNone className="serach-icon" />
              </div>
              <div className="vertical-line"></div>
              <div
                style={{
                  display: "flex",
                  gap: "9px",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div>
                  <Image src={circleimg} />
                </div>
                <div className="arttt">ArtTemplate</div>
                <div>
                  <MdOutlineArrowDropDown />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <hr />
      </Container>

      {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>hiiii</div> */}
    </div>
  );
}

export default TopNavBar;
