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
    <div className="container py-4 border-bottom">
      {/* Category */}
      <div className="text-uppercase fw-bold text-danger mb-2" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>
        {category}
      </div>

      {/* Headline */}
      <h1 className="fw-bold mb-3" style={{ fontSize: '2.25rem', lineHeight: '1.3' }}>
        {title}
      </h1>

      {/* Author Info & Share Icons */}
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div className="text-muted small">
          By <span className="fw-bold text-danger">{author}</span>, <em>{role}</em>
          <br />
          {date}
        </div>

        <div className="d-flex gap-3">
          <button className="btn btn-outline-dark rounded-circle p-" aria-label="Share on Facebook">
            <FaFacebookF />
          </button>
          <button className="btn btn-outline-dark rounded-circle p-" aria-label="Share on X (Twitter)">
            <FaXTwitter />
          </button>
          <button className="btn btn-outline-dark rounded-circle p-" aria-label="Butterfly icon">
            <PiButterflyBold />
          </button>
          <button className="btn btn-outline-dark rounded-circle p-" aria-label="Share via Email">
            <HiOutlineMail />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
