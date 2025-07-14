import React from 'react';
import SectionWrapper from './SectionWrapper';
import Link from 'next/link';

interface Article {
  title: string;
  slug:string;
}

interface OpinionListProps {
  title: string;
  articles: Article[];
}

const OpinionList: React.FC<OpinionListProps> = ({ title, articles }) => {
  return (
    <SectionWrapper title='Opinion'>
      {articles.map((article, index) => (
        <Link href={`/details/${article.slug}`}  key={article.slug} className='text-decoration-none' title={`${article.slug}`}>
        
        <div key={article.slug} className="pb-3 mb-3 border-bottom">
          <div className="fw-semibold"
            style={{
              color: "#111111",
              fontSize: '18px',
              fontFamily: "'Archivo', Arial, sans-serif",
              fontWeight: 700
            }}
          >{article.title}</div>
        </div>
        </Link>
      ))}
    </SectionWrapper>
  );
};

export default OpinionList;
