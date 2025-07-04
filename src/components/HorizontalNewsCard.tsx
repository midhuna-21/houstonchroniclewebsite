import React from 'react';

interface HorizontalNewsCardProps {
  title: string;
  image: string;
}

const HorizontalNewsCard: React.FC<HorizontalNewsCardProps> = ({ title, image }) => {
  return (
    <div
      className="d-flex justify-content-between align-items-start mb-3"
      style={{
        borderBottom: '1px solid #ddd',
        paddingBottom: '8px',
        maxWidth: '700px',
      }}
    >
      <h6 style={{ fontWeight: 'bold', flex: 1, marginRight: '10px' }}>{title}</h6>
      <img
        src={image}
        alt="thumbnail"
        style={{
          width: '80px',
          height: '60px',
          objectFit: 'cover',
          borderRadius: '4px',
        }}
      />
    </div>
  );
};

export default HorizontalNewsCard;
