import { useEffect, useState } from "react";
import "./Sidebar.css";
import { Col, Image, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowForwardIos, MdClose } from "react-icons/md";
import dashboard from "../../assests/SideBarImg/home.png";
import product from "../../assests/SideBarImg/product.png";
import color from "../../assests/SideBarImg/cube.png";
import background from "../../assests/SideBarImg/profile.png";
import template from "../../assests/SideBarImg/notepad.png";
import support from "../../assests/SideBarImg/support.png";
import { IoIosArrowForward } from "react-icons/io";
import Configurator from "../../assests/SideBarImg/m.png";
import setting from "../../assests/SideBarImg/setting.png";
import logoo from "../../assests/SideBarImg/logo.png";
import logout from "../../assests/SideBarImg/logout.png";

function Sidebar() {
  const expand = "md";
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleClose = () => setShowOffcanvas(false);
  const [active, setActive] = useState("/dashboard"); // Default active state

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  const navigate = useNavigate();

  const handleItemClick = (path) => {
    setActive(path);
    navigate(path);
    handleClose();
  };

  return (
    <>
      <Navbar key={expand} expand={expand}>
        <Container fluid>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            onClick={() => setShowOffcanvas(true)}
          />
          {screenWidth > 599.95 ? null : (
            <Navbar.Brand>
              <Image
                src={logoo}
                alt="logo"
                className="sbm18"
                onClick={() => navigate("/dashboard")}
              />
            </Navbar.Brand>
          )}

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
            show={showOffcanvas}
            className="sbm3"
          >
            <Offcanvas.Header>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                {/* Offcanvas title/logo can go here */}
              </Offcanvas.Title>
              <span>
                <MdClose
                  onClick={handleClose}
                  style={{
                    height: "1.2rem",
                    width: "1.2rem",
                  }}
                />
              </span>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Container className="sbm15">
                {screenWidth < 599.95 ? null : (
                  <Row className="sbm17">
                    <Image
                      src={logoo}
                      alt="logo"
                      className="sbm18"
                      onClick={() => handleItemClick("/dashboard")}
                    />
                  </Row>
                )}
                <Row>
                  <Row
                    className={`sidebar-row ${
                      active === "/dashboard" ? "active" : ""
                    }`}
                    onClick={() => handleItemClick("/dashboard")}
                  >
                    <Col md={10} xs={10} lg={10} sm={10}>
                      <div className="sidebar-div">
                        <div>
                          <Image src={dashboard} />
                        </div>
                        <div
                          className={
                            active === "/dashboard"
                              ? "activerow"
                              : "sidebar-name"
                          }
                        >
                          Dashboard
                        </div>
                      </div>
                    </Col>
                    <Col md={2} lg={2} sm={2} xs={2} className="sidebar-col2">
                      <IoIosArrowForward />
                    </Col>
                  </Row>

                  <Row
                    className={`sidebar-row ${
                      active === "/product" ? "active" : ""
                    }`}
                    onClick={() => handleItemClick("/product")}
                  >
                    <Col md={10} xs={10} lg={10} sm={10}>
                      <div className="sidebar-div">
                        <div>
                          <Image src={product} />
                        </div>
                        <div
                          className={
                            active === "/product" ? "activerow" : "sidebar-name"
                          }
                        >
                          Product
                        </div>
                      </div>
                    </Col>
                    <Col md={2} lg={2} sm={2} xs={2} className="sidebar-col2">
                      <IoIosArrowForward />
                    </Col>
                  </Row>

                  <Row
                    className={`sidebar-row ${
                      active === "/configurator" ? "active" : ""
                    }`}
                    onClick={() => handleItemClick("/configurator")}
                  >
                    <Col md={10} xs={10} lg={10} sm={10}>
                      <div className="sidebar-div">
                        <div>
                          <Image src={Configurator} />
                        </div>
                        <div
                          className={
                            active === "/configurator"
                              ? "activerow"
                              : "sidebar-name"
                          }
                        >
                          Configurator
                        </div>
                      </div>
                    </Col>
                    <Col md={2} lg={2} sm={2} xs={2} className="sidebar-col2">
                      <IoIosArrowForward />
                    </Col>
                  </Row>
                  <Row
                    className={`sidebar-row ${
                      active === "/template" ? "active" : ""
                    }`}
                    onClick={() => handleItemClick("/template")}
                  >
                    <Col md={10} xs={10} lg={10} sm={10}>
                      <div className="sidebar-div">
                        <div>
                          <Image src={template} />
                        </div>
                        <div
                          className={
                            active === "/template"
                              ? "activerow"
                              : "sidebar-name"
                          }
                        >
                          Template
                        </div>
                      </div>
                    </Col>
                    <Col md={2} lg={2} sm={2} xs={2} className="sidebar-col2">
                      <IoIosArrowForward />
                    </Col>
                  </Row>

                  <Row
                    className={`sidebar-row ${
                      active === "/background" ? "active" : ""
                    }`}
                    onClick={() => handleItemClick("/background")}
                  >
                    <Col md={10} xs={10} lg={10} sm={10}>
                      <div className="sidebar-div">
                        <div>
                          <Image src={background} />
                        </div>
                        <div
                          className={
                            active === "/background"
                              ? "activerow"
                              : "sidebar-name"
                          }
                        >
                          Background
                        </div>
                      </div>
                    </Col>
                    <Col md={2} lg={2} sm={2} xs={2} className="sidebar-col2">
                      <IoIosArrowForward />
                    </Col>
                  </Row>
                  <Row
                    className={`sidebar-row ${
                      active === "/color" ? "active" : ""
                    }`}
                    onClick={() => handleItemClick("/color")}
                  >
                    <Col md={10} xs={10} lg={10} sm={10}>
                      <div className="sidebar-div">
                        <div>
                          <Image src={color} />
                        </div>
                        <div
                          className={
                            active === "/color" ? "activerow" : "sidebar-name"
                          }
                        >
                          Color
                        </div>
                      </div>
                    </Col>
                    <Col md={2} lg={2} sm={2} xs={2} className="sidebar-col2">
                      <IoIosArrowForward />
                    </Col>
                  </Row>

                  <Row className="help">
                    <Col className="help-col">Help</Col>
                  </Row>
                  <div>
                    <hr />
                  </div>

                  <Row
                    className={`sidebar-row ${
                      active === "/support" ? "active" : ""
                    }`}
                  >
                    <Col md={10} xs={10} lg={10} sm={10}>
                      <div className="sidebar-div">
                        <div>
                          <Image src={support} />
                        </div>
                        <div
                          className={
                            active === "/support" ? "activerow" : "sidebar-name"
                          }
                        >
                          Support
                        </div>
                      </div>
                    </Col>
                    <Col md={2} lg={2} sm={2} xs={2} className="sidebar-col2">
                      <IoIosArrowForward />
                    </Col>
                  </Row>
                  <Row className="sidebar-row">
                    <Col md={10} xs={10} lg={10} sm={10}>
                      <div className="sidebar-div">
                        <div>
                          <Image src={setting} />
                        </div>
                        <div className="sidebar-name">Settings</div>
                      </div>
                    </Col>
                    <Col md={2} lg={2} sm={2} xs={2} className="sidebar-col2">
                      <IoIosArrowForward />
                    </Col>
                  </Row>
                  <Row className="sidebar-row">
                    <Col md={10} xs={10} lg={10} sm={10}>
                      <div className="sidebar-div">
                        <div>
                          <Image src={logout} />
                        </div>
                        <div className="sidebar-name">Logout</div>
                      </div>
                    </Col>
                    <Col md={2} lg={2} sm={2} xs={2} className="sidebar-col2">
                      <IoIosArrowForward />
                    </Col>
                  </Row>
                </Row>
              </Container>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Sidebar;
