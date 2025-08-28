'use client';

import { FaXTwitter } from 'react-icons/fa6';
import React from 'react';
import ArticleWrapper from './ArticleWrapper';
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';




interface AuthorInfoProps {
  date: string;
  name: string;
  role: string;
  twitter:string;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({
  date,
  name,
  twitter,
  role,
}) => {
  return (
    <ArticleWrapper>
      <p className="text-muted mb-3" style={{ fontSize: '0.95rem' }}>
        {date}
      </p>

      <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
        <div className="d-flex align-items-center gap-3">

          <div>
            <Link title='our-team' href="/our-team">
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
            </Link>
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
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter profile"
              className="text-decoration-none"
              style={{ color: 'inherit' }}
            >
              <div
                className="rounded-circle border p-2 d-flex align-items-center justify-content-center"
                style={{ width: 32, height: 32 }}
              >
                <FaXTwitter size={14} />
              </div>
            </a>
          )}
        </div>
      </div>

    </ArticleWrapper>
  );
};

export default AuthorInfo;
