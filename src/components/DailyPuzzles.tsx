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
  puzzles: Puzzle[];
};

const DailyPuzzles: React.FC<DailyPuzzlesProps> = ({ puzzles }) => {
  if (!puzzles || puzzles.length === 0) return null;

  return (
    <SectionWrapper title="Your Daily Puzzles">
      {puzzles.map((puzzle, index) => (
        <div
          key={index}
          className="border px-3 py-4 mb-3 d-flex justify-content-between align-items-center"
          style={{ minHeight: '90px' }}
        >
          <div>
            <h6 className="fw-bold mb-1" style={{
              fontSize: '16px', color: '#111111', fontWeight: 700, fontFamily: "'Rubik', Arial, sans-serif"

            }}>{puzzle.title}</h6>
            <p className="mb-0 text-muted small" style={{
              fontSize: '11.232px', color: '#444444', fontWeight: 400, fontFamily: "'Rubik', Arial, sans-serif"
            }}>{puzzle.description}</p>
          </div>
          <img
            src={puzzle.image}
            alt={puzzle.title}
            style={{
              width: 60,
              height: 60,
              objectFit: 'contain',
              borderRadius: 8,
              backgroundColor: puzzle.bgColor || '#f8f9fa',
            }}
          />
        </div>
      ))}
    </SectionWrapper>
  );
};

export default DailyPuzzles;
