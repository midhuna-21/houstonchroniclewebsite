import React from 'react';

type LeadNewsCardProps = {
  title: string;
  description: string;
  image: string;
};

const LeadNewsCard: React.FC<LeadNewsCardProps> = ({ title, description, image }) => {
  return (
    <div
      style={{
        maxWidth: '700px',
        margin: '0 auto',
        overflow: 'hidden',
      }}
      className="mb-4"
    >
      <img
        src={image}
        alt={title}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
        }}
      />
      <div style={{ padding: '16px' }}>
        <h4 style={{ fontWeight: 'bold' }}>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default LeadNewsCard;
