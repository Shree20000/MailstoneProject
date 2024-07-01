// import React from "react";
// import { Col, Container, Image, Row } from "react-bootstrap";
// import "./CardPage.css";
// import CardComp from "../../../GlobalComponent/CardComp/CardComp";
// export default function CardPage() {
//   return (
//     <>
//       <div style={{backgroundColor:"#0C3F78"}} className="card-page-fluid">

//         <Row className="card-row">
//           <Col>
//             <CardComp />
//           </Col>
//           <Col>
//             <CardComp />
//           </Col>
//           <Col>
//             <CardComp />
//           </Col>
//         </Row>

//       </div>
//     </>
//   );
// }
import React from "react";
import { Col, Row } from "react-bootstrap";
import "./CardPage.css";
import CardComp from "../../../GlobalComponent/CardComp/CardComp";

export default function CardPage() {
  return (
    <>
      <div style={{ backgroundColor: "#0C3F78" }} className="card-page-fluid">
        <Row className="card-row">
          <Col lg={4} md={6} sm={12} className="mb-4">
            <CardComp />
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-4">
            <CardComp />
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-4">
            <CardComp />
          </Col>
        </Row>
      </div>
    </>
  );
}
