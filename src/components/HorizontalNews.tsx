import Link from 'next/link';
import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import Image from "next/image";

interface HorizontalNewsProps {
  data: {
    image: string;
    title: string;
    category: string;
    slug: string;
    date: string;
  }[];
}

const HorizontalNews: React.FC<HorizontalNewsProps> = ({ data }) => {
  return (
    <div className='mb-5'>
      <div className="row gx-4 gy-4">
        {data.slice(0, 4).map((item, idx) => (
          <div key={idx} className="col-12 col-sm-6 col-lg-3">
            <Link href={`/${item.category}/${item.slug}`} className='text-decoration-none' title={`${item.slug}`}>
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
                <span
                  className="fw-bold mb-0"
                  style={{
                    color: '#111111',
                    fontSize: '18px',
                    fontWeight: 700,
                    fontFamily: "'Archivo', Arial, sans-serif",
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
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalNews;
