import React from 'react';

interface MiniNewsCardProps {
  category: string;
  title: string;
  image: string;
}

const MiniNewsCard: React.FC<MiniNewsCardProps> = ({ category, title, image }) => {
  return (
    <div
      className="mb-4 section-new d-flex flex-row-reverse align-items-start"
      style={{ gap: '1rem' }}
    >
      <div>
        <img
          src={image}
          alt={title}
          className="section-new-image"
          style={{ width: '80px', height: 'auto', objectFit: 'cover', flexShrink: 0 }}
        />
      </div>

      <div style={{ flex: 1 }}>
        <p
          className="text-uppercase mb-1"
          style={{
            color: '#B10021',
            textTransform: 'uppercase',
            fontSize: '14.224px',
            fontWeight: 700,
            fontFamily: "'Rubik', Arial, sans-serif",
          }}
        >
          {category}
        </p>
        <h6
          className="fw-bold mb-0"
          style={{
            fontFamily: "'Archivo', Arial, sans-serif",
            fontWeight: 700,
            color: '#111111',
            fontSize: '18px',
          }}
        >
          {title}
        </h6>
      </div>
    </div>
  );
};

export default MiniNewsCard;
