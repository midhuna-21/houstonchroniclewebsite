'use client';
import React, { useState } from 'react';
import data from '../../public/data/carouselData.json';
import Image from 'next/image';

interface CarouselItem {
  tag: string;
  heading: string;
  description: string;
  image: string;
}

const CarouselSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items: CarouselItem[] = data;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div style={{ width: '100%', padding: '40px 0', boxSizing: 'border-box' }}>
    <div
  style={{
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '1200px',
    height: '400px', // 👈 Reduced height
    margin: '0 auto',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    position: 'relative',
    border: '2px solid black',
  }}
>
        {/* Left: Image */}
        <div style={{ flex: 1 }}>
    <img
        src={items[currentIndex].image}
          alt={items[currentIndex].heading}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRight: '2px solid black' // 👈 Right border to separate image
      }}
    />
  </div>

        {/* Right: Content */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#fefefe',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Tag */}
          <div
            style={{
              backgroundColor: 'black',
              color: 'white',
              fontSize: '12px',
              textTransform: 'uppercase',
              display: 'inline-block',
              padding: '5px 10px',
              marginBottom: '20px',
              borderRadius: '3px',
              width: 'fit-content',
            }}
          >
            {items[currentIndex].tag}
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: '26px',
              fontWeight: 'bold',
              color: '#000',
              marginBottom: '10px',
            }}
          >
            {items[currentIndex].heading}
          </h2>

          {/* Underline */}
          <div
            style={{
              width: '50%',
              height: '1px',
              backgroundColor: '#ccc',
              marginBottom: '20px',
            }}
          ></div>

          {/* Description */}
          <p style={{ color: '#444', fontSize: '16px', lineHeight: '1.5' }}>
            {items[currentIndex].description}
          </p>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '-25px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              backgroundColor: '#d0021b',
              borderRadius: '50%',
              color: 'white',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            }}
          >
            →
          </button>
        </div>
      </div>

      {/* Dots */}
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {items.map((_, index) => (
          <div
            key={index}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              margin: '0 5px',
              backgroundColor:
                currentIndex === index ? '#d0021b' : '#ccc',
              transition: 'background-color 0.3s',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarouselSection;
