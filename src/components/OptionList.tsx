import React from 'react';
import SectionWrapper from './SectionWrapper';

interface Article {
  title: string;
}

interface OpinionListProps {
  title: string;
  articles: Article[];
}

const OpinionList: React.FC<OpinionListProps> = ({ title, articles }) => {
  return (
    <SectionWrapper title='Opinion'>
      {articles.map((article, index) => (
        <div key={index} className="pb-3 mb-3 border-bottom">
          <div className="fw-semibold">{article.title}</div>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default OpinionList;
