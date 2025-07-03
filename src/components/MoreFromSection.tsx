'use client';

import Image from 'next/image';
import { NavKey } from '../data/navData';
import { moreSectionData, MoreSectionContent } from '../data/moreSectionData';

interface MoreFromSectionProps {
  activeMain: NavKey;
}

export default function MoreFromSection({ activeMain }: MoreFromSectionProps) {
  const items = moreSectionData[activeMain];
  if (!items || items.length === 0) return null;

  return (
    <div className="w-100 border-top pt-4 px-4">
      <h5 className="fw-bold mb-4">More {activeMain}</h5>

      {items.map((data: MoreSectionContent, index: number) => (
        <div key={index} className="row mb-4">
          <div className="col-md-8">
            <h2 className="fw-bold" style={{ fontSize: '1.5rem' }}>{data.heading}</h2>
            <p className="text-secondary mt-2 mb-1" style={{ fontSize: '0.95rem' }}>
              {data.description}
            </p>
            <div className="text-uppercase fw-bold text-secondary mt-2" style={{ fontSize: '12px' }}>
              {data.title}
            </div>
          </div>

          <div className="col-md-3">
            <Image
              src={data.image}
              alt={data.title}
              width={180}
              height={120}
              className="img-fluid"
              style={{ objectFit: 'cover', borderRadius: '4px' }}
            />
          </div>

          <div className="col-md-1" />

          {index < items.length - 1 && (
            <div className="col-12">
              <hr style={{ borderTop: '1px solid #444', marginTop: '24px' }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
