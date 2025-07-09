'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ArticleWrapper from './ArticleWrapper';

interface Props {
  category: string;
  image: string;
  shortdescription: string;
  description: string;

  // credits: string[];
  // audioTitle: string;
}

export default function DetailFirstSection({
  category,
  image,
  shortdescription,
}: Props) {

  return (
    <div className="row">
      <div className="col-md-8">

        <div className='mt-4'
          style={{
            marginBottom: '20px',
            position: 'relative',
            width: '100%',
            maxHeight: '500px',
            overflow: 'hidden',
          }}
        >
          <Image
            src={image}
            alt={category}
            width={800}
            height={500}
            className="w-100"
            style={{ objectFit: 'cover' }}
          />

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
              border: "1px solid #e3e3e3",
              borderRadius: "10px",
              padding: "12px 16px",
              backgroundColor: "#ffffff",
              boxShadow: "0 0 4px rgba(0,0,0,0.05)",
              flexWrap: "wrap",
              width: "100%",
              gap: "1rem",
            }}
          >
            <button
              style={{
                border: "none",
                borderRadius: "50%",
                backgroundColor: "#d3dce6",
                width: "60px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "0",
                  height: "0",
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "16px solid #2f3b52",
                }}
              />
            </button>

            <div style={{ flex: 1, minWidth: "200px" }}>
              <div style={{ fontSize: "14px", color: "#2f3b52", marginBottom: "4px" }}>
                🎧 <strong
                  style={{
                    color: '#64748B',
                    fontSize: '16px',
                    fontFamily: "'Rubik', Arial, sans-serif",
                    fontWeight: 400
                  }}
                >
                  Listen Now:
                </strong>{" "}
                <span
                  style={{
                    color: '#334155',
                    fontSize: '16px',
                    fontFamily: "'Rubik', Arial, sans-serif",
                    fontWeight: 400
                  }}
                >
                  {/* {audioTitle} */}
                </span>
              </div>

              <div
                style={{
                  backgroundColor: "#e4e9f1",
                  height: "6px",
                  borderRadius: "4px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "85%",
                    backgroundColor: "#bcc7da",
                    height: "100%",
                    borderRadius: "4px",
                  }}
                />
              </div>
            </div>

            <div
              className="d-flex flex-column text-end"
              style={{
                minWidth: "60px",
                marginLeft: "auto",
                marginTop: "8px",
              }}
            >
              <span style={{ fontSize: "14px", color: "#2f3b52" }}>1x</span>
              <span style={{ fontSize: "12px", color: "#7c8aa1" }}>4:08</span>
              <span
                style={{
                  fontSize: "12px",
                  color: "#a5afc4",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <img
                  src="/images/graphmusic.png"
                  alt="icon"
                  width={14}
                  height={14}
                  style={{ objectFit: "contain" }}
                />
                Everlit
              </span>
            </div>
          </div>
        </div>



      </div>
    </div>

  );
}
