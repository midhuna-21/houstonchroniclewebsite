"use client"
import React, { useEffect, useState } from 'react';
import SectionWrapper from './SectionWrapper';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';
import Image from 'next/image';

interface EditorsPicksSectionProps {
  data: {
    image: string;
    title: string;
    category: string;
    slug: string;
    date: string;
  }[];
}

const EditorsPicksSection: React.FC<EditorsPicksSectionProps> = ({ data }) => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkTablet = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 991);
    };
    checkTablet();
    window.addEventListener('resize', checkTablet);
    return () => window.removeEventListener('resize', checkTablet);
  }, []);

  return (
    <div>
      <div
        className="d-flex d-lg-none flex-nowrap overflow-auto pb-2"
        style={{
          scrollSnapType: 'x mandatory',
          gap: '1rem',
          ...(isTablet
            ? {
              scrollbarColor: '#e5e5e5 #fcfcfc',
              scrollbarWidth: 'thin',
            }
            : {}),
        }}
      >
        {data.slice(0, 3).map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0"
            style={{
              width: '95vw', // take almost full width for mobile/tablet
              maxWidth: '95vw',
              scrollSnapAlign: 'start',
            }}
          >
            {renderCard(item)}
          </div>
        ))}
      </div>

      {/* --- DESKTOP GRID --- */}
      <div className="row gx-4 gy-4 d-none d-lg-flex mb-5">

        {/* First item - with border */}
        <div className="col-lg-4" style={{ borderRight: '0.5px solid rgba(14, 14, 14, 0.15)' }}>
          {renderCard(data[0])}
        </div>

        {/* Second item - with border */}
        <div className="col-lg-4" style={{ borderRight: '0.5px solid rgba(14, 14, 14, 0.15)' }}>
          {renderCard(data[1])}
        </div>

        {/* Third item - no border */}
        <div className="col-lg-4">
          {renderCard(data[2])}
        </div>

      </div>

    </div>
  );
};

function renderCard(item: {
  image: string;
  title: string;
  category: string;
  slug: string;
  date: string;
}) {
  return (
    <Link
      href={`/${item.category}/${item.slug}`}
      className="text-decoration-none"
      title={`${item.slug}`}
    >
      <div
        className="h-100 text-start"

      >
        <Image
          src={item.image || ''}
          alt={item.title}
          width={1000}
          height={250}
          className="img-fluid w-100"
          style={{
            width: '100%',
            height: '250px', // increased from 200px
            objectFit: 'cover',
          }}
        />

        {/* <p
          style={{
            fontSize: '14.224px',
            fontWeight: 700,
            color: '#b50021',
            marginBottom: '4px',
            textTransform: 'uppercase',
            fontFamily: "'Rubik', Arial, sans-serif",
          }}
        >
          {item.category}
        </p> */}

        <span
          className="fw-bold mb-0"
          style={{
            color: '#111111',
            fontSize: '18px',
            fontWeight: 700,
            fontFamily: "'Archivo', Arial, sans-serif",
             lineHeight: '1.3 !important',
    display: 'inline-block',
          }}
        >
          {item.title}
        </span>
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
          <span style={{ color: '#555', marginLeft: '4px' }}>{item.date}</span>
        </div>
      </div>
    </Link>
  );
}

export default EditorsPicksSection;
