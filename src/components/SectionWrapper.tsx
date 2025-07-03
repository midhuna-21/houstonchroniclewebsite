'use client';

import React from 'react';

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ title, children }: SectionWrapperProps) {
  return (
    <section className="bg-white px-0">
      <div className="container-fluid px-0">
        <div
        className="flex-grow-1"
        style={{ flexBasis: '75%', maxWidth: '950px' }}
        >
        <h3
          className="fw-bold border-top border-2 border-black pt-3 mb-4 text-start"
          style={{ fontSize: '1.3rem' }}
        >


          {title}
        </h3>
        {children}
      </div>
      </div>
    </section>
  );
}
