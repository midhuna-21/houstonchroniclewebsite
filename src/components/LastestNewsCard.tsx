'use client';

import React from 'react';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';
import Link from 'next/link';

interface LatestNewsCardItem {
  title: string;
  image: string;
  slug:string;
}

interface LatestNewsCardProps {
  data: LatestNewsCardItem[];
}

const LatestNewsCard: React.FC<LatestNewsCardProps> = ({ data }) => {
  return (
    <SectionWrapper title="Latest Local News">
 {data.map((item) => (
  <div key={item.slug}>
    <Link href={`/details/${item.slug}`} className='text-decoration-none'>
      <div
        className="d-flex flex-row align-items-start border-bottom pb-3 mb-3"

        style={{
          gap: '1rem',
          fontSize: '18px',
          fontFamily: "'Archivo', Arial, sans-serif",
          fontWeight: 700,
        }}
      >
        <div className="flex-grow-1">
          <p
            className="mb-0"
            style={{
              color: "#111111",
              fontWeight: 'bold',
              fontSize: '1.1rem',
              lineHeight: '1.2',
            }}
          >
            {item.title}
          </p>
        </div>

        <div style={{ flexShrink: 0 }}>
          <Image
            src={item.image}
            alt="Editorial"
            width={80}
            height={80}
            style={{
              objectFit: 'cover',
              maxWidth: '100px',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </Link>
  </div>
))}

    </SectionWrapper>
  );
};

export default LatestNewsCard;
