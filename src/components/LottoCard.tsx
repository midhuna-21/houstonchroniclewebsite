'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';

interface LottoItem {
  category: string;
  title: string;
  description: string;
  shortdescription: string;
  image: string;
  slug: string;
  date: string;
}

interface LottoCardProps {
  data: LottoItem;
}

const LottoCard: React.FC<LottoCardProps> = ({ data }) => {
  return (
    <div className="container">
      <Link href={`/${data.category}/${data.slug}`} className='text-decoration-none' title={`${data.slug}`}>
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
            <span
              className="mb-2"
              style={{
                color: '#111111',
                fontSize: '20.256px',
                fontFamily: "'Archivo', Arial, sans-serif",
                fontWeight: 700,
              }}
            >
              {data.title}
            </span>
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
              <span style={{ color: '#aaa', marginLeft: '4px' }}>{data.date}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LottoCard;
