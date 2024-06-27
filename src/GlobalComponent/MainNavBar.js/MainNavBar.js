import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./MainNavBar.css";
import { Button } from "react-bootstrap";

const MainNavBar = () => {
  return (
    <Container className="NavBarContainer">
      <Navbar expand="sm" className="mainContainerNavComponent">
        <Navbar.Brand href="#">
          <img
            src="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719306812/mailStone/bu7trgfdi4qyxyelonlc.png"
            alt=""
            className="MainNavBarImage"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="MainNavBarButtons">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about">Services</Nav.Link>
            <Nav.Link href="#services">Projects</Nav.Link>
            <Nav.Link href="#contact">About Us</Nav.Link>
          </Nav>
          <button className="mainnavBarButton">JBS Interior</button>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default MainNavBar;
