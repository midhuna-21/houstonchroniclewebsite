import React from 'react';
import SectionWrapper from './SectionWrapper';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';

interface Article {
  title: string;
  slug: string;
  date: string;
  category: string
}

interface MostPopularListProps {
  data: Article[];
}

const MostPopularList: React.FC<MostPopularListProps> = ({ data }) => {
  return (
    <SectionWrapper title="Most Popular">
      {data.map((article, index) => (
        <div key={index} className="mb-3 pb-3 border-bottom">
          <Link href={`/${article.category}/${article.slug}`} className="text-decoration-none" title={`${article.slug}`}>
            <div className="d-flex align-items-start">
              <div className="fw-bold text-danger me-2">{index + 1}.</div>
              <div
                className="fw-semibold"
                style={{
                  color: '#111111',
                  fontSize: '18px',
                  fontFamily: "'Archivo', Arial, sans-serif",
                  fontWeight: 700,
                  lineHeight: '1.3',
                }}
              >
                {article.title}
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
                  <span style={{ color: '#555', marginLeft: '4px' }}>{article.date}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default MostPopularList;
