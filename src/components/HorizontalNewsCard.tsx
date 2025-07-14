import React from 'react';
import Image from "next/image";

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
      <h5 style={{ fontWeight: 'bold', flex: 1, marginRight: '10px' }}>{title}</h5>
      <Image
        src={image || ""}
        alt={title}
        width={80}
        height={60}
        style={{
          objectFit: 'cover',
          borderRadius: '4px',
        }}
      />
    </div>
  );
};

export default HorizontalNewsCard;
