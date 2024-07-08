// import React, { useEffect } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import "./MainNavBar.css";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useState } from "react";

// const MainNavBar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [expanded, setExpanded] = useState(false);
//   const [showNavBar, setshowNavBar] = useState(true);
//   const [scrollY, setscrollY] = useState(0);

//   const handleNavClick = (path) => {
//     setExpanded(false);
//     navigate(path);
//   };

//   // topbar fixed function

//   const controllScroll = () => {
//     if (window.scrollY > scrollY) {
//       setshowNavBar(false);
//     } else {
//       setshowNavBar(true);
//     }
//     setscrollY(window.scrollY);
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", controllScroll);
//     return () => {
//       window.removeEventListener("scroll", controllScroll);
//     };
//   });
//   return (
//     <Navbar
//       expand="sm"
//       className={`mainnnContainerNavComponent ${showNavBar ? "show" : "hide"}`}
//       expanded={expanded}
//       onToggle={(expanded) => setExpanded(expanded)}
//       fixed="top"
//     >
//       <Container>
//         <Navbar.Brand href="#">
//           <img
//             src="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719306812/mailStone/bu7trgfdi4qyxyelonlc.png"
//             alt=""
//             className="MainnNavBarImage"
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse
//           id="basic-navbar-nav"
//           className="justify-content-between"
//         >
//           <Nav className="mx-auto MainnNavBarButtons">
//             <Nav.Link
//               onClick={() => handleNavClick("/")}
//               className={location.pathname === "/" ? "active" : ""}
//             >
//               Home
//             </Nav.Link>
//             <Nav.Link
//               onClick={() => handleNavClick("/service")}
//               className={location.pathname === "/service" ? "active" : ""}
//             >
//               Services
//             </Nav.Link>
//             <Nav.Link
//               onClick={() => handleNavClick("/project")}
//               className={location.pathname === "/project" ? "active" : ""}
//             >
//               Projects
//             </Nav.Link>
//             <Nav.Link
//               onClick={() => handleNavClick("/AboutUs")}
//               className={location.pathname === "/AboutUs" ? "active" : ""}
//             >
//               About&nbsp;Us
//             </Nav.Link>
//           </Nav>
//           <button
//             className="mainnavBarButton"
//             onClick={() => handleNavClick("/jbs-home")}
//           >
//             JBS Interior
//           </button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default MainNavBar;

import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./MainNavBar.css";
import { useNavigate, useLocation } from "react-router-dom";

const MainNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [showNavBar, setShowNavBar] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const handleNavClick = (path) => {
    setExpanded(false);
    navigate(path);
  };

  // hide show property

  const controlScroll = () => {
    if (window.scrollY > scrollY) {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlScroll);
    return () => {
      window.removeEventListener("scroll", controlScroll);
    };
  }, [scrollY]);

  return (
    <Navbar
      expand="sm"
      className={`mainnnContainerNavComponent ${showNavBar ? "show" : "hide"}`}
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
      // fixed="top"
    >
      <Container>
        <Navbar.Brand href="#">
          <img
            src="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719306812/mailStone/bu7trgfdi4qyxyelonlc.png"
            alt=""
            className="MainnNavBarImage"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Nav className="mx-auto MainnNavBarButtons">
            <Nav.Link
              onClick={() => handleNavClick("/")}
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavClick("/service")}
              className={location.pathname === "/service" ? "active" : ""}
            >
              Services
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavClick("/project")}
              className={location.pathname === "/project" ? "active" : ""}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavClick("/AboutUs")}
              className={location.pathname === "/AboutUs" ? "active" : ""}
            >
              About&nbsp;Us
            </Nav.Link>
          </Nav>
          <button
            className="mainnavBarButton"
            onClick={() => handleNavClick("/jbs-home")}
          >
            JBS Interior
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavBar;

// import React, { useEffect, useState } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import "./MainNavBar.css";
// import { useNavigate, useLocation } from "react-router-dom";

// const MainNavBar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [expanded, setExpanded] = useState(false);
//   const [showNavBar, setShowNavBar] = useState(true);
//   const [scrollY, setScrollY] = useState(0);

//   const handleNavClick = (path) => {
//     setExpanded(false);
//     navigate(path);
//   };

//   const controlScroll = () => {
//     if (window.scrollY > scrollY) {
//       setShowNavBar(false);
//     } else {
//       setShowNavBar(true);
//     }
//     setScrollY(window.scrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", controlScroll);
//     return () => {
//       window.removeEventListener("scroll", controlScroll);
//     };
//   }, [scrollY]);

//   useEffect(() => {
//     document.body.style.paddingTop = expanded ? "300px" : "0";
//     return () => {
//       document.body.style.paddingTop = "0";
//     };
//   }, [expanded]);

//   return (
//     <Navbar
//       expand="sm"
//       className={`mainnnContainerNavComponent ${showNavBar ? "show" : "hide"}`}
//       expanded={expanded}
//       onToggle={(expanded) => setExpanded(expanded)}
//       fixed="top"
//     >
//       <Container>
//         <Navbar.Brand href="#">
//           <img
//             src="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719306812/mailStone/bu7trgfdi4qyxyelonlc.png"
//             alt=""
//             className="MainnNavBarImage"
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse
//           id="basic-navbar-nav"
//           className="justify-content-between"
//         >
//           <Nav className="mx-auto MainnNavBarButtons">
//             <Nav.Link
//               onClick={() => handleNavClick("/")}
//               className={location.pathname === "/" ? "active" : ""}
//             >
//               Home
//             </Nav.Link>
//             <Nav.Link
//               onClick={() => handleNavClick("/service")}
//               className={location.pathname === "/service" ? "active" : ""}
//             >
//               Services
//             </Nav.Link>
//             <Nav.Link
//               onClick={() => handleNavClick("/project")}
//               className={location.pathname === "/project" ? "active" : ""}
//             >
//               Projects
//             </Nav.Link>
//             <Nav.Link
//               onClick={() => handleNavClick("/AboutUs")}
//               className={location.pathname === "/AboutUs" ? "active" : ""}
//             >
//               About&nbsp;Us
//             </Nav.Link>
//           </Nav>
//           <button
//             className="mainnavBarButton"
//             onClick={() => handleNavClick("/jbs-home")}
//           >
//             JBS Interior
//           </button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default MainNavBar;
