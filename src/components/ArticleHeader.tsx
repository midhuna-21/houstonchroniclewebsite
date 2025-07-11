'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { PiButterflyBold } from 'react-icons/pi';
import { HiOutlineMail } from 'react-icons/hi';
import { BiCalendar } from 'react-icons/bi';
import Image from 'next/image';


interface ArticleHeaderProps {
  category: string;
  title: string;
  author?: string;
  role?: string;
  date?: string;
  image:string;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  category,
  title,
  author,
  role,
  date,
  image,
}) => {
  return (
    <div style={{ padding: '2rem 0', borderBottom: '2px solid #000' }}>
<div style={{ marginBottom: '1.2rem' }}>
  <div
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
  </div>
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
        

      {/* Author info */}
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mt-2">
     
<div className="d-flex align-items-center gap-2">

    

  <div className="text-muted small" style={{ fontFamily: "'Rubik', sans-serif", fontSize: '13.5px' }}>
   

    <div
      className="d-flex align-items-center mt-1"
      style={{
        fontSize: '10px',
        fontWeight: 200,
        fontFamily: "'Rubik', Arial, sans-serif",
      }}
    >
      <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
      <span style={{ color: '#000', opacity: 0.6 }}>Published on</span>
      <span style={{ color: '#aaa', marginLeft: '4px' }}>{date}</span>
    </div>
  </div>
</div>


        {/* Share Icons */}
        <div className="d-flex gap-2">
          
          <button
            className="btn btn-outline-dark rounded-circle d-flex justify-content-center align-items-center"
            style={{
              width: '38px',
              height: '38px',
              fontSize: '14px',
              border: '1px solid #ccc',
              transition: 'all 0.3s ease',
            }}
            aria-label="Share on Facebook"
            title="Share on Facebook"
          >
            <FaFacebookF />
          </button>
          <button
            className="btn btn-outline-dark rounded-circle d-flex justify-content-center align-items-center"
            style={{
              width: '38px',
              height: '38px',
              fontSize: '14px',
              border: '1px solid #ccc',
              transition: 'all 0.3s ease',
            }}
            aria-label="Share on Twitter"
            title="Share on Twitter"
          >
            <FaXTwitter />
          </button>
          <button
            className="btn btn-outline-dark rounded-circle d-flex justify-content-center align-items-center"
            style={{
              width: '38px',
              height: '38px',
              fontSize: '14px',
              border: '1px solid #ccc',
              transition: 'all 0.3s ease',
            }}
            aria-label="Share"
            title="Share"
          >
            <PiButterflyBold />
          </button>
          <button
            className="btn btn-outline-dark rounded-circle d-flex justify-content-center align-items-center"
            style={{
              width: '38px',
              height: '38px',
              fontSize: '14px',
              border: '1px solid #ccc',
              transition: 'all 0.3s ease',
            }}
            aria-label="Email"
            title="Email"
          >
            <HiOutlineMail />
          </button>
        </div>
      </div>

      {/* Black underline */}
      {/* <hr style={{ borderTop: '2px solid #000', marginTop: '1.5rem' }} /> */}
    </div>
  );
};

export default ArticleHeader;
