import React, { useState } from "react";
import Nav from "./Navigation";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "C:/Users/acer/Desktop/task/react/Wandermate/src/assets/mountain.jpg",
    "C:/Users/acer/Desktop/task/react/Wandermate/src/assets/mountain1.jpg",
    "C:/Users/acer/Desktop/task/react/Wandermate/src/assets/mountain2.jpg",
  ];

  const moveSlide = (n) => {
    let newIndex = currentIndex + n;
    if (newIndex >= images.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = images.length - 1;
    }
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <Nav />
      <div className="relative max-w-2xl mx-auto overflow-hidden border-2 border-gray-300 rounded-lg bg-white">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="slide w-full flex-shrink-0" key={index}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={() => moveSlide(-1)}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={() => moveSlide(1)}
        >
          &#10095;
        </button>
      </div>
    </>
  );
};

export default ImageSlider;
