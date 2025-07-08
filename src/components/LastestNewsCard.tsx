'use client';

import React from 'react';
import Image from 'next/image';
import { latestNewsData,LatestNewsCardItem } from '@/data/detailData';
import SectionWrapper from './SectionWrapper';

const LatestNewsCard: React.FC = () => {
  return (
    <SectionWrapper title='Lastest Local News'>
      {latestNewsData.map((item: LatestNewsCardItem) => (
        <div
          key={item.id}
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
                fontWeight: 'bold',
                fontSize: '1.1rem',
                lineHeight: '1.2',
              }}
            >
              {item.description.split(' ').map((word, index) => (
                <React.Fragment key={index}>
                  {word}{' '}
                  {(index + 1) % 5 === 0 && <br className="d-none d-md-block" />}
                </React.Fragment>
              ))}
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
      ))}
    </SectionWrapper>
  );
};

export default LatestNewsCard;
