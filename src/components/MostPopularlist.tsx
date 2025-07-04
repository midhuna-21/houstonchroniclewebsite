import React from 'react';
import SectionWrapper from './SectionWrapper';

interface Article {
  title: string;
}

interface MostPopularListProps {
  articles: Article[];
}

const MostPopularList: React.FC<MostPopularListProps> = ({ articles }) => {
  return (
    <SectionWrapper title='Most Popular'>
      {articles.map((article, index) => (
        <div key={index} className="d-flex mb-3 pb-3 border-bottom">
          <div className="fw-bold text-danger me-2">{index + 1}.</div>
          <div className="fw-semibold">{article.title}</div>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default MostPopularList;
