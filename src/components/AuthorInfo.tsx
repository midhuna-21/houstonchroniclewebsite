'use client';

import Image from 'next/image';
import { FaXTwitter, FaBug, FaEnvelope } from 'react-icons/fa6';
import React from 'react';
import ArticleWrapper from './ArticleWrapper';
import { parseRichText } from '@/lib/paresedUnderlineText';

interface AuthorInfoProps {
  date: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({
  date,
  name,
  role,
  bio,
  image,
}) => {
  return (
    <ArticleWrapper>
      <p className="text-muted mb-3" style={{ fontSize: '0.95rem' }}>
        {date}
      </p>

      <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
        <div className="d-flex align-items-center gap-3">
          <Image
            src={image}
            alt={name}
            width={50}
            height={50}
            className="rounded-circle"
          />
          <div>
            <div
              className="fw-bold text-dark"
              style={{
                fontSize: '18px',
                fontFamily: "'Archivo', Arial, sans-serif",
                fontWeight: 700,
                textDecoration: 'underline',
                color: '#000000',
              }}
            >
              {name}
            </div>
            <div
              className="text-uppercase"
              style={{
                color: '#767676',
                fontWeight: 700,
                fontSize: '14px',
                fontFamily: "'Rubik', Arial, sans-serif'"
              }}
            >
              {role}
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2">
          {[FaXTwitter, FaBug, FaEnvelope].map((Icon, i) => (
            <div
              key={i}
              className="rounded-circle border p-2 d-flex align-items-center justify-content-center"
              style={{ width: 32, height: 32 }}
            >
              <Icon size={14} />
            </div>
          ))}
        </div>
      </div>

      {/* Bio Section */}
    <div
  className="mt-4"
  style={{
    backgroundColor: '#F8F9FA', 
    borderLeft: '3px solid #CED4DA',
    padding: '16px 20px',
    borderRadius: '6px',
    maxWidth: '100%',
  }}
>
  <span
    style={{
      lineHeight: '1.65',
      color: '#333333',
      fontWeight: 300,
      fontSize: '14.2px',
      fontFamily: "'IBM Plex Sans', 'Segoe UI', Roboto, sans-serif",
    }}
  >
    {parseRichText(bio)}
  </span>
</div>

    </ArticleWrapper>
  );
};

export default AuthorInfo;
