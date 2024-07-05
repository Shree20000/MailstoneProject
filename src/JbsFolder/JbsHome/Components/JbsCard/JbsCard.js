// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import LazyLoad from "react-lazyload";
// import "./JbsCard.css";

// export default function JbsCard() {
//   return (
//     <div>
//       <Container style={{ marginTop: "2rem" }}>
//         <Row>
//           <Col md={12} lg={7} xs={12} className="relative-container345">
//             <div className="text-overlayy123">
//               <div className="choose">Why Choose JBS Interior?</div>
//               <ul className="ullist">
//                 <li className="overlist">
//                   Over 300 projects completed, serving 200+ satisfied clients,
//                   bringing extensive experience to each project.
//                 </li>
//                 <li className="overlist">
//                   We prioritize top-tier materials and trusted partnerships for
//                   consistently superior project outcomes.
//                 </li>
//                 <li className="overlist">
//                   Transparent communication, attentive listening, and dedication
//                   to delivering promises ensure your satisfaction.
//                 </li>
//               </ul>
//             </div>
//             <LazyLoad height={200} offset={100} once>
//               <img
//                 src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719915883/bmsugma7zsv99zwsdynf.png"
//                 className="image4567"
//                 loading="lazy"
//                 alt="JBS Interior Project"
//               />
//             </LazyLoad>
//           </Col>
//           <Col md={12} lg={5} xs={12}>
//             <LazyLoad height={200} offset={100} once>
//               <img
//                 src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719905361/pblrx0zwl6vbbxnnpa50.png"
//                 className="image14567"
//                 loading="lazy"
//                 alt="JBS Interior Material"
//               />
//             </LazyLoad>
//           </Col>
//         </Row>
//         <Row className="lastimage-row">
//           <Col md={12} lg={5} xs={12}>
//             <LazyLoad height={200} offset={100} once>
//               <img
//                 src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719985876/rohpgzcaluxvidncxqff.png"
//                 className="image14567"
//                 loading="lazy"
//                 alt="JBS Interior Partnership"
//               />
//             </LazyLoad>
//           </Col>
//           <Col md={12} lg={7} xs={12} className="final-coll">
//             <div>
//               <LazyLoad height={200} offset={100} once>
//                 <img
//                   src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719985967/ypr1qa0g6h67vzupbrlx.png"
//                   className="image4567"
//                   loading="lazy"
//                   alt="Contact JBS Interior"
//                 />
//               </LazyLoad>
//               <div className="text-overlayy123456">
//                 <div className="contact-ussss">Contact us</div>
//                 <div className="welove">
//                   We'd love to hear from you and discuss your project. At JBS
//                   Interior, we bring brands to life through cultural insight and
//                   strategic vision. Ready to collaborate?
//                 </div>
//                 <div className="welove">
//                   Call us at +91-8050141583 or +91-6364926425, or email us at
//                   info@jbsinterior.in.
//                 </div>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./JbsCard.css";
export default function JbsCard() {
  return (
    <div>
      <Container>
        <Row style={{ marginTop: "2rem" }}>
          <Col xs={12} lg={7} md={12} className="backkkkkk">
            <div className="choose">Why Choose JBS Interior?</div>
            <ul className="ullist">
              <li className="overlist">
                Over 300 projects completed, serving 200+ satisfied clients,
                bringing extensive experience to each project.
              </li>
              <li className="overlist">
                We prioritize top-tier materials and trusted partnerships for
                consistently superior project outcomes.
              </li>
              <li className="overlist">
                Transparent communication, attentive listening, and dedication
                to delivering promises ensure your satisfaction.
              </li>
            </ul>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
