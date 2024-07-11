import React from "react";
import "./JbsTopHomePage.css";
import { Container, Row, Col } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import OptimizedImage from "../../../GlobalComponent/OptimizedImage/OptimizedImage";
// import LazyBackground from "../../../GlobalComponent/OptimizedImage/LazyBackground";

const JbsTopHomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#about-us") {
      setTimeout(() => {
        const aboutUsSection = document.getElementById("about-us");
        if (aboutUsSection) {
          aboutUsSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);
  return (
    <>
      <Container className="jbsTopContainer">
        <Row>
          <Col sm={6} xs={12} className="containtoffirstcolomn">
            <div className="jbsfirstcolcontaint">
              <h1 className="texttopcon">Transform Your Space </h1>
              <h1 className="texttopcon texttopsecond">with JBS Interior</h1>
            </div>
            <div className="jbsinnercolcontaint">
              <p className="jbsinnercolcontaintcontant">
                Transform your home or office into a stunning masterpiece with
                JBS Interior's expert design services. Experience elegance,
                comfort, and innovative style in every detail.
              </p>
            </div>
          </Col>
          <Col sm={6} xs={12}>
            <div>
              <OptimizedImage
                src="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719900156/mailStone/zsegduhxlloryoddsbee.png"
                className="jbsfirstimage"
                loading="lazy"
              />
              {/* <img
                src="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719900156/mailStone/zsegduhxlloryoddsbee.png"
                alt="image"
                className="jbsfirstimage"
                loading="lazy"
              /> */}
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="jbssecondcontainer">
        <Row>
          <Col className="buttoncolomn">
            <button className="jbshomebtn">
              Discover Our Services
              <p style={{ padding: 0, margin: 0 }} className="iconcontainer">
                <GoArrowRight />
              </p>
            </button>
          </Col>
        </Row>
      </Container>
      <Container className="topcontainerthirdcol">
        <h1 className="topcontainerthirdtext">
          Transform Spaces, Creating Joy.
        </h1>

        <div className="bg-image">
          <div className="content-wrapper">
            <Row className="background-image-column">
              <Col sm={4} xs={4}>
                <h1 className="jblnumber">
                  300<sup>+</sup>
                </h1>
                <p className="jblcontained">Happy Customers</p>
              </Col>
              <Col sm={4} xs={4}>
                <h1 className="jblnumber">
                  150<sup>+</sup>
                </h1>
                <p className="jblcontained">Projects per year</p>
              </Col>
              <Col sm={4} xs={4}>
                <h1 className="jblnumber">
                  12<sup>+</sup>
                </h1>
                <p className="jblcontained">Years of experience</p>
              </Col>
            </Row>
          </div>
        </div>
        <Row className="buttomsrow">
          <Col sm={12} xs={12} className="buttomfirstcol" id="about-us">
            <p className="buttomfirstcolptag">ABOUT US</p>
            <p className="buttomfirstcolptag">01</p>
          </Col>
          <Col sm={8} xs={12} className="text-start">
            <p className="buttomfirstcolptagcontained">
              At JBS Interior, we create exclusive living spaces that blend
              elegance, comfort, and cutting-edge design. Each project is
              crafted to offer a unique mix of contemporary style and timeless
              sophistication.
            </p>
          </Col>
        </Row>
        <Row className="buttomsrowimages">
          <Col sm={6} xs={12} className="text-start">
            <OptimizedImage
              src="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719912750/mailStone/k3etbsrwcfyf1fvjh3lw.png"
              className="lowerfirstimage"
              loading="lazy"
            />
            {/* <img
              src="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719912750/mailStone/k3etbsrwcfyf1fvjh3lw.png"
              alt=""
              className="lowerfirstimage"
            /> */}
            <p className="buttomsrowimagesfirstptag">THE HEART OF HOME</p>
          </Col>
          <Col sm={6} xs={12} className="lowersecondimagecontainer ">
            <div>
              {/* <img
                src="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719912933/mailStone/iem3q38btdi356lviknp.png"
                alt=""
                className="lowersecondimage"
              /> */}
              <OptimizedImage
                src="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719912933/mailStone/iem3q38btdi356lviknp.png"
                className="lowersecondimage"
                loading="lazy"
              />
              <p className="secondptag">LUXURIOUS OUTDOOR OASIS</p>
            </div>
          </Col>
        </Row>
        <Row className="buttomsrow">
          <Col sm={12} xs={12} className="buttomfirstcol">
            <p className="secondcontait">Our service</p>
            <p className="secondcontait">02</p>
          </Col>
          <Col sm={8} xs={12} className="text-start">
            <p className="buttomfirstcolptagcontained">
              Our approach to interior design emphasizes harmony with the
              environment, innovative architecture, and luxurious interiors. We
              create spaces that are not only visually stunning but also
              functional and comfortable, ensuring that every detail reflects a
              perfect blend of elegance and modernity.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JbsTopHomePage;
