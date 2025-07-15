import React from 'react';
import Image from "next/image";

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
      <Image
        src={image || ""}
        alt={title}
        width={800}
        height={500}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
        }}
      />
      <div style={{ padding: '16px' }}>
        <span style={{ fontWeight: 'bold' }}>{title}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default LeadNewsCard;
