'use client';

import React from 'react';
import SectionWrapper from './SectionWrapper';

type Puzzle = {
  title: string;
  description: string;
  image: string;
  bgColor?: string;
};

type DailyPuzzlesProps = {
  data: Puzzle[];
};

const DailyPuzzles: React.FC<DailyPuzzlesProps> = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <SectionWrapper title="Your Daily Puzzles">
      {data.map((item, index) => (

        <div
          key={index}
          className="border px-3 py-4 mb-3 d-flex justify-content-between align-items-center"
          style={{ minHeight: '90px' }}
        >
          
          <div>
            <h6 className="fw-bold mb-1" style={{
              fontSize: '16px', color: '#111111', fontWeight: 700, fontFamily: "'Rubik', Arial, sans-serif"

            }}>{item.title}</h6>
            <p className="mb-0 text-muted small" style={{
              fontSize: '11.232px', color: '#444444', fontWeight: 400, fontFamily: "'Rubik', Arial, sans-serif"
            }}>{item.description}</p>
          </div>
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: 60,
              height: 60,
              objectFit: 'contain',
              borderRadius: 8,
              backgroundColor: item.bgColor || '#f8f9fa',
            }}
          />
        </div>
      ))}
    </SectionWrapper>
  );
};

export default DailyPuzzles;
