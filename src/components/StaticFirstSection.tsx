'use client';

import React from 'react';
import Image from 'next/image';

interface Props {
  category: string;
  image: string;
  shortdescription: string;
}

export default function StaticFirstSection({
  category,
  image,
  shortdescription,
}: Props) {
  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="col-md-10">

        <div
  className="mt-4"
  style={{
    marginBottom: '20px',
    position: 'relative',
    width: '100%',
    maxWidth: '1280px', 
    overflow: 'hidden',
  }}
>
  <Image
    src={image}
    alt={category}
    width={1280}          
    height={600}          
    className="w-100"
    style={{ objectFit: 'cover' }}
  />
</div>


        <div style={{ marginBottom: '48px' }}>
          <p
            className="small"
            style={{
              color: '#444444',
              fontSize: '14.224px',
              fontFamily: "'Rubik', Arial, sans-serif",
              fontWeight: 400,
              margin: 0,
            }}
          >
            {shortdescription}
          </p>
        </div>

      </div>
    </div>
  );
}
