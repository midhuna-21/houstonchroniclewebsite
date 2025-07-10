'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Article {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
}

interface LatestHomeSectionProps {
  businessData: Article[];
}

export default function FirstHomeSection({ businessData }: LatestHomeSectionProps) {
  const main = businessData[0];
  const right1 = businessData[1];
  const right2 = businessData[2];

  return (
    <section>
      <div className="row g-4 align-items-stretch flex-column flex-md-row">
  
        <div className="col-md-3 text-start order-1 order-md-0 d-flex flex-column justify-content-between">
              <Link href={`/details/${main.slug}`} className='text-decoration-none'>
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
         


            <h2 style={{
              color: '#111111',
              fontSize: '22.784px',
              fontFamily: "'Archivo', Arial, sans-serif",
              fontWeight: 700
            }}>
              {main.title}
            </h2>

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
              <Link href={`/details/${main.slug}`} className='text-decoration-none'>

              <Image
                src={main.image}
                alt=""
                width={1000}
                height={400}
                className="img-fluid"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
              </Link>
            </div>
          </div>
        )}

        {/* Right Section: Use second and third data */}
        <div className="col-md-3 ps-3 text-start order-2">
          {/* Right Item 1 */}
              <Link href={`/details/${right1.slug}`} className='text-decoration-none'>

          <div className="mb-4">
            {right1.image && (
              <img
                src={right1.image}
                alt=""
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
                fontFamily: "'Rubik', Arial, sans-serif"
              }}
            >
              {right1.category}
            </p>

            <p
              className="fw-bold text-black mb-1"
              style={{
                color: '#111111',
                fontSize: '22.784px',
                fontFamily: "'Archivo', Arial, sans-serif",
                fontWeight: 700
              }}
            >
              {right1.title}
            </p>
          </div>
          </Link>

          {/* Right Item 2 */}
              <Link href={`/details/${right2.slug}`} className='text-decoration-none'>

          <div className="mb-4">
            <p
              className="fw-bold mb-1"
              style={{
                color: "#B50021",
                textTransform: 'uppercase',
                fontSize: '14.224px',
                fontFamily: "'Rubik', Arial, sans-serif"
              }}
            >
              {right2.category}
            </p>

            <p
              className="fw-bold text-black mb-1"
              style={{
                color: '#111111',
                fontSize: '22.784px',
                fontFamily: "'Archivo', Arial, sans-serif",
                fontWeight: 700
              }}
            >
              {right2.title}
            </p>
          </div>
          </Link>
        </div>
      </div>
    
    </section>
  );
}
