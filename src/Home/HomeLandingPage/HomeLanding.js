import React from "react";
import "./HomeLanding.css";
import { Col, Container, Row } from "react-bootstrap";
import HorizontalLine from "../../GlobalComponent/HorizontalLine/HorizontalLine";
import { SiFoodpanda } from "react-icons/si";
import ServiceCard from "../../GlobalComponent/OurServiceCard/ServiceCard";
import worker from "../Assets/worker.png";
import house from "../Assets/house.png";
import light from "../Assets/light (2).png";
import tool from "../Assets/tools.png";
import decoker from "../Assets/decoker.png";
import tree from "../Assets/tree.png";
import OptimizedImage from "../../GlobalComponent/OptimizedImage/OptimizedImage";

const HomeLanding = () => {
  return (
    <Container fluid className="MainContainer">
      <Row className="MainHomeSociallink">
        <Col xs={12} sm={2} className="HomeSociallink">
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Instagram</p>
          <p>Facebook</p>
        </Col>
        <Col sm={5} xs={12} className="secondColomn">
          <OptimizedImage
            src="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719377129/mailStone/j9bhc8paygknmrql1nuw.png"
            className="MainImage"
            loading="lazy"
          />
        </Col>
        <Col sm={5} xs={12} className="thirdColomn">
          <h1 className="thirdcolomnfirsttext">
            {" "}
            <span className="firsttextspan">MAKE</span> YOUR
            <span className="singlebarline">-</span>
          </h1>
          <h1 className="thirdcolomnsecondtext">
            HOUSE TO <span className="secondtextspan"> HOME </span>
          </h1>
          <p className="thirdcolomnparagraph">
            For three generations and nearly a century, Mailstone has been
            delivering elegant, timeless spaces and made-to-measure,
            handcrafted, fine furniture that excite the eye and nurture the
            soul.
          </p>

          <button className="learbbutton">Learn More</button>
          <div className="dotted-divvv">
            <OptimizedImage
              src="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719379249/mailStone/qc196tvzlicejmmrxwle.png"
              className="dottedline"
              loading="lazy"
            />
          </div>
        </Col>
      </Row>
      <Row className="seconrow">
        <HorizontalLine />
      </Row>
      <Row className="fourthrow">
        <Col sm={3} xs={6}>
          <OptimizedImage
            src="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719384700/mailStone/mvvayepiu70dhtifkae2.png"
            className="secondsectionfirstimage"
            loading="lazy"
          />
          {/* <img
            src="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719384700/mailStone/mvvayepiu70dhtifkae2.png"
            alt=""
            className="secondsectionfirstimage"
          /> */}
        </Col>
        <Col sm={4} className="tenthcol">
          <p className="textOfSecondSection">
            At Mailstone, with nearly a century of experience and a legacy
            spanning three generations, we transform houses into homes with our
            expert craftsmanship, timeless design, and comprehensive services,
            including custom-made, handcrafted furniture, elegant interiors
            tailored to your style, and full construction to decor solutions,
            creating spaces that inspire, comfort, and reflect your unique
            personality.
          </p>
        </Col>
        <Col sm={5} xs={6}>
          <OptimizedImage
            src="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719384866/mailStone/cujnflednifuewy8ncuw.png"
            className="secondsectionsecondimage"
            loading="lazy"
          />
          {/* <img
            src="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719384866/mailStone/cujnflednifuewy8ncuw.png"
            alt=""
            className="secondsectionsecondimage"
          /> */}
        </Col>
        <Col sm={12} xs={12}>
          <p className="showelem">
            At Mailstone, with nearly a century of experience and a legacy
            spanning three generations, we transform houses into homes with our
            expert craftsmanship, timeless design, and comprehensive services,
            including custom-made, handcrafted furniture, elegant interiors
            tailored to your style, and full construction to decor solutions,
            creating spaces that inspire, comfort, and reflect your unique
            personality.
          </p>
        </Col>
      </Row>
      <Row className="seconrow">
        <HorizontalLine />
      </Row>
      <Row>
        <Col className="linebarContainer">
          <div className="linebarcontainer">
            <div className="linebar"></div>
            <h1 className="linebartext">Our Services</h1>
          </div>
        </Col>
      </Row>
      <Row className="">
        <Col sm={4} xs={12}>
          <ServiceCard
            icon={worker}
            name="Construction"
            description="Quality craftsmanship from groundbreaking to project completion. "
          />
        </Col>
        <Col sm={4} xs={12}>
          <ServiceCard
            icon={house}
            name="Interior Design"
            description="From concept to completion, we oversee every detail to bring your vision to life efficiently "
          />
        </Col>
        <Col sm={4} xs={12}>
          <ServiceCard
            icon={tree}
            name="Fabrications Design"
            description="Bespoke pieces crafted to your unique specifications.
"
          />
        </Col>
        <Col sm={4} xs={12}>
          <ServiceCard
            icon={light}
            name="Electrical"
            description="Expert installations and maintenance ensuring safety and efficiency."
          />
        </Col>
        <Col sm={4} xs={12}>
          <ServiceCard
            icon={decoker}
            name="Decor"
            description="Exquisite accents and furnishings elevating ambiance and charm.
"
          />
        </Col>
        <Col sm={4} xs={12}>
          <ServiceCard
            icon={tool}
            name="Plumbing"
            description="Expert solutions for installations, repairs, and maintenance services."
          />
        </Col>
      </Row>
      <Row className="seconrow">
        <HorizontalLine />
      </Row>
    </Container>
  );
};

export default HomeLanding;
