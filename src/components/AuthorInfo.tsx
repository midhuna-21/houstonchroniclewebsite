'use client';

import Image from 'next/image';
import { FaXTwitter, FaBug, FaEnvelope } from 'react-icons/fa6';
import React from 'react';
import ArticleWrapper from './ArticleWrapper';

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
      <p className="text-muted mb-3" style={{ fontSize: '0.95rem' }}>{date}</p>
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
              style={{ color:"#000000",
                textDecoration: 'underline',fontSize: '18px',
                      fontFamily: "'Archivo', Arial, sans-serif",
                      fontWeight: 700 }}
            >
              {name}
            </div>
            <div className="text-uppercase" style={{color:'#767676',  fontWeight: 700 ,fontSize: '14.224px',
                fontFamily: "'Rubik', Arial, sans-serif"}}>
              {role}
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2">
          <div className="rounded-circle border p-2 d-flex align-items-center justify-content-center" style={{ width: 32, height: 32 }}>
            <FaXTwitter size={14} />
          </div>
          <div className="rounded-circle border p-2 d-flex align-items-center justify-content-center" style={{ width: 32, height: 32 }}>
            <FaBug size={14} />
          </div>
          <div className="rounded-circle border p-2 d-flex align-items-center justify-content-center" style={{ width: 32, height: 32 }}>
            <FaEnvelope size={14} />
          </div>
        </div>
      </div>

      <p className="mt-3" style={{ lineHeight: '1.6', color: '#000000',fontWeight: 400 ,fontSize: '16px',
                fontFamily: "'Rubik', Arial, sans-serif" }}>
        {bio}
      </p>
    </ArticleWrapper>
  );
};

export default AuthorInfo;
