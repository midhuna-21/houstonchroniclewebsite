'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BiCalendar, BiChevronRight } from 'react-icons/bi';
import Image from 'next/image';


interface CarouselItem {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date: string;
}

interface CarouselSectionProps {
  data: CarouselItem[];
}

const CarouselSection: React.FC<CarouselSectionProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  return (
    <div style={{ width: '100%', padding: '90px 0', boxSizing: 'border-box', position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          maxWidth: '100%',
          overflow: 'hidden',
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        <Link
          title={`${data[currentIndex].slug}`}
          href={`/${data[currentIndex].category}/${data[currentIndex].slug}`}
          className='text-decoration-none'
          style={{ display: 'flex', width: '100%', textDecoration: 'none' }}
        >
          <div
            style={{
              width: isMobile ? '100%' : '1200px',
              height: isMobile ? 'auto' : '450px',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              border: '2px solid black',
              position: 'relative',
            }}
          >
            <div style={{ flex: 1 }}>
              <Image
                src={data[currentIndex].image}
                alt={data[currentIndex].title}
                width={isMobile ? 400 : 800}
                height={isMobile ? 220 : 500}
                style={{
                  width: '100%',
                  height: isMobile ? '220px' : '100%',
                  objectFit: 'cover',
                  borderRight: isMobile ? 'none' : '2px solid black',
                  borderBottom: isMobile ? '2px solid black' : 'none',
                  display: 'block',
                }}
                priority
              />
            </div>

            <div
              style={{
                flex: 1,
                backgroundColor: '#fefefe',
                padding: isMobile ? '30px 20px' : '50px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  display: 'inline-block',
                  padding: '8px 16px',
                  marginBottom: '25px',
                  width: 'fit-content',
                }}
              >
                {data[currentIndex].category}
              </div>

              <h2
                style={{
                  fontSize: isMobile ? '20px' : '32.432px',
                  fontWeight: 700,
                  fontFamily: "'Archivo', Arial, sans-serif",
                  color: '#111111',
                  marginBottom: '12px',
                  lineHeight: 1.2,
                }}
              >
                {data[currentIndex].title}
              </h2>


              <div
                style={{
                  color: '#444444',
                  width: '30%',
                  height: '1px',
                  backgroundColor: '#ccc',
                  marginBottom: '25px',
                }}
              ></div>

              <p
                style={{
                  color: '#444444',
                  fontSize: isMobile ? '14px' : '17px',
                  lineHeight: '1.6',
                  fontFamily: "'Rubik', Arial, sans-serif",
                  fontWeight: 400,
                }}
              >
                {data[currentIndex].shortdescription}
              </p>


              <div
                className="d-flex align-items-center mt-1"
                style={{
                  fontSize: '10px',
                  fontWeight: 200,
                  fontFamily: "'Rubik', Arial, sans-serif",
                }}
              >
                <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
                <span style={{ color: '#000', opacity: 0.6 }}>Published on</span>
                <span style={{ color: '#555', marginLeft: '4px' }}>{data[currentIndex].date}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div
        style={{
          marginTop: '25px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {data.map((_, index) => (
          <div
            key={index}
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              margin: '0 6px',
              backgroundColor: currentIndex === index ? '#d0021b' : '#ccc',
              transition: 'background-color 0.3s',
            }}
          ></div>
        ))}
      </div>

      {!isMobile && (
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % data.length)}
          style={{
            position: 'absolute',
            top: '50%',
            right: '-60px',
            transform: 'translateY(-50%)',
            backgroundColor: 'transparent',
            border: '2px solid black',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 2,
          }}
          aria-label="Next Slide"
        >
          <BiChevronRight color="black" size={26} />
        </button>
      )}
    </div>

  );
};

export default CarouselSection;
