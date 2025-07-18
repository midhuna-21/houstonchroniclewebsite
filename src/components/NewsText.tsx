'use client';

import React from 'react';
import SectionWrapper from './SectionWrapper';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';

interface NewsTextItem {
  category: string;
  title: string;
  slug: string;
  date: string;
}

interface NewsTextProps {
  data: NewsTextItem[];
}

const NewsText: React.FC<NewsTextProps> = ({ data }) => {
  return (
    <SectionWrapper title="Columns from the past">
      {data.map((item, index) => (
        <Link href={`/${item.category}/${item.slug}`} key={item.slug} className='text-decoration-none' title={`${item.slug}`}>
          <div
            key={index}
            className="d-flex flex-column flex-md-row align-items-start border-bottom pb-3 mb-3"
            style={{ gap: '1rem' }}
          >
            <div className="flex-grow-1">
              <p
                className="mb-0"
                style={{
                  color: "#111111",
                  fontWeight: 700,
                  fontSize: '18px',
                  fontFamily: "'Archivo', Arial, sans-serif",
                }}
              >
                {item.title.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word}{' '}
                    {(i + 1) % 5 === 0 && <br className="d-none d-md-block" />}
                  </React.Fragment>
                ))}
              </p>
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
                <span style={{ color: '#aaa', marginLeft: '4px' }}>{item.date}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </SectionWrapper>
  );
};

export default NewsText;
