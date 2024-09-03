import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar/Sidebar";
import RootRouter from "../RootRouter/RootRouter";
import { BrowserRouter as Router } from "react-router-dom";
import "./InitialRouting.css";
import TopNavBar from "../../Components/TopNavBar/TopNavBar";

function InitialRouting() {
  return (
    <Router>
      <Container fluid className="rr3">
        <Row noGutters>
          {/* Sidebar Column */}
          <Col md={2} className="rr1">
            <Sidebar />
          </Col>

          {/* Main Content Column */}
          <Col md={10} className="main-content">
            <TopNavBar />

            {/* Remove extra Container and use Row and Col for layout */}
            <Container style={{ padding: "1rem" }}>
              <RootRouter />
            </Container>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default InitialRouting;
