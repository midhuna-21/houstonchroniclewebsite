import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import Image from "next/image";

interface MiniNewsCardProps {
  category: string;
  title: string;
  image: string;
  date: string;
}

const MiniNewsCard: React.FC<MiniNewsCardProps> = ({ category, title, image, date }) => {
  return (
    <div
      className="mb-4 section-new d-flex flex-row-reverse align-items-start"
      style={{ gap: '1rem' }}
    >
      <div>
        <Image
          src={image || ""}
          alt={title}
          width={110}
          height={75}
          style={{
            width: '110px',
            height: '95px',
            objectFit: 'cover',
            flexShrink: 0,
          }}
        />

      </div>

      <div style={{ flex: 1 }}>
        <p
          className="text-uppercase mb-1"
          style={{
            color: '#B10021',
            textTransform: 'uppercase',
            fontSize: '14.224px',
            fontWeight: 900,
            fontFamily: "'Rubik', Arial, sans-serif",
          }}
        >
          {category}
        </p>
        <h2
          className="fw-bold mb-0"
          style={{
            fontFamily: "'Archivo', Arial, sans-serif",
            fontWeight: 700,
            color: '#111111',
            fontSize: '20px',
            lineHeight: '1.3 !important',
            display: 'inline-block',
          }}
        >
          {title}
        </h2>
        <div
          className="d-flex align-items-center mt-1"
          style={{
            fontSize: '10px',
            fontWeight: 200,
            fontFamily: "'Rubik', Arial, sans-serif",
          }}
        >
          <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
          <span style={{ color: '#000', opacity: 0.6 }}>Published on</span>
          <span style={{ color: '#555', marginLeft: '4px' }}>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default MiniNewsCard;
