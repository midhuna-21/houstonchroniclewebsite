'use client';

import React, { useEffect, useState } from 'react';
import type { PromoData } from '@/data/homeData';

interface Props {
  data: PromoData;
}

const PromoBanner: React.FC<Props> = ({ data }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowBanner(true);
      } else {
        setShowBanner(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return showBanner ? (
    <div
      className="w-100 d-flex justify-content-center align-items-center px-3"
      style={{
        backgroundColor: '#d80000',
        color: 'white',
        fontWeight: 'bold',
        padding: '14px 0',
        position: 'fixed',
        top: '60px', 
        zIndex: 999,
      }}
    >
      <div
        className="d-flex flex-wrap justify-content-center align-items-center gap-2"
        style={{
          maxWidth: '1200px',
          width: '100%',
        }}
      >
        <span style={{ textAlign: 'center', fontSize: '1.05rem' }}>
          {data.message}{' '}
          <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>{data.highlight}</span>
        </span>

        <button
          className="ms-3"
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '8px 14px',
            border: 'none',
            borderRadius: '2px',
            fontWeight: 'bold',
            fontSize: '0.9rem',
          }}
        >
          {data.buttonText}
        </button>
      </div>
    </div>
  ) : null;
};

export default PromoBanner;
