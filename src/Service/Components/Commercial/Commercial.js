import React, { useEffect, useState } from "react";
import "./Commercial.css";
import CommercialCard from "../CommercialCard/CommercialCard";
import { Button, Col, Container, Row } from "react-bootstrap";
import CommercialPara from "../CommercialPara/CommercialPara";
import Fabrication from "../Fabrication/Fabrication";
import { IoIosArrowForward } from "react-icons/io";

export default function Commercial() {
  const [imagesLoaded, setImagesLoaded] = useState({});

  useEffect(() => {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      img.onload = () => {
        setImagesLoaded((prevImagesLoaded) => ({
          ...prevImagesLoaded,
          [img.src]: true,
        }));
      };
    });
  }, []);

  const handleImageLoad = (src) => {
    if (!imagesLoaded[src]) {
      return (
        <img
          src="https://via.placeholder.com/350x150"
          alt="Placeholder"
          style={{ width: "100%", height: "150px" }}
        />
      );
    }
  };
  return (
    <div>
      <CommercialPara
        name="COMMERCIAL CONSTRUCTION"
        para=" Our commercial construction services cater to businesses of all sizes.
        We provide high-quality solutions for retail spaces, office buildings,
        warehouses, co-working spaces, restaurants, and malls. Our projects
        blend functionality with innovative design, ensuring environments that
        enhance productivity and appeal. By leveraging our expertise and
        commitment to excellence, we deliver commercial "
      />
      <Container>
        <Row>
          <Col style={{ marginLeft: "-2rem" }} xs={12} md={5}>
            <CommercialCard
              coworking="Co-Working Space"
              button="Commercials"
              lipara="An innovative co-working space that offers a dynamic environment
                for startups and freelancers. This project highlights our
                commitment to creating versatile, inspiring spaces that cater to
                the needs of modern professionals."
              image="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719316631/ffbbbxt1cc1qdhumlkb3.png"
            />
          </Col>
          <Col md={2}></Col>
          <Col className="ofc-building" xs={12} md={5}>
            <CommercialCard
              coworking="Office Building"
              button="Commercials"
              lipara="A state-of-the-art corporate office building that combines modern design with functionality. This project demonstrates our ability to create efficient, aesthetically pleasing workspaces that foster productivity and innovation."
              image="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719384324/aepplp1giy5duttr7xue.png"
            />
          </Col>
        </Row>
      </Container>

      <CommercialPara
        name=" RESIDENTAL CONSTRUCTION"
        para="At Mailstone, our residential construction services are 
        dedicated to creating beautiful, functional living spaces that truly feel
         like home. From charming single-family homes to luxurious estates, we manage every
          aspect of construction with meticulous attention to detail. Our unwavering commitment
           to quality, transparency, and customer-centricity has earned us the trust of homeowners,
            making us their preferred choice. We take the time to understand each client’s unique
             lifestyle and personality, ensuring their home is a true sanctuary of comfort and style.
              With Mailstone, your dream home becomes a reality, reflecting your vision and exceeding 
              your expectations."
      />
      <Container>
        <Row>
          <Col style={{ marginLeft: "-2rem" }} xs={12} md={5}>
            <CommercialCard
              coworking="Luxury Estate"
              button="Residential"
              lipara="This luxury estate blends elegance with modern design, featuring high-end finishes and meticulous craftsmanship. It’s a testament to our ability to create exquisite, personalized living spaces that reflect the client’s vision."
              image="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719384726/kdqdetalrkd2srrsuh7l.png"
            />
          </Col>
          <Col md={2}></Col>
          <Col className="ofc-building" xs={12} md={5}>
            <CommercialCard
              coworking=<span className="msss">Contemporary Family Home</span>
              button="Residential"
              lipara="A contemporary family home designed with functionality and comfort in mind. This project showcases our dedication to creating spaces that are both stylish and practical for everyday living.
"
              image="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719384873/kzrakp05rqxwaobrcayy.png"
            />
          </Col>
        </Row>
      </Container>
      <CommercialPara
        name="FABRICATION"
        para="At Mailstone, we specialize in UPVC windows and
       sliding doors, using cutting-edge technology and state-of-the-art facilities to ensure 
       precise manufacturing and timely delivery. Our UPVC solutions guarantee durability, functionality,
        and aesthetic appeal. We also excel in MS (Mild Steel) and SS (Stainless Steel) fabrications,
         delivering robust, high-quality structures and components. Our advanced technology and efficient 
         production processes ensure our products meet stringent industry standards, enhancing functionality
          and durability across various applications, from industrial to residential needs."
      />
      <Container>
        <Row>
          <Col style={{ marginLeft: "-2rem" }} xs={12} md={5}>
            <Fabrication
              upvc=" UPVC Windows and Sliding Doors"
              buttonup="UPVC"
              favimg="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719384976/t7shgqzxxelwxseirau0.png"
              longtext="Specializing in UPVC windows and sliding doors, we utilize cutting-edge technology and state-of-the-art facilities to ensure precise manufacturing and timely delivery, enhancing the aesthetic appeal and functionality of any space."
            />
          </Col>
          <Col md={2}></Col>
          <Col className="ofc-building" xs={12} md={5}>
            <CommercialCard
              coworking=<span className="msss">MS and SS Fabrications</span>
              button="MS&SS"
              lipara="Our expertise spans across both Mild Steel (MS) and Stainless Steel (SS) fabrications. We deliver robust, durable structures and components tailored to enhance functionality and durability across various applications, meeting stringent industry standards."
              image="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719385128/rs5vik8f3c8xwpvvfwbe.png"
            />
          </Col>
        </Row>
      </Container>
      <CommercialPara
        name="PLUMBING"
        para=" At Mailstone, we believe that the core of any well-functioning home or business lies in its plumbing system, and our journey in construction encompasses essential plumbing services to ensure every building we create or renovate has a reliable and efficient water system, supporting the lives and businesses of our clients with dependable systems that ensure comfort, efficiency, and reliability, building a foundation of trust and excellence. "
      />
      <Container>
        <Row>
          <Col style={{ marginLeft: "-2rem" }} md={5} xs={12}>
            <CommercialCard
              coworking="Residential Plumbing Solutions"
              button="Plumbing"
              lipara="Our residential plumbing solutions are designed to provide homeowners with efficient and reliable water systems. We ensure every installation is carried out with precision and adheres to the highest standards, offering comfort and peace of mind."
              image="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719385556/funxd6on5wwpsjuekn37.png"
            />
          </Col>
          <Col md={2}></Col>
          <Col className="ofc-building" md={5} xs={12}>
            <CommercialCard
              coworking="Industrial Plumbing Installations"
              button="Plumbing"
              lipara="Our industrial plumbing installations are built to handle the rigors of demanding environments. We focus on durability and efficiency, providing systems that support the operations of various industrial facilities.
"
              image="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719385340/axthsit8jasbfexwywhb.png"
            />
          </Col>
        </Row>
      </Container>

      <CommercialPara
        name="ELECTRICALS"
        para=" At Mailstone, we prioritize the fundamental role of electrical systems in building functionality and safety, offering specialized services in HVAC systems and electrical wiring and installations to create efficient environments, while our commitment to dedication and precision ensures optimal climate control and safe operations, distinguishing us through quality and excellence in powering and enhancing the comfort of your spaces. "
      />
      <Container>
        <Row>
          <Col style={{ marginLeft: "-2rem" }} md={5} xs={12}>
            <CommercialCard
              coworking="HVAC Systems"
              button="HVAC"
              lipara="At Mailstone, we install HVAC systems designed for optimal climate control. Our services ensure efficient, reliable, and safe environments, providing comfort and energy efficiency for both residential and commercial spaces."
              image="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719385819/q1o18wz7uqw8bvsipfea.png"
            />
          </Col>
          <Col md={2}></Col>
          <Col className="ofc-building" md={5} xs={12}>
            <CommercialCard
              coworking="Electrical Installations"
              button="Electricals"
              lipara="Our electrical wiring and installation services focus on safety and efficiency. We bring our expertise and commitment to every project, ensuring that all electrical systems are installed to the highest standards, providing reliable and long-lasting solutions."
              image="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719385951/tgnoqnoko7jnbehd9svx.png"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="allproject-row">
          <Col>
            <Button className="all-project">
              See All Projects <IoIosArrowForward />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
