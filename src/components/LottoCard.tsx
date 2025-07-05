'use client';

import React from 'react';
import Image from 'next/image';
import { lottoData, LottoItem } from '@/data/homeData';

const LottoCard: React.FC = () => {
  return (
    <div className="container mt-4">
      {lottoData.map((item: LottoItem) => (
        <div
          key={item.id}
          className="border rounded"
          style={{
            maxWidth: '500px',
            margin: '0 auto',
            overflow: 'hidden',
            border: '1px solid #ccc',
          }}
        >
          {/* Image section */}
          <div>
            <Image
              src={item.image}
              alt="Lotto Collage"
              width={600}
              height={300}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Content section */}
          <div className="p-3 bg-white">
            <h5
              className="mb-2"
              style={{
                fontWeight: 'bold',
                fontSize: '1.3rem',
              }}
            >
              {item.title}
            </h5>
            <hr style={{ margin: '0.5rem 0' }} />
            <p
              style={{
                fontSize: '1rem',
                color: '#555',
                lineHeight: '1.6',
              }}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LottoCard;
