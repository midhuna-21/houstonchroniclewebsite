'use client';

import React from 'react';

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ title, children }: SectionWrapperProps) {
  return (
    <div className="bg-white ">
      <div className="container-fluid px-0">
        <div
          className="flex-grow-1"
          style={{
            fontSize: '18px',
            fontFamily: "'Rubik', Arial, sans-serif",
            fontWeight: 700
          }}
        >
          <span
            className="fw-bold border-top border-2 border-black pt-3 mb-3 text-start d-block"
            style={{ fontSize: '1.3rem' }}
          >
            {title}
          </span>
          {children}
        </div>
      </div>
    </div>
  );
}
