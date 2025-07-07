'use client';
import React from 'react';
import Image from 'next/image';

interface NewsItem {
  image: string;
  label: string;
  category: string;
  title: string;
}

interface NewsGridProps {
  data: {
    main: NewsItem;
    right: NewsItem[];
  };
}

const NewsGrid: React.FC<NewsGridProps> = ({ data }) => {
  const { main, right } = data;

  return (
  <div style={{ paddingBottom: '70px' }}>
  <div className="row g-4">
    
    {/* LEFT COLUMN */}
    <div className="col-md-6" style={{ borderRight: '1px solid #ddd' }}>
      <div style={{ position: 'relative' }}>
        <Image
          src={main.image}
          alt={main.title}
          width={600}
          height={400}
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            left: '15px',
            bottom: '-14px',
            backgroundColor: '#000',
            color: '#fff',
            padding: '10px 26px',
            fontWeight: 500,
            letterSpacing: '0.2em',
            fontSize: '16px',
            fontFamily: 'monospace, sans-serif',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          {main.label}
        </div>
      </div>

      <h3
        style={{
          color: '#111111',
          fontFamily: "'Archivo', Arial, sans-serif",
          fontSize: '32.432px',
          fontWeight: 700,
          marginTop: '1rem',
        }}
      >
        {main.title}
      </h3>

      <hr
        style={{
          width: '100px',
          height: '1px',
          backgroundColor: '#444',
          border: 'none',
          margin: '0.5rem 0 1rem 0',
        }}
      />

      <p
        style={{
          fontSize: '16px',
          color: '#444444',
          fontFamily: "'Archivo', Arial, sans-serif",
          lineHeight: '1.5',
          marginBottom: '1rem',
        }}
      >
        Tina Perry is still searching for her husband Brad, a former volunteer firefighter in
        League City.
      </p>
    </div>

    {/* RIGHT COLUMN */}
    <div className="col-md-6">
      {/* DESKTOP: 2x2 grid */}
      <div className="d-none d-md-block">
        <div className="row g-4">
          {right.map((item, index) => (
            <div className="col-md-6" key={index}>
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={200}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  marginBottom: '8px',
                }}
              />
              <div
                style={{
                  color: '#B50021',
                  fontWeight: 700,
                  fontSize: '14.224px',
                  textTransform: 'uppercase',
                  marginBottom: '5px',
                }}
              >
                {item.category}
              </div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: '18px',
                  lineHeight: 1.3,
                  fontFamily: "'Archivo', Arial, sans-serif",
                }}
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE: stacked list with image right */}
      <div className="d-block d-md-none">
        {right.map((item, index) => (
          <div className="d-flex flex-row-reverse align-items-start mb-3" key={index}>
            <Image
              src={item.image}
              alt={item.title}
              width={100}
              height={75}
              style={{
                objectFit: 'cover',
                flexShrink: 0,
                marginLeft: '10px',
              }}
            />
            <div>
              <div
                style={{
                  color: '#B50021',
                  fontWeight: 700,
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  marginBottom: '5px',
                }}
              >
                {item.category}
              </div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: 1.3,
                  fontFamily: "'Archivo', Arial, sans-serif",
                }}
              >
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  </div>
</div>

  );
};

export default NewsGrid;
