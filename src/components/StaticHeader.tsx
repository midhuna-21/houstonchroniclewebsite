'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BiCalendar } from 'react-icons/bi';


interface StaticHeaderProps {
  category: string;
  title: string;
  author?: string;
  role?: string;
  date?: string;
}

const StaticHeader: React.FC<StaticHeaderProps> = ({
  category,
  title,
  date,
}) => {
  return (
    <div style={{ padding: '1rem 0', borderBottom: '2px solid #000' }}>
      <div style={{ marginBottom: '1.2rem' }}>
        <h1
          className="text-uppercase fw-bold"
          style={{
            color: '#B50021',
            fontSize: '13.5px',
            fontFamily: "'Rubik', Arial, sans-serif",
            letterSpacing: '0.08em',
            display: 'inline-block',
            position: 'relative',
          }}
        >
          {category}

          <motion.div
            initial={{ width: '20%' }}
            animate={{ width: ['20%', '100%', '20%'] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              height: '2px',
              backgroundColor: '#000',
              position: 'absolute',
              bottom: '-4px',
              left: 0,
              borderRadius: '1px',
            }}
          />
        </h1>
      </div>
      <h1
        className="fw-bold mb-3 fst-italic"
        style={{
          fontSize: 'clamp(28px, 5vw, 42px)',
          fontFamily: "'Archivo', Arial, sans-serif",
          fontWeight: 900,
          color: '#1b1214d7',
          lineHeight: 1.25,
          fontStyle: 'italic',
        }}
      >
        {title}
      </h1>

      <div
        className="d-flex justify-content-between align-items-center flex-nowrap w-100 mt-2"
        style={{ gap: '1rem', flexWrap: 'nowrap' }}
      >
        <div
          className="d-flex align-items-center"
          style={{
            fontSize: '10px',
            fontWeight: 200,
            fontFamily: "'Rubik', Arial, sans-serif",
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
          <span style={{ color: '#000', opacity: 0.6 }}>Published on</span>
          <span style={{ color: '#aaa', marginLeft: '4px' }}>{date}</span>
        </div>

        <div className="d-flex gap-2 flex-shrink-0">
          <button
            className="btn btn-outline-dark rounded-circle d-flex justify-content-center align-items-center social-icon-btn"
            style={{
              width: '38px',
              height: '38px',
              fontSize: '14px',
              border: '1px solid #ccc',
              transition: 'all 0.3s ease',
            }}
          >
            <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
              <FaFacebookF />
            </a>
          </button>
          <button
            className="btn btn-outline-dark rounded-circle d-flex justify-content-center align-items-center social-icon-btn"
            style={{
              width: '38px',
              height: '38px',
              fontSize: '14px',
              border: '1px solid #ccc',
              transition: 'all 0.3s ease',
            }}
          >
            <a href="https://x.com/TangentWeekly" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
              <FaXTwitter />
            </a>
          </button>
          <button
            className="btn btn-outline-dark rounded-circle d-flex justify-content-center align-items-center social-icon-btn"
            style={{
              width: '38px',
              height: '38px',
              fontSize: '14px',
              border: '1px solid #ccc',
              transition: 'all 0.3s ease',
            }}
          >
            <a href="https://www.instagram.com/tangentweekly/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
              <FaInstagram /></a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaticHeader;
