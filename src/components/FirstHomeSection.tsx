'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';

interface Article {
  category: string;
  title: string;
  shortdescription: string;
  image: string;
  slug: string;
  date: string;
}

interface LatestHomeSectionProps {
  data: Article[];
}

export default function FirstHomeSection({ data }: LatestHomeSectionProps) {
  const main = data[0];
  const right1 = data[1];
  const right2 = data[2];

  return (
    <section>
      <div className="row g-4 align-items-stretch flex-column flex-md-row">
        <div className="col-md-3 text-start order-1 order-md-0 d-flex flex-column justify-content-between">
          <Link href={`/${main.category}/${main.slug}`} className="text-decoration-none" title={`${main.slug}`}>
            <div>
              <p
                style={{
                  color: "#B50021",
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  fontSize: '14.224px',
                  fontFamily: "'Rubik', Arial, sans-serif",
                }}
              >
                {main.category}
              </p>

              <span
                style={{
                  color: '#111111',
                  fontSize: '22.784px',
                  fontFamily: "'Archivo', Arial, sans-serif",
                  fontWeight: 700
                }}
              >
                {main.title}
              </span>

              <p
                className="text-muted mb-3"
                style={{
                  color: '#444444',
                  fontSize: '16px',
                  fontFamily: "'Rubik', Arial, sans-serif",
                  fontWeight: 400
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
            </div>
          </Link>
        </div>



        {main.image && (
          <div className="col-md-6 order-0 order-md-1 d-flex align-items-stretch border-end">
            <div
              style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Link href={`/${main.category}/${main.slug}`} className='text-decoration-none' title={`${main.slug}`}>

                <Image
                  src={main.image}
                  alt={main.category}
                  width={1000}
                  height={400}
                  className="img-fluid"
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                  }}
                />
              </Link>
            </div>
          </div>
        )}

        {/* Right Section*/}
        <div className="col-md-3 ps-3 text-start order-2">
          {/* Right Item 1 */}
          <Link href={`/${right1.category}/${right1.slug}`} className='text-decoration-none' title={`${right1.slug}`}>
            <div style={{ marginBottom: '14px' }}>
              {right1.image && (
                <Image
                  src={right1.image || ""}
                  alt={right1.image}
                  width={800}
                  height={500}
                  className="img-fluid mb-2"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                />
              )}

              <p
                className="fw-bold mb-1"
                style={{
                  color: "#B50021",
                  textTransform: 'uppercase',
                  fontSize: '14.224px',
                  fontFamily: "'Rubik', Arial, sans-serif",
                  lineHeight: '1.2',
                }}
              >
                {right1.category}
              </p>

              <p
                className="fw-bold text-black mb-1"
                style={{
                  color: '#111111',
                  fontSize: '19px',
                  fontFamily: "'Archivo', Arial, sans-serif",
                  fontWeight: 700,
                  lineHeight: '1.2',
                }}
              >
                {right1.title}
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

            </div>
          </Link>

          {/* Right Item 2 */}
          <Link href={`/${right2.category}/${right2.slug}`} className='text-decoration-none' title={`${right2.slug}`}>
            <div>
              <p
                className="fw-bold mb-1"
                style={{
                  color: "#B50021",
                  textTransform: 'uppercase',
                  fontSize: '14.224px',
                  fontFamily: "'Rubik', Arial, sans-serif",
                  lineHeight: '1.2',
                }}
              >
                {right2.category}
              </p>

              <p
                className="fw-bold text-black mb-1"
                style={{
                  color: '#111111',
                  fontSize: '20px',
                  fontFamily: "'Archivo', Arial, sans-serif",
                  fontWeight: 700,
                  lineHeight: '1.2',
                }}
              >
                {right2.title}
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
            </div>
          </Link>
        </div>

      </div>

    </section>
  );
}
