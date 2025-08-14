'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';

interface InteractiveCardProps {
  data: {
    category: string;
    title: string;
    shortdescription: string;
    image: string;
    slug: string;
    date: string;
  };
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({ data }) => {
  return (
    <div
      className="border my-md-0 my-4"
      style={{
        maxWidth: '400px',
        margin: 'auto',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
      }}
    >
      <Link href={`/${data.category}/${data.slug}`} className='text-decoration-none' title={`${data.slug}`}>
        <div style={{ position: 'relative' }}>
          <Image
            src={data.image}
            alt={data.title}
            width={400}
            height={240}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#000',
              color: '#fff',
              padding: '6px 18px',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            {data.category}
          </div>
        </div>

        <div style={{ padding: '2rem 1rem 1rem', textAlign: 'center' }}>
          <span style={{
            fontWeight: 'bold', marginBottom: '1rem', color: "#111111", lineHeight: 1.3,
            display: 'inline-block',
          }}>{data.title}</span>
          <hr
            style={{

              width: '40px',
              margin: '0 auto 1rem',
              borderTop: '2px solid #ccc',
            }}
          />
          <p
            style={{
              fontSize: '0.95rem',
              color: '#333',
              display: '-webkit-box',
              WebkitLineClamp: 2,
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
            <span style={{ color: '#555', marginLeft: '4px' }}>{data.date}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default InteractiveCard;
