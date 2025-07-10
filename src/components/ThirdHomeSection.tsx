'use client';
import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionWrapper from './SectionWrapper';
import Link from 'next/link';

interface NewsItem {
  category: string;
  title: string;
  shortdescription:string;
  description?: string;
  image?: string;
  slug:string;
}

interface Props {
  businessData: NewsItem[]; 
}

const ThirdHomeSection: React.FC<Props> = ({ businessData }) => {
  const [first, second, main, fourth, fifth] = businessData;

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
            <Link href={`/details/${first.slug}`} className='text-decoration-none'>

          <div className="mb-4">
            <div style={categoryStyle}>{first.category}</div>
            <h5 style={titleStyle}>{first.title}</h5>
            <hr style={{ borderTop: '1px solid #ccc', margin: '1rem 0' }} />
          </div>
          </Link>
            <Link href={`/details/${second.slug}`} className='text-decoration-none'>

          <div>
            <div style={categoryStyle}>{second.category}</div>
            <h5 style={titleStyle}>{second.title}</h5>
          </div>
          </Link>
        </div>

        <div className="col-12 col-md-8 order-1 order-md-2 mb-4">
            <Link href={`/details/${main.slug}`} className='text-decoration-none'>
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
            </div>
          </div>
            </Link>
        </div>

        <div className="col-12 order-3 border-top pt-3">
          <div className="row">

            <div className="col-md-6 mb-3 border-end pe-md-4">
            <Link href={`/details/${fourth.slug}`} className='text-decoration-none'>
              <div style={categoryStyle}>{fourth.category}</div>
              <h5 style={titleStyle}>{fourth.title}</h5>
            </Link>
            </div>

            <div className="col-md-6 mb-3 ps-md-4">
            <Link href={`/details/${fifth.slug}`} className='text-decoration-none'>
              <div style={categoryStyle}>{fifth.category}</div>
              <h5 style={titleStyle}>{fifth.title}</h5>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ThirdHomeSection;
