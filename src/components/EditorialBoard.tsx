'use client';

import React from 'react';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';

interface EditorialItem {
  title: string;
  image: string;
  slug: string;
  date: string;
  category: string;
}

interface EditorialBoardProps {
  sectionTitle: string;
  data: EditorialItem[];
}

const EditorialBoard: React.FC<EditorialBoardProps> = ({ sectionTitle, data }) => {
  return (
    <SectionWrapper title={sectionTitle}>
      {data.map((item) => (
        <Link href={`/${item.category}/${item.slug}`} key={item.slug} className="text-decoration-none" title={`${item.slug}`}>
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
              <h2
                className="mb-0"
                style={{
                  color: "#111111",
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                    lineHeight: 1.2,
              display: 'inline-block'
                }}
              >
                {item.title}
              </h2>
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

            <div style={{ flexShrink: 0 }}>
              <Image
                src={item.image}
                alt={item.title}
                title={item.title}
                width={80}
                height={80}
                style={{
                  objectFit: 'cover',
                  width: '80px',
                  height: '80px',
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
