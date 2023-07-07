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

function SlideQuiz() {
  const slides = [
    {url: "https://images.unsplash.com/photo-1677124103420-81baca3d7941?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"},
    {url: "https://images.unsplash.com/photo-1584473457406-6240486418e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"},
    {url: "https://images.unsplash.com/photo-1602612639468-cd507b1cada9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=644&q=80"}
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

export default SlideQuiz