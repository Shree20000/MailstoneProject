import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./JbsNavBar.css";
import { useNavigate, useLocation } from "react-router-dom";

const JbsNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const handleNavClick = (path) => {
    setExpanded(false);
    if (path === "/jbs-home#about-us") {
      navigate("/jbs-home");
      setTimeout(() => {
        const aboutUsSection = document.getElementById("about-us");
        if (aboutUsSection) {
          aboutUsSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      navigate(path);
    }
  };

  const controllyDirection = () => {
    if (window.scrollY > scrollY) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controllyDirection);
    return () => {
      window.removeEventListener("scroll", controllyDirection);
    };
  }, [scrollY]);

  return (
    <Navbar
      expand="sm"
      className={`w-100 jbsmainNavBar ${showNav ? "show" : "hide"} ${
        showNav ? "blur-background" : ""
      }`}
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
      // fixed="top"
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
              className={`jbsnavbarcomponent ${
                location.pathname === "/jbs-home" ? "active" : ""
              }`}
              onClick={() => handleNavClick("/jbs-home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`jbsnavbarcomponent ${
                location.pathname === "/jbs-work" ? "active" : ""
              }`}
              onClick={() => handleNavClick("/jbs-work")}
            >
              Work
            </Nav.Link>
            <Nav.Link
              className={`jbsnavbarcomponent ${
                location.pathname === "/jbs-home#about-us" ? "active" : ""
              }`}
              onClick={() => handleNavClick("/jbs-home#about-us")}
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
