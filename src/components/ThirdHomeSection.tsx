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

  // Responsive category style
  const categoryStyle: React.CSSProperties = {
    fontWeight: 900,
    textTransform: 'uppercase',
    color: '#b50021',
    fontSize: 'clamp(12px, 2vw, 14.224px)',
    fontFamily: "'Rubik', Arial, sans-serif",
  };

  // Responsive title style
  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(14px, 2.5vw, 22.784px)',
    fontFamily: "'Archivo', Arial, sans-serif",
    fontWeight: 700,
    color: '#111111',
    marginBottom: '0.5rem',
    lineHeight: 1.2,
  };

  // Responsive description style
  const descriptionStyle: React.CSSProperties = {
    fontSize: 'clamp(13px, 2vw, 16px)',
    color: '#444444',
    fontWeight: 400,
    fontFamily: "'Rubik', Arial, sans-serif",
  };

  return (
    <SectionWrapper title="Latest">
      <div className="row">
        {/* First Column */}
        <div className="col-12 col-lg-4 order-2 order-lg-1 mb-4 border-lg-end">
          <Link
            href={`/${first.category}/${first.slug}`}
            className="text-decoration-none"
            title={`${first.slug}`}
          >
            <div className="mb-4">
              {/* <div style={categoryStyle}>{first.category}</div> */}
              <h2 style={titleStyle}>{first.title}</h2>
              <hr style={{ borderTop: '1px solid #ccc', margin: '1rem 0' }} />
              {renderDate(first.date)}
            </div>
          </Link>

          <Link
            href={`/${second.category}/${second.slug}`}
            className="text-decoration-none"
            title={`${second.slug}`}
          >
            <div>
              {/* <div style={categoryStyle}>{second.category}</div> */}
              <h2 style={titleStyle}>{second.title}</h2>
              {renderDate(second.date)}
            </div>
          </Link>
        </div>

        {/* Main Column */}
        <div className="d-none d-lg-flex col-12 col-lg-8 order-1 order-lg-2 mb-4 border-start">
          <Link
            href={`/${main.category}/${main.slug}`}
            className="text-decoration-none"
            title={`${main.slug}`}
          >
            <div className="row">
              <div className="col-lg-5 mb-3 mb-lg-0">
                {main.image && (

                  // <Image
                  //   src={main.image}
                  //   alt={main.title}
                  //   width={300}
                  //   height={200} // default height for mobile & desktop
                  //   className="img-fluid w-100"
                  //   style={{
                  //     objectFit: 'cover',
                  //     width: '100%',
                  //     height:
                  //       typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 992
                  //         ? '250px' // taller for tablet
                  //         : '200px', // default for others
                  //   }}
                  // />
                  <>
                    <Image
                      src={main.image || ""}
                      alt={main.image}
                      width={800}
                      height={500}
                      className="img-fluid mb-2 d-xl-none"
                      style={{
                        width: '100%',
                        height: '400px',
                        objectFit: 'cover',
                      }}
                    />

                    <Image
                      src={main.image || ""}
                      alt={main.image}
                      width={1000}
                      height={250}
                      className="img-fluid mb-2 d-none d-xl-block"
                      style={{
                        width: '100%',
                        height: '300',
                        objectFit: 'cover',
                      }}
                    />
                  </>
                )}
              </div>
              <div className="col-lg-7">
                {/* <div style={categoryStyle}>{main.category}</div> */}
                <h2 style={titleStyle}>{main.title}</h2>
                {main.description && (
                  <p style={descriptionStyle}>{main.shortdescription}</p>
                )}
                {renderDate(main.date)}
              </div>
            </div>
          </Link>
        </div>
        
        {/* no border */}
  <div className="d-flex d-lg-none col-12 col-lg-8 order-1 order-lg-2 mb-4 ">
          <Link
            href={`/${main.category}/${main.slug}`}
            className="text-decoration-none"
            title={`${main.slug}`}
          >
            <div className="row">
              <div className="col-lg-5 mb-3 mb-lg-0">
                {main.image && (

                  // <Image
                  //   src={main.image}
                  //   alt={main.title}
                  //   width={300}
                  //   height={200} // default height for mobile & desktop
                  //   className="img-fluid w-100"
                  //   style={{
                  //     objectFit: 'cover',
                  //     width: '100%',
                  //     height:
                  //       typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 992
                  //         ? '250px' // taller for tablet
                  //         : '200px', // default for others
                  //   }}
                  // />
                  <>
                    <Image
                      src={main.image || ""}
                      alt={main.image}
                      width={800}
                      height={500}
                      className="img-fluid mb-2 d-xl-none"
                      style={{
                        width: '100%',
                        height: '400px',
                        objectFit: 'cover',
                      }}
                    />

                    <Image
                      src={main.image || ""}
                      alt={main.image}
                      width={1000}
                      height={250}
                      className="img-fluid mb-2 d-none d-xl-block"
                      style={{
                        width: '100%',
                        height: '300',
                        objectFit: 'cover',
                      }}
                    />
                  </>
                )}
              </div>
              <div className="col-lg-7">
                {/* <div style={categoryStyle}>{main.category}</div> */}
                <h2 style={titleStyle}>{main.title}</h2>
                {main.description && (
                  <p style={descriptionStyle}>{main.shortdescription}</p>
                )}
                {renderDate(main.date)}
              </div>
            </div>
          </Link>
        </div>

        {/* Bottom Two Columns */}
        <div className="col-12 order-3 border-top pt-3">
          <div className="row">
            <div className="d-none d-lg-flex col-12 col-lg-6 mb-3  pe-lg-4 border-end">
              <Link
                href={`/${fourth.category}/${fourth.slug}`}
                className="text-decoration-none"
                title={`${fourth.slug}`}
              >
                {/* <div style={categoryStyle}>{fourth.category}</div> */}
                <h2 style={titleStyle}>{fourth.title}</h2>
                {renderDate(fourth.date)}
              </Link>
            </div>

              <div className="d-flex d-lg-none col-12 col-lg-6 mb-3 pe-lg-4">
              <Link
                href={`/${fourth.category}/${fourth.slug}`}
                className="text-decoration-none"
                title={`${fourth.slug}`}
              >
                {/* <div style={categoryStyle}>{fourth.category}</div> */}
                <h2 style={titleStyle}>{fourth.title}</h2>
                {renderDate(fourth.date)}
              </Link>
            </div>

            <div className="col-12 col-lg-6 mb-3 ps-lg-4">
              <Link
                href={`/${fifth.category}/${fifth.slug}`}
                className="text-decoration-none"
                title={`${fifth.slug}`}
              >
                {/* <div style={categoryStyle}>{fifth.category}</div> */}
                <h2 style={titleStyle}>{fifth.title}</h2>
                {renderDate(fifth.date)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

function renderDate(date: string) {
  return (
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
      <span style={{ color: '#555', marginLeft: '4px' }}>{date}</span>
    </div>
  );
}

export default ThirdHomeSection;
