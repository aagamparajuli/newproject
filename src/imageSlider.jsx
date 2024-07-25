import React, { useEffect, useRef, useState } from 'react';
import mountain from './assets/mountain2.jpg';
import hotel3 from './assets/pokhara1.jpg';
import boudha from './assets/headerImg3.jpg';

function ImageSlider() {
  const images = [ boudha, mountain, hotel3 ];
  const texts = [
    "Bouddha (Nepali: बौद्धनाथ; romanized: Jarung Khashor, Wylie: bya rung kha shor), located in the northeastern outskirts of Kathmandu, Nepal, is renowned for its ancient stupa, one of the largest stupas in the world and a UNESCO World Heritage Site. This sacred Buddhist monument stands at a height of approximately 36 meters (118 feet) and is adorned with vibrant prayer flags and intricate carvings. Boudhanath is a significant pilgrimage site for Buddhists, known for its peaceful ambiance and spiritual energy. Surrounding the stupa are monasteries, shops selling Tibetan artifacts, and cafes offering panoramic views of the stupa and its surroundings",
    "Nepal is home to some of the world's highest peaks, prominently featured in the Himalayas along its northern border. The highest point on Earth, Mount Everest, stands at 8,848 meters (29,029 feet) above sea level. Other notable peaks in the region include Kanchenjunga, Lhotse, Makalu, and Cho Oyu, all exceeding 8,000 meters in height. These mountains attract adventurers and mountaineers from around the globe, offering challenging climbs and breathtaking views amidst diverse natural landscapes.",
    "Pokhara (Nepali: पोखरा), nestled in central Nepal, is celebrated for its breathtaking natural beauty and proximity to the majestic Annapurna mountain range. Set at an elevation of approximately 827 meters (2,713 feet), Pokhara offers stunning vistas of iconic peaks such as Annapurna, Machhapuchhre (Fishtail), and Dhaulagiri. The city's tranquil Phewa Lake reflects these towering mountains, creating postcard-perfect scenes for visitors enjoying boat rides or lakeside strolls. Beyond its natural allure, Pokhara serves as a bustling hub for trekkers embarking on adventures into the Annapurna region. "
  ];
  const [slideIndex, setSlideIndex] = useState(0);
  const [expanded, setExpanded] = useState(false); // State to track if text is expanded

  const slideInterval = useRef(null);

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, []);

  const startSlider = () => {
    slideInterval.current = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  const stopSlider = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const addSpaceAfterFullStop = (text) => {
    return text.replace(/\./g, '. ');
  };

  return (
    <>
      <div className='pl-14 pr-14 pt-5'>
        <img src={images[slideIndex]} alt="Slider" className='object-cover h-[600px] w-full' />
        <div className="slider-text flex items-center justify-center pt-10 flex-wrap">
          <div className="w-full h-36 pl-2 pr-2 mb-5 bg-white shadow-2xl overflow-hidden">
            {expanded ? (
              <>{addSpaceAfterFullStop(texts[slideIndex])}</>
            ) : (
              <>{addSpaceAfterFullStop(texts[slideIndex]).slice(0, 200)}...</>
            )}
            <button onClick={toggleExpand} className="text-blue-500 hover:underline focus:outline-none ml-3">
              {expanded ? 'See Less' : 'See More'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
