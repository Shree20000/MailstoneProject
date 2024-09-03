import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import "./SetupProduct.css";
import tshirt from "../../../../assests/Topbarimg/40px/image 3.png";
import tshirt1 from "../../../../assests/Topbarimg/40px/image 5.png";
import { AiOutlinePlus } from "react-icons/ai";
import { IoAlertCircleOutline } from "react-icons/io5";

function SetupProduct() {
  const [images, setImages] = useState([tshirt, tshirt1, tshirt]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      <div className="set-up">Setup Product</div>
      <div className="lorem">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
      </div>
      <div style={{ display: "flex", gap: "9px" }}>
        {images.map((image, index) => (
          <div key={index}>
            <div>
              <Image src={image} className="t-shirt" />
            </div>
            <div className="side-one">{`Side ${index + 1}`}</div>
          </div>
        ))}
        <div>
          <div className="upload-div">
            <span
              className="upload-icon"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <AiOutlinePlus
                style={{ color: "#7C3AED", marginTop: "-0.3rem" }}
              />
            </span>
            <div id="uploaddd">Upload</div>

            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>

          <div id="supported">
            <IoAlertCircleOutline
              style={{
                color: "#8B63E7",
                fontSize: "16px",
                marginRight: "0.2rem",
              }}
            />
            Supported .PNG File{" "}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SetupProduct;
