import React from 'react';
import SectionWrapper from './SectionWrapper';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';
import Image from "next/image";

interface FeatureArticle {
  slug: string;
  title: string;
  description?: string;
  shortdescription?: string;
  image?: string;
  date: string;
  category: string;
}

interface FeatureItem {
  section: string;
  articles: FeatureArticle[];
}

interface FeatureSectionProps {
  data: FeatureItem;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ data }) => {
  const { section, articles } = data;

  const leftItems = articles.slice(0, 2);
  const mainItem = articles[2];
  const bottomItems = articles.slice(3, 5);

  if (!mainItem) return null;

  const imageHeight = '250px';

  return (
    <SectionWrapper title={section}>
      <div className="row border-bottom">
        <div className="col-12 col-lg-3 border-end">
          {leftItems.map((item, index) => (
            <div
              key={index}
              className={`pb-2 mb-3 ${index !== leftItems.length - 1 ? 'border-bottom' : ''}`}
            >
              <Link href={`/${item.category}/${item.slug}`} className='text-decoration-none' title={`${item.slug}`}>
                <h2
                  style={{
                    color: '#111111',
                    fontSize: '18px',
                    fontFamily: "'Archivo', Arial, sans-serif",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    display: 'inline-block'
                  }}
                >
                  {item.title}
                </h2>
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
                  <span style={{ color: '#555', marginLeft: '4px' }}>{item.date}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="col-12 col-lg-4 text-center">
          {mainItem.image && (
            <Link href={`/${mainItem.category}/${mainItem.slug}`} className='text-decoration-none' title={`${mainItem.slug}`}>
              <div style={{ width: '100%', position: 'relative' }}>
                <Image
                  src={mainItem.image || ""}
                  alt={mainItem.image || ""}
                  title={mainItem.title || ""}
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
                  src={mainItem.image || ""}
                  alt={mainItem.image || ""}
                  title={mainItem.title || ""}
                  width={800}
                  height={500}
                  className="img-fluid mb-2 d-none d-xl-block"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                  }}
                />
              </div>

            </Link>
          )}
        </div>

        <div className="col-12 col-lg-5">
          <Link href={`/${mainItem.category}/${mainItem.slug}`} className='text-decoration-none' title={`${mainItem.slug}`}>
            <h2 style={{
              color: '#111111',
              fontSize: '22.784px',
              fontFamily: "'Archivo', Arial, sans-serif",
              fontWeight: 700,
              lineHeight: 1.2,
              display: 'inline-block'
            }}
            >{mainItem.title}</h2>
            {mainItem.shortdescription && <p style={{
              color: "#444444",
              fontSize: '16px',
              fontFamily: "'Rubik', Arial, sans-serif", fontWeight: 400
            }}
            >{mainItem.shortdescription}</p>}
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
              <span style={{ color: '#555', marginLeft: '4px' }}>{mainItem.date}</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="row pt-3">
        {bottomItems.map((item, idx) => (
          <React.Fragment key={idx}>
            <div
              className={`col-12 col-lg-6 d-none d-lg-flex ${idx === 0 ? 'border-end' : ''}`}
            >
              <Link
                href={`/${item.category}/${item.slug}`}
                className="text-decoration-none"
                title={item.slug}
              >
                <h2
                  style={{
                    color: "#111111",
                    fontSize: "18px",
                    fontFamily: "'Archivo', Arial, sans-serif",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    display: "inline-block"
                  }}
                >
                  {item.title}
                </h2>
                <div
                  className="d-flex align-items-center mt-1"
                  style={{
                    fontSize: "10px",
                    fontWeight: 200,
                    fontFamily: "'Rubik', Arial, sans-serif"
                  }}
                >
                  <BiCalendar size={10} style={{ marginRight: "4px", color: "#000" }} />
                  <span style={{ color: "#000", opacity: 0.6 }}>Published on</span>
                  <span style={{ color: "#555", marginLeft: "4px" }}>{item.date}</span>
                </div>
              </Link>
            </div>

            {/* Small screens */}
            <div className="col-12 col-lg-6 d-flex d-lg-none">
              <Link
                href={`/${item.category}/${item.slug}`}
                className="text-decoration-none"
                title={item.slug}
              >
                <h2
                  style={{
                    color: "#111111",
                    fontSize: "18px",
                    fontFamily: "'Archivo', Arial, sans-serif",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    display: "inline-block"
                  }}
                >
                  {item.title}
                </h2>
                <div
                  className="d-flex align-items-center mt-1"
                  style={{
                    fontSize: "10px",
                    fontWeight: 200,
                    fontFamily: "'Rubik', Arial, sans-serif"
                  }}
                >
                  <BiCalendar size={10} style={{ marginRight: "4px", color: "#000" }} />
                  <span style={{ color: "#000", opacity: 0.6 }}>Published on</span>
                  <span style={{ color: "#555", marginLeft: "4px" }}>{item.date}</span>
                </div>
              </Link>
            </div>
          </React.Fragment>
        ))}

      </div>
      <div className="mt-4" />
    </SectionWrapper>

  );
};

export default FeatureSection;
