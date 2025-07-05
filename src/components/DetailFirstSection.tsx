'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ArticleWrapper from './ArticleWrapper';

interface Props {
  images: string[];
  captions: string[];
  credits: string[];
  audioTitle: string;
}

export default function DetailFirstSection({
  images,
  captions,
  credits,
  audioTitle,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((currentIndex + 1) % images.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  return (
        <ArticleWrapper>
          {/* Image Slider */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxHeight: '500px',
              overflow: 'hidden',
            }}
          >
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              width={800}
              height={500}
              className="w-100"
              style={{ objectFit: 'cover', borderRadius: '6px' }}
            />

            <button
              onClick={prev}
              style={{
                position: 'absolute',
                left: '15px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                fontSize: '1.5rem',
              }}
            >
              ‹
            </button>

            <button
              onClick={next}
              style={{
                position: 'absolute',
                right: '15px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                fontSize: '1.5rem',
              }}
            >
              ›
            </button>
          </div>

          {/* Dots */}
          <div className="d-flex justify-content-center mt-2 mb-2">
            {images.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  width: '8px',
                  height: '8px',
                  margin: '0 4px',
                  borderRadius: '50%',
                  backgroundColor: idx === currentIndex ? '#c00' : '#ccc',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>

          {/* Caption + Credit */}
          <p className="text-muted small mb-1" style={{ fontSize: '0.9rem' }}>
            {captions[currentIndex]}
          </p>
          <p className="text-muted small mb-3" style={{ fontSize: '0.8rem' }}>
            {credits[currentIndex]}
          </p>

          {/* Audio Section */}
          <div
            className="d-flex align-items-center justify-content-between"
            style={{
              border: "1px solid #e3e3e3",
              borderRadius: "10px",
              padding: "12px 16px",
              backgroundColor: "#ffffff",
              boxShadow: "0 0 4px rgba(0,0,0,0.05)",
              flexWrap: "wrap",
            }}
          >
            {/* Play button */}
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
                marginRight: "16px",
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

            {/* Text and progress bar */}
            <div style={{ flex: 1, minWidth: "200px", marginRight: "16px" }}>
              <div style={{ fontSize: "14px", color: "#2f3b52", marginBottom: "4px" }}>
                🎧 <strong>Listen Now:</strong>{" "}
                <span style={{ color: "#2f3b52" }}>
                  {audioTitle}
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

            {/* Playback info */}
            <div className="d-flex flex-column text-end" style={{ minWidth: "60px" }}>
              <span style={{ fontSize: "14px", color: "#2f3b52" }}>1x</span>
              <span style={{ fontSize: "12px", color: "#7c8aa1" }}>4:08</span>
              <span
                style={{
                  fontSize: "12px",
                  color: "#a5afc4",
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <img
                  src="/images/graphmusic.png"
                  alt="icon"
                  width={14}
                  height={14}
                  style={{ objectFit: 'contain' }}
                />
                Everlit
              </span>
            </div>
          </div>
        </ArticleWrapper>
  );
}
