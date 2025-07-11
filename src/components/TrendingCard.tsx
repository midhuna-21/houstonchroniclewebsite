import React from 'react';
import SectionWrapper from './SectionWrapper';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';

interface TrendingItem {
  image: string;
  title: string;
  description: string;
  slug:string
  date:string;
}

interface TrendingSection {
  section: string;
  items: TrendingItem[];
}

interface TrendingCardProps {
  data: TrendingSection;
}

const TrendingCard: React.FC<TrendingCardProps> = ({ data }) => {
  return (
    <SectionWrapper title={data.section}>
      {data.items.map((item, idx) => (
          
          <div key={idx} className="mb-4">
            <Link href={`/details/${item.slug}`} className='text-decoration-none'>
          <div className="d-flex align-items-center justify-content-between mb-2">
            <h6
              className="fw-bold mb-0"
              style={{
                color:'#111111',
                fontSize: '18px',
                fontWeight: 700,
                fontFamily: "'Archivo', Arial, sans-serif",
                flex: 1,
                marginRight: '1rem',
              }}
            >
              {item.title}
            </h6>
           
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: '60px',
                height: '60px',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
          </div>

        <p
  style={{
    color:'#444444',
    marginBottom: '0.5rem',
    fontSize: '16px',
    fontWeight: 400,
    fontFamily: "'Archivo', Arial, sans-serif",
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
  }}
>
  {item.description}
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
                                      <span style={{ color: '#aaa', marginLeft: '4px' }}>{item.date}</span>
                                    </div>
          {idx !== data.items.length - 1 && (
            <hr style={{ borderColor: '#666' }} />
          )}
        </Link>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default TrendingCard;
