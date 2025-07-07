'use client';

import React from 'react';
import Image from 'next/image';
import { lottoData, LottoItem } from '@/data/homeData';

const LottoCard: React.FC = () => {
  return (
<div className="container">
  {lottoData.map((item: LottoItem) => (
    <div
      key={item.id}
      className=" my-md-0 my-4" 
      style={{
        maxWidth: '500px',
        margin: '0 auto',
        overflow: 'hidden',
       border: '3px solid black',
      }}
    >
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

      <div className="p-3 bg-white">
        <h5
          className="mb-2"
          style={{
            color: "#111111",
            fontSize: '20.256px',
            fontFamily: "'Archivo', Arial, sans-serif",
            fontWeight: 700
          }}
        >
          {item.title}
        </h5>
        <hr style={{ margin: '0.5rem 0' }} />
        <p
          style={{
            color: "#444444",
            fontSize: '16px',
            fontFamily: "'Rubik', Arial, sans-serif",
            fontWeight: 700
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
