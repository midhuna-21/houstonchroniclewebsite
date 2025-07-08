'use client';

import React from 'react';
import { NewsTextData, NewsTextItem } from '@/data/homeData';
import SectionWrapper from './SectionWrapper';

const NewsText: React.FC = () => {
  return (
    <SectionWrapper title='Columns from the past'>
      {NewsTextData.map((item: NewsTextItem) => (
        <div
          key={item.id}
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
              {item.title?.split(' ').map((word, index) => (
                <React.Fragment key={index}>
                  {word}{' '}
                  {(index + 1) % 5 === 0 && <br className="d-none d-md-block" />}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default NewsText;
