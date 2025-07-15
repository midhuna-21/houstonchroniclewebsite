'use client';

import React from 'react';
import Image from 'next/image';

interface Props {
  category: string;
  image: string;
  shortdescription: string;
}

export default function DetailFirstSection({
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

        <div style={{ marginBottom: '24px' }}>
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

        <div
          style={{
            marginBottom: '20px',
            maxWidth: '800px',
            margin: '0 auto',
            width: '100%',
          }}
        >
          <div
            className="d-flex align-items-center justify-content-between"
            style={{
              marginBottom: '20px',
              border: '1px solid #e3e3e3',
              borderRadius: '10px',
              padding: '12px 16px',
              backgroundColor: '#ffffff',
              boxShadow: '0 0 4px rgba(0,0,0,0.05)',
              flexWrap: 'wrap',
              gap: '1rem',
              width: '100%',
            }}
          >
            <button
              style={{
                border: 'none',
                borderRadius: '50%',
                backgroundColor: '#d3dce6',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: 0,
                  height: 0,
                  borderTop: '10px solid transparent',
                  borderBottom: '10px solid transparent',
                  borderLeft: '16px solid #2f3b52',
                }}
              />
            </button>

            <div style={{ flex: 1, minWidth: '200px' }}>
              <div style={{ fontSize: '14px', color: '#2f3b52', marginBottom: '4px' }}>
                🎧 <strong
                  style={{
                    color: '#64748B',
                    fontSize: '16px',
                    fontFamily: "'Rubik', Arial, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Listen Now:
                </strong>{' '}
                <span
                  style={{
                    color: '#334155',
                    fontSize: '16px',
                    fontFamily: "'Rubik', Arial, sans-serif",
                    fontWeight: 400,
                  }}
                >
                </span>
              </div>

              <div
                style={{
                  backgroundColor: '#e4e9f1',
                  height: '6px',
                  borderRadius: '4px',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    width: '85%',
                    backgroundColor: '#bcc7da',
                    height: '100%',
                    borderRadius: '4px',
                  }}
                />
              </div>
            </div>

            <div
              className="d-flex flex-column text-end"
              style={{
                minWidth: '60px',
                marginLeft: 'auto',
                marginTop: '8px',
              }}
            >
              <span style={{ fontSize: '14px', color: '#2f3b52' }}>1x</span>
              <span style={{ fontSize: '12px', color: '#7c8aa1' }}>4:08</span>
              <span
                style={{
                  fontSize: '12px',
                  color: '#a5afc4',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
