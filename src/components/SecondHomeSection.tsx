'use client';

import React from 'react';
import SectionWrapper from './SectionWrapper';
import MiniNewsCard from './MiniNewsContent';
import Image from 'next/image';
import Link from 'next/link';


interface SecondHomeSectionProps {
  data: {
    category: string;
    title: string;
    image: string;
    slug:string;
    shortdescription?: string;
  }[];
}

export default function SecondHomeSection({ data }: SecondHomeSectionProps) {
  const [item1, item2, item3, item4, item5, item6] = data;
  console.log(data, 'data')

  return (
    <SectionWrapper title="Top News">
      <div className="w-100">
        <div className="row g-0 position-relative">
          <div className="col-12 col-md-6 pe-md-2">
              <Link href={`/details/${item1.slug}`} className='text-decoration-none'>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
              <Image
                src={item1.image}
                alt={item1.title}
                width={1000}
                height={400}
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
              <p className="text-uppercase mt-2" style={{
                color: '#B10021',
                textTransform: 'uppercase',
                fontSize: '14.224px',
                fontWeight: 700,
                fontFamily: "'Rubik', Arial, sans-serif"
              }}>{item1.category}</p>

              <h5 style={{ fontSize: '22.784px', color: '#111111', fontWeight: 700, fontFamily: "'Archivo', Arial, sans-serif", }}
              >{item1.title}</h5>
            </div>
            </Link>

            <Link href={`/details/${item2.slug}`} className='text-decoration-none'>
            <div className="pt-3" style={{ borderBottom: '1px solid #eee' }}>
              <p className="text-uppercase " style={{
                color: '#B10021',
                textTransform: 'uppercase',
                fontSize: '14.224px',
                fontWeight: 700,
                fontFamily: "'Rubik', Arial, sans-serif"
              }}
              >{item2.category}</p>
              <h5 style={{ fontSize: '22.784px', color: '#111111', fontWeight: 700, fontFamily: "'Archivo', Arial, sans-serif", }}
              >{item2.title}</h5>
              <p style={{ fontSize: '16px', color: '#444444', fontWeight: 400, fontFamily: "'Rubik', Arial, sans-serif" }}
              >{item2.shortdescription}</p>
            </div>
            </Link>
          </div>

          <div
            className="d-none d-md-block"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '50%',
              width: '1px',
              backgroundColor: '#ccc',
            }}
          />

          <div className="col-12 col-md-6 ps-md-3">
            <Link href={`/details/${item3.slug}`} className='text-decoration-none'>
            <div style={{ borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
              <p className="text-uppercase" style={{
                color: '#B10021',
                textTransform: 'uppercase',
                fontSize: '14.224px',
                fontWeight: 700,
                fontFamily: "'Rubik', Arial, sans-serif"
              }}
              >{item3.category}</p>
              <h5 style={{ fontSize: '22.784px', color: '#111111', fontWeight: 700, fontFamily: "'Archivo', Arial, sans-serif", }}
              >{item3.title}</h5>
              <Image
                src={item3.image}
                alt={item3.title}
                width={1000}
                height={400}
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </div>
            </Link>

            <Link href={`/details/${item4.slug}`} className='text-decoration-none'>
            <div className="pt-3">
              <p className="text-uppercase "
                style={{
                  color: '#B10021',
                  textTransform: 'uppercase',
                  fontSize: '14.224px',
                  fontWeight: 700,
                  fontFamily: "'Rubik', Arial, sans-serif"
                }}>{item4.category}</p>
              <h5 style={{ fontSize: '22.784px', color: '#111111', fontWeight: 700, fontFamily: "'Archivo', Arial, sans-serif", }}
              >{item4.title}</h5>
              <p style={{ fontSize: '16px', color: '#444444', fontWeight: 400, fontFamily: "'Rubik', Arial, sans-serif" }}
              >{item4.shortdescription}</p>
            </div>
            </Link>
          </div>
        </div>

        <hr style={{ borderTop: '1px solid #ccc', marginTop: '30px' }} />

        <div
          className="section-new d-flex justify-content-between"
          style={{ maxWidth: '1150px', margin: '30px auto', padding: '0 15px' }}
        >
          <Link href={`/details/${item5.slug}`} className='text-decoration-none'>
          <div className="flex-grow-1 pe-3">
            <MiniNewsCard
              category={item5.category}
              title={item5.title}
              image={item5.image}
            />
          </div>
          </Link>

          <div style={{ width: '1px', backgroundColor: '#ccc', margin: '0 10px' }}></div>

            <Link href={`/details/${item6.slug}`} className='text-decoration-none'>
          <div className="flex-grow-1">
            <MiniNewsCard
              category={item6.category}
              title={item6.title}
              image={item6.image}
            />
          </div>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
