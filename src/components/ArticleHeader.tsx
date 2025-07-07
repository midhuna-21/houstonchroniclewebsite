'use client';

import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { PiButterflyBold } from 'react-icons/pi';
import { HiOutlineMail } from 'react-icons/hi';

interface ArticleHeaderProps {
  category: string;
  title: string;
  author: string;
  role: string;
  date: string;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  category,
  title,
  author,
  role,
  date,
}) => {
  return (
    <div>
      <div className="text-uppercase fw-bold mb-2" style={{
        color: '#B50021',
        fontSize: '14.224px',
        fontFamily: "'Rubik', Arial, sans-serif"
      }}>
        {category}
      </div>

      <h1 className="fw-bold mb-3" style={{
        fontSize: '36.496px',
        fontFamily: "'Archivo', Arial, sans-serif",
        fontWeight: 900
      }}
      >
        {title}
      </h1>

      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div className="text-muted small">
          <span style={{
            color: '#444444',
            fontSize: '14.224px',
            fontFamily: "'Rubik', Arial, sans-serif"
          }}
          >By</span>
          <span className="fw-bold"
            style={{
              color: '#B50021',
              fontSize: '14.224px',
              fontFamily: "'Rubik', Arial, sans-serif"
            }}
          >{author}</span>, <em style={{
            color: '#444444',
            fontSize: '14.224px',
            fontFamily: "'Rubik', Arial, sans-serif"
          }}
          >{role}</em>
          <br />
          <span style={{
            color: '#767676',
            fontSize: '14.224px',
            fontFamily: "'Rubik', Arial, sans-serif"
          }}
          >{date}</span>
        </div>

        <div className="d-flex gap-2">
          <button
            className="btn btn-outline-dark rounded-circle d-flex justify-content-center align-items-center"
            style={{ width: '36px', height: '36px', fontSize: '14px' }}
            aria-label="Share on Facebook"
          >
            <FaFacebookF />
          </button>
          <button
            className="btn btn-outline-dark rounded-circle d-flex justify-content-center align-items-center"
            style={{ width: '36px', height: '36px', fontSize: '14px' }}
            aria-label="Share on Facebook"
          >  <FaXTwitter />
          </button>
          <button
            className="btn btn-outline-dark rounded-circle d-flex justify-content-center align-items-center"
            style={{ width: '36px', height: '36px', fontSize: '14px' }}
            aria-label="Share on Facebook"
          > <PiButterflyBold />
          </button>
          <button
            className="btn btn-outline-dark rounded-circle d-flex justify-content-center align-items-center"
            style={{ width: '36px', height: '36px', fontSize: '14px' }}
            aria-label="Share on Facebook"
          > <HiOutlineMail />
          </button>
        </div>
      </div>
      <hr style={{ borderTop: '1px solid #000', marginTop: '1rem' }} />

    </div>
  );
};

export default ArticleHeader;
