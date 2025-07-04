import React from 'react';

type NewsItem = {
  image?: string;
  subcategory: string;
  title: string;
  description?: string;
};

type NewsCardProps = {
  item: NewsItem;
};

export default function NewsCard({ item }: NewsCardProps) {
  return (
    <div className="d-flex flex-column h-100 text-start">
      {item.image && item.image.trim() !== '/' && (
        <img
          src={item.image}
          alt=""
          className="img-fluid mb-2"
          style={{
            objectFit: 'cover',
            width: '100%',
            maxHeight: '240px',
          }}
        />
      )}
      <p
        className="fw-bold mb-1"
        style={{
          color: '#B10024',
          textTransform: 'uppercase',
          fontSize: '0.75rem',
        }}
      >
        {item.subcategory}
      </p>
      <h5
        className="fw-bold text-black mb-2"
        style={{ fontSize: '1.05rem' }}
      >
        {item.title}
      </h5>
      {item.description && (
        <p
          className="text-muted mb-0"
          style={{ fontSize: '0.9rem', lineHeight: '1.4' }}
        >
          {item.description}
        </p>
      )}
    </div>
  );
}
