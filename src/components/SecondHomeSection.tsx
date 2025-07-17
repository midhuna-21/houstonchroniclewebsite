'use client';

import React from 'react';
import SectionWrapper from './SectionWrapper';
import MiniNewsCard from './MiniNewsContent';
import Image from 'next/image';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';


interface SecondHomeSectionProps {
  data: {
    category: string;
    title: string;
    image: string;
    slug: string;
    shortdescription?: string;
    date: string;
  }[];
}

export default function SecondHomeSection({ data }: SecondHomeSectionProps) {
  const [item1, item2, item3, item4, item5, item6] = data;

  return (
    <SectionWrapper title="Top News">
      <div className="w-100">
        <div className="row g-0 position-relative">
          <div className="col-12 col-md-6 pe-md-2">
            <Link href={`/${item1.category}/${item1.slug}`} className='text-decoration-none' title={`${item1.slug}`}>

              <div style={{ borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                <Image
                  src={item1.image}
                  alt={item1.title}
                  width={1000}
                  height={400}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
                <div>
                  <span
                    className="text-uppercase mt-2"
                    style={{
                      color: '#B10021',
                      fontSize: '14.224px',
                      fontWeight: 700,
                      fontFamily: "'Rubik', Arial, sans-serif",
                    }}
                  >
                    {item1.category}
                  </span>

                  <br />
                  <span
                    style={{
                      fontSize: '22.784px',
                      color: '#111111',
                      fontWeight: 700,
                      fontFamily: "'Archivo', Arial, sans-serif",
                    }}
                  >
                    {item1.title}
                  </span>
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
                  <span style={{ color: '#aaa', marginLeft: '4px' }}>{item1.date}</span>
                </div>
              </div>

            </Link>

            <Link href={`/${item2.category}/${item2.slug}`} className='text-decoration-none' title={`${item2.slug}`}>
              <div className="pt-3" style={{ borderBottom: '1px solid #eee' }}>
                <p className="text-uppercase " style={{
                  color: '#B10021',
                  textTransform: 'uppercase',
                  fontSize: '14.224px',
                  fontWeight: 700,
                  fontFamily: "'Rubik', Arial, sans-serif"
                }}
                >{item2.category}</p>
                <h1 style={{ fontSize: '22.784px', color: '#111111', fontWeight: 700, fontFamily: "'Archivo', Arial, sans-serif", }}
                >{item2.title}</h1>
                <p style={{ fontSize: '16px', color: '#444444', fontWeight: 400, fontFamily: "'Rubik', Arial, sans-serif" }}
                >{item2.shortdescription}</p>
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
                  <span style={{ color: '#aaa', marginLeft: '4px' }}>{item2.date}</span>
                </div>
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
            <Link href={`/${item3.category}/${item3.slug}`} className='text-decoration-none' title={`${item3.slug}`}>
              <div style={{ borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                <p className="text-uppercase" style={{
                  color: '#B10021',
                  textTransform: 'uppercase',
                  fontSize: '14.224px',
                  fontWeight: 700,
                  fontFamily: "'Rubik', Arial, sans-serif"
                }}
                >{item3.category}</p>
                <h2 style={{ fontSize: '22.784px', color: '#111111', fontWeight: 700, fontFamily: "'Archivo', Arial, sans-serif", }}
                >{item3.title}</h2>
                <Image
                  src={item3.image}
                  alt={item3.title}
                  width={1000}
                  height={400}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
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
                  <span style={{ color: '#aaa', marginLeft: '4px' }}>{item3.date}</span>
                </div>
              </div>
            </Link>

            <Link href={`/${item4.category}/${item4.slug}`} className='text-decoration-none' title={`${item4.slug}`}>
              <div className="pt-3">
                <p className="text-uppercase "
                  style={{
                    color: '#B10021',
                    textTransform: 'uppercase',
                    fontSize: '14.224px',
                    fontWeight: 700,
                    fontFamily: "'Rubik', Arial, sans-serif"
                  }}>{item4.category}</p>
                <h2 style={{ fontSize: '22.784px', color: '#111111', fontWeight: 700, fontFamily: "'Archivo', Arial, sans-serif", }}
                >{item4.title}</h2>
                <p style={{ fontSize: '16px', color: '#444444', fontWeight: 400, fontFamily: "'Rubik', Arial, sans-serif" }}
                >{item4.shortdescription}</p>
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
                  <span style={{ color: '#aaa', marginLeft: '4px' }}>{item4.date}</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <hr style={{ borderTop: '1px solid #ccc', marginTop: '30px' }} />

        <div
          className="section-new d-flex justify-content-between"
          style={{ maxWidth: '1150px', margin: '30px auto' }}
        >
          <Link
            title={`${item5.slug}`}
            href={`/${item5.category}/${item5.slug}`}
            className="text-decoration-none border-end pe-3"
            style={{ flex: '0 0 49.2%' }}
          >
            <MiniNewsCard
              category={item5.category}
              title={item5.title}
              image={item5.image}
              date={item5.date}
            />
          </Link>

          <div style={{ width: '1px', backgroundColor: '#ccc', margin: '0 10px' }}></div>

          <Link href={`/${item6.category}/${item6.slug}`} className="text-decoration-none" style={{ flex: '0 0 49.2%' }} title={`${item6.slug}`}>
            <MiniNewsCard
              category={item6.category}
              title={item6.title}
              image={item6.image}
              date={item6.date}
            />
          </Link>
        </div>

      </div>
    </SectionWrapper>
  );
}
