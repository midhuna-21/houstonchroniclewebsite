'use client';

import React from 'react';
import { topNewsData } from '@/data/homeData';
import NewsCard from './NewsCard';
import SectionWrapper from './SectionWrapper';
import MiniNewsCard from './MiniNewsContent';


const leftData = [
  {
    category: 'Texas Politics',
    title: 'Texas funeral commission taps interim leader as legal battles escalate',
    image: '/images/politicperson.webp',
  },
];

const rightData = [
  {
    category: 'Immigration',
    title: 'Majority of Houston police calls to ICE have come on traffic stops',
    image: '/images/policecar.webp',
  },
];
export default function TopNewsSection() {
  const midIndex = Math.ceil(topNewsData.length / 2);
  const leftColumn = topNewsData.slice(0, midIndex);
  const rightColumn = topNewsData.slice(midIndex);

  return (
<SectionWrapper title="Top News">
  <div className="w-100 px-2" style={{ maxWidth: '1150px', margin: '0 auto' }}>
    <div className="row g-0 position-relative">
      <div className="col-12 col-md-6 pe-md-4">
        {leftColumn.map((item, idx) => (
          <div
            key={idx}
            className="px-3 py-4"
            style={{
              borderBottom: idx !== leftColumn.length - 1 ? '1px solid #eee' : 'none',
              paddingRight: '10px',
            }}
          >
            <NewsCard item={item} />
          </div>
        ))}
      </div>

      {/* Vertical Divider */}
      <div
        className="d-none d-md-block"
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '50%',
          width: '1px',
          backgroundColor: '#ccc',
        }}
      />

      <div className="col-12 col-md-6 ps-md-4">
        {rightColumn.map((item, idx) => (
          <div
            key={idx}
            className="px-3 py-4"
            style={{
              borderBottom: idx !== rightColumn.length - 1 ? '1px solid #eee' : 'none',
              paddingLeft: '10px',
            }}
          >
            <NewsCard item={item} />
          </div>
        ))}
      </div>
    </div>

    {/* Full-width horizontal line after content */}
    <hr style={{ borderTop: '1px solid #ccc', marginTop: '20px' }} />

    {/* Optional aside */}
    <aside
      className="d-none d-lg-block ps-3"
    />
  </div>
  <div className="section-new justify-content-between" style={{ maxWidth: '1150px', margin: '30px auto', padding: '0 15px' }}>
      {/* Left column */}
      <div className="flex-grow-1 pe-3">
        {leftData.map((item, idx) => (
          <MiniNewsCard
            key={idx}
            category={item.category}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>

      {/* Vertical Divider */}
      <div style={{ width: '1px', backgroundColor: '#ccc', margin: '0 10px' }}></div>

      {/* Right column */}
      <div className="flex-grow-1">
        {rightData.map((item, idx) => (
          <MiniNewsCard
            key={idx}
            category={item.category}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>
    </div>
</SectionWrapper>



  );
}

