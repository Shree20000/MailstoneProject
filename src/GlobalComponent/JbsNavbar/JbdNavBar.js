import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./JbsNavBar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const JbsNavBar = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = (path) => {
    setExpanded(false);
    navigate(path);
  };

  return (
    <Navbar
      expand="sm"
      className="w-100 jbsmainNavBar"
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container className="jbsmainContainer">
        <Navbar.Brand href="#" className="me-0">
          <img
            src="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719895480/mailStone/a7oxryzcbb8evyaunkik.png"
            alt=""
            className="JbsNavBarImage"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Nav className="mx-auto">
            <Nav.Link
              className="jbsnavbarcomponent"
              onClick={() => handleNavClick("/jbs-home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="jbsnavbarcomponent"
              onClick={() => handleNavClick("/jbs-work")}
            >
              Work
            </Nav.Link>
            <Nav.Link
              className="jbsnavbarcomponent"
              onClick={() => handleNavClick("/jbs-AboutUs")}
            >
              About&nbsp;Us
            </Nav.Link>
          </Nav>
          <button className="JbsNavBarButton" onClick={() => navigate("/")}>
            Mailstone-Home
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default JbsNavBar;
