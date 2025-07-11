'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LottoItem {
  category: string;
  title: string;
  description: string;
  shortdescription:string;
  image: string;
  slug:string;  
}

interface LottoCardProps {
  data: LottoItem; 
}

const LottoCard: React.FC<LottoCardProps> = ({ data }) => {
  return (
    <div className="container">
            <Link href={`/details/${data.slug}`} className='text-decoration-none'>

      <div
        className="my-md-0 my-4"
        style={{
          maxWidth: '500px',
          margin: '0 auto',
          overflow: 'hidden',
          border: '3px solid black',
        }}
      >
        <div>
          <Image
            src={data.image}
            alt={data.title}
            width={600}
            height={300}
            style={{
              width: '100%',
              height: '230px',
              display: 'block',
              objectFit: 'cover',
            }}
          />
        </div>

        <div className="p-3 bg-white">
          <h5
            className="mb-2"
            style={{
              color: '#111111',
              fontSize: '20.256px',
              fontFamily: "'Archivo', Arial, sans-serif",
              fontWeight: 700,
            }}
          >
            {data.title}
          </h5>
          <hr style={{ margin: '0.5rem 0' }} />
        <p
  style={{
    color: '#444444',
    fontSize: '16px',
    fontFamily: "'Rubik', Arial, sans-serif",
    fontWeight: 400,
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }}
>
  {data.shortdescription}
</p>

        </div>
      </div>
      </Link>
    </div>
  );
};

export default LottoCard;
