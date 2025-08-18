import React from 'react';
import Image from "next/image";

type NewsItem = {
  image?: string;
  subcategory: string;
  title: string;
  description?: string;
};

type NewsCardProps = {
  data: NewsItem;
};

export default function NewsCard({ data }: NewsCardProps) {
  return (
    <div className="d-flex flex-column h-100 text-start">
      {data.image && data.image.trim() !== '/' && (
        <Image
          src={data.image || ""}
          alt={data.subcategory}
          title={data.subcategory}
          width={800}
          height={240}
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
        {data.subcategory}
      </p>
      <span
        className="mb-2"
        style={{ fontSize: '22.784px', color: '#111111', fontWeight: 700, fontFamily: "'Archivo', Arial, sans-serif", }}
      >
        {data.title}
      </span>
      {data.description && (
        <p
          className="text-muted mb-0"
          style={{ fontSize: '16px', color: '#444444', fontWeight: 400, fontFamily: "'Rubik', Arial, sans-serif" }}
        >
          {data.description}
        </p>
      )}
    </div>
  );
}
