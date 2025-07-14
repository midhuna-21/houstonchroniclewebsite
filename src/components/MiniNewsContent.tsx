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
          width={80}
          height={60}
          className="section-new-image"
          style={{
            width: '80px',
            height: 'auto',
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
          <span style={{ color: '#aaa', marginLeft: '4px' }}>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default MiniNewsCard;
