import React from "react";
import { Button, Image } from "react-bootstrap";
import "./MordernHouse.css";
import OptimizedImage from "../../../GlobalComponent/OptimizedImage/OptimizedImage";

export default function MordernHouse() {
  return (
    <>
      <div className="divstyleee">
        {/* <Image
          src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719302462/ggbkq6jb1zptaaeuajta.png"
          className="milestone-image"
          loading="lazy"
        /> */}
        <OptimizedImage
          src="https://res.cloudinary.com/dtjjk0vwy/image/upload/v1719302462/ggbkq6jb1zptaaeuajta.png"
          className="milestone-image"
          loading="lazy"
        />
        <div className="text-overlay">
          <h1 className="future-h1">
            THE FUTURE OF <br />
            <span className="mordern">MODERN HOUSE</span>
          </h1>
          <p className="easy-para">
            EASY WAY TO PERFECT PROPERTY, WE ARE YOUR TRUSTED PARTNER.
          </p>
          <div id="button-div">
            <Button className="learn-moreee">Learn more</Button>
          </div>
        </div>
      </div>
    </>
  );
}
