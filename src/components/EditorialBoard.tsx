'use client';

import React from 'react';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';
import Link from 'next/link';

interface EditorialItem {
  title: string;
  image: string;
  slug:string
}

interface EditorialBoardProps {
  sectionTitle: string;
  data: EditorialItem[];
}

const EditorialBoard: React.FC<EditorialBoardProps> = ({ sectionTitle, data }) => {
  return (
    <SectionWrapper title={sectionTitle}>
      {data.map((item) => (
      <Link href={`/details/${item.slug}`}  key={item.slug} className='text-decoration-none'>
        <div
          key={item.slug}
          className="d-flex flex-column flex-md-row align-items-start border-bottom pb-3 mb-3"
          style={{
            gap: '1rem',
            fontSize: '18px',
            fontFamily: "'Archivo', Arial, sans-serif",
            fontWeight: 700
          }}
        >

          <div className="flex-grow-1">
            <p
              className="mb-0"
              style={{
                color:"#111111",
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
              alt={item.title}
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
      ))}
    </SectionWrapper>
  );
};

export default EditorialBoard;
