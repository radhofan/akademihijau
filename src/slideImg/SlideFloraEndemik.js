import React from 'react'
import './test.css'
import { useState } from 'react';

const containerStyles = {
  width: "400px",
  height: "400px",
  margin: "0 auto",
 
};
const slideStyles = {
width: "100%",
height: "100%",
borderRadius: "10px",
backgroundSize: "center",
backgroundPosition: "center",
} ;

const rightArrowStyles = {
position: "absolute",
top: "50%",
transform: "translate(0, -50%)",
right: "32px",
fontSize: "45px",
color: "#fff",
zIndex: 1,
cursor: "pointer",
};

const leftArrowStyles = {
position: "absolute",
top: "50%",
transform: "translate(0, -50%)",
left: "32px",
fontSize: "45px",
color: "#fff",
zIndex: 1,
cursor: "pointer",
};

const sliderStyles = {
position: "relative",
height: "100%",
};

const dotsContainerStyles = {
display: "flex",
justifyContent: "center",
};

const dotStyle = {
margin: "0 3px",
cursor: "pointer",
fontSize: "20px",
};

function SlideFloraEndemik() {
  const slides = [
    {url: "https://o-cdn-cas.sirclocdn.com/parenting/images/Anggrek_Hitam.width-500.format-webp.webp"},
    {url: "https://cdn-cms.pgimgs.com/static/2020/11/1.-Fakta-Kayu-Eboni-Hitam-Sulawesi-yang-Kian-Langka-dan-Mahal.png"},
    {url: "https://asset.kompas.com/crops/mSwX9-N-pNfEcvscBcmmLBZPd1Q=/0x0:525x350/750x500/data/photo/2021/05/22/60a89c12d646f.jpg"}
  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  return (
    <div>
      <div style={containerStyles}>
          <div style={sliderStyles}>
          <div>
            <div onClick={goToPrevious} style={leftArrowStyles}>
              ❰
            </div>
            <div onClick={goToNext} style={rightArrowStyles}>
              ❱
            </div>
          </div>
          <div style={slideStylesWidthBackground}></div>
          <div style={dotsContainerStyles}>
            {slides.map((slide, slideIndex) => (
              <div
                style={dotStyle}
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
              >
                ●
              </div>
            ))}
          </div>
          </div>
      </div>
    </div>
  )
}

export default SlideFloraEndemik