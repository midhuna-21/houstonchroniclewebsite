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
          color: '#B10021',
          textTransform: 'uppercase',
          fontSize: '14.224px',
          fontWeight: 700,
          fontFamily: "'Rubik', Arial, sans-serif"
        }}
      >
        {item.subcategory}
      </p>
      <h5
        className="mb-2"
        style={{ fontSize: '22.784px', color: '#111111', fontWeight: 700, fontFamily: "'Archivo', Arial, sans-serif", }}
      >
        {item.title}
      </h5>
      {item.description && (
        <p
          className="text-muted mb-0"
          style={{ fontSize: '16px', color: '#444444', fontWeight: 400, fontFamily: "'Rubik', Arial, sans-serif" }}
        >
          {item.description}
        </p>
      )}
    </div>
  );
}
