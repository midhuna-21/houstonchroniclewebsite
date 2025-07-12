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
    aspectRatio: '20 / 12.5' 
  }}
>
  <div className="relative w-full h-[300px] lg:h-[600px]">
  <Image
    src={image}
    alt={category}
    fill
    className="object-cover"
    sizes="(max-width: 1024px) 100vw, 1280px"
  />
</div>


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
