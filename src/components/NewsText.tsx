'use client';

import React from 'react';
import SectionWrapper from './SectionWrapper';
import Link from 'next/link';

interface NewsTextItem {
  category: string;
  title: string;
  slug:string;
}

interface NewsTextProps {
  data: NewsTextItem[];
}

const NewsText: React.FC<NewsTextProps> = ({ data }) => {
  return (
    <SectionWrapper title="Columns from the past">
      {data.map((item, index) => (
            <Link href={`/details/${item.slug}`}  key={item.slug} className='text-decoration-none'>

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
              {/* <span style={{ color: "#B10021", fontSize: '14px', textTransform: 'uppercase' }}>
                {item.category}
              </span><br /> */}
              {item.title.split(' ').map((word, i) => (
                <React.Fragment key={i}>
                  {word}{' '}
                  {(i + 1) % 5 === 0 && <br className="d-none d-md-block" />}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
        </Link>
      ))}
    </SectionWrapper>
  );
};

export default NewsText;
