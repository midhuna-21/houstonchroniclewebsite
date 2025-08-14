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
                <span
                  style={{
                    color: '#111111',
                    fontSize: '18px',
                    fontFamily: "'Archivo', Arial, sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </span>
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
              <div style={{ width: '100%', height: imageHeight, position: 'relative' }}>
                <Image
                  src={mainItem.image || ""}
                  alt={mainItem.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
          )}
        </div>

        <div className="col-12 col-lg-5">
          <Link href={`/${mainItem.category}/${mainItem.slug}`} className='text-decoration-none' title={`${mainItem.slug}`}>
            <span style={{
              color: '#111111',
              fontSize: '18px',
              fontFamily: "'Archivo', Arial, sans-serif",
              fontWeight: 700
            }}
            >{mainItem.title}</span>
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
          <div
            key={idx}
            className={`col-12 col-lg-6 ${idx === 0 ? 'border-end' : ''}`} // tablet stacked
          >
            <Link href={`/${item.category}/${item.slug}`} className='text-decoration-none' title={`${item.slug}`}>
              <span style={{
                color: "#111111",
                fontSize: '18px',
                fontFamily: "'Archivo', Arial, sans-serif",
                fontWeight: 700
              }}
              >{item.title}</span>
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
      <div className="mt-4" />
    </SectionWrapper>

  );
};

export default FeatureSection;
