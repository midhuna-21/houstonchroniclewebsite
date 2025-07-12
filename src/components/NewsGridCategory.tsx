'use client';
import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { BiCalendar } from 'react-icons/bi';

interface NewsItem {
  slug: string
  image: string;
  category: string;
  title: string;
  shortdescription?: string;
     date:string;
}

interface NewsGridProps {
  data: NewsItem[];
}

const NewsGrid: React.FC<NewsGridProps> = ({ data }) => {
  const main = data[0];
  const right = data.slice(1, 5);

  return (
    <div style={{ paddingBottom: '40px' }}>
      <div className="row g-4">

        <div className="col-md-6" style={{ borderRight: '1px solid #ddd' }}>
            <Link href={`/${main.category}/${main.slug}`} className='text-decoration-none'>

          <div style={{ position: 'relative' }}>
            <Image
              src={main.image}
              alt={main.title}
              width={600}
              height={400}
              style={{
                width: '100%',
                height: '240px',
                objectFit: 'cover',
                marginBottom: '8px',
              }}

            />
            <div
              style={{
                position: 'absolute',
                left: '15px',
                bottom: '-14px',
                backgroundColor: '#000',
                color: '#fff',
                padding: '10px 26px',
                fontWeight: 500,
                letterSpacing: '0.2em',
                fontSize: '16px',
                fontFamily: 'monospace, sans-serif',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              {main.category}
            </div>
          </div>

          <h3
            style={{
              color: '#111111',
              fontFamily: "'Archivo', Arial, sans-serif",
              fontSize: '32.432px',
              fontWeight: 700,
              marginTop: '1rem',
            }}
          >
            {main.title}
          </h3>

          <hr
            style={{
              width: '100px',
              height: '1px',
              backgroundColor: '#444',
              border: 'none',
              margin: '0.5rem 0 1rem 0',
            }}
          />

          <p
            style={{
              fontSize: '16px',
              color: '#444444',
              fontFamily: "'Archivo', Arial, sans-serif",
              lineHeight: '1.5',
              marginBottom: '1rem',
            }}
          >
            {main.shortdescription}
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
                                                  <span style={{ color: '#aaa', marginLeft: '4px' }}>{main.date}</span>
                                                </div>
        </Link>
        </div>

     <div className="col-md-6">
  <div className="row g-4">
    {right.map((item, index) => (
      <div className="col-6" key={index}>
        <Link href={`/${main.category}/${item.slug}`} className="text-decoration-none">
          <div style={{ width: '100%', height: '180px', position: 'relative', marginBottom: '8px' }}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>

          <div
            style={{
              color: '#B50021',
              fontWeight: 700,
              fontSize: '14.224px',
              textTransform: 'uppercase',
              marginBottom: '5px',
            }}
          >
            {/* {item.category} */}
          </div>

          <div
            style={{
              color: '#111111',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: 1.3,
              fontFamily: "'Archivo', Arial, sans-serif",
            }}
          >
            {item.title}
          </div>
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
        </Link>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default NewsGrid;
