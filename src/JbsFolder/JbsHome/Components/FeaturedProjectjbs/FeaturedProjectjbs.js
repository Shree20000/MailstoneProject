import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeaturedProjectjbs.css";
import { Col, Container, Row } from "react-bootstrap";
import OptimizedImage from "../../../../GlobalComponent/OptimizedImage/OptimizedImage.js";

function FeaturedProjectjbs() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Container fluid>
        <Row className="slider-row">
          <Col md={2} xs={12}>
            <h1 className="slider-col2">FEATURED PROJECTS</h1>
          </Col>
          <Col md={8} xs={12} className="slider-col1">
            <div className="slider-container">
              <Slider {...settings}>
                <div className="slider-slider">
                  <div className="image-container">
                    <OptimizedImage
                      src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719902790/owypptbpnihgsdvzfecs.png"
                      height="275"
                      width="240"
                    />
                    <span className="image-text">01</span>
                  </div>
                  <p className="modern-kitchen">Modern Kitchens</p>
                  <div className="underline"></div>
                </div>
                <div className="slider-slider">
                  <div className="image-container">
                    <OptimizedImage
                      src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719895675/ojvyxt1gnsgb37wfpj94.png"
                      height="275"
                      width="240"
                    />
                    <span className="image-text">02</span>
                  </div>
                  <p className="modern-kitchen">Luxury Living Rooms</p>
                  <div className="underline"></div>
                </div>
                <div className="slider-slider">
                  <div className="image-container">
                    <OptimizedImage
                      src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719902944/zbwcfpy2p9xgzokaaf84.png"
                      height="275"
                      width="240"
                    />
                    <span className="image-text">03</span>
                  </div>
                  <p className="modern-kitchen">Sophisticated Bedrooms</p>
                  <div className="underline"></div>
                </div>
                <div className="slider-slider">
                  <div className="image-container">
                    <OptimizedImage
                      src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719903050/dhy8qxfvmhonxzokfk7q.png"
                      height="270"
                      width="230"
                    />
                    <span className="image-text">04</span>
                  </div>
                  <p className="modern-kitchen">Elegant Bathrooms</p>
                  <div className="underline"></div>
                </div>

                <div className="slider-slider">
                  <div className="image-container">
                    <OptimizedImage
                      src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719903161/m3uhbl2qnxjvahymlwjz.png"
                      height="275"
                      width="240"
                    />
                    <span className="image-text">05</span>
                  </div>
                  <p className="modern-kitchen">Home Offices</p>
                  <div className="underline"></div>
                </div>

                <div className="slider-slider">
                  <div className="image-container">
                    <OptimizedImage
                      src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719903261/nsbn7imbojeq9zfdxzv4.png"
                      height="270"
                      width="230"
                    />
                    <span className="image-text">06</span>
                  </div>
                  <p className="modern-kitchen">Dining Areas</p>
                  <div className="underline"></div>
                </div>

                <div className="slider-slider">
                  <div className="image-container">
                    <OptimizedImage
                      src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719903802/tggbbcta5bxunecwda4i.png"
                      height="270"
                      width="230"
                    />
                    <span className="image-text">07</span>
                  </div>
                  <p className="modern-kitchen">Outdoor Spaces</p>
                  <div className="underline"></div>
                </div>

                <div className="slider-slider">
                  <div className="image-container">
                    <OptimizedImage
                      src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719903385/hnlbnabk2b5yuvbbudll.png"
                      height="275"
                      width="240"
                    />
                    <span className="image-text">08</span>
                  </div>
                  <p className="modern-kitchen">Children’s Rooms</p>
                  <div className="underline"></div>
                </div>

                <div className="slider-slider">
                  <div className="image-container">
                    <OptimizedImage
                      src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719904083/ctnzjg8zhoefbvnffxts.png"
                      height="275"
                      width="240"
                    />
                    <span className="image-text">09</span>
                  </div>
                  <p className="modern-kitchen">House shrine</p>
                  <div className="underline"></div>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FeaturedProjectjbs;
