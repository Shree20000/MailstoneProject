import React from "react";
import "./ContactInfo.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import HorizontalLine from "../../GlobalComponent/HorizontalLine/HorizontalLine";
import { GoArrowDownRight } from "react-icons/go";
import BiggerCard from "../../GlobalComponent/CardsContainer/BiggerCard";
import SmallerCard from "../../GlobalComponent/CardsContainer/SmallerCard";
import SecondSectionBigCard from "../../GlobalComponent/CardsContainer/SecondSectionBigCard";
import SecondSectionSmall from "../../GlobalComponent/CardsContainer/SecondSectionSmall";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const ContactInfo = () => {
  return (
    <Container>
      <Row className="contactInforow">
        <Col sm={6} xs={12} className="contactInfoFirstCol">
          <h1 className="infomationfirsttext">Get in touch for </h1>
          <h1 className="infomationsecondtext">Stunning interiors.</h1>
          <div className="colorcontainer">
            <div className="contactinfoform">
              <h1 className="contactinfoformheader">Contact Information</h1>
              <p className="contactinfoformparagraph">
                Say something to start a live chat!
              </p>
              <form action="">
                <div>
                  <p className="contactinfoheaders">Full Name</p>
                  <input type="text" className="contactinfoinput" />
                </div>
                <div>
                  <p className="contactinfoheaders">Email</p>
                  <input type="text" className="contactinfoinput" />
                </div>
                <div>
                  <p className="contactinfoheaders">Phone Number</p>
                  <input type="text" className="contactinfoinput" />
                </div>
                <div>
                  <p className="contactinfoheaders">Write your Message</p>
                  <input type="text" className="contactinfoinput" />
                </div>
                <div className="contactinfobuttoncontainer">
                  <button className="contactinfobutton">Send Message</button>
                </div>
              </form>
            </div>
            <div className="circlecontainer">
              <div className="circleicons">
                <div className="socialicon">
                  <FaTwitter />
                </div>
                <div className="socialicon">
                  <FaInstagram />
                </div>
                <div className="socialicon">
                  <FaFacebook />
                </div>
              </div>
              <img
                src="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719403186/mailStone/bli8jq43bu93qwwfw9ty.png"
                alt=""
                className="circles"
              />
            </div>
          </div>
        </Col>
        <Col sm={6} xs={12} className="circlesideimage">
          {/* <img
            src="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719398680/mailStone/wwc2xcaytrypsyy0jtuh.png"
            alt=""
            className="contactimage"
          /> */}
        </Col>
      </Row>
      <Row>
        <HorizontalLine />
      </Row>
      <Row>
        <Col sm={12} xs={12}>
          <ul>
            <li className="contactinfoli">Projects</li>
          </ul>
        </Col>
        <Col className="projectfirsttext projectcontain " sm={12} xs={12}>
          <h1 className="projecttexts123">UNLEASHING</h1>
        </Col>
        <Col className="projectsecondtext projectcontain" sm={12} xs={12}>
          <h1 className="projecttexts"> THE</h1>
        </Col>
        <Col className="projectthirdtext projectcontain " sm={12} xs={12}>
          <h1 className="projecttexts"> POTENTIAL IN </h1>
        </Col>
        <Col className="projectfourthtext projectcontain" sm={12} xs={12}>
          <h1 className="projecticon">
            <GoArrowDownRight />
          </h1>
          <h1 className="projecttexts">EVERY SPACE</h1>
        </Col>
      </Row>
      <Row>
        <HorizontalLine />
      </Row>
      <Row className="imageContainerTop">
        <BiggerCard
          headername="Co-Working Space"
          buttonname="Commercials"
          imgurl="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719466046/mailStone/nktjgghwrt9sgmdadujr.png"
          contained="An innovative co-working space that offers a dynamic environment for
          startups and freelancers. This project highlights our commitment to
          creating versatile, inspiring spaces that cater to the needs of modern
          professionals."
        />
        <SmallerCard
          headername="Apartment Complex"
          buttonname="Residentials"
          imgurl="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719465987/mailStone/ij2d8mer9xwmyletlrw6.png"
          contained="An urban apartment complex that combines modern amenities with
            sustainable design. This project highlights our expertise in
            developing residential spaces that are efficient, comfortable, and
            environmentally friendly"
        />
      </Row>

      <Row className="imageContainer">
        <SecondSectionSmall
          headername="Elegant Living Rooms"
          buttonname="Residentials"
          imgurl="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719470739/mailStone/c8svyl19zmain5liuylz.png"
          contained="We design elegant living rooms that reflect the homeowner's personality and style. This project exemplifies our attention to detail and commitment to creating comfortable, stylish living spaces."
        />
        <SecondSectionBigCard
          headername="Innovative Office Spaces"
          buttonname="Commercials"
          imgurl="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719470950/mailStone/vkhvuruxjkarpgfimfys.png"
          contained="Our innovative office spaces are designed to enhance productivity and foster creativity. This project highlights our expertise in creating functional, aesthetically pleasing work environments that cater to modern business needs."
        />
      </Row>

      <Row className="imageContainer">
        <BiggerCard
          headername="UPVC Windows and Sliding Doors"
          buttonname="Fabrications"
          imgurl="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719472426/mailStone/uufxyllebtjzeiwyzoma.png"
          contained="Specializing in UPVC windows and sliding doors, we utilize cutting-edge technology and state-of-the-art facilities to ensure precise manufacturing and timely delivery, enhancing the aesthetic appeal and functionality of any space."
        />
        <SmallerCard
          headername="HVAC Systems"
          buttonname="Electricals"
          imgurl="https://res.cloudinary.com/dbklt3v4d/image/upload/v1719472542/mailStone/dg5e1g7xxfhzmzdqyvey.png"
          contained="At Mailstone, we install HVAC systems designed for optimal climate control. Our services ensure efficient, reliable, and safe environments, providing comfort and energy efficiency for both residential and commercial spaces."
        />
      </Row>
      <Row className="projectbuttonrow">
        <button className="projectbutton">
          <p className="projectbuttoncontained"> See Other Projects </p>{" "}
          <p className="projectbuttoncontainedicon">
            <MdOutlineArrowForwardIos className="leftarrowIcon" />
          </p>
        </button>
      </Row>
    </Container>
  );
};

export default ContactInfo;
