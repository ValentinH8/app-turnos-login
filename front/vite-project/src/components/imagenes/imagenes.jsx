import React, { useState } from 'react';
import peluqueria1 from "../../assets/peluqueria1-min.jpg";
import peluqueria2 from "../../assets/peluqueria2-min.jpg";
import peluqueria3 from "../../assets/peluqueria3.webp";
import "./Home.css";

const images = [peluqueria1, peluqueria2, peluqueria3];

const ImagenesSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="slider">
      <button onClick={prevImage}>◀</button>
      <img src={images[current]} alt={`Peluquería ${current + 1}`} />
      <button onClick={nextImage}>▶</button>
    </div>
  );
};

export default ImagenesSlider;
