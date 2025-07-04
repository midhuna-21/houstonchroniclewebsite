import React from 'react';

type LeadNewsCardProps = {
  title: string;
  description: string;
  image: string;
};

const NewsWithoutImage: React.FC<LeadNewsCardProps> = ({ title, description, image }) => {
  return (
    <div
      style={{
        maxWidth: '700px',
        margin: '0 auto',
        overflow: 'hidden',
      }}
      className="mb-4"
    >
    
      <div style={{ padding: '16px' }}>
        <h4 style={{ fontWeight: 'bold' }}>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsWithoutImage;
