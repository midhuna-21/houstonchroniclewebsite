'use client';
import React from 'react';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';

interface NewsItem {
  category: string;
  title: string;
  shortdescription: string;
  description?: string;
  image?: string;
  date: string;
  slug: string;
}

interface Props {
  data: NewsItem[];
}

const ThirdHomeSection: React.FC<Props> = ({ data }) => {
  const [first, second, main, fourth, fifth] = data;

  const categoryStyle: React.CSSProperties = {
    fontWeight: 700,
    textTransform: 'uppercase',
    color: '#b50021',
    fontSize: '14.224px',
    fontFamily: "'Rubik', Arial, sans-serif",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '18px',
    fontFamily: "'Archivo', Arial, sans-serif",
    fontWeight: 700,
    color: '#111111',
    marginBottom: '0.5rem',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#444444',
    fontWeight: 400,
    fontFamily: "'Rubik', Arial, sans-serif",
  };

  return (
    <SectionWrapper title="Latest">
      <div className="row">
        <div className="col-12 col-md-4 order-2 order-md-1 mb-4 border-end">
          <Link href={`/${first.category}/${first.slug}`} className='text-decoration-none' title={`${first.slug}`}>

            <div className="mb-4">
              <div style={categoryStyle}>{first.category}</div>
              <h5 style={titleStyle}>{first.title}</h5>
              <hr style={{ borderTop: '1px solid #ccc', margin: '1rem 0' }} />
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
                <span style={{ color: '#aaa', marginLeft: '4px' }}>{first.date}</span>
              </div>
            </div>
          </Link>
          <Link href={`/${second.category}/${second.slug}`} className='text-decoration-none' title={`${second.slug}`}>

            <div>
              <div style={categoryStyle}>{second.category}</div>
              <h5 style={titleStyle}>{second.title}</h5>
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
                <span style={{ color: '#aaa', marginLeft: '4px' }}>{second.date}</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-12 col-md-8 order-1 order-md-2 mb-4">
          <Link href={`/${main.category}/${main.slug}`} className='text-decoration-none' title={`${main.slug}`}>
            <div className="row">

              <div className="col-md-5 mb-3 mb-md-0">
                {main.image && (
                  <Image
                    src={main.image}
                    alt={main.title}
                    width={300}
                    height={200}
                    className="img-fluid w-100"
                  />
                )}
              </div>

              <div className="col-md-7">
                <div style={categoryStyle}>{main.category}</div>
                <h3 style={titleStyle}>{main.title}</h3>
                {main.description && <p style={descriptionStyle}>{main.shortdescription}</p>}
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
              </div>
            </div>
          </Link>
        </div>

        <div className="col-12 order-3 border-top pt-3">
          <div className="row">

            <div className="col-md-6 mb-3 border-end pe-md-4">
              <Link href={`/${fourth.category}/${fourth.slug}`} className='text-decoration-none' title={`${fourth.slug}`}>
                <div style={categoryStyle}>{fourth.category}</div>
                <h5 style={titleStyle}>{fourth.title}</h5>
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
                  <span style={{ color: '#aaa', marginLeft: '4px' }}>{fourth.date}</span>
                </div>
              </Link>
            </div>

            <div className="col-md-6 mb-3 ps-md-4">
              <Link href={`/${fifth.category}/${fifth.slug}`} className='text-decoration-none' title={`${fifth.slug}`}>
                <div style={categoryStyle}>{fifth.category}</div>
                <h5 style={titleStyle}>{fifth.title}</h5>
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
                  <span style={{ color: '#aaa', marginLeft: '4px' }}>{fifth.date}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ThirdHomeSection;
