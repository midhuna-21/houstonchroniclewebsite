'use client';

import Image from 'next/image';

interface RightSidebarHighlightProps {
  image: string;
  heading: string;
  description: string;
}

export default function RightSidebarHighlight({
  image,
  heading,
  description,
}: RightSidebarHighlightProps) {
  return (
    <div
      className="p-3 rounded"
      style={{
        backgroundColor: '#f4f4f4',
        border: '1px solid #ccc',
        height: '100%',
      }}
    >
      <div className="mb-3">
        <Image
          src={image}
          alt={heading}
          width={300}
          height={180}
          className="img-fluid w-100"
          style={{ objectFit: 'cover', borderRadius: '4px' }}
        />
      </div>

      <span className="fw-bold mb-2" style={{ fontSize: '1.2rem' }}>{heading}</span>
      <hr style={{ borderTop: '1px solid #aaa', width: '40px', marginTop: '4px', marginBottom: '10px' }} />
      <p className="text-secondary mb-0" style={{ fontSize: '0.95rem' }}>{description}</p>
    </div>
  );
}
