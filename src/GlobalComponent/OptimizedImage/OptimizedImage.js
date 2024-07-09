import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const OptimizedImage = ({ src, alt, className }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [smallImageSrc, setSmallImageSrc] = useState("");

  useEffect(() => {
    const isCloudinaryUrl = src.includes("res.cloudinary.com");

    if (isCloudinaryUrl) {
      setImageSrc(src.replace("/upload/", "/upload/w_auto,c_scale/"));
      setSmallImageSrc(src.replace("/upload/", "/upload/w_20,e_blur:1000/"));
    } else {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = function () {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 20;
        canvas.height = 20 * (this.height / this.width);
        ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
        setSmallImageSrc(canvas.toDataURL());
      };
      img.src = src;
    }
  }, [src]);

  return (
    <LazyLoadImage
      alt={alt}
      effect="blur"
      src={imageSrc}
      placeholderSrc={smallImageSrc}
      className={className}
      width="100%"
      height="auto"
    />
  );
};

export default OptimizedImage;
