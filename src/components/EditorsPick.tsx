import React from 'react';
import SectionWrapper from './SectionWrapper';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';
import Image from "next/image";

interface EditorsPicksSectionProps {
  data: {
    image: string;
    title: string;
    category: string;
    slug: string;
    date: string;
  }[];
}

const EditorsPicksSection: React.FC<EditorsPicksSectionProps> = ({ data }) => {
  return (
    <SectionWrapper title="Editor's Pick">
      <div className="row gx-4 gy-4 mb-5">
        {data.slice(0, 4).map((item, idx) => (

          <div key={idx} className="col-12 col-sm-6 col-lg-3">
            <Link href={`/${item.category}/${item.slug}`} className='text-decoration-none'>
              <div
                className="h-100 text-start pe-3"
                style={{
                  borderRight: '0.5px solid rgba(14, 14, 14, 0.15)',
                }}
              >
                <Image
                  src={item.image || ""}
                  alt={item.title}
                  width={800}
                  height={160}
                  className="img-fluid mb-2"
                  style={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />

                <p
                  style={{
                    fontSize: '14.224px',
                    fontWeight: 700,
                    color: '#b50021',
                    marginBottom: '4px',
                    textTransform: 'uppercase',
                    fontFamily: "'Rubik', Arial, sans-serif",
                  }}
                >
                  {item.category}
                </p>

                <h6
                  className="fw-bold mb-0"
                  style={{
                    color: '#111111',
                    fontSize: '18px',
                    fontWeight: 700,
                    fontFamily: "'Archivo', Arial, sans-serif",
                  }}
                >
                  {item.title}
                </h6>
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
              </div>
            </Link>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default EditorsPicksSection;
